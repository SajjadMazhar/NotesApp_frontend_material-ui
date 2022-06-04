import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Card, CardContent, Stack, Typography} from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';

export default function Profile() {
  return (
    <Card sx={{minWidth:275, p:5, height:"12rem", width:"50rem", display:"flex"}}>
        <Stack sx={{p:2}}>
            <Avatar alt="Remy Sharp" src="/avatar.png" sx={{height:"10rem", width:"10rem"}}/>
        </Stack>
        <CardContent sx={{p:2, px:4}}>
        <Typography variant="h6" component="div">
                Sajjad Mazhar <DriveFileRenameOutlineIcon sx={{width:20, height:20}}/>
                </Typography>
        <Stack direction="row" spacing={5}>
            <Stack>
                <Typography variant="h6" component="div">
                        Bio:
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Hello, Welcome to my profile
                </Typography>
                <Typography variant="h6" component="div">
                26/02/1998 <EventIcon sx={{width:20, height:20}}/>
                </Typography>
                <Typography variant="h6" component="div">
                sajjad21@navgurukul.org <EmailIcon sx={{width:20, height:20}}/>
                </Typography>
            </Stack>
        </Stack>
            </CardContent>
    </Card>
  );
}
