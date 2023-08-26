import React, { useState } from "react";
import Data  from "./Data.json";
import { Link } from "react-router-dom";

function AppDropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        onClick={() => setDropdown(dropdown)}
      >
        {Data.map((subnavItems) => {
          return (
            <li key={subnavItems.id}>
              <Link
                to={subnavItems.link}
                className={subnavItems.cName}
                onClick={() => setDropdown(false)}
              >
                {subnavItems.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AppDropdown;