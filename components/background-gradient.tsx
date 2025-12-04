export function BackgroundGradient({ className }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full min-h-[400px] overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 0%, #3b82f6 0%, transparent 50%),
          radial-gradient(ellipse 60% 80% at 0% 50%, #3730a3 0%, transparent 50%),
          radial-gradient(ellipse 50% 60% at 10% 70%, #6366f1 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 80% 20%, #bfdbfe 0%, transparent 40%),
          radial-gradient(ellipse 60% 80% at 90% 60%, #2563eb 0%, transparent 50%),
          radial-gradient(ellipse 70% 70% at 60% 40%, #88d3ce 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 40% 30%, #2563eb 0%, transparent 40%),
          radial-gradient(ellipse 80% 80% at 50% 80%, #818cf8 0%, transparent 50%),
          linear-gradient(135deg, #60a5fa 0%, #2563eb 50%, #1e40af 100%)
        `,
      }}
    />
  );
}
