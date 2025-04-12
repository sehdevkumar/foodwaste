import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const router = new Router();

// Define API routes
router.get("/api/hello", (ctx) => {
  ctx.response.body = {
    message: "Hello from Deno backend!",
    timestamp: new Date().toISOString(),
  };
});

// Example food waste tracking API endpoint
router.get("/api/food-items", (ctx) => {
  // This would normally come from a database
  ctx.response.body = {
    items: [
      { id: 1, name: "Apples", quantity: "2kg", expiryDate: "2025-04-19", status: "Good" },
      { id: 2, name: "Milk", quantity: "1L", expiryDate: "2025-04-14", status: "Expiring Soon" },
      { id: 3, name: "Bread", quantity: "1 loaf", expiryDate: "2025-04-15", status: "Expiring Soon" }
    ]
  };
});

export default router;