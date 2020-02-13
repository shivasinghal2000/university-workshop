import React, {useState} from "react";

const NewPost = ({createPost}) => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // TODO
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>    
      {/* <textarea value={value} onChange={handleChange} rows="5" cols="70"/> */}
      {/* TODO */}
    </form>
  );
};

export default NewPost;