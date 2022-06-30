import { createGlobalStyle } from "styled-components";
import InterRegular from "../assets/fonts/Inter-Regular.ttf";
import InterBold from "../assets/fonts/Inter-Bold.ttf";
import PodkovaRegular from "../assets/fonts/Podkova-Regular.ttf"
import PodkovaBold from "../assets/fonts/Podkova-Bold.ttf"
import PodkovaSemiBold from "../assets/fonts/Podkova-SemiBold.ttf"
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf"
import SegoeUIEmoji from "../assets/fonts/seguiemj.ttf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Inter Regular';
    src: url(${InterRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter Bold';
    src: url(${InterBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Podkova Regular';
    src: url(${PodkovaRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Podkova Bold';
    src: url(${PodkovaBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Podkova Semi Bold';
    src: url(${PodkovaSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Segoe UI Emoji';
    src: url(${SegoeUIEmoji});
    font-style: normal;
  }
  
`;

export default Typography;
