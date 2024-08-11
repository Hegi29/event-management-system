import { View, StyleSheet } from "react-native";

import { Button, Input, Text } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";

import { REGEX_EMAIL } from "../constants";

const defaultValues = { email: '' };

const LoginContainer = ({ handleLogin }: any) => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues,
        mode: 'onBlur'
    });

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                rules={{
                    required:
                    {
                        value: true,
                        message: 'This is required.'
                    },
                    pattern: {
                        value: REGEX_EMAIL,
                        message: 'Invalid email'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }: any) => (
                    <>
                        <Text>Email</Text>
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            containerStyle={styles.inputContainer}
                        />
                        {errors.email ? <Text style={{ color: 'red' }}>{errors.email.message}</Text> : null}
                    </>
                )}
                name="email"
            />

            <Button title='Login' onPress={handleSubmit(handleLogin)} containerStyle={styles.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        borderRadius: 10
    },
    container: {
        marginTop: 40,
        padding: 20
    },
    inputContainer: {
        marginBottom: -20,
        paddingHorizontal: 0
    }
})

export default LoginContainer;
