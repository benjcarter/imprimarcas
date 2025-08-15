import { cn } from "../lib/utils";
import heroImage from "../assets/hero.jpeg";

interface SectionProps {
  imageOrientation: "left" | "right" | "none";
  title: string;
  content: React.ReactNode;
  titleColor: "red" | "gray";
}

function Section({
  title,
  content,
  titleColor,
  imageOrientation
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-5 py-5 md:py-10 lg:flex-row"
      )}
    >
      {/* Image */}
      {imageOrientation !== "none" && (
        <div
          className={cn("order-1 flex-1 lg:-order-1", {
            "order-1!": imageOrientation === "right"
          })}
        >
          <img src={heroImage} className="object-contain" />
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-center gap-5 p-5">
        <h2
          className={cn(
            "text-center text-4xl font-bold tracking-tight md:text-6xl",
            titleColor === "red"
              ? "text-project-red"
              : "text-project-gray-foreground"
          )}
        >
          {title}
        </h2>

        <hr className="border-project-gray-foreground w-60 border-2" />

        <p className="text-project-gray-foreground max-w-4xl text-center whitespace-pre-line">
          {content}
        </p>
      </div>
    </section>
  );
}

export default Section;
