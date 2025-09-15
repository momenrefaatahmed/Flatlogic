import React, { useState, useEffect } from "react";

import { WishlistContext } from "./WishlistContext";


export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    // نجيب البيانات من localStorage أول ما يفتح
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // ✅ إضافة منتج للـ Wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // لو المنتج موجود، منضيفوش تاني
      if (prevWishlist.find((item) => item.id === product.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };

  // ✅ إزالة منتج من الـ Wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  // كل ما wishlist يتغير، نخزن نسخة منه في localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
