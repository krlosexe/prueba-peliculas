import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme =>({
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
  chip: {
    margin: theme.spacing(1),
  },
  }));



function Gui(props) {
  
    const classes = useStyles();

    return (
        <div>
          <pre>
          {/* {JSON.stringify(props.Characters,null, 4)} */}
          </pre>
            {
            props.Characters.map((item, index) =>
                <Card className={classes.card} key={index}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Nombre del personaje : {item.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Color de ojos : {item.eye_color}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          Genero : {item.gender}
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                          Otras peliculas :
                          {

                              props.Characters[index].films_names.map((item, index) =>{
                                return (<Chip label={item} className={classes.chip} key={'chip'+index}/>)
                              })

                        }
                          
                        </Typography>


                    </CardContent>
                </Card>
            )
            }

    </div>

  );
}

export default Gui;