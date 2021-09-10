import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);

  const headers = {
    headers: {
      ContentType: "application/json",
      auth: localStorage.getItem("token"),
    },
  };

  const getFeed = () => {
    axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getFeed();
  }, []);

  const showRestaurants = () => {
    return restaurants.map(
      ({
        id,
        address,
        category,
        deliveryTime,
        description,
        logoUrl,
        name,
        shipping,
      }) => {
        return <li key={id}> 
            <img src={logoUrl} style={{width: "100px"}} />
            <div>
                <p>
                    <span> {name}</span>
                    <span> {deliveryTime} </span>
                </p>
                <p>
                   {shipping}
                </p>

            </div>
        </li>;
      }
    );
  };

  return <div>{showRestaurants()}</div>;
};
export default Feed;
