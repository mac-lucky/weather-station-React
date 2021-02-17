import Iframe from "react-iframe";
import React from "react";
import useWindowDimensions from "../Charts/WindowSize"
import "./Charts.css";


const Charts = (props) => {
  const { height, width } = useWindowDimensions();
  const widthString = Math.round(width * 0.75);
  const api = "https://thingspeak.com/channels/1293688/charts/" + props.field + "?bgcolor=%23282424&color=%23f4c50a&dynamic=true&results=" + props.results +"&type=line&update=15&width=" + widthString + "&days=" + props.days;

  return (
    <>
      <div className="chartsTab">
        width = {width}
        <Iframe frameBorder="0" width="100%" height="260" url={api}></Iframe>
      </div>
    </>
  );
};

export default Charts;
