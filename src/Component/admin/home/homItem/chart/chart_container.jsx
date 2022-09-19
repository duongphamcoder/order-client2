import CardChartItem from "./card_chart";

function ChartContainer() {
  const arr = [
    {
      title: "users",
      value: "26k",
      percent: "23%",
      className: "violet",
    },
    {
      title: "Income",
      value: "$6.200",
      percent: "40.9%",
      className: "blue",
    },
    {
      title: "Conversion Rate",
      value: "2.49%",
      percent: "3.7%",
      className: "yellow",
    },
    {
      title: "Sessions",
      value: "44K",
      percent: "23.6%",
      className: "red",
    },
  ];
  return (
    <div id="chart_container">
      <div className="container">
        <div className="row">
          {arr.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <CardChartItem
                title={item.title}
                value={item.value}
                percent={item.percent}
                className={item.className}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChartContainer;
