import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "myfont";
    font-size: 20px;
  }

  @font-face {
    font-family: "myfont";
    /* 이 폰트 이름을 뭘로 하고 싶은지 정한다. */
    src: url("/fonts/scifibit.ttf");
  }
`;

// 적용할 때는 font-family: "myfont"; 이렇게 사용하면 된다.
