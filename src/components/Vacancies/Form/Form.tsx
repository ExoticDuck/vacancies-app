import { Box, Skeleton, TextInput, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'
import { CategoryPicker } from './CategoryPicker/CategoryPicker';


const useStyles = createStyles((theme) => ({
    container: {
        width: '315px',
        height: '360px',
        boxSizing: 'border-box',
        padding: '20px',
        borderRadius: '12px',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        zIndex: 20,
        backgroundColor: '#FFFFFF',
        background: '#FFFFFF',
        '&:after': {
            background: '#FFFFFF',
        },
        '&:before': {
            background: '#FFFFFF',
        }
    },
    title: {
        display: 'block',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        lineheight: '20px',
        color: "#232134",
    },
    button: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineheight: '20px',
        color: "#ACADB9",
    },
    titleBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'fit-content',
        width: '100%',
        marginBottom: '32px'
    },
    heading: {
        width: '70px',
        height: '19px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#232134',
        marginBottom: '8px'
    }
}));

type FormPropsType = {
    catalogues: {
        title: string
        key: number
    }[]
}

function Form({ catalogues }: FormPropsType) {
    const { classes } = useStyles();
    // const {data: categories, error: err, isLoading : dwf, refetch: refetchCat} = vacanciesAPI.useFetchCategoriesQuery('')
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <Box className={classes.container}>
            <div className={classes.titleBox}>
                <div className={classes.title}>Фильтры</div>
                <div className={classes.button}>Сбросить все &#215;</div>
            </div>
            <div>
                <div className={classes.heading}>Отрасль</div>
                <CategoryPicker catalogues={catalogues} />
            </div>
            <div>
            <div className={classes.heading}>Оклад</div>
            </div>

            {/* <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />

            </form> */}
        </Box>
    )
}


export default Form