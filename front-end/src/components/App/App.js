import "./App.scss";

function App() {
  return (
    <div className="app">
      {/* Header Component Will Go Here */}
      <Header />
      <Switch>
        {/* 1.1 */}
        <Route exact path="/warehouse-main" render={(routeProps) => <Home {...routeProps} />} />
        {/* On warehouse main there will be links to take you to specific pages for warehouse details, i.e.
           http://localhost:3000/warehouse-main/33sdfs8d7s9df, this will conditionally generate content based on props (think video reel) */}
        {/* 4.1 */}
        <Route path="/inventory-main" render={(routeProps) => <Home {...routeProps} />} />
        {/* On warehouse main there will be links to take you to specific pages for warehouse details, i.e.
           http://localhost:3000/warehouse-main/33sdfs8d7s9df, this will conditionally generate content based on props (think video reel) */}
        {/* ---------------------------------------------- */}
        {/* 2.0 */}
        <Route path="/inventory-main/:id" render={(routeProps) => <ContentDetails {...routeProps} />} />
        {/* 5.0 */}
        <Route path="/warehouse-main/:id" render={(routeProps) => <ContentDetails {...routeProps} />} />
        {/* ---------------------------------------------- */}
        {/* 3.1 */}
        <Route path="/warehouse-main/:id/edit" render={(routeProps) => <ContentEdit {...routeProps} />} />
        {/* 6.1 */}
        <Route path="/inventory-main/:id/edit" render={(routeProps) => <ContentEdit {...routeProps} />} />
        {/* ---------------------------------------------- */}
        {/* 3.2 */}
        <Route path="/inventory-main/new-item" render={(routeProps) => <ContentNew {...routeProps} />} />
        {/* 6.2 */}
        <Route path="/warehouse-main/new-item" render={(routeProps) => <ContentNew {...routeProps} />} />
        {/* ---------------------------------------------- */}

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
