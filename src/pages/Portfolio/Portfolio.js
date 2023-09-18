import React from "react";
import "./Portfolio.css";
import PageTitle from "../../hooks/PageTitle";
import asadJulhas from "../../images/asad-julhas.jpg";

const Portfolio = () => {
  return (
    <div className="container">
      <PageTitle title="Asadujjaman Julhas" />
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="profile-bar  mt-5">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="profile-info">
                  <img width="100" src={asadJulhas} alt="Asadujjaman Julhas" />

                  <h3>
                    <a>Asadujjaman Julhas</a>
                  </h3>
                  <a href="mailto:asadjulhas@gmail.com">asadjulhas@gmail.com</a>
                  <a href="tel:+8801724411565">+8801724411565</a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="edit-profiles">
                  <button className="default-btn border-0">
                  Junior Full-stack-developer
                  </button>
                </div>
              </div>
              <p className="career_objective">I love to play with codes to build a great website. I know how things work. I have a diverse set of skills in
HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React, NodeJs, ExpressJs, PHP, Laravel, MySql, MongoDB,
and WordPress. I love bug/error fixing. Bug fixing and website optimization is my favorite task.</p>
            </div>
          </div>
          <div className="billing-address-bar">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="fs-5">Billing Address</h3>
                <ul>
                  <li>
                    <span>Address:</span>
                    <span className="span_valuse">Patuakhali, Bangladesh.</span>
                  </li>
                  <li>
                    <span>Education:</span>
                    <span className="span_valuse">
                      BSc in Physics, National university.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul>
                  <li>
                    <span>Github:</span>
                    <a href="https://github.com/asadjulhas">
                      Github/asadjulhas
                    </a>
                  </li>
                  <li>
                    <span>Linkedin:</span>
                    <a href="https://www.linkedin.com/in/asadjulhas/">
                      Linkedin/asadjulhas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="billing-address-bar bar_two">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h3 className="fs-5">Programming and other skills</h3>
                <ul>
                  <li>
                    <span>Expertise:</span>
                    <span className="span_valuse">
                      JavaScript, ES6, React, React Hook, React Router, Rest
                      API, Firebase, Tailwind, Bootstrap5, HTML5, CSS3
                    </span>
                  </li>
                  <li>
                    <span>Comfortable:</span>
                    <span className="span_valuse">
                      Node's, Express's, PHP, Laravel, WordPress, MongoDB,
                      Mysql, JWT, Material
                    </span>
                  </li>
                  <li>
                    <span>Familiar:</span>
                    <span className="span_valuse">
                      Redux, Vuejs, Nextjs, TypeScript, GraphQL
                    </span>
                  </li>
                  <li>
                    <span>Tools:</span>
                    <span className="span_valuse">
                      Heroku, Netlify, VS Code, Figma, Photoshop, npm, Github,
                      Chrome Dev-tool
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="billing-address-bar">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h3 className="fs-5">
                  Projects #1, Manufacturer E-Commerce Management (MERN Stack)
                </h3>
                <ul>
                  <li>
                    <a
                      className="live_link"
                      href="https://borak-tools.web.app/"
                    >
                      Live Link
                    </a>{" "}
                    |&nbsp;
                    <a
                      className="live_link"
                      href="https://github.com/programming-hero-web-course1/manufacturer-website-client-side-asadjulhas"
                    >
                      Client Side
                    </a>{" "}
                    |&nbsp;
                    <a
                      className="live_link"
                      href="https://github.com/programming-hero-web-course1/manufacturer-website-server-side-asadjulhas"
                    >
                      Server Side
                    </a>
                  </li>
                  <li>
                    <span className="span_valuse project_details">
                      ● Users can signup or log in using email, password, or
                      using social logins like Google, This feature is
                      implemented using <b>firebase authentication</b>. <br />
                      ● Users are able to place a order for the tools, also able to cancel the order before payment.
                      and users are also able to see their own place orders on
                      'dashboard/order' page with order status, But only when the user is logged in as
                      routes are <b>protected</b>.<br />
                      ● Users are able to pay for the services, Payment system
                      integrate using <b>Stripe</b>. <br />
                      ● <b>Control panel </b>implemented for Admin, But only when the Admin is logged in as routes are protected only for Admin.
                      ● Admin able to control both orders, users, and products, Admin can cancel the unpaid orders<br />
                      ● Admin able to change order status <b>pending to shipped</b> for paid orders, users also able see the order status 'shipped' on their order page<br />
                      ● Admin able to add a product <b>with image</b>, update products details including stock update, minium order limit change, and all the others info<br />
                      ● Admin also make an user Admin, Admin specific APIs/route are protected using <b>Jsonwebtoken</b> and Admin role. <br />
                      ● User/Appointment data is stored in MongoD8. APIs are
                      built with NodeS and ExpressJS. Admin/User specific APIs are
                      protected using <b>Jsonwebtoken</b>. <br />
                      ● This single-page web app is completely made with react &
                      its router feature. It's also fully <b>responsive</b> for mobile
                      and tablet devices <br />
                      <span>Technologies Used:</span> ReactJS, React router, React Bootstrap, React-Hook-Form, Firebase, Nodejs, Express.js,
                      MongoDB, Jsonwebtoken, React-firebase-hooks, Stripe, Heroku.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="billing-address-bar bar_two">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h3 className="fs-5">
                  Projects #2, Appointment Booking (MERN Stack)
                </h3>
                <ul>
                  <li>
                    <a
                      className="live_link"
                      href="https://doctor-portal-3890e.web.app/"
                    >
                      Live Link
                    </a>{" "}
                    |&nbsp;
                    <a
                      className="live_link"
                      href="https://github.com/asadjulhas/doctors-portal-client"
                    >
                      Client Side
                    </a>{" "}
                    |&nbsp;
                    <a
                      className="live_link"
                      href="https://github.com/asadjulhas/doctors-portal-server"
                    >
                      Server Side
                    </a>
                  </li>
                  <li>
                    <span className="span_valuse project_details">
                      ● Users can signup or log in using email, password, or
                      using social logins like Google, This feature is
                      implemented using firebase authentication. <br />
                      ● Users can book an appointment for whichever service they
                      choose on a specific date and slot. <br />
                      ● Users are able to pay for the services, Payment system
                      integrate using Stripe. <br />
                      ● Admin able to control both appointments, users, and
                      doctors <br />
                      ● User/Appointment data is stored in MongoD8. APIs are
                      built with NodeS and ExpressJS. User-specific APIs are
                      protected using Jsonwebtoken. <br />
                      ● This single-page web app is completely made with react &
                      its router feature. It's also fully responsive for mobile
                      and tablet devices <br />
                      <span>Technologies Used:</span> ReactJS, React router,
                      Tailwind, React-Hook-Form, Firebase, Nodejs, Express.js,
                      MongoDB, Jsonwebtoken, React-firebase-hooks, Stripe,
                      Heroku.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="billing-address-bar">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h3 className="fs-5">
                  Projects #3, Warehouse Management (MERN Stack)
                </h3>
                <ul>
                  <li>
                    <a className="live_link" href="https://gudam-ghor.web.app/">
                      Live Link
                    </a>{" "}
                    |&nbsp;
                    <a
                      className="live_link"
                      href="https://github.com/asadjulhas/gudam-ghor-warehouse-management-client-side"
                    >
                      Client Side
                    </a>{" "}
                    |&nbsp;
                    <a
                      className="live_link"
                      href="https://github.com/asadjulhas/gudam-ghor-warehouse-management-server-side-"
                    >
                      Server Side
                    </a>
                  </li>
                  <li>
                    <span className="span_valuse project_details">
                      ● Users can signup or log in using email, password, or
                      using social logins like Google, This feature is
                      implemented using firebase authentication. <br />
                      ● Users are able to add/delete/stock-change of products,
                      and users are also able to see their own added products on
                      my item page, But only when the user is logged in as
                      routes are protected. <br />
                      ● User/Product data is stored in MongoD8. APIs are built
                      with NodeS and ExpressJS. User-specific APIs are protected
                      using Jsonwebtoken.
                      <br />
                      <span>Technologies Used:</span> ReactJS, React router,
                      React Bootstrap, React-Hook-Form, Firebase, Nodejs,
                      Express.js, MongoDB, Jsonwebtoken, React-firebase-hooks,
                      Heroku.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="billing-address-bar bar_two mb-5">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h3 className="fs-5">
                Experience, Education, Language
                </h3>
                <ul>
                <li>
                    <span>Experience:</span>
                    <span className="span_valuse">
                    5 years of working experience in the freelancing marketplace as a web developer.
                    </span>
                  </li>
                <li>
                    <span>Education:</span>
                    <span className="span_valuse">
                     B.Sc in Physics at National University in Bangladesh.
                    </span>
                  </li>
                <li>
                    <span>Language:</span>
                    <span className="span_valuse">
                     Bangla - Native, English - Fluent.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
 