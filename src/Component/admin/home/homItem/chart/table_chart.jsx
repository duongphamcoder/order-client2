import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const genarateOption = () => {
  return {
    chart: {
      type: "spline",
      backgroundColor: "#24252F",
      borderRadius: 10,
      colorCount: 2,
    },
    colors: [
      "#519668",
      "#8bbc21",
      "#0d233a",
      "#910000",
      "#1aadce",
      "#492970",
      "#f28f43",
      "#77a1e5",
      "#c42525",
      "#a6c96a",
    ],

    title: {
      text: "Fruit Consumption",
      style: {
        color: "#fff",
      },
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
      labels: {
        style: {
          color: "#fff",
          font: "11px Trebuchet MS, Verdana, sans-serif",
        },
      },

      gridLineColor: "#fff",
    },
    yAxis: {
      gridLineDashStyle: "longdash",
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#fff",
          font: "11px Trebuchet MS, Verdana, sans-serif",
        },
      },

      gridLineColor: "#000",
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4],
      },
      {
        name: "hehe",
        data: [3, 1, 7],
      },
    ],
  };
};

function TableChart() {
  return (
    <div id="table_chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...genarateOption() }}
      />
    </div>
  );
}

export default TableChart;
