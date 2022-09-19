import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductItem from "../../product/all_product/item/product_item";

import "./css/table_item.scss";

function TableItem({ datas }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [indexPagin, setIndexPagin] = useState(1);
  const [entries, setEmtries] = useState(5);
  const pagination = useMemo(() => {
    if (entries !== "") {
      const length = datas.length;
      const equal0 = length % entries === 0;
      const pagin = equal0 ? length / entries : parseInt(length / entries) + 1;
      const pagins = new Array(pagin).fill(0);
      return pagins;
    }
    return new Array(1).fill(0);
  }, [entries]);

  const handleChangeEntries = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value !== "") {
      setEmtries(value);
    }
  };

  return (
    <div id="table_admin--wrapper" className="">
      <div className="table_admin-item">
        <div className="table_all_product-head">
          <div className="table_all_product-head-show_entries">
            <label htmlFor="entries">
              <span>Show </span>
              <select onChange={handleChangeEntries}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span>entries</span>
            </label>
          </div>
          <div className="table_all_product-head-search">
            <label htmlFor="search">
              <span>Search </span>
              <input type="text" value={entries} id="search" />
            </label>
          </div>
        </div>
        <div className="table_all_product-body">
          <table>
            <thead>
              <tr>
                <th>
                  <span>Name</span>
                </th>
                <th>
                  <span>date created</span>
                </th>
                <th>
                  <span>price</span>
                </th>
                <th>
                  <span>status</span>
                </th>
                <th>
                  <span>action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item, index) => {
                if (
                  (index >= entries * indexPagin - entries) &
                  (index < entries * indexPagin)
                ) {
                  return <ProductItem data={item} />;
                }
                return;
              })}
            </tbody>
          </table>
        </div>
        <div className="table_all_product-pagination">
          <div className="table_all_product-pagination-btn">
            <button className="table_all_product-pagination-btn-item">
              previous
            </button>
          </div>
          <div className="table_all_product-pagination-list">
            {pagination.map((item, index) => (
              <button
                className={`table_all_product-pagination-list-item ${
                  index + 1 === indexPagin && "active"
                }`}
                key={index}
                onClick={() => {
                  setIndexPagin(index + 1);
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="table_all_product-pagination-btn">
            <button className="table_all_product-pagination-btn-item">
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableItem;
