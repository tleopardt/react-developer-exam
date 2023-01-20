import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  InputAdornment,
  SwipeableDrawer,
  TextField,
  Box,
  FormControl,
  Button,
} from "@mui/material";

function FormEditPassword(props) {
  const {
    open,
    anchor,
    variables,
    visibility,
    toggleFormPassword,
    toggleVisibility,
  } = props;
  const height = window.innerHeight;

  return (
    <SwipeableDrawer anchor={anchor} open={open} onClose={toggleFormPassword}>
      <Box sx={{ padding: 5, height: height / 2 }}>
        <h3 style={{ color: "teal" }}>Ganti Password</h3>
        <FormControl
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            name="password"
            label="Password"
            type={visibility[variables.pass] ? "text" : "password"}
            variant="standard"
            value="10923819238"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => toggleVisibility(variables.pass)}
                  sx={{ cursor: "pointer" }}
                >
                  <VisibilityIcon
                    color={visibility[variables.pass] ? "info" : ""}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            label="Password Baru"
            type={visibility[variables.new_pass] ? "text" : "password"}
            variant="standard"
            value="10923819238"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => toggleVisibility(variables.new_pass)}
                  sx={{ cursor: "pointer" }}
                >
                  <VisibilityIcon
                    color={visibility[variables.new_pass] ? "info" : ""}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            label="Konfirmasi Password Baru"
            type={visibility[variables.confirm_pass] ? "text" : "password"}
            variant="standard"
            value="10923819238"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => toggleVisibility(variables.confirm_pass)}
                  sx={{ cursor: "pointer" }}
                >
                  <VisibilityIcon
                    color={visibility[variables.confirm_pass] ? "info" : ""}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Button
            size="medium"
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              borderRadius: "25px",
              fontWeight: "bold",
              mt: 1,
              float: "right",
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </SwipeableDrawer>
  );
}

export default FormEditPassword;
