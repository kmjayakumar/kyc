import { sum } from "./sum";

test("we test two files sum values", () =>{
    const result = sum(3,4);

    expect(result).toBe(7);
})