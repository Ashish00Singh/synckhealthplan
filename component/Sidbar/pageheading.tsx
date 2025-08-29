"use client";

import { usePathname } from "next/navigation";

const PageHeading = () => {
  const pathname = usePathname();

  const headings: Record<string, string> = {
    "/": "Dashboard",
    "/plans": "Health Plans",
    "/profile": "User Profile",
    "/settings": "Settings",
  };

  return <h3 className="text-white font-semibold text-xl leading-44 " >{headings[pathname] ?? "Synck Health"}</h3>;
};

export default PageHeading;
