import { useEffect, useMemo, useState } from "react";
import heroImage from "../assets/hero.png";
import Button from "./Button";

function Hero() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobile = useMemo(() => screenWidth < 768, [screenWidth]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative -mt-20 h-screen w-full overflow-hidden md:-mt-24">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* shadow effect over background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

      {/* main container */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full max-w-3xl">
          {/* frosted glass effect */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-12 shadow-2xl backdrop-blur-2xl">
            {/* content */}
            <div className="space-y-8 text-center">
              <h1 className="text-3xl leading-tight font-bold text-white md:text-5xl">
                Soluciones Publicitarias Personalizadas
              </h1>

              {/* buttons */}
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  onClick={() =>
                    document
                      .getElementById("footer")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  size={isMobile ? "md" : "lg"}
                  color="gray"
                  className="text-base md:text-lg"
                >
                  Contacto
                </Button>
                <Button
                  // push to catalog pdf
                  onClick={() => {}}
                  size={isMobile ? "md" : "lg"}
                  color="red"
                  className="text-base md:text-lg"
                >
                  Ver Catalogo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
