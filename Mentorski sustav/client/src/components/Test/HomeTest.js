import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';

import { getAllUpisi, getPosts, getPredmeti, getUpisi,getUser } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Predmeti from '../Predmeti/Predmeti';
import Predmet from '../Predmeti/Predmet/Predmet';

const HomeTest = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  const user = JSON.parse(localStorage.getItem('profile'));
  const predmeti = useSelector((state) => state.posts);
  const upisi=useSelector((state) => state.upisi);
  var ects=0;
  var niz=[];
  var string="";
 console.log(predmeti,"je user");
 console.log(upisi,"je upis");


 for (var i = 0, len = upisi.length; i < len; i++) { 
  for (var j = 0, len2 = predmeti.length; j < len2; j++) { 
     console.log(len,len2,"je length");
    niz.push(predmeti._id.string);
    console.log(niz);
    
      if (upisi[i].predmet_id.includes(predmeti._id.str)) {
        console.log("je")
        ects+=predmeti.bodovi;
    
      }
  }
  console.log(ects,"je ects");
  
}



  useEffect(() => {
    dispatch(getPredmeti());
    dispatch(getAllUpisi());

  

  },[]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
       
        </Grid>

      </Container>
    </Grow>
  );
};

export default HomeTest;
