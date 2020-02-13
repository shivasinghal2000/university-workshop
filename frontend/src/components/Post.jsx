import React from "react";

const Post = ({ text, name }) => {
	return (
		<div>
			<div>
				<div>{text}</div>
				<div style={{ textAlign: "end" }}>
					<i>By {name}</i>
				</div>
			</div>
		</div>
	);
};

export default Post;
