import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer id="footer" className="bg-project-gray h-60 text-white">
      <div className="mx-auto flex h-full max-w-7xl flex-col p-5">
        {/* contact section */}
        <div className="flex-1 space-y-2">
          <h4 className="text-3xl font-bold">Contacto</h4>
          <p className="flex items-center text-lg font-bold">
            <SocialIcon
              url="mailto:publi@imprimarcas.com"
              network="mailto"
              bgColor="transparent"
              fgColor="#ffffff"
              className="size-16!"
            />
            <span>publi@imprimarcas.com</span>
          </p>
        </div>

        {/* bottom */}
        <div className="mt-auto flex items-center justify-between">
          {/* copyright statement */}
          <p>
            &copy; 2025 Imprimarcas S. de R.L. Todos los derechos reservados.
          </p>

          {/* social icons */}
          <ul className="flex items-center gap-1 md:gap-3">
            <li className="ease-out md:transition-transform md:duration-300 md:hover:scale-115">
              <SocialIcon
                url="https://www.facebook.com/Imprimarcas"
                target="_blank"
                bgColor="transparent"
                fgColor="#ffffff"
                className="size-10! md:size-14!"
              />
            </li>
            <li className="ease-out md:transition-transform md:duration-300 md:hover:scale-115">
              <SocialIcon
                url="https://www.instagram.com/imprimarcashn"
                target="_blank"
                bgColor="transparent"
                fgColor="#ffffff"
                className="size-10! md:size-14!"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
