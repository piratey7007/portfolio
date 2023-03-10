import { SVGAttributes } from "react";

export default function Menu({
  className,
  ...props
}: SVGAttributes<SVGSVGElement>) {
  return (
    <div className={className + " overflow-hidden"}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          "relative right-0 w-20 cursor-pointer duration-300 hover:rotate-90 hover:scale-105"
        }
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M250 395C330.081 395 395 330.081 395 250C395 169.919 330.081 105 250 105C169.919 105 105 169.919 105 250C105 330.081 169.919 395 250 395ZM250 320C288.66 320 320 288.66 320 250C320 211.34 288.66 180 250 180C211.34 180 180 211.34 180 250C180 288.66 211.34 320 250 320Z"
          fill="#8E8E8E"
        />
        <g filter="url(#filter0_d_20_92)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M250 320C288.66 320 320 288.66 320 250C320 211.34 288.66 180 250 180C211.34 180 180 211.34 180 250C180 288.66 211.34 320 250 320ZM250 295C274.853 295 295 274.853 295 250C295 225.147 274.853 205 250 205C225.147 205 205 225.147 205 250C205 274.853 225.147 295 250 295Z"
            fill="#9F9F9F"
          />
        </g>
        <g filter="url(#filter1_d_20_92)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M231.134 50C224.854 50 219.637 54.8408 219.167 61.1025L217.517 83.0998C209.698 84.6127 202.07 86.6615 194.672 89.2065L182.253 70.9936C178.716 65.8057 171.777 64.2221 166.339 67.3618L133.661 86.2281C128.223 89.3677 126.125 96.1687 128.849 101.826L138.432 121.729C132.487 126.904 126.904 132.487 121.729 138.432L101.826 128.849C96.1687 126.125 89.3676 128.223 86.228 133.661L67.3617 166.339C64.2221 171.777 65.8056 178.716 70.9936 182.253L89.2065 194.672C86.6615 202.07 84.6127 209.698 83.0998 217.518L61.1025 219.167C54.8408 219.637 50 224.854 50 231.134L50 268.866C50 275.146 54.8408 280.363 61.1025 280.833L83.0998 282.482C84.6127 290.302 86.6615 297.93 89.2065 305.328L70.9935 317.747C65.8056 321.284 64.2221 328.223 67.3617 333.661L86.228 366.339C89.3676 371.777 96.1686 373.875 101.826 371.151L121.729 361.568C126.904 367.513 132.487 373.095 138.432 378.271L128.849 398.174C126.125 403.831 128.223 410.632 133.661 413.772L166.339 432.638C171.777 435.778 178.715 434.194 182.253 429.006L194.672 410.793C202.07 413.338 209.698 415.387 217.517 416.9L219.167 438.897C219.637 445.159 224.854 450 231.134 450H268.866C275.146 450 280.363 445.159 280.833 438.897L282.482 416.9C290.302 415.387 297.93 413.338 305.328 410.794L317.747 429.006C321.284 434.194 328.223 435.778 333.661 432.638L366.339 413.772C371.777 410.632 373.875 403.831 371.151 398.174L361.568 378.271C367.513 373.096 373.096 367.513 378.271 361.568L398.174 371.151C403.831 373.875 410.632 371.777 413.772 366.339L432.638 333.661C435.778 328.223 434.194 321.284 429.006 317.747L410.794 305.328C413.338 297.93 415.387 290.302 416.9 282.482L438.897 280.833C445.159 280.363 450 275.146 450 268.866V231.134C450 224.854 445.159 219.637 438.897 219.167L416.9 217.518C415.387 209.698 413.338 202.07 410.794 194.672L429.006 182.253C434.194 178.716 435.778 171.777 432.638 166.339L413.772 133.661C410.632 128.223 403.831 126.125 398.174 128.849L378.271 138.432C373.096 132.487 367.513 126.904 361.568 121.729L371.151 101.826C373.875 96.1687 371.777 89.3677 366.339 86.2281L333.661 67.3618C328.223 64.2221 321.284 65.8057 317.747 70.9936L305.328 89.2064C297.93 86.6615 290.302 84.6127 282.482 83.0998L280.833 61.1025C280.363 54.8408 275.146 50 268.866 50H231.134ZM250 395C330.081 395 395 330.081 395 250C395 169.919 330.081 105 250 105C169.919 105 105 169.919 105 250C105 330.081 169.919 395 250 395Z"
            fill="#9F9F9F"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_20_92"
            x="169"
            y="173"
            width="170"
            height="170"
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
            <feOffset dx="4" dy="8" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_20_92"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_20_92"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_20_92"
            x="39"
            y="43"
            width="430"
            height="430"
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
            <feOffset dx="4" dy="8" />
            <feGaussianBlur stdDeviation="7.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_20_92"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_20_92"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
