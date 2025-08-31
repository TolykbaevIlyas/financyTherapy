

const Plan = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_2026_130)">
        <path
          d="M2.5 9.79999C2.5 5.38171 6.08172 1.79999 10.5 1.79999H34.5C38.9183 1.79999 42.5 5.38171 42.5 9.79999V33.8C42.5 38.2183 38.9183 41.8 34.5 41.8H10.5C6.08172 41.8 2.5 38.2183 2.5 33.8V9.79999Z"
          fill="white"
        />
        <path
          d="M10.5 2.29999H34.5C38.6421 2.29999 42 5.65785 42 9.79999V33.8C42 37.9421 38.6421 41.3 34.5 41.3H10.5C6.35786 41.3 3 37.9421 3 33.8V9.79999C3 5.65785 6.35786 2.29999 10.5 2.29999Z"
          stroke="#D5D7DA"
        />
        <path
          d="M29.1673 22.2167V17.4667C29.1673 16.0665 29.1673 15.3665 28.8948 14.8317C28.6552 14.3613 28.2727 13.9788 27.8023 13.7392C27.2675 13.4667 26.5674 13.4667 25.1673 13.4667H19.834C18.4339 13.4667 17.7338 13.4667 17.199 13.7392C16.7286 13.9788 16.3462 14.3613 16.1065 14.8317C15.834 15.3665 15.834 16.0665 15.834 17.4667V26.1333C15.834 27.5335 15.834 28.2335 16.1065 28.7683C16.3462 29.2387 16.7286 29.6212 17.199 29.8609C17.7338 30.1333 18.4339 30.1333 19.834 30.1333H22.5007M24.1673 20.9667H19.1673M20.834 24.3H19.1673M25.834 17.6333H19.1673M24.584 27.6333L26.2507 29.3L30.0007 25.55"
          stroke="#414651"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_2026_130"
          x="0.5"
          y="0.799988"
          width="44"
          height="44.0001"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2026_130" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2026_130"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2026_130" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect3_innerShadow_2026_130"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_2026_130"
            result="effect3_innerShadow_2026_130"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Plan;
