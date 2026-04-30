import { ImageResponse } from "next/og";

function IconMarkup({ size, maskable = false }) {
  const safeInset = maskable ? Math.round(size * 0.18) : Math.round(size * 0.12);
  const cardWidth = size - safeInset * 2;
  const cardHeight = Math.round(cardWidth * 1.06);
  const paperInsetX = Math.round(cardWidth * 0.16);
  const paperInsetTop = Math.round(cardHeight * 0.14);
  const rowGap = Math.round(cardHeight * 0.16);
  const dotSize = Math.max(12, Math.round(cardWidth * 0.06));
  const lineWidth = Math.round(cardWidth * 0.43);
  const lineHeight = Math.max(8, Math.round(cardHeight * 0.035));

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 22% 18%, rgba(251, 191, 36, 0.34), transparent 32%), linear-gradient(145deg, #111827 0%, #1f2937 48%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: Math.round(size * 0.08),
          borderRadius: Math.round(size * 0.24),
          border: `${Math.max(2, Math.round(size * 0.01))}px solid rgba(255, 255, 255, 0.08)`,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)"
        }}
      />

      <div
        style={{
          position: "absolute",
          top: Math.round(size * 0.12),
          left: Math.round(size * 0.16),
          width: Math.round(size * 0.26),
          height: Math.round(size * 0.26),
          borderRadius: "999px",
          background: "rgba(251, 113, 133, 0.18)",
          filter: "blur(20px)"
        }}
      />

      <div
        style={{
          position: "absolute",
          right: Math.round(size * 0.1),
          bottom: Math.round(size * 0.1),
          width: Math.round(size * 0.34),
          height: Math.round(size * 0.34),
          borderRadius: "999px",
          background: "rgba(16, 185, 129, 0.18)",
          filter: "blur(24px)"
        }}
      />

      <div
        style={{
          display: "flex",
          width: cardWidth,
          height: cardHeight,
          borderRadius: Math.round(size * 0.2),
          background: "linear-gradient(180deg, #fffaf0 0%, #f4ecdf 100%)",
          border: `${Math.max(2, Math.round(size * 0.01))}px solid rgba(255, 255, 255, 0.56)`,
          boxShadow:
            "0 24px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.7)",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: Math.round(size * 0.08),
            left: Math.round(size * 0.1),
            width: Math.round(size * 0.18),
            height: Math.round(size * 0.055),
            borderRadius: "999px",
            background: "#1f2937"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: `${paperInsetTop}px ${paperInsetX}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
        >
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: item === 0 ? 0 : rowGap
              }}
            >
              <div
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: "999px",
                  background: item === 0 ? "#10b981" : "#cbd5e1",
                  marginRight: Math.round(cardWidth * 0.08)
                }}
              />
              <div
                style={{
                  width: lineWidth,
                  height: lineHeight,
                  borderRadius: "999px",
                  background: item === 0 ? "#334155" : "#94a3b8"
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            right: Math.round(cardWidth * 0.1),
            bottom: Math.round(cardHeight * 0.1),
            width: Math.round(cardWidth * 0.34),
            height: Math.round(cardWidth * 0.34),
            borderRadius: "999px",
            background: "linear-gradient(180deg, #34d399 0%, #059669 100%)",
            boxShadow: "0 14px 30px rgba(5, 150, 105, 0.26)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              width: Math.round(cardWidth * 0.16),
              height: Math.round(cardWidth * 0.12),
              transform: "rotate(-45deg) translateY(-2%)"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: Math.max(8, Math.round(cardWidth * 0.04)),
                height: Math.round(cardWidth * 0.08),
                borderRadius: "999px",
                background: "#f8fafc"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: Math.round(cardWidth * 0.16),
                height: Math.max(8, Math.round(cardWidth * 0.04)),
                borderRadius: "999px",
                background: "#f8fafc"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function createIconResponse(size, options = {}) {
  return new ImageResponse(<IconMarkup size={size} maskable={options.maskable} />, {
    width: size,
    height: size
  });
}
