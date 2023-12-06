import { useState, useContext } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { DeliveryPersonLoginApi } from "../../../apis/deliveryPerson";
import AuthContext from "../../context/auth/authContext";
export default function DeliveryPersonLogin() {
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrormsg] = useState("");
    const navigate = useNavigate();
    function onChangeUserName(ev) {
        setUsername(ev.target.value);
    }
    function onChangePassword(ev) {
        setPassword(ev.target.value);
    }

    function onClickLogin() {
        if(username==""){
            alert("Enter username");
            return;
        }
        if(password==""){
            alert("Enter password");
            return;
        }
        DeliveryPersonLoginApi(username, password).then(function (response) {
            if (response.status == 200) {
                console.log("success");
                return (response.json());
            }
            else if (response.status == 401) {
                setErrormsg("invalid credential");
            }
            else if (response.status == 404) {
                setErrormsg("user not found");
            }
            else {
                setErrormsg("Something went wrong");
            }
        }).then(function (data) {
            auth.setUser(data);
            window.sessionStorage.setItem("user", JSON.stringify(data));
            // console.log("afterlogin",data);
            auth.setIsLoggedIn(true);
            if (data.role == "delivery") {
                navigate("/delivery/home");
            }
        }).catch(function () {
            console.log("Error");
        });
    }

    return (
        <div className={Style.container}>
            <div className={Style.innerContainer}>
                <h2>Delivery Person Sign in</h2>
                <Input type="text" value={username} onChange={onChangeUserName} placeholder="Enter username" />
                <Input type="password" value={password} onChange={onChangePassword} placeholder="Enter password" />
                <Button onClick={onClickLogin}>Login</Button>
                <p className={errormsg ? Style.error : Style.hidden}>{errormsg}</p>
            </div>
        </div>
    )
}