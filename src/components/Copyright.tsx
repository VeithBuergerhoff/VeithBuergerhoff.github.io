import { Link, Typography } from "@material-ui/core";
import React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <span>Copyright © </span>
      <Link color="inherit" href="/">
        Veith M. Bürgerhoff
      </Link>
      <span> {new Date().getFullYear()}</span>
    </Typography>
  );
}
