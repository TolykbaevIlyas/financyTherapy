
const Poisk = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_2012_1117)">
        <path
          d="M2 11.333C2 5.81016 6.47715 1.33301 12 1.33301H40C45.5229 1.33301 50 5.81016 50 11.333V39.333C50 44.8559 45.5228 49.333 40 49.333H12C6.47715 49.333 2 44.8559 2 39.333V11.333Z"
          fill="white"
        />
        <path
          d="M12 1.83301H40C45.2467 1.83301 49.5 6.0863 49.5 11.333V39.333C49.5 44.5797 45.2467 48.833 40 48.833H12C6.7533 48.833 2.5 44.5797 2.5 39.333V11.333C2.5 6.0863 6.75329 1.83301 12 1.83301Z"
          stroke="#D5D7DA"
        />
        <path
          d="M34 23.833V20.133C34 18.4529 34 17.6128 33.673 16.971C33.3854 16.4066 32.9265 15.9476 32.362 15.66C31.7202 15.333 30.8802 15.333 29.2 15.333H22.8C21.1198 15.333 20.2798 15.333 19.638 15.66C19.0735 15.9476 18.6146 16.4066 18.327 16.971C18 17.6128 18 18.4529 18 20.133V30.533C18 32.2132 18 33.0532 18.327 33.695C18.6146 34.2595 19.0735 34.7184 19.638 35.006C20.2798 35.333 21.1198 35.333 22.8 35.333H25.5M36 35.333L34.5 33.833M35.5 31.333C35.5 33.266 33.933 34.833 32 34.833C30.067 34.833 28.5 33.266 28.5 31.333C28.5 29.4 30.067 27.833 32 27.833C33.933 27.833 35.5 29.4 35.5 31.333Z"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_2012_1117"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2012_1117" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2012_1117"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2012_1117" />
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
            result="effect3_innerShadow_2012_1117"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_2012_1117"
            result="effect3_innerShadow_2012_1117"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Poisk;
