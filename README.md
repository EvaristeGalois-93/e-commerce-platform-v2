1. Instructions for Code Compilation:
   
• Frontend: You need to install Angular using the command:

              npm install -g @angular/cli

and start the server using the command:

              ng serve

• Backend: You need to install Composer and the Laratrust library, and start the server using the command:

              php artisan serve

2. Project Description:

This project was developed using Angular as the front-end technology and Laravel as the back-end technology.

The objective was to create an example of an e-commerce application that provides a user-friendly experience. To achieve this, the following features were implemented:

A registration and login page where users can sign up (including as sellers) and log in.
A homepage with a simple design and a navbar for navigating between different components, as well as a carousel displaying the most purchased and most recent products. Additionally, once logged in as a seller, a button appears to redirect to the seller's dashboard[1];
A products page where users can view all available (and unavailable) products, complete with title, description, and price. They can also navigate to the product detail page, filter by name and category, add products to favorites and the cart (these actions are available only for authenticated users). Additionally, pagination is implemented for product listings.
A cart page where users can view the products they have added, adjust quantities, remove items, or proceed to checkout;
A checkout and payment page where users can review the order summary, including applied discounts, enter and save their shipping address, select the payment method (cash or credit card), and complete the payment[2];
An order summary page displaying the details of the purchased products, the shipping address, and the selected payment method.


[1] The dashboard is under development.
[2] Payment has front-end validation but no back-end validation, as it is "mocked."
