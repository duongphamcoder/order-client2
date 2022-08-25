import { memo } from "react";
import "./contact.scss";

function ContactPage() {
  console.log("Contact");
  return (
    <div id="contact_wraper">
      <div
        id="contact_head"
        className="py-44"
        style={{ backgroundColor: "var(--color-footer)" }}
      >
        <h1 className="text-center text-5xl font-bold">
          If you have any{" "}
          <span style={{ color: "var(--color-main)" }}>questions</span>, <br />{" "}
          please <span style={{ color: "var(--color-main)" }}>contact us</span>.
        </h1>
      </div>
      <div id="contact_main" className="py-20 flex items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact_item contact_us">
                <div className="contact_item--head">
                  <p>Contact Us</p>
                </div>
                <div className="contact_item--content">
                  <div className="contact_item--content-address">
                    <p>
                      459 Ton Duc Thang <br /> Lien Chieu - Hoa Khanh Nam <br />{" "}
                      Da Nang.
                    </p>
                  </div>
                  <div className="contact_item--content-phoneNumber">
                    <p>
                      <span className="capitalize text-md font-bold">
                        phone number:
                      </span>
                      <span> (+84) 0399388142</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact_item contact_form">
                <div className="contact_item--head">
                  <p>Contact Form</p>
                </div>
                <div className="contact_item--head-desc">
                  <p className="text-lg">
                    Send us a message and we'll get back to you as soon as we
                    can!
                  </p>
                </div>
                <div className="contact_item--form">
                  <div className="contact_item--form-item">
                    <div className="contact_item--form-item-label">
                      <label htmlFor="contact_name">Name</label>
                    </div>
                    <div className="contact_item--form-item-input">
                      <input
                        type="text"
                        name=""
                        id="contact_name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="contact_item--form-item">
                    <div className="contact_item--form-item-label">
                      <label htmlFor="contact_email">Email Address</label>
                    </div>
                    <div className="contact_item--form-item-input">
                      <input
                        type="text"
                        name=""
                        id="contact_email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="contact_item--form-item">
                    <div className="contact_item--form-item-label">
                      <label htmlFor="contact_message">Your Message</label>
                    </div>
                    <div className="contact_item--form-item-input">
                      <textarea
                        type="text"
                        name=""
                        id="contact_message"
                        placeholder="Enter your message"
                      />
                    </div>
                  </div>
                </div>
                <div className="contact_submit py-3">
                  <button className="btn_custom active uppercase py-3 px-5">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ContactPage);
