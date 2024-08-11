import { useDispatch } from "react-redux";

import { USERS } from "../constants/mock";
import { setData } from "../redux/reducers/accountSlice";

const useEffectLogin = (navigation: any) => {
    const dispatch = useDispatch();

    const handleLogin = ({ email }: any) => {
        const emailFound = USERS.find(x => x.email === email);
        if (!emailFound) {
            return 'Email not found';
        }

        if (emailFound) {
            const account = {
                email: emailFound.role_id === 1 ? emailFound.email : '',
                actualemail: emailFound.email,
                photo: emailFound.photo_profile_url,
                fullname: emailFound.full_name,
                firstname: emailFound.first_name,
                rolename: emailFound.role_name,
                roleid: emailFound.role_id.toString(),
                userid: emailFound.id
            };

            dispatch(setData(account));
            navigation.navigate('Home');
        }
    }

    return [handleLogin];
}

export default useEffectLogin;
