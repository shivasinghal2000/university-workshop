import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
	// WIKI: A conditional logic to check is data is available
	if (!posts) {
		return "Loading..";
	}

	// TODO

	return <div/>;
};

export default PostList;
