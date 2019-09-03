import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
	card: {
	  minWidth: 275,
	},
	bullet: {
	  display: 'inline-block',
	  margin: '0 2px',
	  transform: 'scale(0.8)',
	},
	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	},
  });

function getId(string){

    let picado = string.split('/').slice()

    let resultado = picado[picado.length-2]
    return resultado
}


function Gui(props) {
  
    const classes = useStyles();

    return (
        <div>

            {
            props.DataFilms.map((item, index) =>
                <Card className={classes.card} key={index}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Episode : {item.episode_id}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Director : {item.director}
                        </Typography>
                    </CardContent>
                
                    <CardActions>
                        <Link to={'characters/film/'+ getId(item.url) }>
                            <Button size="small">Personajes</Button>
                        </Link>
                    </CardActions>
                </Card>
            )
            }

    </div>

  );
}

export default Gui;