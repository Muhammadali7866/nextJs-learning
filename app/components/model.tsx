// "use client";
// import React, {
//   useCallback,
//   useRef,
//   useEffect,
//   MouseEventHandler,
// } from "react";
// import { useRouter } from "next/router";

// export default function Model({ children }: { children: React.ReactNode }) {
//   const overlay = useRef(null);
//   const wrapper = useRef(null);
//   const router = useRouter();
//   const onDismiss = useCallback(() => {
//     router.back();
//   }, [router]);

//   const onClick: MouseEventHandler = useCallback(
//     (e) => {
//       if (e.target === overlay.current || e.target === wrapper.current) {
//         if (onDismiss) onDismiss();
//       }
//     },
//     [onDismiss, overlay, wrapper]
//   );
// }

// "use client";
// import React, {
//   useCallback,
//   useRef,
//   useEffect,
//   MouseEventHandler,
// } from "react";
// import { useRouter } from "next/router";
// import "../styles/globals.css";

// export default function Model({ children }: { children: React.ReactNode }) {
//   const overlay = useRef(null);
//   const wrapper = useRef(null);
//   const router = useRouter();

//   const onDismiss = useCallback(() => {
//     router.back();
//   }, [router]);

//   const onClick: MouseEventHandler<HTMLDivElement> = useCallback(
//     (e) => {
//       if (e.target === overlay.current || e.target === wrapper.current) {
//         onDismiss();
//       }
//     },
//     [onDismiss]
//   );

//   return (
//     <div
//       ref={overlay}
//       onClick={onClick}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//     >
//       <div ref={wrapper} className="bg-white p-4 rounded-md shadow-lg">
//         {children}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useCallback, useRef, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import "../styles/globals.css";

export default function Model({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  return (
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div ref={wrapper} className="bg-white p-4 rounded-md shadow-lg">
        {children}
      </div>
    </div>
  );
}
