// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const loadingScreenTemplate = `
    <div
        id="initialPageLoadingScreen"
        class="LoadingScreen LoadingScreen--darkMode"
    >
        <div class="LoadingScreen__background">
            <svg
                viewBox="0 0 1366 728"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <g style="transform: translate(676px, -200px)">
                    <g style="transform-origin: 450px 267.5px; transform: rotate(45deg)">
                        <use href="#pill" />
                    </g>
                </g>
                <g style="transform: translate(125px, 0px)">
                    <g
                        style="
                transform-origin: 450px 267.5px;
                transform: rotate(-135deg);
              "
                    >
                        <use href="#pill" />
                    </g>
                </g>
                <g style="transform: translate(700px, 330px)">
                    <g
                        style="
                transform-origin: 450px 267.5px;
                transform: rotate(-135deg);
              "
                    >
                        <use href="#pill" />
                    </g>
                </g>
                <g style="transform: translate(-280px, 190px)">
                    <g style="transform-origin: 450px 267.5px; transform: rotate(45deg)">
                        <use href="#pill" />
                    </g>
                </g>
                <defs>
                    <mask id="stippleMask">
                        <image width="900" height="535" />
                    </mask>
                    <g id="pill" class="Pill">
                        <rect
                            class="Pill__stipple"
                            x="0"
                            y="0"
                            width="900"
                            height="535"
                            mask="url(#stippleMask)"
                        />
                        <path
                            class="Pill__shape"
                            d="M600 40H0V490H600C724.264 490 825 389.264 825 265C825 140.736 724.264 40 600 40Z"
                            fill="url(#pillGradient)"
                        />
                    </g>
                    <linearGradient id="pillGradient">
                        <stop
                            class="Pill__gradient"
                            offset="20%"
                            stop-opacity="1"
                        />
                        <stop
                            class="Pill__gradientHighlight"
                            offset="95%"
                            stop-opacity="1"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div
            id="initialPageLoadingAnimation"
            class="LoadingAnimation LoadingAnimation--darkMode"
        >
            <svg
                width="104"
                height="104"
                viewBox="0 0 104 104"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="LoadingAnimation__spinner-gradient"
                        x1="0%"
                        y1="72px"
                        x2="0%"
                        y2="32px"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0"
                            class="LoadingAnimation__spinner-gradient-color"
                            stop-opacity="1"
                        />
                        <stop
                            offset="1"
                            class="LoadingAnimation__spinner-gradient-color"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <mask id="LoadingAnimation__base-wipe-mask">
                        <rect
                            x="0"
                            y="0"
                            width="104"
                            height="104"
                            fill="white"
                        />
                        <g class="LoadingAnimation__compass-base-mask-container">
                            <circle
                                class="LoadingAnimation__compass-base-mask"
                                r="27"
                                cx="52"
                                cy="52"
                                fill="white"
                                stroke="black"
                                stroke-width="54"
                            />
                        </g>
                    </mask>
                    <mask id="LoadingAnimation__base-mask">
                        <rect
                            x="0"
                            y="0"
                            width="104"
                            height="104"
                            fill="white"
                        />
                        <circle r="37" cx="54" cy="46" fill="black" />
                        <g class="LoadingAnimation__compass-needle-behind-mask">
                            <g transform="translate(54,46)">
                                <g transform="translate(-29, -61.3)">
                                    <path
                                        d="M38.5984 0C45.476 1.07762 51.9794 3.28918 57.9108 6.43722V61.1566C57.9108 77.1373 44.9364 90.1119 28.9554 90.1119C12.9744 90.1119 0 77.1373 0 61.1566C0 55.3848 1.69443 50.0063 4.60763 45.4861L38.5984 0Z"
                                        fill="black"
                                    />
                                </g>
                            </g>
                        </g>
                        <g class="LoadingAnimation__compass-needle-front-mask">
                            <g transform="translate(54,46)">
                                <g transform="translate(-29,-61.3)">
                                    <path
                                        d="M38.5984 0C45.476 1.07762 51.9794 3.28918 57.9108 6.43722V61.1566C57.9108 77.1373 44.9364 90.1119 28.9554 90.1119C12.9744 90.1119 0 77.1373 0 61.1566C0 55.3848 1.69443 50.0063 4.60763 45.4861L38.5984 0Z"
                                        fill="black"
                                    />
                                </g>
                            </g>
                        </g>
                    </mask>
                    <mask id="LoadingAnimation__spinner-left-half-mask">
                        <rect
                            x="0"
                            y="0"
                            width="52"
                            height="104"
                            fill="white"
                        />
                        <circle
                            class="LoadingAnimation__spinner-mask"
                            r="20"
                            cx="52"
                            cy="52"
                            fill="black"
                        />
                    </mask>
                    <mask id="LoadingAnimation__spinner-right-half-mask">
                        <rect
                            x="52"
                            y="0"
                            width="52"
                            height="104"
                            fill="white"
                        />
                        <circle
                            class="LoadingAnimation__spinner-mask"
                            r="20"
                            cx="52"
                            cy="52"
                            fill="black"
                        />
                    </mask>
                </defs>
                <g class="LoadingAnimation__spinner-container">
                    <g class="LoadingAnimation__spinner">
                        <circle
                            r="25"
                            cx="52"
                            cy="52"
                            fill="currentColor"
                            mask="url(#LoadingAnimation__spinner-left-half-mask)"
                        />
                        <circle
                            r="25"
                            cx="52"
                            cy="52"
                            fill="url(#LoadingAnimation__spinner-gradient)"
                            mask="url(#LoadingAnimation__spinner-right-half-mask)"
                        />
                    </g>
                </g>
                <g class="LoadingAnimation__compass">
                    <g
                        class="LoadingAnimation__compass-base-container"
                        mask="url(#LoadingAnimation__base-wipe-mask)"
                    >
                        <circle
                            class="LoadingAnimation__compass-base"
                            r="52"
                            cx="52"
                            cy="52"
                            fill="currentColor"
                            mask="url(#LoadingAnimation__base-mask)"
                        />
                    </g>
                    <g class="LoadingAnimation__compass-needle-container">
                        <g class="LoadingAnimation__compass-needle">
                            <g transform="translate(54,46)">
                                <g transform="translate(-15,-42)">
                                    <path
                                        d="M29.9539 1.4977C29.9539 0.670968 29.2827 0 28.4562 0C27.9597 0 27.5192 0.242028 27.2468 0.614415C27.216 0.656555 27.1873 0.700359 27.1609 0.745666L3.66519 32.1191C1.38202 34.7479 0 38.1803 0 41.9355C0 50.207 6.70541 56.9124 14.977 56.9124C23.2485 56.9124 29.9539 50.207 29.9539 41.9355L29.9539 41.9013V1.50252C29.9539 1.50091 29.9539 1.49931 29.9539 1.4977Z"
                                        fill="currentColor"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
`;

export default loadingScreenTemplate;
