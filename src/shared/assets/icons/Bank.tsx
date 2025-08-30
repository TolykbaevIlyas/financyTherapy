import type { IconProps } from './types';

const Bank = ({ width = '48' }: IconProps) => {
  return (
    <svg
      width={width}
      height="48"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_297_8664)">
        <path
          d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
          fill="white"
        />
        <path
          d="M12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.7533 48.5 2.5 44.2467 2.5 39V11C2.5 5.7533 6.75329 1.5 12 1.5Z"
          stroke="#D5D7DA"
        />
        <path
          d="M19 22V30M23.5 22V30M28.5 22V30M33 22V30M17 31.6L17 32.4C17 32.9601 17 33.2401 17.109 33.454C17.2049 33.6422 17.3578 33.7952 17.546 33.891C17.7599 34 18.0399 34 18.6 34H33.4C33.9601 34 34.2401 34 34.454 33.891C34.6422 33.7952 34.7951 33.6422 34.891 33.454C35 33.2401 35 32.9601 35 32.4V31.6C35 31.04 35 30.7599 34.891 30.546C34.7951 30.3579 34.6422 30.2049 34.454 30.109C34.2401 30 33.9601 30 33.4 30H18.6C18.0399 30 17.7599 30 17.546 30.109C17.3578 30.2049 17.2049 30.3579 17.109 30.546C17 30.7599 17 31.04 17 31.6ZM25.6529 16.0772L18.2529 17.7216C17.8059 17.8209 17.5823 17.8706 17.4155 17.9908C17.2683 18.0969 17.1527 18.2409 17.0811 18.4076C17 18.5965 17 18.8255 17 19.2835L17 20.4C17 20.9601 17 21.2401 17.109 21.454C17.2049 21.6422 17.3578 21.7952 17.546 21.891C17.7599 22 18.0399 22 18.6 22H33.4C33.9601 22 34.2401 22 34.454 21.891C34.6422 21.7952 34.7951 21.6422 34.891 21.454C35 21.2401 35 20.9601 35 20.4V19.2835C35 18.8255 35 18.5965 34.9188 18.4076C34.8473 18.2409 34.7317 18.0969 34.5845 17.9908C34.4177 17.8706 34.1942 17.8209 33.7471 17.7216L26.3471 16.0772C26.2176 16.0484 26.1528 16.034 26.0874 16.0282C26.0292 16.0231 25.9708 16.0231 25.9126 16.0282C25.8472 16.034 25.7824 16.0484 25.6529 16.0772Z"
          stroke="#414651"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_297_8664"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_297_8664" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_297_8664"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_297_8664" />
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
            result="effect3_innerShadow_297_8664"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_297_8664"
            result="effect3_innerShadow_297_8664"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Bank;
