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

const ResourceCard = ({ children }) => {
  return (
    <Card sx={{ minHeight: 100 }} m="auto">
      <Grid
        p={4}
        container
        sx={{ minHeight: 100, minWidth: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography align="left" variant="h4">
            Resource name
          </Typography>
          <Typography variant="p">
            This is a description of what this resource is.
          </Typography>
          <Grid item my="12px">
            <Divider />
          </Grid>
          <Grid item>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="tel:555-555-5555">
                  <ListItemIcon>
                    <PhoneIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h5">Phone</Typography>}
                    secondary={<Typography variant="p">555-555-555</Typography>}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="https://youthfulcities.com/"
                >
                  <ListItemIcon>
                    <WebIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h5">Website</Typography>}
                    secondary={
                      <Typography variant="p">
                        https://youthfulcities.com/
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="mailto:product@youthfulcities.com"
                >
                  <ListItemIcon>
                    <MailIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h5">Email</Typography>}
                    secondary={
                      <Typography variant="p">
                        product@youthfulcities.com
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResourceCard;
