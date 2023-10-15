import { JsxElement } from "typescript";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNav from "./nav";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADERS = [
    // 레이아웃을 제외할 페이지를 적어준다. 
"/section13/13-01-library-icon",
"/section13/13-01-library-icon",
]

export default function Layout(props: ILayoutProps): JSX.Element {
const router = useRouter();
//현재 라우터의 주소를 가지고 온다. 
console.log(router.asPath)

//배열에 담긴 주소와 현재 주소가 같은지 검사한다. 
const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
  return (
    <div>
        {!isHiddenHeader && <LayoutHeader /> }
        <LayoutBanner>
        <LayoutNav />
      
      <div>{props.children}</div>
      <LayoutFooter />
    </div>
  );
}
