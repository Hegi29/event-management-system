import { useEffectLogin } from "../hooks";
import { LoginContainer } from "../containers";

// import { authorize } from 'react-native-app-auth';
// import { useEffect } from "react";

// const config = {
//     issuer: '"https://login.qa.idaman.pertamina.com',
//     clientId: '6732a6b1-7afd-4646-b70d-9050c10f127d',
//     redirectUrl: 'https://localhost:5137',
//     scopes: ['api.auth', 'user.read']
// };

const Login: React.FunctionComponent<any> = ({ navigation }: any) => {
    const [handleLogin] = useEffectLogin(navigation);

    // const test = async () => {
    //     const result = await authorize(config);
    //     console.log("🚀 ~ test ~ result:", result)
    // }

    // useEffect(() => {
    //     test();
    // }, []);

    return (
        <LoginContainer handleLogin={handleLogin} />
    );
};

export default Login;