import React from "react";
import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/homepage/Homepage";
import { CharacterProfile } from "./components/characters/CharacterProfile/CharacterProfile";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/character",
      element: <CharacterProfile />,
    },
  ];
  return useRoutes(routes);
};

export default App;
