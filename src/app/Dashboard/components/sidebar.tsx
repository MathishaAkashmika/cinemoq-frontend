"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Movies", path: "/Dashboard/Movies", icon: "fa-solid fa-film" },
    { name: "Accounts", path: "/Dashboard/Accounts", icon: "fa-solid fa-user" },
    { name: "Tickets", path: "/Dashboard/Tickets", icon: "fa-solid fa-ticket" },
    {
      name: "Genres & Categories",
      path: "/Dashboard/Genres",
      icon: "fa-solid fa-layer-group",
    },
    {
      name: "Reviews",
      path: "/Dashboard/Reviews",
      icon: "fa-solid fa-comments",
    },
    {
      name: "Careers",
      path: "/Dashboard/Careers",
      icon: "fa-solid fa-briefcase",
    },
    {
      name: "Announcements",
      path: "/Dashboard/Announcements",
      icon: "fa-solid fa-bullhorn",
    },
  ];

  return (
    <div className="w-64 bg-purple-900 h-screen p-4 shadow-lg flex flex-col">
      <h2 className="text-3xl font-bold mb-8 text-center">CINEMOQ</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
                  pathname === item.path
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
