import React, { useState } from "react";
import ProfileScreens from "./ProfileScreens";

function ProfileContainer(props) {
  const { session } = props.location.state;
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState({
    pass: false,
    new_pass: false,
    confirm_pass: false,
  });

  const toggleFormPassword = () => {
    setOpen(!open);
  };

  const toggleVisibility = (index) => {
    setVisibility({
      ...visibility,
      [index]: !visibility[index],
    });
  };

  const variables = {
    pass: "pass",
    new_pass: "new_pass",
    confirm_pass: "confirm_pass",
  };

  return (
    <ProfileScreens
      session={session}
      toggleFormPassword={toggleFormPassword}
      toggleVisibility={toggleVisibility}
      variables={variables}
      open={open}
      visibility={visibility}
    />
  );
}

export default ProfileContainer;
