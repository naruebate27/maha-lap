const MahaLap = require("./maha-lap");

describe("Test Maha-Lap", () => {
    test("Test Tamnai with อาทิตย์", () => {
        const result = MahaLap.tamnaiWithDay("อาทิตย์");
        expect(result).toEqual(1);
    });

    test("Test Tamnai with จันทร์", () => {
        const result = MahaLap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });

    test("Test Tamnai with อังคาร", () => {
        const result = MahaLap.tamnaiWithDay("อังคาร");
        expect(result).toEqual(3);
    });

    test("Test Tamnai with พุธ", () => {
        const result = MahaLap.tamnaiWithDay("พุธ");
        expect(result).toEqual(4);
    });

    test("Test Tamnai with พฤหัสบดี", () => {
        const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
        expect(result).toEqual(5);
    });

    test("Test Tamnai with ศุกร์", () => {
        const result = MahaLap.tamnaiWithDay("ศุกร์");
        expect(result).toEqual(6);
    });

    test("Test Tamnai with เสาร์", () => {
        const result = MahaLap.tamnaiWithDay("เสาร์");
        expect(result).toEqual(7);
    });

    test("Test Tamnai with สงกรานต์", () => {
        const result = MahaLap.tamnaiWithDay("สงกรานต์");
        expect(result).toEqual(13);
    });

    test("Test Tamnai with ฮาโลวีน", () => {
        const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
        expect(result).toEqual(31);
    });

    test("Test Tamnai with คริสมาสต์", () => {
        const result = MahaLap.tamnaiWithDay("คริสมาสต์");
        expect(result).toEqual(25);
    });

    test("Test Tamnai with story", () => {
        const result = MahaLap.tamnaiWithStory("งู");
        expect(result).toEqual(3);
    });

    test("Test Tamnai with story", () => {
        const result = MahaLap.tamnaiWithStory("วัว");
        expect(result).toEqual(6);
    });

    test("Test Tamnai with story", () => {
        const result = MahaLap.tamnaiWithStory("พยานาค");
        expect(result).toEqual(21);
    });

    test("Test Tamnai with Time กลางวัน random = 0.98 return 0.98", () => {
        global.Math.random = jest.fn(() => 0.98);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.98);
    });

    test("Test Tamnai with Time กลางวัน random = 0.4 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.5);
    });

    test("Test Tamnai with Time กลางคืน random = 0.4 return 0.4", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.4);
    });

    test("Test Tamnai with Time กลางคืน random = 0.64 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.64);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.5);
    });

    test("Test Namo with ฝัน วันเสาร์ ตอนกลางคืน เห็น วัว", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.namo("เสาร์","วัว","กลางคืน");
        expect(result).toEqual(134);
    });

    test("Test Namo with ฝัน วันสงกรานต์ ตอนกลางคืน เห็น พยานาค", () => {
        global.Math.random = jest.fn(() => 0.64);
        const result = MahaLap.namo("สงกรานต์","พยานาค","กลางคืน");
        expect(result).toEqual(345);
    });

});
