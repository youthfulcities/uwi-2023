import WidgetWrapper from "../components/widgets/WidgetWrapper";
import BarGraph from "../components/widgets/BarGraph";
import Filter from "../components/widgets/Filter";
import Map from "../components/widgets/Map";

const Info = ({ url, setUrl }) => {
  return (
    <>
      <WidgetWrapper url={url}>
        <Filter setUrl={setUrl} />
        <BarGraph />
        <Map />
      </WidgetWrapper>
    </>
  );
};

export default Info;
