import { useState } from "react";
import React from "react";

const Form = () => {
  const [first, setfirst] = useState("");
  return (
    <>
      <form>
        <input
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
            console.log(first);
          }}
          type="text"
          placeholder="name"
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default Form;
