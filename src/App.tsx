import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      {/* Header - Logo and Social Links */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl p-5">
        <section className="flex flex-col items-center justify-center gap-5 p-5">
          <h2 className="text-project-gray-foreground text-center text-4xl font-bold md:text-6xl">
            Quienes Somos?
          </h2>

          <hr className="border-project-gray w-60 border-2" />

          <p className="text-project-gray-foreground max-w-4xl text-center">
            Imprimarcas es una empresa con proyección nacional especializada en
            el desarrollo de publicidad visual. Contamos con un departamento de
            profesionales orientados a la creación de diseños gráficos de
            primera calidad, desarrollo y creación de Merchandising visual y
            estratégico, a la generación de impresos de calidad fotográfica
            usando tecnología de ultima generción, para lo cual contamos con la
            asesoría de nuestros diversos proveedores de materias primas y una
            amplia experiencia y trayectoria. De igual forma contamos con un
            equipo de trabajo efectivo, capacita- do profesionalmente y
            responsable; seleccionado cuidadosamente para ofrecerle el mejor
            standar de calidad en cada una de las fases o etapas de nuestro
            proceso de producción, diseño e implementación.
          </p>
        </section>
      </main>

      <footer id="footer"></footer>
    </>
  );
}

export default App;
