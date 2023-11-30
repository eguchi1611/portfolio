import { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-slate max-w-xl mx-auto dark:prose-invert">
      {children}
    </div>
  );
}
