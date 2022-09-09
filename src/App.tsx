import React from "react";

import { Pessoa } from "./components/Pessoa";

const App = () => {
  let list = [
    {name: 'Lara', age: 34},
    {name: 'Allana', age: 13},
    {name: 'Biatriz', age: 5},
    {name: 'Cecília', age: 10},
    {name: 'Julianna', age: 22},
    {name: 'Marcella', age: 41},
  ];

  return (
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map((item, index)=>(
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;