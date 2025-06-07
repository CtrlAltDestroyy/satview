import MapView from "./components/MapView";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "1rem" }}>
        🛰️ SatView : Visualiseur NDVI
      </h1>
      <MapView />
    </div>
  );
};

export default App;
