const WidgetWrapper = ({ children }) => {
  const dataset = "refugee-data";

  return (
    <>
      {/* urlsync will automatically adjust the url search params according to ODS's standard */}
      <ods-dataset-context
        context="index"
        index-domain="https://pivothub.youthfulcities.com/"
        index-dataset={dataset}
        index-urlsync="false"
      >
        {children}
      </ods-dataset-context>
    </>
  );
};

export default WidgetWrapper;
