import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFb";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy; Jwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
