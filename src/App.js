import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyDrawer from "./MyDrawer";
import MyAppBar from "./MyAppBar";
import { Route, Switch } from "react-router-dom";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  main: {
    width: `calc(100% - ${drawerWidth})`,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const [searchString, setSearchString] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyDrawer />
      <div className={classes.main}>
        <MyAppBar
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/images">
              <Images />
            </Route>
            <Route path="/text">
              <Text />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Images() {
  return <h2>Images</h2>;
}

function Text() {
  return <h2>Text</h2>;
}
