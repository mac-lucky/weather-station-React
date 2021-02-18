import Iframe from "react-iframe";
import React from "react";
import useWindowDimensions from "../Charts/WindowSize"
import "./Charts.css";


const Charts = (props) => {
  const { width } = useWindowDimensions();
  const widthString = Math.round(width * 0.885);
  const api = "https://thingspeak.com/channels/1293688/charts/" + props.field + "?bgcolor=%23282424&color=%23f4c50a&dynamic=true&title=" + props.title + "&results=" + props.results +"&type=line&height=360&update=15&width=" + widthString + "&days=" + props.days + props.average;

  return (
    <>
      <div className="chartsTab">
        width = {width}
        <Iframe frameBorder="0" width="100%" height="360" url={api}></Iframe>
      </div>
    </>
  );
};

export default Charts;
