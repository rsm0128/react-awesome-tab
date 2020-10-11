import React, { useState } from "react";

const Tab = ({ children }) => {
  const [hightlightStyle, setHighlightStyle] = useState({
    left: 0,
    opacity: 0,
  });
  function moveHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      opacity: 0,
    });
  }
  return (
    <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
      <div className="hightlight" style={hightlightStyle} />
      {children}
    </div>
  );
};

export default Tab;
