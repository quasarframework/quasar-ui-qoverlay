import { describe, expect, it } from "vitest";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

import Plugin, { install, QOverlay, version } from "../src";

describe("QOverlay exports", () => {
  it("exports an installable overlay component", () => {
    expect(QOverlay.name).toBe("QOverlay");
    expect(Plugin.install).toBe(install);
    expect(Plugin.version).toBe(version);
  });

  it("renders on the server without browser globals", async () => {
    const app = createSSRApp({
      render: () =>
        h(
          QOverlay,
          {
            modelValue: true,
            noScroll: true,
          },
          {
            body: () => "SSR overlay body",
          },
        ),
    });

    const html = await renderToString(app);

    expect(html).toContain("q-overlay");
    expect(html).toContain("SSR overlay body");
  });
});
