import { useEffect, useState } from "react";
import { View } from "react-native";

import { Button, Input, Text } from "@rneui/themed";

import { storage } from "../utils/Storage";
import { USERS } from "../constants/mock";

const Login: React.FunctionComponent<any> = ({ navigation }: any) => {
    const [email, setEmail] = useState('');

    const onChangeEmail = (value: string) => {
        setEmail(value);
    }

    const handleLogin = () => {
        const emailFound = USERS.find(x => x.email === email);
        if (emailFound) {
            storage.set('user.email', emailFound.role_id === 1 ? emailFound.email : '');
            storage.set('user.photo', emailFound.photo_profile_url);
            storage.set('user.fullname', emailFound.full_name);
            storage.set('user.firstname', emailFound.first_name);
            storage.set('user.rolename', emailFound.role_name);
            storage.set('user.roleid', emailFound.role_id.toString());
            navigation.navigate('Home');
        }
    }

    useEffect(() => {
        setEmail('');
        storage.clearAll();
    }, []);

    return (
        <View style={{ marginTop: 40, padding: 20 }}>
            <Text>Email</Text>
            <Input onChangeText={value => onChangeEmail(value)} />
            <Button title='Login' onPress={handleLogin} />
        </View>
    );
};

export default Login;