export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-primary">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="blob-blur"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="75" />
          </filter>
        </defs>

        {/* Ellipse 1 — large blue, bottom-left */}
        <g transform="translate(-231, 328)">
          <g filter="url(#blob-blur)" className="hero-blob hero-blob--1">
            <path
              d="M679.636 226.168C751.267 375.569 415.136 681.668 133.212 717.887C-147.572 753.959 -330.794 634.353 -330.864 468.668C-330.935 302.983 -82.54 547.649 86.635 320.668C246.135 106.668 627.136 116.668 679.636 226.168Z"
              fill="#1175D5"
            />
          </g>
        </g>

        {/* Ellipse 2 — medium-large blue, top-right */}
        <g transform="translate(961, -382)">
          <g filter="url(#blob-blur)" className="hero-blob hero-blob--2">
            <path
              d="M781 511.132C781.073 676.818 624.237 603.085 510.5 603.132C396.763 603.179 207.5 747.632 150 584.132C150 456.132 161.343 142.632 482.092 150.132C595.829 150.085 780.927 345.447 781 511.132Z"
              fill="#1175D5"
            />
          </g>
        </g>

        {/* Ellipse 3 — medium green */}
        <g transform="translate(-232, -131)">
          <g filter="url(#blob-blur)" className="hero-blob hero-blob--3">
            <path
              d="M666 352.269C628.5 633.769 388.5 517.269 294 396.769C234.006 320.269 150.071 423.455 150 257.769C149.929 92.0839 298.043 166.816 408.499 166.769C518.956 166.722 666 113.769 666 352.269Z"
              fill="#00A878"
            />
          </g>
        </g>

        {/* Ellipse 4 — small green */}
        <g transform="translate(950, 141)">
          <g filter="url(#blob-blur)" className="hero-blob hero-blob--4">
            <path
              d="M360.5 377C314.5 345 160 571 150 394C149.964 310.391 218.533 150.038 306.5 150C394.468 149.963 527.965 214.391 528 298C528.036 381.609 423.299 420.687 360.5 377Z"
              fill="#00A878"
            />
          </g>
        </g>

        {/* Ellipse 5 — small blue */}
        <g transform="translate(462, 298)">
          <g filter="url(#blob-blur)" className="hero-blob hero-blob--5">
            <path
              d="M235.439 360.5C267.439 314.5 41.4387 160 218.439 150C302.048 149.964 462.401 218.533 462.439 306.5C462.476 394.468 398.048 527.964 314.439 528C230.83 528.036 191.752 423.299 235.439 360.5Z"
              fill="#1175D5"
            />
          </g>
        </g>
      </svg>

      {/* Vignette overlay — always on top */}
      <div className="hero-vignette" />
    </div>
  );
}
