// Client-review marker for copy taken verbatim from the live site.
// Hidden in production; set NEXT_PUBLIC_CONTENT_FLAGS=1 to show the markers again during review.
export default function Flag({ children = "Content review required" }: { children?: React.ReactNode }) {
  if (process.env.NEXT_PUBLIC_CONTENT_FLAGS !== "1") return null;
  return <span className="flag">{children}</span>;
}
