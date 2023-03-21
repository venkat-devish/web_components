import React, { useEffect, useState } from "react";
import { userData } from "../../data/letterData";

let countIdx;
const LetterByLetter = () => {
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (value !== "") {
      const data = userData.filter((item) => {
        if (item.name.toLocaleLowerCase().startsWith(value)) {
          countIdx = value.length;
          return item.name.toLowerCase().startsWith(value);
        } else {
          return item.name
            .toLowerCase()
            .startsWith(value.substring(0, countIdx));
        }
      });
      setFiltered(data);
    } else {
      setFiltered(userData);
    }
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      {filtered.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  );
};

export default LetterByLetter;
