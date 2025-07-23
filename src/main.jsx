import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const queryClient = new QueryClient();
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
