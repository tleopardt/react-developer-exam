import React from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

function FormEditProfile(props) {
  const { session, toggleFormPassword } = props;

  return (
    <FormControl
      variant="standard"
      component="fieldset"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextField
        name="employee_name"
        label="Nama"
        type="text"
        variant="standard"
        value={session.employee_name}
        sx={{ width: "90%" }}
        size="medium"
        disabled
      />
      <TextField
        name="position_name"
        label="Jabatan"
        type="text"
        variant="standard"
        value={session.position_name}
        sx={{ width: "90%" }}
        disabled
      />
      <TextField
        name="phone"
        label="Nomor Handphone"
        type="text"
        variant="standard"
        value="0192839128391"
        sx={{ width: "90%" }}
        disabled
      />
      <TextField
        name="alamat"
        label="Alamat"
        type="text"
        variant="standard"
        value=" "
        sx={{ width: "90%" }}
        disabled
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        variant="standard"
        value="10923819238"
        sx={{ width: "90%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={toggleFormPassword}>
              <LockIcon />
            </InputAdornment>
          ),
        }}
        disabled
      />
      <TextField
        name="employee_code"
        label="Kode"
        type="text"
        variant="standard"
        value={session.employee_code}
        sx={{ width: "90%" }}
        disabled
      />
    </FormControl>
  );
}

export default FormEditProfile;
