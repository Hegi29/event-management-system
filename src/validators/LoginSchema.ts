import * as Yup from 'yup';

import { USERS } from '../constants/mock';
import { REGEX_EMAIL } from '../constants';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const LoginValidation = (values: any) => {
    let errors = { email: '' };
    if (!values.email) {
        errors.email = 'Required';
        return errors;
    } else if (
        REGEX_EMAIL.test(values.email)
    ) {
        errors.email = 'Invalid email address';
        return errors;
    }

    const emailFound = USERS.find(x => x.email === values.email);
    if (!emailFound) {
        errors.email = 'Email not found';
        return errors;
    }
}

export {
    LoginSchema,
    LoginValidation
};
