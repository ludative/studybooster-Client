import React from "react";
import {Button, Container, Grid} from "@material-ui/core";
import TypographyComponent from '@/components/Typography';
import {useMutation} from "@apollo/react-hooks";
import {SEND_MAIL_VALIDATION} from "@/mutations/user";
import {ISendMailValidationData} from "@/interfaces/user";

const typographyStyles = {
    root: {
        marginTop: '30px',
    }
};

const ResendEmail: React.FC = () => {
    const [sendMailValidation, {loading}] = useMutation<ISendMailValidationData>(SEND_MAIL_VALIDATION);
    const handleClickResendMail = async (): Promise<void> => {
        try {
            const {data} = await sendMailValidation();
            if (data?.sendMailValidation?.isSuccess) {
                alert('이메일이 발송 되었습니다.');
            }
        } catch (e) {
            alert(e?.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <Container>
            <Grid container justify={"center"} direction={"column"}>
                <TypographyComponent
                    styles={typographyStyles}
                    variant={"h3"}
                    align={"center"}
                    text={"이메일 검증을 완료해주세요!"}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickResendMail}
                >이메일 재발송</Button>
            </Grid>
        </Container>
    )
};

export default ResendEmail;