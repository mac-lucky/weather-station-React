import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Iframe from "react-iframe";
import { useEffect, useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    width: "100%",
  },
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const { height, width } = getWindowDimensions();
  console.log(width);


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Actual" {...a11yProps(0)} />
          <Tab label="Week" {...a11yProps(1)} />
          <Tab label="Month" {...a11yProps(2)} />
          <Tab label="Last 6 Months" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h1 style={{ textAlign: "center" }}>Actual</h1>
          <div style={{ paddingTop: "5rem", width: "80%", margin: "auto" }}>
            width = {width}
            <Iframe
              frameBorder="0"
              width="100%"
              height="260"
              url="https://thingspeak.com/channels/1293688/charts/1?bgcolor=%23282424&color=%23f4c50a&dynamic=true&results=300&type=line&update=15&width=1200"
            ></Iframe>
          </div>
          <div style={{ paddingTop: "5rem", width: "80%", margin: "auto" }}>
            <Iframe
              frameBorder="0"
              width="100%"
              height="260"
              url="https://thingspeak.com/channels/1293688/charts/2?bgcolor=%23282424&color=%23f4c50a&dynamic=true&results=300&type=line&update=15&width=1200"
            ></Iframe>
          </div>
          <div style={{ paddingTop: "5rem", width: "80%", margin: "auto" }}>
            <Iframe
              frameBorder="0"
              width="100%"
              height="260"
              url="https://thingspeak.com/channels/1293688/charts/3?bgcolor=%23282424&color=%23f4c50a&dynamic=true&results=300&type=line&update=15&width=1200"
            ></Iframe>
          </div>
          <div style={{ paddingTop: "5rem", width: "80%", margin: "auto" }}>
            <Iframe
              frameBorder="0"
              width="100%"
              height="260"
              url="https://thingspeak.com/channels/1293688/charts/4?bgcolor=%23282424&color=%23f4c50a&dynamic=true&results=300&type=line&update=15&width="
            ></Iframe>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
