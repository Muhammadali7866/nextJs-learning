"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>{error.message}-none</p>
      <button onClick={reset}>TRY AGAIN</button>
    </div>
  );
}
