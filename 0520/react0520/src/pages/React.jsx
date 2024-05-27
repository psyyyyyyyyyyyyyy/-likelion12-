import { Link } from "react-router-dom";
import picture1 from './img/logo.png'

export default function ReactPage() {

    return(
        <>
        <img src={picture1} width = '300px'/>
        <h1>[리액트 소개]</h1>
    
        <h3>React.js는 특히 SPA(Single Page Application)을 위한 사용자 인터페이스를 구축하는 데 사용되는 오픈 소스 JavaScript 라이브러리입니다.</h3>
        <ul>
        
 <li><p>React는 Facebook에서 일하는 소프트웨어 엔지니어 jordan walke가 처음 만들었습니다. </p></li>
 
<li><p>웹 및 모바일 앱의 view layer를 처리하는 데 사용됩니다.</p></li>
 
<li><p>데이터 바인딩 기법을 통해서 여러가지 정보를 한 곳에 모아서 보여줄 수 있고, 뷰포트 개념을 도입했기 때문에 스크롤링 효과 등 시각적인 부분에서의 표현이 자유롭습니다.</p></li>
 
<li><p>SPA (Single Page Application)방식이라 페이지 이동없이 빠르게 콘텐츠를 제공할 수 있다는 점도 매력적이죠.</p></li>
<li><p>또한 React를 사용하면 재사용 가능한 UI 구성 요소를 만들 수 있습니다.</p></li>
 
<li><p>React를 사용하면 개발자가 페이지를 다시 로드하지 않고도 데이터를 변경할 수 있는 대규모 웹 애플리케이션을 만들 수 있습니다.</p></li>
<h6>출처: https://yong-nyong.tistory.com/13 [💻용뇽 개발 노트💻:티스토리]</h6> 

</ul>
        </>
    );
}