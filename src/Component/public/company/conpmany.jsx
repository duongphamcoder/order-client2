import { memo } from "react";
import { Link } from "react-router-dom";
import "./company.scss";

function CompanyPage() {
  console.log("Company");
  return (
    <div id="company_wraper">
      <div
        id="company_head"
        className="py-40"
        style={{ backgroundColor: "var(--color-footer)" }}
      >
        <h1 className="company_head--item text-center text-6xl font-bold">
          Our company focuses <br /> on{" "}
          <span style={{ color: "var(--color-main)" }}>food and people</span>.
        </h1>
      </div>
      <div className="company_content pt-24">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="flex items-center h-full flex items-center">
                <div className="new_message_board--item--child ">
                  <h1 className="font-bold text-6xl">
                    <span style={{ color: "var(--color-main)" }}>
                      The home of <br />
                      fresh products
                    </span>
                  </h1>
                  <span className="block text-xl py-4 text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </span>
                  <div className="btn_redirect py-5">
                    <Link
                      to="/order"
                      className="py-3 px-5 rounded-lg text-white no-underline text-lg"
                      style={{ backgroundColor: "var(--color-main)" }}
                    >
                      Plance an Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="new_message_board--item--child d-md-flex justify-content-md-center">
                <img
                  src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa372df76b601_Team%20Image.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="company_data mt-20 py-48 flex items-center">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="company_data--item text-white ">
                  <div className="company_data--item--number">
                    <h1 className="text-center text-7xl font-bold">62</h1>
                  </div>
                  <div className="company_data--item--text text-center text-xl py-3">
                    <p>Fiesty Menu Items</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="company_data--item text-white ">
                  <div className="company_data--item--number">
                    <h1 className="text-center text-7xl font-bold">62</h1>
                  </div>
                  <div className="company_data--item--text text-center text-xl py-3">
                    <p>Fiesty Menu Items</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="company_data--item text-white ">
                  <div className="company_data--item--number">
                    <h1 className="text-center text-7xl font-bold">62</h1>
                  </div>
                  <div className="company_data--item--text text-center text-xl py-3">
                    <p>Fiesty Menu Items</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="company_data--item text-white ">
                  <div className="company_data--item--number">
                    <h1 className="text-center text-7xl font-bold">62</h1>
                  </div>
                  <div className="company_data--item--text text-center text-xl py-3">
                    <p>Fiesty Menu Items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CompanyPage);
