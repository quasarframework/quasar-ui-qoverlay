import { defineBoot } from "@quasar/app-vite";
import QOverlay from "@quasar/quasar-ui-qoverlay";

export default defineBoot(({ app }) => {
  app.use(QOverlay);
});
