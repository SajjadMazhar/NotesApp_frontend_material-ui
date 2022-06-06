import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Card, CardContent, Stack, Typography} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import userContext from '../../context/UserContext';

export default function Profile() {
  const {profile} = React.useContext(userContext)
  return (profile&&
    <Card sx={{minWidth:275, p:5, height:"12rem", width:"50rem", display:"flex"}}>
        <Stack sx={{p:2}}>
            <Avatar alt="Remy Sharp" src={"http://localhost:3001/static//"+profile.dp} sx={{height:"10rem", width:"10rem"}}/>
        </Stack>
        <CardContent sx={{p:2, px:4}}>
        <Typography variant="h6" component="div">
                {profile.name} <DriveFileRenameOutlineIcon sx={{width:20, height:20}}/>
                </Typography>
        <Stack direction="row" spacing={5}>
            <Stack>
                <Typography variant="h6" component="div">
                        Bio:
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {profile.bio}
                </Typography>
                <Typography variant="h6" component="div">
                {profile.dob} <EventIcon sx={{width:20, height:20}}/>
                </Typography>
                <Typography variant="h6" component="div">
                {profile.email} <EmailIcon sx={{width:20, height:20}}/>
                </Typography>
            </Stack>
        </Stack>
            </CardContent>
    </Card>
  );
}
