import WidgetWrapper from "../components/widgets/WidgetWrapper";
import BarGraph from "../components/widgets/BarGraph";
import Filter from "../components/widgets/Filter";
import Map from "../components/widgets/Map";
import Card from "../components/widgets/Card";

const Info = ({ url, setUrl }) => {
  return (
    <>
      <WidgetWrapper>
        <Filter setUrl={setUrl} />
        <Card url={url} />
        <BarGraph />
        <Map />
      </WidgetWrapper>
    </>
  );
};

export default Info;
