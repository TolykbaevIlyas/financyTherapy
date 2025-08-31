
const MFO = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_297_8670)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.7533 48.5 2.5 44.2467 2.5 39V11C2.5 5.7533 6.75329 1.5 12 1.5Z"
          stroke="#D5D7DA"
        />
        <path
          d="M20 24V28M32 22V26M31 17C33.4487 17 34.7731 17.3748 35.4321 17.6654C35.5199 17.7042 35.5638 17.7235 35.6904 17.8444C35.7663 17.9168 35.9049 18.1294 35.9405 18.2281C36 18.3927 36 18.4827 36 18.6627V29.4111C36 30.3199 36 30.7743 35.8637 31.0079C35.7251 31.2454 35.5914 31.3559 35.3319 31.4472C35.0769 31.5369 34.562 31.438 33.5322 31.2401C32.8114 31.1017 31.9565 31 31 31C28 31 25 33 21 33C18.5513 33 17.2269 32.6252 16.5679 32.3346C16.4801 32.2958 16.4362 32.2765 16.3096 32.1556C16.2337 32.0832 16.0951 31.8706 16.0595 31.7719C16 31.6073 16 31.5173 16 31.3373L16 20.5889C16 19.6801 16 19.2257 16.1363 18.9921C16.2749 18.7546 16.4086 18.6441 16.6681 18.5528C16.9231 18.4631 17.438 18.562 18.4678 18.7598C19.1886 18.8983 20.0435 19 21 19C24 19 27 17 31 17ZM28.5 25C28.5 26.3807 27.3807 27.5 26 27.5C24.6193 27.5 23.5 26.3807 23.5 25C23.5 23.6193 24.6193 22.5 26 22.5C27.3807 22.5 28.5 23.6193 28.5 25Z"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_297_8670"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_8670" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_297_8670"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_297_8670" />
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
            result="effect3_innerShadow_297_8670"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_297_8670"
            result="effect3_innerShadow_297_8670"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default MFO;
