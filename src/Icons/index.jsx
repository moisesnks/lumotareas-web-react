export function TaskIcon({ isBusy, forceColor = "" }) {
    let color = isBusy ? "#7C57AB" : "#57AB5A";
    if (forceColor !== "") {
        color = forceColor;
    }


    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_3_4)">
                <path
                    d="M15.5 17.8125C16.2459 17.8125 16.9613 17.5162 17.4887 16.9887C18.0162 16.4613 18.3125 15.7459 18.3125 15C18.3125 14.2541 18.0162 13.5387 17.4887 13.0113C16.9613 12.4838 16.2459 12.1875 15.5 12.1875C14.7541 12.1875 14.0387 12.4838 13.5113 13.0113C12.9838 13.5387 12.6875 14.2541 12.6875 15C12.6875 15.7459 12.9838 16.4613 13.5113 16.9887C14.0387 17.5162 14.7541 17.8125 15.5 17.8125Z"
                    fill={color}
                />
                <path
                    d="M15.5 0C19.4782 0 23.2936 1.58035 26.1066 4.3934C28.9196 7.20644 30.5 11.0218 30.5 15C30.5 18.9782 28.9196 22.7936 26.1066 25.6066C23.2936 28.4196 19.4782 30 15.5 30C11.5218 30 7.70644 28.4196 4.8934 25.6066C2.08035 22.7936 0.5 18.9782 0.5 15C0.5 11.0218 2.08035 7.20644 4.8934 4.3934C7.70644 1.58035 11.5218 0 15.5 0ZM3.3125 15C3.3125 18.2323 4.59654 21.3323 6.88214 23.6179C9.16774 25.9035 12.2677 27.1875 15.5 27.1875C18.7323 27.1875 21.8323 25.9035 24.1179 23.6179C26.4035 21.3323 27.6875 18.2323 27.6875 15C27.6875 11.7677 26.4035 8.66774 24.1179 6.38214C21.8323 4.09654 18.7323 2.8125 15.5 2.8125C12.2677 2.8125 9.16774 4.09654 6.88214 6.38214C4.59654 8.66774 3.3125 11.7677 3.3125 15Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_3_4">
                    <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export function TasksIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 1.75V13.25C2 13.388 2.112 13.5 2.25 13.5H5.42C5.61891 13.5 5.80968 13.579 5.95033 13.7197C6.09098 13.8603 6.17 14.0511 6.17 14.25C6.17 14.4489 6.09098 14.6397 5.95033 14.7803C5.80968 14.921 5.61891 15 5.42 15H2.25C1.78587 15 1.34075 14.8156 1.01256 14.4874C0.684374 14.1592 0.5 13.7141 0.5 13.25V1.75C0.5 0.784 1.284 0 2.25 0H10.75C11.716 0 12.5 0.784 12.5 1.75V9.486C12.5 9.68491 12.421 9.87568 12.2803 10.0163C12.1397 10.157 11.9489 10.236 11.75 10.236C11.5511 10.236 11.3603 10.157 11.2197 10.0163C11.079 9.87568 11 9.68491 11 9.486V1.75C11 1.6837 10.9737 1.62011 10.9268 1.57322C10.8799 1.52634 10.8163 1.5 10.75 1.5H2.25C2.1837 1.5 2.12011 1.52634 2.07322 1.57322C2.02634 1.62011 2 1.6837 2 1.75ZM15.274 11.287L10.717 15.736C10.5755 15.8739 10.3854 15.9504 10.1879 15.9489C9.99032 15.9474 9.80136 15.868 9.662 15.728L7.719 13.778C7.58678 13.6356 7.515 13.4474 7.51879 13.2531C7.52258 13.0588 7.60164 12.8735 7.73932 12.7364C7.87699 12.5992 8.06254 12.5209 8.25685 12.5178C8.45116 12.5148 8.63908 12.5872 8.781 12.72L10.2 14.145L14.226 10.213C14.3684 10.074 14.5602 9.99732 14.7592 9.99976C14.9582 10.0022 15.148 10.0836 15.287 10.226C15.426 10.3684 15.5027 10.5602 15.5002 10.7592C15.4978 10.9582 15.4164 11.148 15.274 11.287ZM4.25 4H8.75C8.94891 4 9.13968 4.07902 9.28033 4.21967C9.42098 4.36032 9.5 4.55109 9.5 4.75C9.5 4.94891 9.42098 5.13968 9.28033 5.28033C9.13968 5.42098 8.94891 5.5 8.75 5.5H4.25C4.05109 5.5 3.86032 5.42098 3.71967 5.28033C3.57902 5.13968 3.5 4.94891 3.5 4.75C3.5 4.55109 3.57902 4.36032 3.71967 4.21967C3.86032 4.07902 4.05109 4 4.25 4ZM3.5 7.75C3.5 7.55109 3.57902 7.36032 3.71967 7.21967C3.86032 7.07902 4.05109 7 4.25 7H6.25C6.44891 7 6.63968 7.07902 6.78033 7.21967C6.92098 7.36032 7 7.55109 7 7.75C7 7.94891 6.92098 8.13968 6.78033 8.28033C6.63968 8.42098 6.44891 8.5 6.25 8.5H4.25C4.05109 8.5 3.86032 8.42098 3.71967 8.28033C3.57902 8.13968 3.5 7.94891 3.5 7.75Z"
                fill="#677380"
            />
        </svg>
    );
}

export function GithubIcon() {
    return (
        <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" /></svg>)
}

export function BarsIcon({ color = "#677380" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {/* <!-- Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
            <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" fill={color} />
        </svg>
    );
}
