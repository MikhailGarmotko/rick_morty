import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Character.module.css";

export const Character = ({ props }: any) => {
  const navigate = useNavigate();

  const { name, image, species } = props;

  const onClickHandler = () => {
    navigate("/character", { state: { props } });
  };

  return (
    <div className={style.character_container} onClick={onClickHandler}>
      <img src={image}></img>
      <h4 className={style.padding_left}>{name}</h4>
      <div className={style.species + " " + style.padding_left}>{species}</div>
    </div>
  );
};
