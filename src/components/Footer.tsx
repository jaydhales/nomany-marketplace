import { log } from "console";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-white">
        <main className="pt-10 px-5 pb-16 grid grid-cols-5 justify-evenly screen">
          <div className="grid gap-4 col-span-2">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width="173"
                height="54"
              />
            </Link>

            <p>A marketplace for everyone.</p>
          </div>

          {[
            ["About", ["About Us", "Find store", "Categories", "Blogs"]],
            [
              "Information",
              ["Help Center", "Money Refund", "Shipping", "Contact us"],
            ],
            ["For users", ["Login", "Register", "Settings", "My Orders"]],
          ].map(([head, links]) => (
            <div key={head.toString()}>
              <h4 className="font-bold mb-2.5">{head}</h4>
              <nav className="grid gap-0">
                {links
                  .toString()
                  .split(",")
                  .map((link) => (
                    <Link href={link} key={link}>
                      {link}
                    </Link>
                  ))}
              </nav>
            </div>
          ))}
        </main>
      </div>

      <div className="bg-gray-200">
        <div className="p-5 flex justify-between screen">
          <p>&copy; 2023 Nomany. </p>
          <p>English</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
