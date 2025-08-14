import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const variants = cva(
  "rounded-full text-white font-bold transition-transform md:hover:scale-105 duration-300 ease-out",
  {
    variants: {
      color: {
        red: "bg-project-red",
        gray: "bg-project-gray"
      },
      size: {
        sm: "py-2 px-5 text-sm",
        md: "px-8 py-3",
        lg: "px-11 py-4 text-lg"
      }
    },
    defaultVariants: {
      color: "gray",
      size: "md"
    }
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof variants>;

function Button({ color, size, children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(variants({ color, size }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
