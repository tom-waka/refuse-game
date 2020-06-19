import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles( {
    "button": {
      borderColor: '#1eb30d',
      backgroundColor: '#fff',
      color: '#1eb30d',  
      fontWeight: 600,
      margin: '16px 0',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.4)'
    }
  })
));

const Answer = (props) => {
  const classes = useStyles();
  return(
    <Button 
      className={classes.button} 
      variant="outlined" onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  )
}

export default Answer;