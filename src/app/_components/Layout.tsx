import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex max-w-4xl px-4">
      <Sidebar />
      <div className="ml-4 flex-1">{children}</div>
    </div>
  );
}
