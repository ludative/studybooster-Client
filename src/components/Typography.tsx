import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {Typography, makeStyles, PropTypes, Theme} from "@material-ui/core";
import {ThemeStyle} from "@material-ui/core/styles/createTypography";

interface ITypographyComponentProps {
    styles: Styles<Theme, {}, any>;
    variant?: ThemeStyle | 'inherit';
    align?: PropTypes.Alignment;
    text: string;
    gutterBottom?: boolean;
    noWrap?: boolean
    display?: 'initial' | 'block' | 'inline'
    color?: 'initial'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
        | 'error';
    variantMapping?: Partial<Record<ThemeStyle, string>>;
}

const TypographyComponent: React.FC<ITypographyComponentProps> = ({
    styles,
    text,
    variant = "h3",
    align = "left",
    children,
    gutterBottom= false,
    noWrap=false,
    display,
    color,
    variantMapping
                                   }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Typography
            className={classes.root}
            variant={variant}
            align={align}
            gutterBottom={gutterBottom}
            noWrap={noWrap}
            display={display}
            color={color}
            variantMapping={variantMapping}
        >
            {text}
            {children ?? children}
        </Typography>
    )
};

export default TypographyComponent;