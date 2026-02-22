"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav>
        <h3 className="logo">
          <span>BR </span>
          <span>Architects</span>
        </h3>
        <div className="menu">
          <a href="">Project</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className="burger"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {toggle ? (
          <div className="appear-menu">fdas</div>
        ) : (
          <div className="hidden-menu">bad</div>
        )}
      </nav>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "700px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          fill
          src="https://www.w3schools.com/w3images/architect.jpg"
          alt="Architect"
          style={{ objectFit: "contain" }}
        />

        <div
          className="br-arch"
          style={{
            position: "relative",
            fontSize: "2.5em",
          }}
        >
          <span>BR </span>
          <span>Architects</span>
        </div>
      </div>
    </header>
  );
}
