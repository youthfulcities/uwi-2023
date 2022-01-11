import "./App.css";

const dataset = "index";

function App() {
  return (
    <div className="App">
      <ods-dataset-context
        context={dataset}
        index-domain="https://pivothub.youthfulcities.com/"
        index-dataset="index-2020-full"
        index-urlsync="true"
      >
        <ods-facets context="index">
          <ods-facet name="city_cma" disjunctive="true"></ods-facet>
        </ods-facets>

        <ods-map context={dataset}></ods-map>
        <ods-chart align-month="true">
          <ods-chart-query
            context={dataset}
            field-x="city"
            maxpoints="15"
            sort="serie1-1"
          >
            <ods-chart-serie
              expression-y="value"
              label-y="value (averaged)"
              chart-type="column"
              function-y="AVG"
              color="#4F66AF"
              display-values="false"
              display-stack-values="false"
              scientific-display="true"
              color-thresholds='[{"color":"#EE605B","value":100},{"color":"#884C41","value":50},{"color":"#F7BCB7","value":25},{"color":"#B8D98D","value":15},{"color":"#4F66AF","value":10},{"color":"#FBD166","value":1}]'
            ></ods-chart-serie>
          </ods-chart-query>
        </ods-chart>
        <button onClick={() => window.history.push("/")}>Reset</button>
      </ods-dataset-context>
    </div>
  );
}

export default App;
