import { describe, it, expect } from "vitest";
import { snacks1 } from "./snacks";

import { guestlist } from "./guests.ts";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks1.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Chips'", () => {
    expect(snacks1).toContain("Chips");
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
