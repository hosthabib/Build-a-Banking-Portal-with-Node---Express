# Banking Portal

## Project Overview

This project is a simple banking portal application built with Node.js and Express. It provides basic banking functionalities, allowing users to view their account summary, check account details, and perform transfers between accounts. The application uses the EJS templating engine to render dynamic views and Node's built-in `fs` module to handle data storage by reading from and writing to a JSON file. This project is intended to demonstrate a modular application structure using Express Router.

## Features

*   **Account Summary:** View a summary of all accounts.
*   **Profile:** View user profile information.
*   **Account Details:** View detailed information for savings, checking, and credit accounts.
*   **Transfers:** Transfer funds between savings and checking accounts.
*   **Payments:** Make payments to the credit card account.

## Routes

The application exposes the following routes:

| Method | Path                  | Description                               |
|--------|-----------------------|-------------------------------------------|
| GET    | `/`                   | Displays the account summary page.        |
| GET    | `/profile`            | Displays the user profile page.           |
| GET    | `/account/savings`    | Displays the savings account details.     |
| GET    | `/account/checking`   | Displays the checking account details.    |
| GET    | `/account/credit`     | Displays the credit account details.      |
| GET    | `/services/transfer`  | Displays the fund transfer page.          |
| POST   | `/services/transfer`  | Handles the transfer of funds.            |
| GET    | `/services/payment`   | Displays the payment page.                |
| POST   | `/services/payment`   | Handles a payment to the credit card.     |

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pluralsight-projects/NodeExpress-BankingPortal.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd NodeExpress-BankingPortal
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the server:**
    ```bash
    npm start
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

*   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express:** A fast, unopinionated, minimalist web framework for Node.js.
*   **EJS:** A simple templating language that lets you generate HTML markup with plain JavaScript.