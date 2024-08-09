import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material";

import smile from '../images/Smile.png';

//objectFit is what reduces the image to the size of the card

function AboutMe(){
  return (
    <Card>
      <CardMedia 
        component="img"
        image = {smile}
        height="240"
        alt = "me"
        sx={{objectFit: "contain"}}
      />
    </Card>
  );
}

export default AboutMe;