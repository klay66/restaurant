# Flame & Grill Restaurant

A modern, responsive restaurant website built with React, Vite, and CSS Modules. Features an elegant design with a complete ordering system.

## 🚀 Features

### 🍽️ Menu & Ordering System

- **Interactive Menu**: Browse food items by category (Seafood, Oriental, Meat, All)
- **Add to Cart**: Click "Add to Order" to add items to your cart with instant notifications
- **Cart Management**: View, update quantities, and remove items from your cart
- **Order Confirmation**: Complete orders with customer information (phone & address)
- **Persistent Cart**: Cart data is saved in localStorage

### 🎨 Modern Design

- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Elegant UI**: Modern gradients, smooth animations, and professional styling
- **Dark Theme**: Sophisticated dark color scheme with red accents
- **Smooth Transitions**: Hover effects and animated notifications

### 📱 User Experience

- **Toast Notifications**: Real-time feedback when adding/removing items
- **Form Validation**: Phone number and address validation for orders
- **Loading States**: Optimized images and lazy loading
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Icons**: React Icons (FontAwesome)
- **Routing**: React Router
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Footer/
│   ├── Navbar/
│   ├── Notification/
│   ├── OrderConfirmation/
│   └── ...
├── context/
│   ├── CartContext.jsx    # Cart state management
│   └── useCart.jsx        # Cart hook
├── pages/
│   ├── Menu.jsx           # Menu with categories
│   ├── Cart.jsx           # Shopping cart
│   └── ...
├── data/
│   └── menuItems.js       # Menu data
└── assets/
    └── optimized/         # Optimized images
```

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5174`

## 📋 Usage

### Adding Items to Cart

1. Go to the Menu page
2. Browse items by category
3. Click "Add to Order" on any item
4. See instant notification confirming addition

### Managing Cart

1. Click "My Order" in the navbar (shows item count)
2. View all items in your cart
3. Adjust quantities or remove items
4. Click "Confirm Order" to proceed

### Completing Order

1. Fill in your phone number and delivery address
2. Add any special notes (optional)
3. Click "Confirm Order" to submit

## 🎯 Key Components

### CartContext

Manages cart state with:

- Add/remove items
- Update quantities
- Calculate totals
- Persistent storage
- Notification system

### OrderConfirmation Modal

- Order summary with totals
- Customer information form
- Phone/address validation
- Order submission

### Notification System

- Toast-style notifications
- Auto-dismiss after 3 seconds
- Success/error/info types

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🔧 Customization

### Adding Menu Items

Edit `src/data/menuItems.js` to add new food items.

### Styling Changes

Modify CSS Modules in each component's folder for custom styling.

### Adding Categories

Update the `categories` array in `Menu.jsx` and add corresponding items.

## 📞 Support

For questions or issues, please check the code comments or create an issue in the repository.

---

**Built with ❤️ for food lovers**
