
const GoogleMap = ({ latitude, longitude }) => {
  return (
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}`}
      allowFullScreen
    ></iframe>
  );
};

export default GoogleMap;
