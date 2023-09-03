import {useState} from "react";
import {useDispatch} from "react-redux";

import {authActions} from "../../redux";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(authActions.login({username, password}))
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                style={{padding: 10, marginBottom: 20}}
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                style={{padding: 10, marginBottom: 20}}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} style={{padding: 10, width: 100}}>
                Login
            </button>
        </div>
    )
};

export {Login}
