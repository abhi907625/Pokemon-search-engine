import React from "react";
import "./styles/search.scss";
import image from "../../images/pokemon_logo.png";
import fetchData from "../api/fetchData";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (value) => {
    try {
      const result = await fetchData(value);
      navigate(`result/${value}`, { state: { result: result } });
    } catch (error) {
      console.log(`${value} is not found, and reason for error ${error}`);
    }
  };

  return (
    <div className="container">
      <form
        style={{ backgroundImage: `url(${image})` }}
        // onSubmit event does not accept any parameter except event
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(value);
        }}
      >
        <div>
          <input
            type="text"
            defaultValue={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
