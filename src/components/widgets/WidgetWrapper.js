import BarGraph from "./BarGraph";
import Filter from "./Filter";
import Map from "./Map.js";

const WidgetWrapper = ({ url, children }) => {
  const dataset = "index-2020-full";
  let { query } = url;

  return (
    <>
      {/* urlsync will automatically adjust the url search params according to ODS's standard */}
      <ods-dataset-context
        context="index"
        index-domain="https://pivothub.youthfulcities.com/"
        index-dataset={dataset}
        index-urlsync="true"
      >
        {children}
      </ods-dataset-context>
    </>
  );
};

export default WidgetWrapper;
