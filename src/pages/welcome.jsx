import bookShelfLogo from "./shelf-logo.png";
import { useEffect } from "react";

function Welcome() {
  document.body.style.backgroundImage = "none";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = '/sign-in';
    }, 3000);

    return () => clearTimeout(timeoutId);
},[]);

  return (
    <div className="imageContainer">
      <img src={bookShelfLogo} alt="logo" className="imageContainer" />
    </div>
  );
}

export default Welcome
