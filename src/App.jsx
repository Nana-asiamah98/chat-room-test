import "./App.css";
import React from "react";
import { useRoutes,BrowserRouter } from "react-router-dom";
import UserLogin from "./Pages/UserLogin.page";
import ChatRoom from "./Pages/ChatRoom";


const AppRoutes = () => {
  const routes = useRoutes([
    {path : "/", element: <UserLogin/>},
    {path: "/chatRoom", element: <ChatRoom/>}
  ]);
  return routes;
}

function App() {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;
