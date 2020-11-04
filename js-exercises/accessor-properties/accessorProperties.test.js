import {
  accessorProperties
} from "./accessorProperties";

describe("Accessor Properties", () => {
  test("accessorProperties", () => {
    const obj = accessorProperties();
    obj.number = 0;
    expect(obj.number).toBe(0);
    obj.number = 1;
    expect(obj.number).toBe(1);
    obj.number = 2;
    expect(obj.number).toBe(10);
    obj.number = 26;
    expect(obj.number).toBe(11010);
    obj.number = 67;
    expect(obj.number).toBe(1000011);
  });
});