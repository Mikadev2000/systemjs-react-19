import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@fg/sample-mfe",
  app: () => System.import<LifeCycles>("@fg/sample-mfe"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
