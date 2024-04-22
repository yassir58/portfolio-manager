import { cn } from "~/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#677489] dark:bg-[#4d5766]", className)}
      {...props}
    />
  )
}

export { Skeleton }
