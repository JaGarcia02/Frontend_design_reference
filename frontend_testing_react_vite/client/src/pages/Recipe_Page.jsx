import React, { useEffect, useState } from "react";
import axios from "axios";
const Recipe_Page = () => {
  const [recipe_data, setRecipe_data] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1111/foods/view-recipe")
      .then((res) => setRecipe_data(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Recipies</th>
          </tr>
        </thead>
        <tbody>
          {recipe_data.map((res) => (
            <>
              {res.recipe.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe_Page;
