import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOtions from "./ScoopOtions";

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        //todo
      });
  }, [optionsType]);

  const ItemComponent = optionsType === "scoops" ? ScoopOtions : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
};

export default Options;
