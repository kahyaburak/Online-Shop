# Online Shop Website Project

Welcome to my Online Shop Website project! This is a Node.js based web application utilizing Express, EJS, and MongoDB. Below you'll find all the necessary information to get started with the project. This project is currently only configured and will be able to work on local environments.

## Features

Her are some features of this project.

- **User Authentication:** Users can sign up and log in with different user types.
- **Shopping Cart Functionality:** Regular users can add items to their cart, edit their quantities, and purchase items securely using Stripe.
- **Order Management:** By purchasing users turn their carts into orders, and admin users can view and edit orders such as "Completed! or Pending...".
- **Product Management:** Admin users have the capability to edit existing products, add new or delete products, and view orders.
- **Session Management:** Sessions are used to store cart and user information securely.
- **MVC Pattern:** The project follows the Model-View-Controller architectural pattern for structured development.
- **Responsive Design:** Compatible with various devices including wide screens, mobile phones, and tablets.
- **Route Protections:** Basic users are restricted from accessing administrative pages to ensure security.
- **Error Handling:** Every key part of this project has a backup plan incase there are oopsies!

## Technologies Used

Here are some of the main tools concepts and technologies I used

- **Node.js**: A JavaScript runtime environment.
- **Express**: A web application framework for Node.js.
- **EJS (Embedded JavaScript)**: A simple templating language that generates HTML markup.
- **MVC Pattern**: Followed for structured development.
- **MongoDB**: A NoSQL database for storing data.
- **Stripe API**: Used for secure payment processing.
- **Sessions**: Utilized for managing user and cart information.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Turtineer/Online-Shop.git
```

2. Install dependencies:

```
git install
```

3. Set up environment:

```
You need to have MongoDB up and running.
Have a database named "online-shop".
```

4. Edit the keys:

```
Stripe key in  orders.controller.js
```

5. Environment Variables:

```
This projest is designed to run locally and you would need to make implements accordingly.
```
