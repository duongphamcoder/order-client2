import { useEffect, memo, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { axiosClient } from "../../../configJWT";
import ProductItem from "../../default/ItemComponent/itemProduct";
import "./order.scss";

import handle from "../../../handle";
function OrderPage() {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const { slug } = useParams();
  const redirect = useNavigate();
  //lấy ra path name hiện tại để xử lý việc liên quan
  const pathName = window.location.pathname;
  const select_list_item = "btn_custom px-5 py-3 mx-3 capitalize text-lg";
  // các đường dẫn con thuộc order
  const routeOrder = ["burgers", "sides", "drinks"];

  // lấy ra categorys
  useEffect(() => {
    axiosClient
      .get(`${process.env.REACT_APP_URL_SERVER}/product/category`)
      .then((res) => {
        setCategorys(res.data);
        const category_id = res.data.find((item) => item.name === slug)["_id"];
        axiosClient
          .get(
            `${
              process.env.REACT_APP_URL_SERVER
            }/pagination?category=${category_id}&page=${searchParam.get(
              "page"
            )}`
          )
          .then((response) => {
            console.log(response);
            setProducts(response.data);
            setNext(response.next);
            setPrev(response.prev);
          });
      });
  }, [slug, searchParam.get("page")]);

  // kiểm tra xem đường dẫn con có hợp lệ hay không
  useEffect(() => {
    if (!routeOrder.includes(slug)) {
      redirect("/order/burgers?page=1", { replace: true });
    }
  }, []);

  return (
    <div id="order_wraper">
      <div id="order_head_wraper" className="">
        <div
          id="order_head_text"
          className="flex items-center justify-center py-40"
        >
          <p className="order_head_text--item text-6xl font-bold text-center">
            Get your food
            <span style={{ color: "var(--color-main)" }}>delivered</span>,
            <br /> or
            <span style={{ color: "var(--color-main)" }}> pick-up</span> in
            store.
          </p>
        </div>
      </div>
      <div id="order_content" className="py-28">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="select_list" className="flex justify-center">
                {categorys.map((item) => {
                  return (
                    <NavLink
                      to={`/order/${item.name}?page=1`}
                      className={`${select_list_item} ${({ isActive }) =>
                        isActive && "active"}  no-underline`}
                      key={item._id}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="col-12">
              <div className="py-5">
                <div className="row g-4">
                  {products.map((item, index) => {
                    return (
                      <ProductItem
                        item={item}
                        handleAddToCart={handle.handleAddToCart}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="flex justify-center">
                {prev && (
                  <Link
                    to={`${pathName}?page=${+searchParam.get("page") - 1}`}
                    className="btn_custom  inline-flex items-center py-3 px-5 no-underline capitalize mx-3 hover:text-gray-500"
                  >
                    <div className="inline-flex items-center pr-1">
                      <ion-icon name="chevron-back-outline"></ion-icon>
                    </div>
                    previous
                  </Link>
                )}
                {next && (
                  <Link
                    to={`${pathName}?page=${+searchParam.get("page") + 1}`}
                    className="btn_custom active inline-flex items-center py-3 px-5 no-underline capitalize mx-3"
                  >
                    Next
                    <div className="inline-flex items-center pl-1">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(OrderPage);
