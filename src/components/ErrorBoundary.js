import React from "react";
import "./ErrorBoundary.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="errorBoundary">
      <p>Something Went Wrong !!!</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
