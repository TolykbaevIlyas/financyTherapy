
const Procent = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_2012_1213)">
        <path
          d="M2 11.333C2 5.81016 6.47715 1.33301 12 1.33301H40C45.5229 1.33301 50 5.81016 50 11.333V39.333C50 44.8559 45.5228 49.333 40 49.333H12C6.47715 49.333 2 44.8559 2 39.333V11.333Z"
          fill="white"
        />
        <path
          d="M12 1.83301H40C45.2467 1.83301 49.5 6.0863 49.5 11.333V39.333C49.5 44.5797 45.2467 48.833 40 48.833H12C6.7533 48.833 2.5 44.5797 2.5 39.333V11.333C2.5 6.0863 6.75329 1.83301 12 1.83301Z"
          stroke="#D5D7DA"
        />
        <path
          d="M33 18.333L19 32.333M23 20.333C23 21.4376 22.1046 22.333 21 22.333C19.8954 22.333 19 21.4376 19 20.333C19 19.2284 19.8954 18.333 21 18.333C22.1046 18.333 23 19.2284 23 20.333ZM33 30.333C33 31.4376 32.1046 32.333 31 32.333C29.8954 32.333 29 31.4376 29 30.333C29 29.2284 29.8954 28.333 31 28.333C32.1046 28.333 33 29.2284 33 30.333Z"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_2012_1213"
          x="0"
          y="0.333008"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2012_1213" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2012_1213"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2012_1213" />
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
            result="effect3_innerShadow_2012_1213"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_2012_1213"
            result="effect3_innerShadow_2012_1213"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Procent;
