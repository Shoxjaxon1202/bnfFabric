import React from "react";
import { useParams } from "react-router-dom";

import "./item.scss"
const Item = ({ data }) => {
  const params = useParams()?.id;

  const item = data.filter((elem) => elem?.id == params)[0];
console.log(item);

  return (
    <div className="item">
      <div className="item_left">
        {item && <img src={item.img} alt="" className="item_img" />}
      </div>
      <div className="item_right">
        <h2 className="item_title">{item?.name}</h2>
        <div className="table-container">
          <table className="product-table">
            <tbody>
              <tr>
                <td>Material:</td>
                <td>{item?.Material}</td>
              </tr>
              <tr>
                <td>Pillowcase:</td>
                <td>{item?.Pillowcase}</td>
              </tr>
              <tr>
                <td>Sheet:</td>
                <td>{item?.sheet}</td>
              </tr>
              <tr>
                <td>Duvet cover:</td>
                <td>{item?.Duvet}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{item?.Size}</td>
              </tr>
              <tr>
                <td>Manufacturer:</td>
                <td>{item?.Manufacturer}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Item;
