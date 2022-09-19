import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function CardChartItem({ title, percent, value, className }) {
  return (
    <div className={`card card_chart_item ${className}`}>
      <div className="card_chart_item-head">
        <p className="card_chart_item-title">{title}</p>
      </div>
      <div className="card_chart_item-content">
        <div className="card_chart_item-content-value">
          <span>{value}</span>
        </div>
        <div className="card_chart_item-content-percent">
          <span>
            ( {percent}
            <span style={{ paddingLeft: "10px" }}>
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
            )
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardChartItem;
