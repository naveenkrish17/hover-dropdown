import { useState } from "react";
import data from "../data/data";

const NavBar = (): any => {
  const [display, setDisplay] = useState({ tabId: null });
  const displayList = (name?: any) => {
    setDisplay({ tabId: name ? name : null });
  };

  return (
    <>
      <div className="nav-row">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className="tab-container"
              onMouseEnter={() => displayList(data.name)}
              onMouseLeave={() => displayList()}
            >
              <div className="nav-tab">{"⬇️" + data.name}</div>
              {display.tabId === data.name && (
                <ul className={`tab-list`} id={data.name}>
                  {data.items.map((item) => (
                    <li className="list-item">{item.name}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
