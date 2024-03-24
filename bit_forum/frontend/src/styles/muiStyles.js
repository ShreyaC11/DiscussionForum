import { makeStyles } from '@material-ui/core/styles';

export const useNavStyles = makeStyles(
    (theme) => ({
        leftPortion: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
        },
        logoWrapper: {
            marginRight: '1em',
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                alignItems: 'center',
            },
        },
        logo: {
            fontFamily: 'Montserrat',
            textTransform: 'none',
            fontSize: '1.3em',
            padding: '0.1em',
            marginRight: '0.3em',
        },
        contentContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        appBar: {
            borderTop: '4px solid #f4649f',
        },
        searchBar: {
            flexGrow: 0.6,
            [theme.breakpoints.down('xs')]: {
                flexGrow: 1,
                marginLeft: '0.6em',
                marginRight: '0.6em',
            },
        },
        searchBtn: {
            padding: '0.2em',
        },
        iconBtn: {
            [theme.breakpoints.down('xs')]: {
                padding: '0.2em',
            },
        },
    }),
    { index: 1 }
);