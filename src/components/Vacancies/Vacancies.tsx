import React, { useEffect } from 'react'


import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, createStyles } from '@mantine/core';
import Form from './Form/Form';
import { useAppDispatch, useAppSelector } from '../../redux';
import { CataloguesResponseType, fetchCatalogues, fetchToken } from '../../redux/reducers/VacanciesSlice';


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

type SubgridPropsType = {
  catalogues: {
    title: string
    key: number
  }[]
}

export function Subgrid({catalogues}: SubgridPropsType) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const getChild = (height: number, width: number) => <Skeleton height={height} width={width} className={classes.item} radius="md" animate={false} />;
  return (
    <Container my="md" className={classes.container}>
      <SimpleGrid cols={2} className={classes.grid}>
        <Form catalogues={catalogues}/>
        <Stack>
          {getChild(48, 773)}
          {getChild(668, 773)}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

function Vacancies() {
  // const {data, error, isLoading, refetch} = vacanciesAPI.useFetchPasswordQuery()
  // const {data: categories, error: err, isLoading : dwf, refetch: refetchCat} = vacanciesAPI.useFetchCategoriesQuery('')
  // console.log(data);
  // console.log(categories.map((el: any) => ({tile: el.title, key: el.key})));
  const dispatch = useAppDispatch()
  const catalogues = useAppSelector(state => state.vacancies.catalogues.map((el: CataloguesResponseType) => ({title: el.title, key: el.key})))
  const token = useAppSelector(state => state.vacancies.token)
  useEffect(() => {
    dispatch(fetchCatalogues())
  }, [dispatch, token])
  return (
    <div>
        <Subgrid catalogues={catalogues}/>
    </div>
  )
}

export default Vacancies
