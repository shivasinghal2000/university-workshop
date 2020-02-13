import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import query from "./js/graphql/queries";
import mutation from "./js/graphql/mutations";
import NewPost from "./components/NewPost";

class App extends React.Component {
	state = {
		loading: true,
		data: null
	};

	//WIKI: Making a Query Call to GraphQL Backend to fetch all the posts
	fetchPosts() {
		fetch("http://localhost:4000/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query
			})
		})
			.then(response => {
				return response.json();
			})
			.then(responseAsJson => {
				this.setState({ loading: false, data: responseAsJson.data.allPosts });
			});
	}

	//WIKI: Making a Mutation Call to GraphQL Backend to update a new post
	createPost(postData) {
		fetch("http://localhost:4000/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				variables: {
					post_text: postData
				},
				query: mutation
			})
		}).then(response => {
			this.fetchPosts();
			return response.json();
		});
	}

	componentDidMount() {
		this.fetchPosts();
	}

	render() {
		const { loading, data } = this.state;
		return (
			<div className="App">
				<h2>
					My blog app{" "}
					<span role="img" aria-label="Emoji icon of a rocket">
						🚀
					</span>
				</h2>
        <NewPost createPost={this.createPost.bind(this)}/>
				{loading ? "Loading..." : <PostList posts={data} />}
			</div>
		);
	}
}

export default App;
