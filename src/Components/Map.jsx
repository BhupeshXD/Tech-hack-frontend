import React, { useState } from "react";

const Maps = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className="font-2xl text-richblack-100 ">Google Maps Intergration</h1>
      <div>
        <form onSubmit={handleSubmit} className="flex bg-slate-200 ">
          <label>
            From
            <input
              className=""
              type="text"
              value={input1}
              onChange={handleInput1Change}
            />
          </label>
          <br />
          <br />
          <label>
            To
            <input
              className="color-black"
              type="text"
              value={input2}
              onChange={handleInput2Change}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <button type="Parking">Parking</button>
          <button type="Traffic">Traffic</button>
          <button type="Road Quality">Road Quality</button>
        </div>

        <div> Google API Part </div>
      </div>
    </div>
  );
};

export default Maps;
