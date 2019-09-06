import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

var kombuchaList = [
  {
    name: "Pineapple Turmeric",
    brand: "Humm Kombucha",
    flavor: "fruity",
    price: 5,
    description: "Exceptional juiciness and a vibrant tropical flavor that balances the tastes of sweet and tart mixed with the mildly aromatic turmeric.",
    pintsLeft: 124
  },
  {
    name: "Blackberry",
    brand: "Humm Kombucha",
    flavor: "fruity",
    price: 5,
    description: "Pretty much blackberries in a bottle.",
    pintsLeft: 124
  },
  {
    name: "Ginger Juniper",
    brand: "Humm Kombucha",
    flavor: "herbal",
    price: 5,
    description: "Sweet, zesty, ginger plays a perfect complement to juniper's subtle piney notes.",
    pintsLeft: 124
  },
  {
    name: "Mango Passionfruit",
    brand: "Humm Kombucha",
    flavor: "fruity",
    price: 5,
    description: "These tropical troublemakers could merengue their way past midnight and hula until the sun comes up again.",
    pintsLeft: 124
  },
  {
    name: "Clear Mind",
    brand: "Brew Dr Kombucha",
    flavor: "herbal",
    price: 5,
    description: "This brilliant blend of rosemary, mint, sage and green tea creates a distinctly smooth herbal flavor worth savoring.",
    pintsLeft: 124
  }
];

function FlavorGroup(props) {
  var filteredList = kombuchaList.filter(kombucha => kombucha.flavor == props.flavor);

  return (
    <div>
      <h1>{props.flavor.toUpperCase()}</h1>
      {filteredList.map((kombucha, index) =>
        <Kombucha
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          description={kombucha.description}
          key={index} />
      )}
    </div>
  );
}

FlavorGroup.propTypes = {
  flavor: PropTypes.string
};

export default FlavorGroup;