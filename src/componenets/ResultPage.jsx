import React from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import "./styles/result.scss";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();
  const { name } = useParams();
  // captialize first letter of string
  //   let Name = state.result.name.charAt(0).toUpperCase() + str.slice(1);
  // Ditto

  // SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
  // this error occur when parson data is not a json or invalid json
  // json format
  //{key: value} - valid json
  //{value} - invalid json

  return (
    <>
      {state.result ? (
        <div className="wrapper">
          <div id="image">
            <img
              src={state.result.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
          <div className="details">
            <div>
              {/* first letter of every word is in capital */}
              <h1>{_.startCase(state.result.name)}</h1>
              <div>
                <p>
                  <strong>Type: </strong>{" "}
                  {state.result.types.map((value) => {
                    return _.capitalize(value.type.name);
                  })}
                </p>
                <p>
                  <strong>Weight: </strong> {state.result.weight}kg
                </p>
                <p>
                  <strong>Height: </strong> {state.result.height}ft
                </p>
              </div>
            </div>
            <div className="ability">
              <h4>Abilities:</h4>
              <div>
                {state.result.abilities &&
                  state.result.abilities.map((item, key) => {
                    return <p key={key}>{item.ability.name}</p>;
                  })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>{name} is not found</h1>
      )}
    </>
  );
};

export default ResultPage;
