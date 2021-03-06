import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SnackList from "./components/SnackList";
import CreateSnack from "./components/CreateSnack";
import UserSnacks from "./components/UserSnacks"
import SnackDetail from "./components/SnackDetail"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Switch>
          <Route exact path='/'>
            <SnackList />
          </Route>
          <Route path='/new'>
            <CreateSnack />
          </Route>
          <Route exact path='/:ownerId'>
            <UserSnacks />
          </Route>
          <Route path='/snacks/:snackId'>
            <SnackDetail />
          </Route>
          <Route>
            Page Not Found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
