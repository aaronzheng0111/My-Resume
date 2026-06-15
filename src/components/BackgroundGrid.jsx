export default function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      {/* a single, very quiet warm glow for depth */}
      <div className="absolute left-1/2 top-[-12%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-orange/[0.04] blur-3xl" />
    </div>
  )
}
