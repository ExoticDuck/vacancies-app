import { createStyles, Header, Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconChevronDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    inner: {
        height: '84px',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
        // paddingLeft: '0',
        // paddingRight: '0',
        // maxWidth: '0',
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },

    logo: {
        height: '36px',
        position: 'absolute',
        left: '162px'
    },

    links: {
        height: '84px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',

    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

interface HeaderSearchProps {
    links: {
        link: string;
        label: string;
        links?: {
            link: string;
            label: string
        }[]
    }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => {

        return (
            <NavLink
            to={link.link}
            key={link.label}
            className={classes.link}
        >
           <Center>
                <span className={classes.linkLabel}>{link.label}</span>
            </Center>
        </NavLink>
        );
    });

    return (
        <Header height={84} mb={40}>
            <Container className={classes.container}>
                <div className={classes.inner}>
                    <Logo style={{ height: '36px' }} className={classes.logo}/>
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>

                </div>
            </Container>
        </Header>
    );
}