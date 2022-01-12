const dataset = "index";

const Widgets = () => {
  //TODO: Wrap in useEffect hook so that they will update
  let url = window.location.href;
  let query = window.location.search;
  console.log(url);
  return (
    <>
      <h1>
        <a
          href={`https://pivothub.youthfulcities.com/explore/dataset/index-2020-full/table/${query}`}
        >
          View the full data table
        </a>
      </h1>
      <ods-dataset-context
        context="index"
        index-domain="https://pivothub.youthfulcities.com/"
        index-dataset="index-2020-full"
        index-urlsync="true"
      >
        <ods-facets context="index">
          <ods-facet name="city_cma" disjunctive="true"></ods-facet>
        </ods-facets>

        <ods-map context="index"></ods-map>
        <ods-chart align-month="true">
          <ods-chart-query
            context="index"
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
      </ods-dataset-context>
    </>
  );
};

export default Widgets;
