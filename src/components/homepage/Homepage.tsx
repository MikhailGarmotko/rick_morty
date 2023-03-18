import React from "react";
import style from "./Homepage.module.css";
import { Characters } from "../characters/Characters";
import { useGetCharactersQuery } from "../../store/characterApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCharacters } from "../../store/characterSlices";
import { useState, useEffect } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Decoded } from "../../misc/interfaces/types";
import { setUser } from "../../store/userProfile";

export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userProfile.user);
  console.log(user);
  const [filterValue, setFilterValue] = useState<any>("");
  const [userName, setUserName] = useState<string>(user);
  const { data } = useGetCharactersQuery();

  const signOutWithGoogle = () => {
    googleLogout();
    localStorage.removeItem("user");
    dispatch(setUser(""));
  };
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
    <>
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
      <div className={style.log_container}>
        {!user ? (
          <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          >
            <GoogleLogin
              onSuccess={async (credentialResponse: any) => {
                const { name }: Decoded = jwt_decode(
                  credentialResponse.credential
                );
                localStorage.setItem("user", name);
                dispatch(setUser(name));
              }}
              onError={() => {
                console.log("Failed");
              }}
            />
          </GoogleOAuthProvider>
        ) : (
          <>
            <div className={style.profile}>
              <span>Welcome {user}</span>
            </div>

            <button onClick={signOutWithGoogle} className={style.logout}>
              Sign Out
            </button>
          </>
        )}
      </div>
    </>
  );
};
