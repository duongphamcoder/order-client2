import CartNetWorkItem from "./cart_network_item";

function NetWordSocial() {
  const arr = [
    {
      icon: <ion-icon name="logo-facebook"></ion-icon>,
      title: "facebook",
      fields_1: {
        name: "FRIENDS",
        data: "89k",
      },
      fields_2: {
        name: "FEEDS",
        data: "459",
      },
    },
    {
      title: "twitter",
      icon: <ion-icon name="logo-twitter"></ion-icon>,
      fields_1: {
        name: "FOLLOWERS",
        data: "973k",
      },
      fields_2: {
        name: "TWEETS",
        data: "1.792",
      },
    },
    {
      icon: <ion-icon name="logo-linkedin"></ion-icon>,
      title: "linkin",
      fields_1: {
        name: "CONTACTS",
        data: "500+",
      },
      fields_2: {
        name: "FEEDS",
        data: "292",
      },
    },
  ];
  return (
    <div id="network_social">
      <div className="row">
        {arr.map((item, index) => (
          <div className="col-lg-4">
            <CartNetWorkItem value={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NetWordSocial;
