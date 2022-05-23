import React from "react";
//onClick={(e) => {props.onAdd(e)}}
function CreateArea(props) {
  return (
    <div>
      <form className="create-note" onSubmit={(e) => {
        props.onAdd(e)}} >
        <input name="title" placeholder="Title" onChange={(e) => {
          props.onChange(e)
      }} value={props.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={(e) => {
          props.onChange(e)
      }} value={props.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;