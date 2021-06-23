import React from "react";

export default function NotFound() {
    const notFoundStyle = {
        display: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      };
  return (
    <section className="page page--gray page--main" style={notFoundStyle}>
      <h1>404. Page not found</h1>
      <img
        src="img/404.svg"
        alt="Well then"
        width="250"
        height="202"
      />
    </section>
  );
}
