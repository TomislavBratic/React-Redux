import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {  getUpisi,getPredmeti } from '../../actions/posts';

import Upisi from '../Upisi/upisi';

const HomeUpisi = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  const user = JSON.parse(localStorage.getItem('profile'));
  

  useEffect(() => {
    
    dispatch(getPredmeti());
   

  },[currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Upisi setCurrentId={setCurrentId} />
          </Grid>
         
        </Grid>
      </Container>
    </Grow>
  );
};

export default HomeUpisi;
