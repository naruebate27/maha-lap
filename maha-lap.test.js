const MahaLap = require("./maha-lap");

describe("Test Maha-Lap", () => {
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("อาทิตย์");
        expect(result).toEqual(1);
    });

    test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
    });

    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("อังคาร");
        expect(result).toEqual(3);
        });

});
