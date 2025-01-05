import { cn } from "@/lib/utils/classnames";
import { type PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Tag?: any;
  className?: string;
}>;

export default function Container({
  Tag,
  children,
  className,
}: ContainerProps) {
  const Wrapper = Tag || "main";

  return (
    <Wrapper
      className={cn(
        "max-w-screen-sm h-svh lg:border-x lg:border-gray-100 mx-auto",
        className
      )}
    >
      {children}
    </Wrapper>
  );
}
