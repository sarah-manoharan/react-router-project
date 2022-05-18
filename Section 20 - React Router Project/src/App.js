import { Switch, Route, Redirect } from "react-router-dom";

import QuoteDetails from "./pages/QuoteDetails";
import AddQuote from "./pages/AddQuote";
import ViewQuotes from "./pages/ViewQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <ViewQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/addquote">
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
