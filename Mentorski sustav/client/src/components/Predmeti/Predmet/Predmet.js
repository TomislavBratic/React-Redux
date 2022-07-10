import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { likePost, deletePost, createUpis } from '../../../actions/posts';
import useStyles from './styles';

const Predmet = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
 

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card}>
      
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.ime}</Typography>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.kod}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{post.program}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Bodovi:{post.bodovi}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Redovni:{post.semestar_redovni}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Izvanredni:{post.semestar_izvanredni}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Izborni:{post.izborni}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(createUpis(post._id,user.result._id))}>
         <Likes></Likes>
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Predmet;
