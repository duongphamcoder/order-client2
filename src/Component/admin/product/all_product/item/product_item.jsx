import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFile } from "@fortawesome/free-solid-svg-icons";

function ProductItem({ data }) {
  return (
    <tr>
      <td>
        <div className="table_all_product-body-item">
          <div className="table_all_product-body-item-name">
            <p>{data.name}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="table_all_product-body-item">
          <div className="table_all_product-body-item-date_created">
            <p>{data.date_created}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="table_all_product-body-item">
          <div className="table_all_product-body-item-price">
            <p>{data.price}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="table_all_product-body-item">
          <div className={`table_all_product-body-item-status ${data.status}`}>
            <span>{data.status}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="table_all_product-body-item">
          <div className="table_all_product-body-item-action">
            <button className="table_all_product-body-item-action-btn update">
              <FontAwesomeIcon icon={faFile} />
            </button>
            <button className="table_all_product-body-item-action-btn remove">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ProductItem;
