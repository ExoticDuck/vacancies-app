import { Skeleton, createStyles } from '@mantine/core';
import React from 'react'

const useStyles = createStyles((theme) => ({
    container: {
        width: '315px',
        maxWidth: '360px',
        boxSizing: 'border-box',
        padding: '20px',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        background: '#FFFFFF',
        '&:after': {
            background: '#FFFFFF',
          },
    }
}));

function Form() {
    const { classes } = useStyles();
  return (
    <Skeleton height={360} width={315} className={classes.container} radius="md" animate={false}>

    </Skeleton>
  )
}

export default Form