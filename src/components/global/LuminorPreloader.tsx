"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const LuminorPreloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Ensure animations start immediately
    document.documentElement.style.setProperty(
      "--animation-play-state",
      "running"
    );

    // Animation timing
    const animationDuration = 2200; // Reduced total duration
    const finalPauseBeforeHide = 800; // Final pause before hiding
    const initialDelay = 16; // Small initial delay for faster appearance

    // Make content visible after a very short delay
    const showContentTimer = setTimeout(() => {
      setContentVisible(true);
    }, initialDelay);

    // Start the final animation phase
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);

      // Hide preloader after final animation and pause
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, finalPauseBeforeHide);

      return () => clearTimeout(hideTimer);
    }, animationDuration);

    return () => {
      clearTimeout(showContentTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div
        className={cn(
          "logo-animation-container transition-all duration-500 ease-out",
          animationComplete && "scale-105 opacity-0"
        )}
      >
        <div className="flex flex-col items-center justify-center">
          {/* Content only rendered when contentVisible is true */}
          {contentVisible && (
            <>
              {/* Luminor Logo SVG */}
              <div className="luminor-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="140.14 64.84 221.76 360.34"
                  className="luminor-svg"
                >
                  <path
                    d="M231.310593,396.679901 C238.065964,402.144257 244.112625,408.128601 251.208618,412.348541 C257.946167,416.355316 265.781860,418.515533 272.987335,421.991180 C260.119629,425.263763 247.352722,426.587311 234.528442,423.205200 C224.813324,420.643036 214.841614,418.612274 205.581116,414.868317 C190.620453,408.819885 178.415924,398.846222 167.697449,386.555817 C156.498535,373.714508 148.763794,359.096497 144.370743,343.120789 C139.883133,326.801178 138.928482,309.992493 141.669006,292.787964 C145.072067,271.424194 152.507599,251.683228 163.085938,233.267685 C173.569290,215.017502 185.746475,197.736694 197.265503,180.086029 C210.552856,159.725739 225.583725,140.319138 235.159378,117.855621 C239.425522,107.847664 241.021286,96.561348 242.804581,85.687241 C243.884903,79.099724 243.003571,72.190514 243.003571,65.425827 C243.489609,65.231010 243.975647,65.036186 244.461685,64.841362 C246.595337,68.427063 248.834930,71.954544 250.843796,75.608833 C258.358551,89.278748 266.509766,102.661781 273.028625,116.795204 C277.804657,127.150070 281.650696,138.279007 283.722839,149.468216 C288.984528,177.880203 279.635895,203.396454 265.113983,227.219208 C252.631638,247.696106 239.090820,267.528534 226.642944,288.025421 C218.586411,301.291504 213.109558,315.715149 210.922363,331.299988 C208.345886,349.658813 211.285080,366.849304 221.015701,382.669525 C223.981445,387.491272 227.691315,391.855316 231.310593,396.679901 z"
                    className="luminor-path gold-path"
                    fill="none"
                    stroke="#B8860B"
                    strokeWidth="2"
                  />
                  <path
                    d="M228.200134,349.433746 C227.046921,335.881165 229.694382,323.207123 234.172699,311.103424 C237.259888,302.759552 241.743622,294.827057 246.382034,287.183289 C257.861847,268.265350 270.184174,249.851608 281.409088,230.788376 C290.104645,216.020706 295.879883,199.924240 298.902191,182.967468 C299.294769,180.764832 298.955994,178.431854 298.955994,174.750320 C301.451385,176.610855 303.379852,177.405273 304.315948,178.844940 C315.128448,195.474167 326.192688,211.961594 336.339783,228.993256 C342.283051,238.968979 347.607788,249.525635 351.548340,260.422150 C355.460724,271.240601 357.559326,282.756256 359.923065,294.076843 C361.188477,300.137024 362.082733,306.457458 361.860077,312.613983 C360.893311,339.342865 352.675629,363.518585 335.957611,384.753082 C327.175812,395.907318 315.958405,403.992767 304.052979,411.022217 C300.430847,413.160919 294.437256,412.880310 290.010681,411.777405 C272.713623,407.467834 256.864410,400.159027 244.801849,386.362213 C237.108994,377.563324 231.884140,367.555969 229.963272,355.921021 C229.624542,353.869293 228.899475,351.881317 228.200134,349.433746 z"
                    className="luminor-path navy-path"
                    fill="none"
                    stroke="#2A3154"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Text "LUMINOR" */}
              <div className="luminor-text mt-4">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2A3154]">
                  LUMINOR
                </span>
              </div>

              {/* Tagline */}
              <div className="luminor-tagline flex flex-col items-center text-center">
                <div className="text-sm md:text-xl font-medium text-[#B8860B]">
                  Nettoyage de Vitres Premium
                </div>
                <div className="text-sm md:text-xl font-medium text-[#B8860B]">
                  Premium Window Cleaning
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .luminor-logo-container {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeIn 0.4s cubic-bezier(0.2, 0.6, 0.35, 1) forwards 0.05s;
          animation-play-state: var(--animation-play-state, running);
        }

        .luminor-svg {
          width: 150px;
          height: 180px;
        }

        .luminor-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawPath 1.8s ease-in-out forwards;
          animation-play-state: var(--animation-play-state, running);
        }

        .gold-path {
          animation: drawPath 1.8s ease-in-out forwards 0.1s,
            fillGold 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards 1.5s;
        }

        .navy-path {
          animation: drawPath 1.8s ease-in-out forwards 0.3s,
            fillNavy 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards 1.7s;
        }

        /* Modified text animations to start when SVG drawing begins */
        .luminor-text {
          opacity: 0;
          transform: translateY(10px);
          /* Start text animation when SVG paths begin drawing */
          animation: fadeIn 1.2s cubic-bezier(0.2, 0.6, 0.35, 1) forwards 0.1s;
          animation-play-state: var(--animation-play-state, running);
        }

        .luminor-tagline {
          opacity: 0;
          transform: translateY(10px);
          /* Start tagline animation shortly after the text animation */
          animation: fadeIn 1.2s cubic-bezier(0.2, 0.6, 0.35, 1) forwards 0.3s;
          animation-play-state: var(--animation-play-state, running);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawPath {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fillGold {
          0% {
            fill: #b8860b;
            fill-opacity: 0;
          }
          100% {
            fill: #b8860b;
            fill-opacity: 1;
          }
        }

        @keyframes fillNavy {
          0% {
            fill: #2a3154;
            fill-opacity: 0;
          }
          100% {
            fill: #2a3154;
            fill-opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LuminorPreloader;
