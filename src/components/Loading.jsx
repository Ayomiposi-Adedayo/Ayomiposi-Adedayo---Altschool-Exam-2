import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  const loading = {
    display: "grid",
    "place-items": "center",
  };

  return <ReactLoading style={loading} type={type} color={color} height={10} width={10} />;
};

export default Loading;
