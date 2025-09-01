"use client";

import { useState, useEffect } from "react";

export default function MobileDialog() {
  const [isMobile, setIsMobile] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // User agent detection for mobile devices
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );

      // Also check for touch capability and screen size as backup
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;

      const mobile = isMobileDevice || (hasTouchScreen && isSmallScreen);
      setIsMobile(mobile);

      if (mobile) {
        // Check if dialog has already been shown in this session
        const hasSeenDialog = sessionStorage.getItem('mobileDialogShown');
        if (!hasSeenDialog) {
          setShowDialog(true);
          // Mark as shown for this session
          sessionStorage.setItem('mobileDialogShown', 'true');
        }
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!showDialog || !isMobile) return null;

  return (
    <div className="mobile-dialog-overlay">
      <div className="mobile-dialog">
        <div className="mobile-dialog-header">
          <h2>⚠️ MOBILE DETECTED ⚠️</h2>
          <button
            className="mobile-dialog-close"
            onClick={() => setShowDialog(false)}
          >
            ✕
          </button>
        </div>

        <div className="mobile-dialog-content">
          <div className="mobile-dialog-icon">🖥️</div>
          <h3>RETRO THEME ALERT</h3>
          <p>
            This portfolio features a{" "}
            <span className="highlight">90s retro theme</span>
            with CRT effects and classic styling that's optimized for desktop
            viewing.
          </p>
          <p>
            For the <span className="highlight">best experience</span>, we
            recommend opening this site on a desktop computer.
          </p>
          <div className="mobile-dialog-features">
            <div className="feature-item">
              <span className="feature-icon">🎮</span>
              <span>Full CRT scanline effects</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌈</span>
              <span>Neon color animations</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Optimal performance</span>
            </div>
          </div>
        </div>

        <div className="mobile-dialog-footer">
          <button
            className="mobile-dialog-button primary"
            onClick={() => setShowDialog(false)}
          >
            CONTINUE ON MOBILE
          </button>
          <button
            className="mobile-dialog-button secondary"
            onClick={() => {
              // Try to open in new tab/window
              window.open(window.location.href, "_blank");
              setShowDialog(false);
            }}
          >
            OPEN ON DESKTOP
          </button>
        </div>
      </div>
    </div>
  );
}
