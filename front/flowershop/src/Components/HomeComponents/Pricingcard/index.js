import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";

function Pricingcard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setData(response.data);
    });
  });

  return (
    <>
      <div className="cardflower">
        <div>Devoted to wonderful beauty</div>
        <div>Flowers Pricing</div>
        <div>
        {data.map((element) => {
          return (
            <div class="card" key={element.id}>
              <div class="card-body">
                <img class="cardimg" src={element.imgUrl} alt="img" />
                <h5 class="card-title">{element.name}</h5>
                <p class="card-text">{element.price}</p>
                <a href="#" class="btndelete">
                  Delete
                </a>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Pricingcard;
