import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const navItemsUpper = [
    { icon: "home", href: "/", label: "Home", active: true },
    { icon: "search", href: "/search", label: "Search" },
    { icon: "file", href: "/documents", label: "Documents" },
    { icon: "dollar", href: "/payments", label: "Payments" },
    { icon: "scan", href: "/users", label: "Users", largeIcon: true },
  ];
  const navItemsLower = [
    { icon: "diamond", href: "/premium", label: "Premium" },
    { icon: "info", href: "/help", label: "Help" },
    { icon: "bell-02", href: "/bell", label: "Bell" },
    { icon: "profile", href: "/profile", label: "Profile", largeIcon: true },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-[#0B3434] flex flex-col items-center py-4 overflow-y-auto">
      {/* Logo */}
      <Link href="/" className="mb-8">
        <img src="/icons/logo-icon.svg" alt="Logo" className="rounded-full " />
      </Link>

      {/* Navigation */}
      <nav className="flex-1 w-full">
        <ul className="flex flex-col items-center gap-1">
          {navItemsUpper.map((item) => (
            <li key={item.label} className="w-full">
              <Link
                href={item.href}
                className={`flex justify-center p-3 text-gray-400 hover:text-white transition-colors ${
                  item.active ? "text-white bg-[#0F4141]" : ""
                }`}
              >
                <img
                  className={`w-5 h-5 ${item.largeIcon ? "w-7 h-7" : ""}`}
                  src={`/icons/${item.icon}.svg`}
                  alt={item.label}
                />
                <span className="sr-only">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Icons */}
      <div className="mt-auto flex flex-col items-center gap-4">
        <ul className="flex flex-col items-center gap-4">
          {navItemsLower.map((item) => (
            <li key={item.label} className="w-full">
              <Link
                href={item.href}
                className={`flex justify-center p-1 text-gray-400 hover:text-white transition-colors ${
                  item.active ? "text-white bg-[#0F4141]" : ""
                }`}
              >
                <img
                  className={`w-5 h-5 ${item.largeIcon ? "w-7 h-7" : ""}`}
                  src={`/icons/${item.icon}.svg`}
                  alt={item.label}
                />
                <span className="sr-only">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
