
import localFont from "next/font/local";

// fonts
import { Racing_Sans_One , Orbitron , Russo_One } from "next/font/google";


export const HeadingFont = Orbitron({
    weight: "variable",
    display: "swap",
    subsets: [],
});

export const MeadumFont = Racing_Sans_One({
    weight: "400",
    display: "swap",
    subsets: ["latin-ext"],
});

export const UniqueFont = localFont({
    src: "./fonts/unique.ttf",
    weight: "400",
    display: "swap",

});

export const FollowersFont = Russo_One({
    weight: "400",
    display: "swap",
    subsets: ["latin-ext"],
});