import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Copyright from "./Copyright";
import Header from "./Header";
import Timeline from "./timeline/timeline";

export default class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        <Container maxWidth="sm">
          <Timeline />
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Portfolio starter using material-ui, react, and typescript
            </Typography>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}
