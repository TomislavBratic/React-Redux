import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost,updatePredmet } from '../../actions/posts';
import useStyles from './styles';


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ ime:"",kod: '', program: '', bodovi: '',semestar_redovni:"",semestar_izvanredni:"",izborni:"", selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
console.log(currentId);
  useEffect(() => {
    if (post) setPostData(post);
    
    
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ime:"", kod: '', program: '', bodovi: '',semestar_redovni:"",semestar_izvanredni:"",izborni:"",  selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(currentId,postData);
      dispatch(updatePredmet(currentId, { ...postData  }));
      clear();
    
  };



  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${postData.ime}"` : 'Creating a Memory'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.ime} onChange={(e) => setPostData({ ...postData, ime: e.target.value })} />
        <TextField name="code" variant="outlined" label="Code" fullWidth value={postData.kod} onChange={(e) => setPostData({ ...postData, kod: e.target.value })} />
        <TextField name="program" variant="outlined" label="Program" fullWidth value={postData.program} onChange={(e) => setPostData({ ...postData, program: e.target.value })} />
        <TextField name="points" variant="outlined" label="Points" fullWidth value={postData.bodovi} onChange={(e) => setPostData({ ...postData, bodovi: e.target.value })} />
        <TextField name="regular" variant="outlined" label="Regular" fullWidth value={postData.semestar_redovni} onChange={(e) => setPostData({ ...postData, semestar_redovni: e.target.value })} />
        <TextField name="iregular" variant="outlined" label="Iregular" fullWidth  value={postData.semestar_izvanredni} onChange={(e) => setPostData({ ...postData, semestar_izvanredni: e.target.value })} />
        <TextField name="elective" variant="outlined" label="Elective" fullWidth value={postData.izborni} onChange={(e) => setPostData({ ...postData, izborni: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={(e)=>handleSubmit(e)}>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
