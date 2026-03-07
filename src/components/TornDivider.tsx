interface TornDividerProps {
  topColor: string;
  bottomColor: string;
}

export default function TornDivider({
  topColor,
  bottomColor,
}: TornDividerProps) {
  return (
    <div
      className="relative h-10 overflow-hidden"
      style={{ backgroundColor: bottomColor }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: topColor,
          clipPath:
            "polygon(0 0,2% 100%,4% 0,6% 100%,8% 0,10% 100%,12% 0,14% 100%,16% 0,18% 100%,20% 0,22% 100%,24% 0,26% 100%,28% 0,30% 100%,32% 0,34% 100%,36% 0,38% 100%,40% 0,42% 100%,44% 0,46% 100%,48% 0,50% 100%,52% 0,54% 100%,56% 0,58% 100%,60% 0,62% 100%,64% 0,66% 100%,68% 0,70% 100%,72% 0,74% 100%,76% 0,78% 100%,80% 0,82% 100%,84% 0,86% 100%,88% 0,90% 100%,92% 0,94% 100%,96% 0,98% 100%,100% 0)",
        }}
      />
    </div>
  );
}