import React from 'react';

const Supp = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_297_8602)">
        <path
          d="M2.33398 11C2.33398 5.47715 6.81114 1 12.334 1H40.334C45.8568 1 50.334 5.47715 50.334 11V39C50.334 44.5229 45.8568 49 40.334 49H12.334C6.81114 49 2.33398 44.5228 2.33398 39V11Z"
          fill="white"
        />
        <path
          d="M12.334 1.5H40.334C45.5807 1.5 49.834 5.75329 49.834 11V39C49.834 44.2467 45.5807 48.5 40.334 48.5H12.334C7.08728 48.5 2.83398 44.2467 2.83398 39V11C2.83398 5.7533 7.08728 1.5 12.334 1.5Z"
          stroke="#D5D7DA"
        />
        <path
          d="M36.334 24.0857V25.0057C36.3328 27.1621 35.6345 29.2604 34.3433 30.9875C33.0522 32.7147 31.2373 33.9782 29.1693 34.5896C27.1014 35.201 24.8912 35.1276 22.8685 34.3803C20.8457 33.633 19.1186 32.2518 17.9449 30.4428C16.7713 28.6338 16.2138 26.4938 16.3557 24.342C16.4975 22.1903 17.3312 20.1421 18.7323 18.5028C20.1333 16.8635 22.0268 15.7211 24.1302 15.2459C26.2336 14.7706 28.4343 14.9881 30.404 15.8657M36.334 17L26.334 27.01L23.334 24.01"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_297_8602"
          x="0.333984"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_8602" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_297_8602"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_297_8602" />
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
            result="effect3_innerShadow_297_8602"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_297_8602"
            result="effect3_innerShadow_297_8602"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Supp;
