import React, { useContext } from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favStates} = useContextGlobal()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
          {favStates.map(dentFav => (
            <div>
              <Card key={dentFav.id}/>
            </div>
          )
          )}
        {/* Deberan renderizar una Card por cada uno de ellos */}
            
      </div>
    </>
  );
};

export default Favs;
