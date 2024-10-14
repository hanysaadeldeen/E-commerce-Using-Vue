# Vue.js E-commerce Website

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Pages](#pages)


## Project Overview

This project is designed to replicate the functionality and design of a 3-page e-commerce website using Vue.js and TypeScript. It includes a cart system, product listing, detailed product page, and responsiveness based on a provided Figma design.

## Features

- **Responsive Design**: Implemented based on a Figma design.
- **Pagination**: Products are loaded in a paginated format with a "View More" button.
- **Cart System**: Add, remove, increment, and decrement items in the cart.
- **API Integration**: Products and categories are fetched from the Fake Store API.
- **Pinia State Management**: Used for managing cart counter and cart items.

## Technologies Used

- **Vue.js**: Framework for building the website structure.
- **TypeScript**: Enhances code readability and provides type safety.
- **Bootstrap**: Used for styling and responsiveness.
- **Pinia**: State management for cart functionality.
- **Fetch API**: Used to fetch data from the Fake Store API.

## Pages

### Home Page
- Displays a list of products fetched from the Fake Store API with pagination.
- Features an “Add to Cart” button for each product.
- Browse My Dress Style" section that displays categories fetched from the API.

### Single Product Page
- Displays detailed information about a selected product.
- Includes an “Add to Cart” button.

### Cart Page
- Displays all items added to the cart.
- Allows users to increment, decrement, or remove items from the cart.
- Cart updates are synced with the Fake Store API and local storage.

## Setup Instructions
1. **Clone the repository:**
    ```bash
    git clone https://github.com/hanysaadeldeen/E-commerce-Using-Vue.git
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```
