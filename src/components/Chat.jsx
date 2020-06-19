import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoPrfile from '../assets//img/noprofile.png';
import Icon from '../assets/img/merry.png';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const chatType = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
  const bubbleColor = isQuestion ? 'bubble__question' : 'bubble__answer';

  const useStyles = makeStyles(() => (
    createStyles( {
      "avatar": {
        border: '1px solid'
      }
    })
  ));

  const classes = useStyles();

  return (
    <ListItem className={chatType}>
      <ListItemAvatar >
        {isQuestion ? (
          <Avatar alt="icon" src={Icon} className={classes.avatar} />
        ): (
          <Avatar alt="icon" src={NoPrfile} className={classes.avatar} />
        )}
      </ListItemAvatar>
      <div className={bubbleColor}>{props.text}</div>
    </ListItem>
  )
}

export default Chat;