import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";

import { guestlist } from "./guests";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Chips'", () => {
    expect(snacks).toContain("Chips");
  });
});

describe("guest", () => {
    it("should have at least 3 items", () => {
        expect(guestlist.length).toBeGreaterThanOrEqual(3);
    });

    it("should include 'LeBron James'", () => {
        expect(guestlist).toContain("LeBron James");
    });
});
