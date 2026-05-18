import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { NoService } from "./components/site/NoService";
import "./styles.css";

const SITE_STATUS_ENDPOINT = "https://admin.litwebs.co.uk/api/websites/status";
const SITE_URL_TO_CHECK = "https://whiteglovecourier.com";

const router = getRouter();

function App() {
  const [checking, setChecking] = useState(true);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setChecking(false);
      return;
    }

    let mounted = true;

    const checkStatus = async () => {
      try {
        const res = await fetch(SITE_STATUS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: SITE_URL_TO_CHECK }),
        });
        if (!res.ok) return true; // fail open — show site if endpoint unreachable
        const json = await res.json();
        const status = json?.data?.data?.status ?? json?.data?.status ?? json?.status;
        return String(status).toLowerCase() === "live";
      } catch {
        return true; // fail open
      }
    };

    (async () => {
      const live = await checkStatus();
      if (!mounted) return;
      setIsLive(live);
      setChecking(false);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (checking) return null;
  if (!isLive) return <NoService />;

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
