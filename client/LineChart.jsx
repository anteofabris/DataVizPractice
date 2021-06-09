import React from "react";
// import Chart from "chart.js";
// import classes from "./LineGraph.module.css";
import Chart from "react-google-charts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      hasFormatted: false,
    };
  }

  componentDidMount() {
    var tempArray = [["Day", "High", "Low"]];

    this.props.data.forEach((object) => {
      tempArray.push([
        object.Date.split(" ")[0],
        Number(object.High),
        Number(object.Low),
      ]);
    });

    console.log("this is tempArray ", tempArray);

    this.setState({ data: tempArray, hasFormatted: true });
  }

  render() {
    if (this.state.hasFormatted) {
      return (
        <div>
          <Chart


            width={2400}
            height={"600px"}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={this.state.data}
            options={{
              // colors: ['#8e0152', '#276419'],
              series: {
                0: { color: '#4129ed', lineWidth: 0 },
                1: { color: '#efa324', lineWidth: 0 }
              },
              title: "GME Stock Since December 2020",
              hAxis: { title: "Day", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "50%", height: "70%" },
              // lineWidth: 25
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LineChart;
