import React from 'react';

function Contact() {
  return (
    <div className="bg-light p-5">
      <h3 className="text-center mb-4">Contact us</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <p>Contact us and we will get back to you within 24 hours.</p>
          <p><i className="fas fa-building"></i> Company Name</p>
          <p><i className="fas fa-phone"></i> +256 778 800 900</p>
          <p><i className="fas fa-envelope"></i> company@gmail.com</p>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email address" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Comment"></textarea>
            </div>
            <button type="submit" className="btn btn-danger w-100">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
