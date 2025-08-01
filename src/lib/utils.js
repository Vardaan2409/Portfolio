// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// export const utils = (...inputs) => {
//     return twMerge(clsx(inputs));
// };

import React from 'react'
import { clsx } from "clsx";
import { twMerge } from 'tailwind-merge';

const utils = (...inputs) => {
    return twMerge(clsx(inputs));
}

export default utils
