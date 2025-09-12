import logo from "../assets/logo.jpeg";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        {/* Logo */}
        <img
          src={logo}
          alt="Imprimarcas"
          className="w-50 object-contain md:w-64"
        />

        {/* Social Links */}
        <ul className="flex items-center gap-1 md:gap-3">
          <li className="ease-out md:transition-transform md:duration-300 md:hover:scale-115">
            <SocialIcon
              url="https://www.facebook.com/Imprimarcas"
              target="_blank"
              bgColor="transparent"
              fgColor="#6d6e70"
              className="size-10! md:size-14!"
            />
          </li>
          <li className="ease-out md:transition-transform md:duration-300 md:hover:scale-115">
            <SocialIcon
              url="https://www.instagram.com/imprimarcashn"
              target="_blank"
              bgColor="transparent"
              fgColor="#6d6e70"
              className="size-10! md:size-14!"
            />
          </li>
          <li className="ease-out md:transition-transform md:duration-300 md:hover:scale-115">
            <SocialIcon
              url="#footer"
              network="mailto"
              bgColor="transparent"
              fgColor="#6d6e70"
              className="size-10! md:size-14!"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
