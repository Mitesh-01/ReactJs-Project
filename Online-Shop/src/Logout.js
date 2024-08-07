import { useEffect } from "react";
import { withCookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Logout() {
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);

    let navigate = useNavigate();

    useEffect(() => {
        removeCookie('userid');
        navigate("/");
    })
    return(<></>)
}
export default withCookies(Logout);