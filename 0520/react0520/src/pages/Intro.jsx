import { Link } from "react-router-dom";
import { DUMMY } from "../data";

/*DUMMY 데이터 => 링크 => 이름, 전공 페이지를 만들 예정*/

export default function IntroPage() {
    return (
        <>
        <h3>[아이디어톤 조원]</h3>
        <ul>
            {
                DUMMY.map((item)=>(
                    <li key={item.id}>
                        <Link to={`${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
        </ul>
        
        </>
    );
}
