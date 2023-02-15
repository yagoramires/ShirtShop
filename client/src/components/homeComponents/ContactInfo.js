import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>0800 XXX YYY</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarter</h5>
            <p>Contagem MG</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </div>
            <h5>whatsapp</h5>
            <p>+55 31 XXXX-YYYY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
