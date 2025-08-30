import React from 'react';

const Situation = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dii_2026_122)">
        <path
          d="M2.5 9.79999C2.5 5.38171 6.08172 1.79999 10.5 1.79999H34.5C38.9183 1.79999 42.5 5.38171 42.5 9.79999V33.8C42.5 38.2183 38.9183 41.8 34.5 41.8H10.5C6.08172 41.8 2.5 38.2183 2.5 33.8V9.79999Z"
          fill="white"
        />
        <path
          d="M10.5 2.29999H34.5C38.6421 2.29999 42 5.65785 42 9.79999V33.8C42 37.9421 38.6421 41.3 34.5 41.3H10.5C6.35786 41.3 3 37.9421 3 33.8V9.79999C3 5.65785 6.35786 2.29999 10.5 2.29999Z"
          stroke="#D5D7DA"
        />
        <path
          d="M30.1747 25.0416C29.6445 26.2954 28.8153 27.4001 27.7596 28.2594C26.7038 29.1186 25.4537 29.7062 24.1184 29.9706C22.7831 30.2351 21.4034 30.1684 20.0998 29.7765C18.7962 29.3845 17.6085 28.6792 16.6405 27.7222C15.6725 26.7652 14.9537 25.5856 14.5469 24.2866C14.1401 22.9876 14.0577 21.6087 14.3068 20.2705C14.556 18.9323 15.1293 17.6755 15.9764 16.61C16.8235 15.5445 17.9188 14.7027 19.1664 14.1583M30.1987 18.6109C30.5323 19.4163 30.7369 20.2678 30.8064 21.134C30.8235 21.348 30.8321 21.455 30.7896 21.5514C30.7541 21.6319 30.6838 21.7081 30.6064 21.7499C30.5137 21.8 30.3979 21.8 30.1664 21.8H23.1664C22.933 21.8 22.8163 21.8 22.7272 21.7546C22.6488 21.7146 22.585 21.6509 22.5451 21.5725C22.4997 21.4833 22.4997 21.3667 22.4997 21.1333V14.1333C22.4997 13.9017 22.4997 13.786 22.5497 13.6933C22.5916 13.6159 22.6678 13.5455 22.7483 13.51C22.8447 13.4675 22.9517 13.4761 23.1657 13.4933C24.0319 13.5627 24.8833 13.7674 25.6887 14.101C26.6998 14.5198 27.6184 15.1336 28.3922 15.9074C29.1661 16.6812 29.7799 17.5999 30.1987 18.6109Z"
          stroke="#414651"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_2026_122"
          x="0.5"
          y="0.799988"
          width="44"
          height="44"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2026_122" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2026_122"
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
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2026_122" />
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
            result="effect3_innerShadow_2026_122"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_2026_122"
            result="effect3_innerShadow_2026_122"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Situation;
