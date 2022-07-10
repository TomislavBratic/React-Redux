import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import useStyles from './styles';
import Upis from './Upis/upis';

const Upisi =  () => {
  const upisi =  useSelector((state) => state.upisi);
 

  /*const upis=posts.predmet_id?.map((post)=>console.log(post));*/
  console.log(upisi)

  
  const classes = useStyles();
  return (
    upisi?.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

{upisi?.predmet_id?.map((post) => (
          <Grid key={post} item xs={12} sm={6} md={6}>
            <Upis post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Upisi;
