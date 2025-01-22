import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>Welcome to Photo App</h1>
    </div>
  );
}

export default SplashScreen;
