"use client";
//now error in the base and they still get error of theri childs
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
