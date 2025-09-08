"use client";

import { usePathname } from "next/navigation";

const PageHeading = () => {
  const pathname = usePathname();

  const headings: Record<string, string> = {
    "/": "Dashboard",
    "/plans": "Health Plans",
    "/profile": "User Profile",
    "/settings": "Settings",
    "/primeDistributor":"Prime Distributor",
    "/channelPartner":"Channel Partner",
  };

  return <h3 className="text-white text-xl leading-44 " >{headings[pathname] ?? "Synck Health"}</h3>;
};

export default PageHeading;
