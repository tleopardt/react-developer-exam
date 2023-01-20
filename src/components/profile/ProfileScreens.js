import React from "react";
import { navigate } from "gatsby";
import {
  Avatar,
  CardContent,
  IconButton,
  Typography,
  Box,
  Card,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LogoutIcon from "@mui/icons-material/Logout";
import { LAPAK_MOBIL_DEFAULT_URL } from "../../config/constant";
import FormEditProfile from "./form/FormEditProfile";
import FormEditPassword from "./form/FormEditPassword";

function ProfileScreens(props) {
  const { session, variables, open, visibility, toggleFormPassword, toggleVisibility } = props;

  return (
    <Box className="index" sx={{ padding: "0px 10px" }}>
      <Box
        sx={{
          backgroundColor: "#132f61",
          color: "#fff",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <Card
          sx={{
            backgroundColor: "#bbdefb",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#132f61",
              borderRadius: "0 0 15px 15px",
              pl: 3,
              pr: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              <IconButton color="inherit" onClick={() => navigate("/")}>
                <ArrowBackIosIcon />
              </IconButton>
              <h2>User Profile</h2>
            </div>
            <LogoutIcon />
          </Box>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Avatar
              sx={{ width: 150, height: 150 }}
              src={LAPAK_MOBIL_DEFAULT_URL + session.employee_img}
            ></Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                color: "#000",
              }}
            >
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <PersonIcon />
                &emsp;<strong>{session.employee_name}</strong>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon />
                &emsp;<strong>087123456793</strong>
              </Typography>
            </Box>
          </CardContent>
          <CardContent sx={{ backgroundColor: "#fff", color: "#000" }}>
            <FormEditProfile
              session={session}
              toggleFormPassword={toggleFormPassword}
            />
            <FormEditPassword
              open={open}
              anchor="bottom"
              toggleFormPassword={toggleFormPassword}
              toggleVisibility={toggleVisibility}
              variables={variables}
              visibility={visibility}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default ProfileScreens;
