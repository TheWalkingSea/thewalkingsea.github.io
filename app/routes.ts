import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("alexa-led-controller", "routes/alexa-led-controller.tsx"),
] satisfies RouteConfig;
