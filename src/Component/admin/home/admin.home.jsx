import ChartContainer from "./homItem/chart/chart_container";
import TableChart from "./homItem/chart/table_chart";
import NetWordSocial from "./homItem/network/cart_network";

import "./css/home.scss";

function AdminHomePage() {
  return (
    <div id="admin_home_page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ChartContainer />
          </div>
          <div className="col-lg-12">
            <TableChart />
          </div>
          <div className="col-12">
            <NetWordSocial />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
