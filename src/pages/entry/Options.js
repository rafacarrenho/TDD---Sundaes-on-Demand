import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";
import ScoopOtions from "./ScoopOtions";
import ToppingOptions from "./ToppingOptions";

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [optionsType]);

  if (error) return <AlertBanner />;

  const ItemComponent = optionsType === "scoops" ? ScoopOtions : ToppingOptions;

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
