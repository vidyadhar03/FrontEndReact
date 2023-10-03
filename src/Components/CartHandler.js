import { db, auth } from "./Firebase";
import { ref, update, get } from "firebase/database";

export async function addToCart(productId, quantity) {
  try {
    const user = auth.currentUser;

    if (user) {
      // User is authenticated, update the cart data in the database
      const userId = user.uid;
      const userRef = ref(db, `Users/${userId}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const cartObjects = userData.cart_objects || [];
        const existingItemIndex = cartObjects.findIndex(
          (item) => item.prodId === productId
        );

        if (existingItemIndex !== -1) {
          cartObjects[existingItemIndex].count += quantity;
        } else {
          const newItem = {
            prodId: productId,
            count: quantity,
          };
          cartObjects.push(newItem);
        }

        await update(userRef, { cart_objects: cartObjects });
        console.log("Item added/updated in the cart.");
      } else {
        console.log("User not found.");
      }
    } else {
      // User is not authenticated, handle local storage
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItemIndex = storedCart.findIndex(
        (item) => item.prodId === productId
      );

      if (existingItemIndex !== -1) {
        storedCart[existingItemIndex].count += quantity;
      } else {
        const newItem = {
          prodId: productId,
          count: quantity,
        };
        storedCart.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(storedCart));
      console.log("Item added/updated in local cart.");
    }
  } catch (error) {
    console.error("Error adding/updating item in the cart:", error);
  }
}
