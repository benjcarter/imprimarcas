import heroImage from "../assets/hero.jpeg";
import Button from "./Button";

function Hero() {
  const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const openCatalog = () => {
    window.open(
      "/CATALOGO_Imprimarcas_2025_v02.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative -mt-20 h-screen w-full overflow-hidden md:-mt-24">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* main container */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full max-w-3xl">
          {/* frosted glass effect */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-12 shadow-2xl backdrop-blur-2xl">
            {/* content */}
            <div className="space-y-8 text-center">
              <h1 className="text-3xl leading-tight font-bold text-white md:text-6xl">
                Soluciones Publicitarias Personalizadas
              </h1>

              {/* buttons */}
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  onClick={scrollToContact}
                  color="gray"
                  className="text-base md:text-lg"
                >
                  Contacto
                </Button>
                <Button
                  // push to catalog pdf
                  onClick={openCatalog}
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
