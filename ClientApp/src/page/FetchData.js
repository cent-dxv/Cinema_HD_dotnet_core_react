import React, { useState, useEffect } from 'react';

export function FetchData() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function populateWeatherData() {
    
    const response = await fetch('weatherforecast/movies?page=1');
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  
  useEffect(() => {
    populateWeatherData();
  }, []);

  function renderForecastsTable(Data) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Movie title </th>
            <th> ⭐  Ratings </th>
            <th> language </th>
            <th> Released date</th>
            <th > overview </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Data?.results.map((item ,index)=>
            <tr key={index}>
              <td style={{ maxWidth:"200px"}}>{item.original_title}</td>
              <td>{item.vote_average}</td>
              <td>{item.original_language}</td>
              <td>{item.release_date}</td>
              <td style={{fontSize:"11px" , maxWidth:"400px"}} >{item.overview}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }



  let contents = loading
    ? <p><em>Loading...</em></p>
    : renderForecastsTable(Data);

  return (
    <div style={{marginTop:"100px"}}>
      <h1 id="tableLabel" > box office list </h1>
      <p>currently released  moveies list </p>
      {contents}
    </div>
  );
}
