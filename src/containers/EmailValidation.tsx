import React from "react";
import {Container} from "@material-ui/core";
import TypographyComponent from '@/components/Typography';

const typographyStyles = {
    root: {
        marginTop: '30px'
    }
};

const EmailValidation: React.FC = () => {
    return (
        <Container>
            <TypographyComponent
                styles={typographyStyles}
                variant={"h3"}
                align={"center"}
                text={"이메일 검증을 완료해주세요!"}
            />
        </Container>
    )
};

export default EmailValidation;