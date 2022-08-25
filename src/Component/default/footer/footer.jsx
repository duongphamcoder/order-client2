import { Link } from "react-router-dom";

function Footer() {
  const footer_nav_item_link =
    "footer_nav_item--link capitalize no-underline py-2 text-md tracking-wider";
  const social_network_item = "social_network--item text-4xl px-2";
  return (
    <div id="footer_wraper" className="pt-28">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="">
              <div className="footer_logo">
                <Link to="/" className="flex items-center h-full">
                  <img
                    src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa341ab76b5e7_Logo.svg"
                    alt=""
                    srcset=""
                    className="h-12 rounded-lg"
                  />
                </Link>
              </div>
              <div className="footer_title">
                <p className="text-xl py-4 text-gray-500">
                  Takeaway &amp; Delivery template
                  <br /> for small - medium businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <div className="row">
                <div className="col-4">
                  <div className="footer_nav">
                    <div className="footer_nav_list">
                      <div className="footer_nav_item--title pb-4">
                        <span className="uppercase font-semibold tracking-widest">
                          company
                        </span>
                      </div>
                      <div className={`${footer_nav_item_link} `}>
                        <Link
                          to="/"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          home
                        </Link>
                      </div>
                      <div className={`${footer_nav_item_link}`}>
                        <Link
                          to="/order"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          order
                        </Link>
                      </div>
                      <div className={`${footer_nav_item_link}`}>
                        <Link
                          to="/faq"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          FAQ
                        </Link>
                      </div>
                      <div className={`${footer_nav_item_link}`}>
                        <Link
                          to="/contact"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="footer_nav">
                    <div className="footer_nav_list">
                      <div className="footer_nav_item--title pb-4">
                        <span className="uppercase font-semibold tracking-widest ">
                          TEMPLATE
                        </span>
                      </div>
                      <div className={`${footer_nav_item_link} `}>
                        <Link
                          to="/"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          style guide
                        </Link>
                      </div>
                      <div className={`${footer_nav_item_link}`}>
                        <Link
                          to="/order"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          changelog
                        </Link>
                      </div>
                      <div className={`${footer_nav_item_link}`}>
                        <Link
                          to="/faq"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          licence
                        </Link>
                      </div>
                      <div className={`${footer_nav_item_link}`}>
                        <Link
                          to="/contact"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          Webflow university
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="footer_nav">
                    <div className="footer_nav_list">
                      <div className="footer_nav_item--title pb-4">
                        <span className="uppercase font-semibold tracking-widest">
                          FLOWBASE
                        </span>
                      </div>
                      <div className={`${footer_nav_item_link} `}>
                        <Link
                          to="/"
                          className="no-underline text-gray-500 hover:text-black"
                        >
                          More Cloneables
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="social_network mt-20 py-4 flex items-center justify-center">
              <div className={`${social_network_item}`}>
                <a href="" className="text-blue-600 hover:text-blue-700">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </div>
              <div className={`${social_network_item}`}>
                <a href="" className="text-rose-500 hover:text-rose-600">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
              <div className={`${social_network_item}`}>
                <a href="" className="text-sky-500 hover:text-sky-700">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
