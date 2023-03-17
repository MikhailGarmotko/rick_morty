import React from "react";
import style from "./Homepage.module.css";
import { Characters } from "../characters/Characters";
import { useGetCharactersQuery } from "../../store/characterApi";
import { useAppDispatch } from "../../store";
import { setCharacters } from "../../store/characterSlices";
import { useState, useEffect } from "react";

export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [filterValue, setFilterValue] = useState<any>("");
  const { data } = useGetCharactersQuery();
  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data));
    }
  }, [data]);
  const onChangeHandler = (e: any) => {
    setFilterValue(e.target.value);
    localStorage.setItem("filter", e.target.value);
  };
  useEffect(() => {
    const filter = localStorage.getItem("filter");
    if (filter) setFilterValue(filter);
  }, []);

  return (
    <div className={style.homepage_container}>
      <div className={style.img_container}></div>
      <input
        onChange={(e: any) => onChangeHandler(e)}
        className={style.input}
        placeholder="Filter by name ..."
        defaultValue={filterValue}
      ></input>
      <div id="grid" className={style.characters_container}>
        <Characters filterValue={filterValue} />
      </div>
    </div>
  );
};
