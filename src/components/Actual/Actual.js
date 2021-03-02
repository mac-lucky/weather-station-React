import React, { useState, useEffect } from "react";
import "./Actual.css";
import icoDir from "../../assets/044-weather vane.png";
import icoTemp from "../../assets/039-thermometer.png";
import icoHumidity from "../../assets/004-humidity.png";
import icoAnenometr from "../../assets/040-anemometer.png";
import icoLUX from "../../assets/035-uv index.png";
import icoPressure from "../../assets/021-atmospheric.png";



const Actual = () => {
  const [Temperature, setTemperature] = useState([]);
  const [Humidity, setHumidity] = useState([]);
  const [Pressure, setPressure] = useState([]);
  const [LUX, setLUX] = useState([]);
  const [WindSpeed, setWindSpeed] = useState([]);
  const [WindDirection, setWindDirection] = useState([]);
  var [CurDate, setCurDate] = useState([]);

  useEffect(() => {
    const api =
      "https://api.thingspeak.com/channels/1293688/feeds.json?results=1&timezone=Europe/Warsaw";
    fetch(api)
      .then((respone) => respone.json())
      .then((data) => {
        setTemperature(data.feeds[0].field2);
        setHumidity(data.feeds[0].field1);
        setPressure(data.feeds[0].field3);
        setLUX(data.feeds[0].field4);
        setWindSpeed(data.feeds[0].field5);
        setWindDirection(data.feeds[0].field6);
        setCurDate(data.feeds[0].created_at);
      })
      .catch((err) => console.log(err));
  });

  CurDate = CurDate.slice(0, 10) + " " + CurDate.slice(11, 19);

  return (
    <>
      <div className="ActualContainer">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Realtime Weather
        </h1>
        <div className="ActualWeather">
          <div className="ActualPlace">
            <h1>Wrocław, PL</h1>
            <h4>Last update: {CurDate}</h4>
          </div>
          <div>
            <div className="ActualBox">
              <div className="ActualLeft">
                <p><img alt="" src={icoTemp}/>Temp: {Temperature} °C</p>
                <p><img alt="" src={icoPressure}/>Pressure: {Pressure} hPa</p>
                <p><img alt="" src={icoHumidity}/>Humidity: {Humidity}%</p>
              </div>
              <div>
                <p><img alt="" src={icoLUX}/>Insolation: {LUX} lx</p>
                <p><img alt="" src={icoAnenometr}/>Wind Speed: {WindSpeed} km/h</p>
                <p><img alt="" src={icoDir}/>Wind Direction: {WindDirection} °</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actual;
