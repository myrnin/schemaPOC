import React, { useState, useEffect } from "react";
import "./AnimatedGrid.css";

const getTrianglePath = (orientation) => {
  switch (orientation) {
    case "rotate90":
      return "M50 0 L50 50 L0 0 Z";
    case "rotate180":
      return "M50 50 L0 50 L50 0 Z";
    case "rotate270":
      return "M0 50 L50 50 L0 0 Z";
    default:
      return "M0 0 L50 0 L0 50 Z";
  }
};

const getTransformOrigin = (orientation, animation) => {
  switch (`${orientation} - ${animation}`) {
    case "rotate90 - scaleY":
      return "top center";
    case "rotate90 - scaleX":
      return "right center";
    case "rotate180 - scaleY":
      return "bottom center";
    case "rotate180 - scaleX":
      return "right center";
    case "rotate270 - scaleY":
      return "bottom center";
    case "rotate270 - scaleX":
      return "left center";
    case "default - scaleY":
      return "top center";
    case "default - scaleX":
      return "left center";
    default:
      return "";
  }
};

const AnimatedGrid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const savedGrid = JSON.parse(localStorage.getItem("grid")) || [];
    setGrid(savedGrid);
  }, []);

  return (
    <div
      className="svg-container"
      id="svgContainer"
      style={{ gridTemplateColumns: `repeat(${grid[0]?.length || 0}, 50px)` }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="svg-item"
            style={{
              gridRowStart: rowIndex + 1,
              gridColumnStart: colIndex + 1,
            }}
          >
            {cell.map(
              (share, shareIndex) =>
                share && (
                  <svg
                    key={shareIndex}
                    viewBox="0 0 50 50"
                    className="animated"
                    style={{
                      animation: `${share.animation} ${share.duration} ${share.delay} forwards`,
                      transformOrigin: getTransformOrigin(
                        share.orientation,
                        share.animation
                      ),
                      "--final-opacity": share.opacity,
                      opacity: 0,
                      position: "absolute",
                    }}
                  >
                    <path
                      d={getTrianglePath(share.orientation)}
                      fill={share.color}
                    />
                  </svg>
                )
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AnimatedGrid;
