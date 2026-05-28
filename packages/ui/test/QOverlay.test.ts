import { describe, expect, it } from "vitest";

import Plugin, { install, QOverlay, version } from "../src";

describe("QOverlay exports", () => {
  it("exports an installable overlay component", () => {
    expect(QOverlay.name).toBe("QOverlay");
    expect(Plugin.install).toBe(install);
    expect(Plugin.version).toBe(version);
  });
});
