Borak tools [Live link](https://borak-tools.web.app/).
Github [Server side](https://github.com/asadjulhas/Manufacturer-E-Commerce-Management/).

## Short description about this website


* Users can signup or log in using email, password, or using social logins like Google, This feature is implemented using firebase authentication.
* Users are able to place a order for the tools, also able to cancel the order before payment. and users are also able to see their own place orders on 'dashboard/order' page with order status, But only when the user is logged in as routes are protected.
* Users are able to pay for the services, Payment system integrate using Stripe.
* Control panel implemented for Admin, But only when the Admin is logged in as routes are protected only for Admin. ● Admin able to control both orders, users, and products, Admin can cancel the unpaid orders
* Admin able to change order status pending to shipped for paid orders, users also able see the order status 'shipped' on their order page
* Admin able to add a product with image, update products details including stock update, minium order limit change, and all the others info
* Admin also make an user Admin, Admin specific APIs/route are protected using Jsonwebtoken and Admin role.
* User/Appointment data is stored in MongoD8. APIs are built with NodeS and ExpressJS. Admin/User specific APIs are protected using Jsonwebtoken.
* This single-page web app is completely made with react & its router feature. It's also fully responsive for mobile and tablet devices
* Technologies Used: ReactJS, React router, React Bootstrap, React-Hook-Form, Firebase, Nodejs, Express.js, MongoDB, Jsonwebtoken, React-firebase-hooks, Stripe, Heroku.
