import React from "react";
import {
  Fab,
  IconButton,
  Snackbar,
  Typography,
  Tab,
  Tabs,
  Avatar,
  InputAdornment,
  TextField,
  Button,
  CardMedia,
  CardContent,
  CardHeader,
  Card,
  Box,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import Sidebar from "../sidebar";
import Loader from "../loader";
import { LAPAK_MOBIL_DEFAULT_URL, ROUTES } from "../../config/constant";
import { navigate } from "gatsby";
import logo from "../../images/logo.png";

function SalesScreen(props) {
  const {
    session,
    listing,
    loading,
    alert,
    toggleAlert,
    hideSidebar,
    showSidebar,
  } = props;

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
            backgroundColor: "#132f61",
            color: "#fff",
            padding: "10px",
            boxShadow: "none",
          }}
        >
          <CardHeader
            sx={{ color: "#fff" }}
            avatar={
              <Avatar
                onClick={() =>
                  navigate(ROUTES.profile, { state: { session: session } })
                }
                src={LAPAK_MOBIL_DEFAULT_URL + session.employee_img}
              ></Avatar>
            }
            title={"Hi, " + session.employee_name}
            subheader={session.position_name}
          />
          <CardContent sx={{ paddingBottom: "0 !important" }}>
            <TextField
              fullWidth
              className="search"
              variant="outlined"
              size="small"
              placeholder="Cari Mobil..."
              sx={{
                backgroundColor: "#586c90",
                color: "#fff",
                borderRadius: "25px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Card>
        <Tabs value={0} sx={{ margin: "0 30px" }}>
          <Tab
            label="Listing Mobil"
            sx={{ color: "#fff", textTransform: "none" }}
          />
        </Tabs>
      </Box>
      <h1 style={{ marginLeft: 30 }}>Produk Terbaru</h1>
      <Box>
        {listing.map((item, index) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              boxShadow: "3",
              width: "95%",
              borderRadius: "0px 10px 10px 0px",
              marginBottom: "10px",
            }}
            key={index}
          >
            <CardMedia
              component="img"
              image={
                item.ImageFilename
                  ? LAPAK_MOBIL_DEFAULT_URL + item.ImageFilename
                  : logo
              }
              sx={{
                width: "30%",
                height: "180px",
                objectFit: "contain",
                backgroundColor: item.ImageFilename ? "#fff" : "#132f61",
              }}
            />
            <CardContent sx={{ width: "65%" }}>
              <Typography variant="body2">
                <strong>
                  {item.BrandName} {item.CarVariant} {item.CarType}
                </strong>
                <br />
                <Box sx={{ display: "flex", gap: 2, padding: "10px 5px" }}>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <EventIcon />
                    &nbsp;{item.YearMade}
                  </Typography>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <SpeedIcon />
                    &nbsp;{item.CarSpeedometer}
                  </Typography>
                </Box>
              </Typography>
              <br />
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "25px",
                  fontWeight: "bold",
                  float: "right",
                }}
              >
                {"RP. " + item.SellCashPrice}
              </Button>
            </CardContent>
          </Card>
        ))}
        <br />
        <br />
        <br />
      </Box>
      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: "25px", right: "25px" }}
      >
        <DirectionsCarIcon />
      </Fab>
      <Sidebar showSidebar={showSidebar} hideSidebar={() => hideSidebar()} />
      <Loader open={loading} />
      <Snackbar
        open={alert.status}
        message={alert.message}
        action={
          <IconButton color="inherit" size="small" onClick={toggleAlert}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
}

export default SalesScreen;
