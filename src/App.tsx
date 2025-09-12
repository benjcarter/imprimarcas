import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import missionImage from "./assets/mission.jpg";
import visionImage from "./assets/vision.jpg";
import valuesImage from "./assets/values.jpg";

function App() {
  return (
    <>
      {/* Header - Logo and Social Links */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl p-5">
        {/* Who Are We Section */}
        <Section
          imageOrientation="none"
          title="Quienes Somos?"
          content={
            <>
              Imprimarcas es una empresa con proyección nacional especializada
              en el desarrollo de publicidad visual. Contamos con un
              departamento de profesionales orientados a la creación de
              Merchandising visual y estratégico, a la generación de impresos de
              calidad fotográfica usando tecnología de ultima generción, para lo
              cual contamos con la asesoría de nuestros diversos proveedores de
              materias primas y una amplia experiencia y trayectoria.
              <br />
              <br />
              De igual forma contamos con un equipo de trabajo efectivo,
              capacitado profesionalmente y responsable; seleccionado
              cuidadosamente para ofrecerle el mejor standar de calidad en cada
              una de las fases o etapas de nuestro proceso de producción, diseño
              e implementación.
            </>
          }
          titleColor="red"
        />

        {/* Mission Section */}
        <Section
          imageOrientation="left"
          image={missionImage}
          imageAlt="Impresión directa en cualquier material"
          title="Misión"
          content={
            <>
              Brindar productos y servicios publicitarios personalizados, con
              calidad en el servicio ofreciendo soluciones a la medida de las
              necesidades particulares de cada cliente, mismas que permitan
              mejorar el posicionamiento de su marca en un mercado cada vez más
              exigente.
              <br />
              <br />
              Ser la organización preferida en la prestación de productos y
              servicios publicitarios personalizados, para satisfacer las
              necesidades de nuestros clientes, a través del compromiso
              apasionado con la calidad, la atención personalizada, el buen
              servicio, la innovación, la eficiencia y con la responsabilidad en
              tiempos de entrega.\nRespectar en el proceso a cada uno de
              nuestros colaboradores, medio ambiente y a la sociedad.
            </>
          }
          titleColor="gray"
        />

        {/* Vision Section */}
        <Section
          imageOrientation="right"
          image={visionImage}
          imageAlt="Vallas publicitarias de productos"
          title="Visión"
          content={
            <>
              Ser opción preferida en soluciones publicitarias personalizadas,
              entregando productos de satisfagan los más exigentes y rigurosos
              requerimientos de calidad en tiempos inmejorables sin sacrificar
              la calidad del mismo.
              <br />
              <br />
              Desarrollar una organización rentable ágil y eficiente que asegure
              el desarrollo humano y el logro de los objectivos y valores de la
              chosa vinculación recíproca con nuestros clientes y colaboradores.
            </>
          }
          titleColor="red"
        />

        {/* Values Section */}
        <Section
          imageOrientation="left"
          image={valuesImage}
          imageAlt="Persona instalando una valla publicitaria"
          title="Valores"
          content={
            <>
              <strong className="text-project-gray">Calidad</strong>: en cada
              uno de nuestros trabajos
              <br />
              <strong className="text-project-gray">Responsabilidad</strong>:
              estamos comprometidos con lo ofrecido
              <br />
              <strong className="text-project-gray">Identidad</strong>: hacemos
              nuestras sus prioridades
              <br />
              <strong className="text-project-gray">Honestidad</strong>: No
              apoyamos ni fomentamos ningún tipo de negicio ilícito
              <br />
              <strong className="text-project-gray">Justicia</strong>: hacia
              nuestros colaboradores y clientes
              <br />
              <strong className="text-project-gray">Creatividad</strong>:
              desarrollamos alternativas personalizadas
              <br />
              <strong className="text-project-gray">Innovación</strong>: vamos
              de la mano con los constantes cambios
              <br />
              <strong className="text-project-gray">Puntualidad</strong>:
              entregar los productos y servicios con eficacia
              <br />
              <strong className="text-project-gray">Eficiencia</strong>: hacemos
              las cosas bien
              <br />
              <strong className="text-project-gray">Comunicación</strong>:
              mantenemos constante comunicación con clientes y colaboradores
              <br />
              <strong className="text-project-gray">Lealtad</strong>: realmente
              valoramos las relaciones y las cuidamos
              <br />
              <strong className="text-project-gray">Respeto</strong>:
              reconocemos los límites.
              <br />
              <strong className="text-project-gray">Confianza</strong>: Nuestros
              clientes pueden tener seguridad de que somos dignos de recibirla
              <br />
              <strong className="text-project-gray">Compromiso</strong>: con
              Dios, nuestros clientes, colaboradores, sociedad y medio ambiente.
            </>
          }
          titleColor="gray"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
