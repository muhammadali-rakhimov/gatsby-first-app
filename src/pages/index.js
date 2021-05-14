import * as React from "react";
import { useState } from "react";

const imageArray = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

const IndexPage = () => {
  const [current, setCurrent] = useState(0);
  const [hide, setHide] = useState(false);
  const length = imageArray.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageArray) || imageArray.length <= 0) {
    return null;
  }

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <main>
      <title>Testing Image Slider</title>
      <h1 style={{ textAlign: "center" }}>Simple Slider</h1>
      {/* Start */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={handleHide}>X</button>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={prevSlide}>&#60;</button>
        {hide ? (
          <div>
            <h1>Images Not Visible.</h1>
            <h2>Toggle For Rendering</h2>
          </div>
        ) : (
          imageArray.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.imageUrl}
                    alt="travel image"
                    className="image"
                  />
                )}
              </div>
            );
          })
        )}

        <button onClick={nextSlide}>&#62;</button>
      </div>

      {/* Finish */}
    </main>
  );
};

export default IndexPage;
