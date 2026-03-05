# TechStore Web

A modern and responsive e-commerce simulation for tech products, built with cutting-edge web technologies. This project aims to demonstrate a functional online store experience, focusing on clean architecture, efficient state management, and a smooth user interface.

## Features

*   **Product Catalog:** Browse a variety of tech products with detailed listings.
*   **Shopping Cart:** Add, remove, and manage items in your shopping cart.
*   **Category Navigation:** Easily filter products by category.
*   **Dynamic Hero Slider:** Engaging homepage slider showcasing featured products or promotions.
*   **Responsive Design:** Optimized for seamless viewing across various devices (desktop, tablet, mobile).
*   **Centralized State Management:** Efficient handling of global application state using React Context.
*   **Performance Optimizations:** Utilizes `React.memo` for efficient component rendering.

## Tech Stack

*   **Frontend Framework:** [React.js](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router DOM](https://reactrouter.com/en/main)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Iconography:** [Lucide React](https://lucide.dev/)

## Project Structure

The project follows a clear and modular structure to enhance maintainability and scalability:

```
src/
├── App.jsx             # Main application component, sets up context providers and routing outlet
├── main.jsx            # Entry point of the React application
├── index.css           # Global CSS styles (likely Tailwind base, components, and utilities)
├── components/         # Reusable UI components
│   ├── Cart.jsx        # Shopping cart drawer/modal
│   ├── Categories.jsx  # Component for displaying product categories
│   ├── Footer.jsx      # Application footer
│   ├── HeroSlider.jsx  # Automatic image slider for the homepage
│   ├── Navbar.jsx      # Navigation bar with cart and menu controls
│   └── ProductCard.jsx # Individual product display card
├── contexts/           # React Context API for global state management
│   └── CartContext.jsx # Manages shopping cart state and logic
├── data/               # Mock data for products and categories
│   └── mockData.js     # Static product and category data (simulating an API)
├── pages/              # Top-level page components
│   ├── HomePage.jsx    # The main landing page
│   └── ProductPage.jsx # Page for displaying individual product details (or product listings)
└── router/             # Application routing configuration
    └── index.jsx       # Defines the application's routes
```

## Screenshot

Here's a glimpse of the TechStore Web application:

![TechStore Web Screenshot](public/tech-store.png)

## Author

Developed by **Javier Garin**.