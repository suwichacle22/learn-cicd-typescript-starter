import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("get auth API key", () => {
  test("get API key", () => {
    expect(getAPIKey({ authorization: "apikey" })).toBe(null);
  });
});
