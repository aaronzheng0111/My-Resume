export default function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid bg-grid-fade absolute inset-0" />

      {/* Layer 1: Primary warm orange — center-top, subtle breathing */}
      <div
        className="glow-layer glow-layer--warm glow-breathe absolute left-1/2 top-[-10%] h-[80vh] w-[80vh] -translate-x-1/2"
        style={{ filter: 'blur(100px)' }}
      />

      {/* Layer 2: Secondary warm — upper-mid, brighter center */}
      <div
        className="glow-layer absolute left-1/2 top-[25%] h-[50vh] w-[50vh] -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(217,119,87,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Layer 3: Cool accent — right edge, mid-page */}
      <div
        className="glow-layer glow-layer--cool absolute right-[-15%] top-[40%] h-[50vh] w-[50vh]"
        style={{ filter: 'blur(120px)' }}
      />

      {/* Layer 4: Warm-soft — bottom-left */}
      <div
        className="glow-layer absolute bottom-[5%] left-[-10%] h-[60vh] w-[40vh]"
        style={{
          background: 'radial-gradient(circle, rgba(224,150,124,0.06) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
    </div>
  )
}
