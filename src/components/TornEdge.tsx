export default function TornEdge({
  flip = false,
  className = "",
}: {
  flip?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none h-96 max-w-[99.60vw] overflow-hidden ${className} ${flip ? "rotate-180" : ""}`}
      style={{
        backgroundImage: "url('/torn-edge.png')",
        
        backgroundSize: "auto 100%",
        filter: "drop-shadow(0px 3px 2px rgba(0,0,0,0.10))",
      }}
    />
  );
}