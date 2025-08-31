const Dolg = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_297_8554)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.7533 48.5 2.5 44.2467 2.5 39V11C2.5 5.7533 6.75329 1.5 12 1.5Z"
          stroke="#D5D7DA"
        />
        <path
          d="M36 23H16M16 21.2L16 28.8C16 29.9201 16 30.4802 16.218 30.908C16.4097 31.2843 16.7157 31.5903 17.092 31.782C17.5198 32 18.0799 32 19.2 32L32.8 32C33.9201 32 34.4802 32 34.908 31.782C35.2843 31.5903 35.5903 31.2843 35.782 30.908C36 30.4802 36 29.9201 36 28.8V21.2C36 20.0799 36 19.5198 35.782 19.092C35.5903 18.7157 35.2843 18.4097 34.908 18.218C34.4802 18 33.9201 18 32.8 18L19.2 18C18.0799 18 17.5198 18 17.092 18.218C16.7157 18.4097 16.4097 18.7157 16.218 19.092C16 19.5198 16 20.0799 16 21.2Z"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_297_8554"
          x="0"
          y="0"
          width="52"
          height="52"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_8554" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_297_8554"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_297_8554" />
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
            result="effect3_innerShadow_297_8554"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_297_8554"
            result="effect3_innerShadow_297_8554"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Dolg;
