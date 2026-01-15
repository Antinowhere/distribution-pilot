export function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Layer 1 - Large squares */}
      <div className="floating-shape s1" style={{ left: '3%', width: 40, height: 40 }} />
      <div className="floating-shape s2" style={{ left: '12%', width: 32, height: 32 }} />
      <div className="floating-shape s3" style={{ left: '22%', width: 36, height: 36 }} />
      <div className="floating-shape s4" style={{ left: '32%', width: 28, height: 28 }} />
      <div className="floating-shape s5" style={{ left: '42%', width: 44, height: 44 }} />
      <div className="floating-shape s6" style={{ left: '52%', width: 30, height: 30 }} />
      <div className="floating-shape s7" style={{ left: '62%', width: 38, height: 38 }} />
      <div className="floating-shape s8" style={{ left: '72%', width: 34, height: 34 }} />
      <div className="floating-shape s9" style={{ left: '82%', width: 26, height: 26 }} />
      <div className="floating-shape s10" style={{ left: '92%', width: 42, height: 42 }} />
      {/* Layer 2 - Medium squares */}
      <div className="floating-shape s2" style={{ left: '8%', width: 24, height: 24 }} />
      <div className="floating-shape s4" style={{ left: '18%', width: 20, height: 20 }} />
      <div className="floating-shape s6" style={{ left: '28%', width: 22, height: 22 }} />
      <div className="floating-shape s8" style={{ left: '38%', width: 18, height: 18 }} />
      <div className="floating-shape s10" style={{ left: '48%', width: 26, height: 26 }} />
      <div className="floating-shape s1" style={{ left: '58%', width: 20, height: 20 }} />
      <div className="floating-shape s3" style={{ left: '68%', width: 24, height: 24 }} />
      <div className="floating-shape s5" style={{ left: '78%', width: 22, height: 22 }} />
      <div className="floating-shape s7" style={{ left: '88%', width: 18, height: 18 }} />
      <div className="floating-shape s9" style={{ left: '98%', width: 28, height: 28 }} />
      {/* Layer 3 - Small squares, more subtle */}
      <div className="floating-shape s3" style={{ left: '5%', width: 14, height: 14, opacity: 0.6 }} />
      <div className="floating-shape s5" style={{ left: '15%', width: 12, height: 12, opacity: 0.5 }} />
      <div className="floating-shape s7" style={{ left: '25%', width: 16, height: 16, opacity: 0.6 }} />
      <div className="floating-shape s9" style={{ left: '35%', width: 10, height: 10, opacity: 0.5 }} />
      <div className="floating-shape s1" style={{ left: '45%', width: 14, height: 14, opacity: 0.6 }} />
      <div className="floating-shape s3" style={{ left: '55%', width: 12, height: 12, opacity: 0.5 }} />
      <div className="floating-shape s5" style={{ left: '65%', width: 16, height: 16, opacity: 0.6 }} />
      <div className="floating-shape s7" style={{ left: '75%', width: 10, height: 10, opacity: 0.5 }} />
      <div className="floating-shape s9" style={{ left: '85%', width: 14, height: 14, opacity: 0.6 }} />
      <div className="floating-shape s1" style={{ left: '95%', width: 12, height: 12, opacity: 0.5 }} />
    </div>
  )
}
