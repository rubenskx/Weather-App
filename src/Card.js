import React, { useEffect } from "react";

const Card = () => {
  console.log("Working!!");
  let date = new Date();
  let h = date.getHours(); // 0 - 23

  useEffect(() => {
    if (h >= 20 || h <= 4) {
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2098428.jpg&fm=jpg')";
    }

    if (h> 4 && h <= 14) {
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?cs=srgb&dl=pexels-torsten-kellermann-955656.jpg&fm=jpg')";
    }

    if (h > 14 && h < 20) {
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg?cs=srgb&dl=pexels-pixabay-533982.jpg&fm=jpg')";
    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  return <div className="picture" />;
};

export default Card;
