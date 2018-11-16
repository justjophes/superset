export default function transformProps(chartProps) {
  const { height, width, payload } = chartProps;
  const { mapboxApiAccessToken, features } = payload.data;
  return {
    height,
    width,
    features,
    mapboxApiAccessToken,
  };
}
