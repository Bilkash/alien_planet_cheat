import { createGlobalStyle } from "styled-components";
import ZenKakuGothicAntiqueBlack from "./fonst/ZenKakuGothicAntique-Black.ttf";
import ZenKakuGothicAntiqueBold from "./fonst/ZenKakuGothicAntique-Bold.ttf";
import ZenKakuGothicAntiqueLight from "./fonst/ZenKakuGothicAntique-Light.ttf";
import ZenKakuGothicAntiqueMedium from "./fonst/ZenKakuGothicAntique-Medium.ttf";
import ZenKakuGothicAntiqueRegular from "./fonst/ZenKakuGothicAntique-Regular.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
      font-family: "Zen Kaku Gothic Antique", sans-serif;
          src: url(${ZenKakuGothicAntiqueBlack}) format("ttf"),
            url(${ZenKakuGothicAntiqueBold}) format("ttf"),
            url(${ZenKakuGothicAntiqueLight}) format("ttf"),
            url(${ZenKakuGothicAntiqueMedium}) format("ttf"),
            url(${ZenKakuGothicAntiqueRegular}) format("ttf");
    }
`;

export const GlobalFontStyle = createGlobalStyle`
    body {
        font-family: "Zen Kaku Gothic Antique", sans-serif;
    }
`;
