import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const variants = cva(
  "rounded-full text-white font-bold transition-transform md:hover:scale-105 duration-300 ease-out px-8 py-3 md:px-11 md:py-4 md:text-lg text-base",
  {
    variants: {
      color: {
        red: "bg-project-red",
        gray: "bg-project-gray"
      }
    },
    defaultVariants: {
      color: "gray"
    }
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof variants>;

function Button({ color, children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(variants({ color }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
