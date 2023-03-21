import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { findElement } from "../../utilities/boxer_functions";
import "./Boxer.scss";

let order = 0;
let isAllSelected = false;
const Boxer = () => {
  const [boxOrderState, setBoxOrderState] = useState(getGrid("initial"));

  function getGrid(type) {
    let boxData = [];
    const grid = [0, 1, 2].map((i) => {
      return [0, 1, 2].map((j) => {
        if (!(i === 1 && j > 0)) {
          if (type === "initial") {
            return boxData.push({ i, j, isClicked: false, order: null });
          }
          return (
            <div
              style={{
                backgroundColor: findElement(boxOrderState, i, j).isClicked
                  ? "green"
                  : "",
              }}
              className="box"
              key={nanoid()}
              onClick={() => changeColor(i, j)}
            ></div>
          );
        } else {
          return <div key={nanoid()}></div>;
        }
      });
    });
    if (type === "initial") {
      return boxData;
    }
    return grid;
  }
  const changeColor = (i, j) => {
    let temp = [...boxOrderState];
    const selectedBox = findElement(temp, i, j);
    selectedBox.isClicked = true;
    selectedBox.order = ++order;
    temp.sort((a, b) => (a.order > b.order ? 1 : -1));
    setBoxOrderState(temp);
  };

  useEffect(() => {
    if (boxOrderState.some((el) => !el.isClicked)) {
      isAllSelected = false;
    } else {
      isAllSelected = true;
    }

    if (isAllSelected) {
      boxOrderState.forEach((_, idx) => {
        setTimeout(() => {
          let tempData = [...boxOrderState];
          tempData[idx].isClicked = false;
          setBoxOrderState(tempData);
        }, 1000 * (idx + 1));
      });
    }
  }, [boxOrderState]);

  return <div className="box__container">{getGrid()}</div>;
};

export default Boxer;
