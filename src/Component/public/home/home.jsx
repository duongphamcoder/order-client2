import { useState, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../../configJWT";
import handle from "../../../handle";
import ProductItem from "../../default/ItemComponent/itemProduct";
import "./home.scss";

function HomePage() {
  const [categorys, setCategorys] = useState([]);
  const [btnSlect, setBtnSelect] = useState("");
  const [dataProduct, setDataProduct] = useState();
  const [quantitys, setQuantity] = useState();

  const home_btn_redirect =
    "btn_redirect--titem inline-block py-3 px-4 no-underline rounded-lg text-white text-xl";
  const new_message_board_margin = "my-20";

  const new_message_board__item__child_flex =
    "flex items-start justify-center flex-col";

  const btn_select =
    "btn_seclect btn_custom  capitalize mx-4 px-5 py-3 text-xl";

  useEffect(() => {
    axiosClient
      .get(`${process.env.REACT_APP_URL_SERVER}/`)
      .then((res) => {
        console.log(res);
        setCategorys(res.categorys);
        setBtnSelect(res.categorys[0]._id);
        setDataProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="home_wraper">
      <div id="new_message_board">
        <div
          className={`new_message_board--item right flex items-center py-5 ${new_message_board__item__child_flex}`}
          style={{
            backgroundImage:
              "url('https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3306c76b60a_BG%20Shape.svg')",
          }}
        >
          <div className="container flex">
            <div className="row">
              <div className="col-lg-6">
                <div className="new_message_board--item--child ">
                  <h1 className="font-bold text-6xl">
                    Beautiful food &amp; takeaway,
                    <span style={{ color: "var(--color-main)" }}>
                      delivered
                    </span>
                    <br />
                    to your door.
                  </h1>
                  <span className="block text-xl py-4 text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </span>
                  <div className="btn_redirect py-5">
                    <Link
                      to="/order"
                      className={`${home_btn_redirect}`}
                      style={{ backgroundColor: "var(--color-main)" }}
                    >
                      Plance an Order
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="new_message_board--item--child d-md-flex justify-content-md-center">
                  <img
                    src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa395f376b5c1_Hero%20Image.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`new_message_board--item center flex items-center py-5 ${new_message_board_margin} mr`}
          style={{
            backgroundImage:
              "url('https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3b4c076b5ee_BG%20Shape%20Content.svg')",
          }}
        >
          <div className="container flex">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className={`new_message_board--item--child flex-col ${new_message_board__item__child_flex}`}
                >
                  <h1 className="font-bold text-6xl">
                    The home of <br /> fresh products
                  </h1>
                  <span className="block text-xl py-4 text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </span>
                  <div className="btn_redirect py-5">
                    <Link
                      to="/company"
                      className={`${home_btn_redirect}`}
                      style={{ backgroundColor: "var(--color-main)" }}
                    >
                      Lern about Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="new_message_board--item--child">
                  <img
                    src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3ccac76b5c6_Group%2033.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_browse_our_menu mb-5">
          <div id="home_browse_our_menu--title " className="py-3 text-center">
            <h1
              className="text-6xl font-bold"
              style={{ color: "var(--color-main)" }}
            >
              Browse our menu
            </h1>
            <p className="pt-4 text-gray-500 text-md mb-0">
              Use our menu to place an order online, or
              <a
                href=""
                style={{ color: "var(--color-main)", padding: "0 3px" }}
              >
                phone
              </a>
              our store to <br /> place a pickup order. Fast and fresh food.
            </p>
          </div>
          <div
            c
            className={`new_message_board--item center flex items-center  mx-0`}
          >
            <div
              className="container new_message_board--item"
              style={{
                backgroundImage:
                  "url('https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3b4c076b5ee_BG%20Shape%20Content.svg')",
              }}
            >
              <div className="row">
                <div className="col-12">
                  <div
                    id="select_list"
                    className="flex justify-center mt-5 py-4"
                  >
                    {categorys.map((item) => {
                      return (
                        <button
                          className={`${btn_select} ${
                            btnSlect === item._id && "active"
                          }`}
                          onClick={() => {
                            setBtnSelect(item._id);
                          }}
                          key={item._id}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="col-12">
                  <div className="row g-4">
                    {dataProduct &&
                      dataProduct[`${btnSlect}`].map((item) => {
                        return (
                          <ProductItem
                            item={item}
                            handleAddToCart={handle.handleAddToCart}
                          />
                        );
                      })}
                  </div>
                </div>
                <div className="col-12">
                  <div className="btn_show_all_product text-center py-6 my-4">
                    <Link to="/order/burgers?page=1">
                      <button className="btn_custom active capitalize py-3 px-5 text-lg font-semibold">
                        see full menu
                      </button>
                    </Link>
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

export default memo(HomePage);
