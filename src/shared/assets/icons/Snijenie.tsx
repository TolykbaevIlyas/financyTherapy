
const Snijenie = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_297_8588)">
        <path
          d="M2.66699 11C2.66699 5.47715 7.14414 1 12.667 1H40.667C46.1898 1 50.667 5.47715 50.667 11V39C50.667 44.5229 46.1898 49 40.667 49H12.667C7.14414 49 2.66699 44.5228 2.66699 39V11Z"
          fill="white"
        />
        <path
          d="M12.667 1.5H40.667C45.9137 1.5 50.167 5.75329 50.167 11V39C50.167 44.2467 45.9137 48.5 40.667 48.5H12.667C7.42029 48.5 3.16699 44.2467 3.16699 39V11C3.16699 5.7533 7.42029 1.5 12.667 1.5Z"
          stroke="#D5D7DA"
        />
        <path
          d="M36.667 30L28.7984 22.1314C28.4023 21.7354 28.2043 21.5373 27.976 21.4632C27.7752 21.3979 27.5588 21.3979 27.358 21.4632C27.1296 21.5373 26.9316 21.7354 26.5356 22.1314L23.7984 24.8686C23.4023 25.2646 23.2043 25.4627 22.976 25.5368C22.7752 25.6021 22.5588 25.6021 22.358 25.5368C22.1296 25.4627 21.9316 25.2646 21.5356 24.8686L16.667 20M36.667 30H29.667M36.667 30V23"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_297_8588"
          x="0.666992"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_8588" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_297_8588"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_297_8588" />
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
            result="effect3_innerShadow_297_8588"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_297_8588"
            result="effect3_innerShadow_297_8588"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Snijenie;
