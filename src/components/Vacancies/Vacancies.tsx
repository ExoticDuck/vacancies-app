import React from 'react'


import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, createStyles } from '@mantine/core';
import { vacanciesAPI } from '../../redux/services/VacanciesService';
import Form from './Form/Form';


const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

  const useStyles = createStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        paddingLeft: '0',
        paddingRight: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    grid: {
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        paddingLeft: '0',
        paddingRight: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        gap: '28px'
    },

    item: {
        backgroundColor: '#FFFFFF',
        background: '#FFFFFF',
        '&:after': {
            background: '#FFFFFF',
          },
    },

}));

export function Subgrid() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const getChild = (height: number, width: number) => <Skeleton height={height} width={width} className={classes.item} radius="md" animate={false} />;
  return (
    <Container my="md" className={classes.container}>
      <SimpleGrid cols={2} className={classes.grid}>
        <Form/>
        <Stack>
          {getChild(48, 773)}
          {getChild(668, 773)}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

function Vacancies() {
  const {data, error, isLoading, refetch} = vacanciesAPI.useFetchPasswordQuery('')
  console.log(data);
  
  return (
    <div>
        <Subgrid/>
    </div>
  )
}

export default Vacancies
