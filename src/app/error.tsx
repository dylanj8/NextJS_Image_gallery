"use client";

import { Button } from "react-bootstrap";

interface errorPageProps {
  error: Error;
  reset: () => void;
}

export default function errorPage({ error, reset }: errorPageProps) {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong!</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
