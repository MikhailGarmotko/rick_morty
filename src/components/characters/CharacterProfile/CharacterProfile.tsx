import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./CharacterProfile.module.css";

export const CharacterProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    gender,
    status,
    origin,
    type,
    name,
    image,
    species,
  } = location.state.props;
  const onClcikGoBack = () => {
    navigate("/");
  };

  return (
    <div className={style.profile_container}>
      <input onClick={onClcikGoBack} className={style.go_back} placeholder = "GO BACK">
      </input>
      <div className={style.img_container}>
        <img className={style.img} src={image}></img>
      </div>
      <h1 className={style.h1}>{name}</h1>
      <span className={style.info}>Informations</span>
      <div className={style.table}>
        <div className={style.table_container}>
          <div>
            <h3>Gender </h3>
          </div>
          <div className={style.table_dicription}>{gender}</div>
        </div>
        <div className={style.table_container}>
          <div>
            <h3>Status </h3>
          </div>
          <div className={style.table_dicription}>{status}</div>
        </div>
        <div className={style.table_container}>
          <div>
            <h3>Specie </h3>
          </div>
          <div className={style.table_dicription}>{species}</div>
        </div>
        <div className={style.table_container}>
          <div>
            <h3>Origin</h3>
          </div>
          <div className={style.table_dicription}>{origin.name}</div>
        </div>
        <div className={style.table_container}>
          <div>
            <h3>Type </h3>
          </div>
          <div className={style.table_dicription}>{type}</div>
        </div>
      </div>
    </div>
  );
};
