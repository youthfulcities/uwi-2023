import React from "react";
import {
  Card,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import MailIcon from "@mui/icons-material/Mail";

const ResourceCard = ({ phone, address, name, email, url }) => {
  const createLink = (url) => {
    if (url.includes("http")) {
      return url;
    } else {
      return `http://${url}`;
    }
  };

  return (
    <Card sx={{ minHeight: 100 }} m="auto">
      <Grid
        p={4}
        container
        sx={{ minHeight: 100 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography align="left" variant="h4">
            {name}
          </Typography>
          <Typography variant="p">
            This is a description of this resource
          </Typography>
          <Grid item my="12px">
            <Divider />
          </Grid>
          <Grid item>
            <List>
              {phone !== "N/A" && (
                <ListItem disablePadding>
                  <ListItemButton component="a" href={`tel:${phone}`}>
                    <ListItemIcon>
                      <PhoneIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h5">Phone</Typography>}
                      secondary={<Typography variant="p">{phone}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              )}
              {url !== "N/A" && (
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    target="_blank"
                    href={createLink(url)}
                  >
                    <ListItemIcon>
                      <WebIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h5">Website</Typography>}
                      secondary={<Typography variant="p">{url}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              )}
              {email !== "N/A" && (
                <ListItem disablePadding>
                  <ListItemButton component="a" href={`mailto:${email}`}>
                    <ListItemIcon>
                      <MailIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h5">Email</Typography>}
                      secondary={<Typography variant="p">{email}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              )}
              {address !== "N/A" && (
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    target="_blank"
                    href={`https://maps.google.com/?q=:${address}`}
                  >
                    <ListItemIcon>
                      <MailIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h5">Address</Typography>}
                      secondary={<Typography variant="p">{address}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResourceCard;
