import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="section-shell flex min-h-[calc(100vh-2rem)] items-center py-10">
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </main>
  );
}
