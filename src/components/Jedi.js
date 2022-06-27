import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import Typography from '@mui/material/Typography';

const Jedi = () => {
    useEffect (() => {
        getJedi();
        
        
    },
     []);
const [jedi,setJedi] = useState ("")
const [jedih,setJediH] = useState ("")
const [eye,setEye] = useState ("")
const [gender,setGender] = useState("")
const [skin, setSkin] = useState ("")
const [birthYear, setbirthYear] = useState("")




const getJedi = () => {
axios.get('https://swapi.dev/api/people/1')
.then((response) =>{
    setJedi(response.data.name);
    setJediH(response.data.height);
    setEye(response.data.eye_color);
    setGender(response.data.gender);
    setSkin(response.data.skin_color);
    setbirthYear(response.data.birth_year)
}



);
};


return (
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="210"
        image= "https://www.slashfilm.com/img/gallery/heres-what-the-new-luke-skywalker-looks-like-under-his-digital-mask/l-intro-1644193087.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" background>
        {jedi}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Eye: {eye} <br/>
          Gender: {gender}<br/>
          Skin Color: {skin}<br/>
          Height: {(jedih/30.48).toFixed(1)} (ft) <br/>
          Birth Year : {birthYear}<br/>
        </Typography>
      </CardContent>
      <CardActions background="#f5f5f5">
        <InstagramIcon size="medium" href="https://www.instagram.com/starwars" target="_blank">Share</InstagramIcon>
        <InsertLinkOutlinedIcon size="medium" href="https://starwars.fandom.com/wiki/Luke_Skywalker" target="_blank">Learn More</InsertLinkOutlinedIcon>
      </CardActions>
    </Card>
  
);
}

export default Jedi;