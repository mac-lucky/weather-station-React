import React from "react";
import "./Tabs.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Charts from "../Charts/Charts";
import Actual from "../Actual/Actual";

const TabPanel = (props) => {
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
};

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
    width: "100%",
  },
}));

const FullWidthTabs = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
          <Tab label="Current" {...a11yProps(0)} />
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
          <Actual />

          <Charts
            field={2}
            title={"Temperature"}
            days={1}
            results={200}
            average={0}
          />
          <Charts
            field={1}
            title={"Humidity"}
            days={1}
            results={200}
            average={0}
          />
          <Charts
            field={3}
            title={"Pressure"}
            days={1}
            results={200}
            average={0}
          />
          <Charts field={4} title={"LUX"} days={1} results={200} average={0} />
          <Charts
            field={5}
            title={"Wind+Speed"}
            days={1}
            results={200}
            average={0}
          />
          <Charts
            field={6}
            title={"Wind+Direction"}
            days={1}
            results={200}
            average={0}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h1 className="centerWhite">Week</h1>
          <Charts
            field={2}
            title={"Temperature"}
            days={7}
            results={8000}
            average={"&average=60"}
          />
          <Charts
            field={1}
            title={"Humidity"}
            days={7}
            results={8000}
            average={"&average=60"}
          />
          <Charts
            field={3}
            title={"Pressure"}
            days={7}
            results={8000}
            average={"&average=60"}
          />
          <Charts
            field={4}
            title={"LUX"}
            days={7}
            results={8000}
            average={"&average=60"}
          />
          <Charts
            field={5}
            title={"Wind+Speed"}
            days={7}
            results={8000}
            average={"&average=60"}
          />
          <Charts
            field={6}
            title={"Wind+Direction"}
            days={7}
            results={8000}
            average={"&average=60"}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h1 className="centerWhite">Month</h1>
          <Charts
            field={2}
            title={"Temperature"}
            days={31}
            results={8000}
            average={"&average=1440"}
          />
          <Charts
            field={1}
            title={"Humidity"}
            days={31}
            results={8000}
            average={"&average=1440"}
          />
          <Charts
            field={3}
            title={"Pressure"}
            days={31}
            results={8000}
            average={"&average=1440"}
          />
          <Charts
            field={4}
            title={"LUX"}
            days={31}
            results={8000}
            average={"&average=1440"}
          />
          <Charts
            field={5}
            title={"Wind+Speed"}
            days={31}
            results={8000}
            average={"&average=1440"}
          />
          <Charts
            field={6}
            title={"Wind+Direction"}
            days={31}
            results={8000}
            average={"&average=1440"}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <h1 className="centerWhite">Last 6 months</h1>
          <Charts
            field={2}
            title={"Temperature"}
            days={186}
            results={8000}
            average={"&average=daily"}
          />
          <Charts
            field={1}
            title={"Humidity"}
            days={186}
            results={8000}
            average={"&average=daily"}
          />
          <Charts
            field={3}
            title={"Pressure"}
            days={186}
            results={8000}
            average={"&average=daily"}
          />
          <Charts
            field={4}
            title={"LUX"}
            days={186}
            results={8000}
            average={"&average=daily"}
          />
          <Charts
            field={5}
            title={"Wind+Speed"}
            days={186}
            results={8000}
            average={"&average=daily"}
          />
          <Charts
            field={6}
            title={"Wind+Direction"}
            days={186}
            results={8000}
            average={"&average=daily"}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default FullWidthTabs;
