import React, {useCallback, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {UPDATE_USER_IS_VALID_EMAIL} from "@/mutations/user";
import {IUpdateUserIsValidEmailData, IUpdateUserIsValidEmailVariables} from "@/interfaces/user";
import {removeTokenLocalStorage, setTokenLocalStorage} from "@/utils/localStorage";
import errorHandler from "@/utils/errorHandler";

const EmailValidation: React.FC = () => {
    const history = useHistory();
    const {token} = useParams();
    const [updateUserIsValidEmail] = useMutation<IUpdateUserIsValidEmailData, IUpdateUserIsValidEmailVariables>(UPDATE_USER_IS_VALID_EMAIL);
    const updateUserIsValidEmailPromise = useCallback(async (): Promise<void> => {
        try {
            const {data} = await updateUserIsValidEmail({variables: {token}});
            if (data?.updateUserIsValidEmail?.isSuccess) {
                alert('이메일 검증이 완료되었습니다.');
                setTokenLocalStorage(token);
                history.push('/');
            }
        } catch (e) {
            errorHandler(e);
            removeTokenLocalStorage();
            history.push('/login');
        }
    }, [token, history, updateUserIsValidEmail]);

    useEffect(() => {
        updateUserIsValidEmailPromise();
    }, [updateUserIsValidEmailPromise]);

    return (
        <div>Loading...</div>
    )
};

export default EmailValidation;