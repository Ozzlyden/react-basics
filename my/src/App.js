import React, { useState, useEffect } from 'react';
import Api from './Api';
import axios from 'axios';

export default function App() {

  const [nomes, setNomes] = useState([{}]);

  async function initApi(){
      let pegaNomes = await Api.getPersons();
      setNomes(pegaNomes);
  }


  // HOOK
  useEffect(() => {
      initApi();
  },[]);


  return ( 
    <div>
      {
        nomes.map(function(data){
          return(
            <div>
              <h2>{data.name} | {data.email}</h2>
            </div>
          )
        })
      }
    </div>
  );

}