function CartNetWorkItem({ value }) {
  return (
    <div className={`card card_network_item `}>
      <div className={`card_network_item-logo ${value.title}`}>
        {value.icon}
      </div>
      <div className="card_network_item-desc">
        <div className="card_network_item-desc-item">
          <p className="card_network_item-desc-item-value">
            {value.fields_1.data}
          </p>
          <p className="card_network_item-desc-item-name">
            {value.fields_1.name}
          </p>
        </div>
        <div className="card_network_item-desc-item">
          <p className="card_network_item-desc-item-value">
            {value.fields_2.data}
          </p>
          <p className="card_network_item-desc-item-name">
            {value.fields_2.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartNetWorkItem;
