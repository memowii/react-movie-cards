import { formatWithOptions } from "util";
import { figureStarsForm } from "./index";

describe("figureStarsForm function", () => {
  test("it should return the correct values for 0.", () => {
    const value: number = 0;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [0, 0, 5];

    expect(result).toEqual(correctResult);
  });
  
  test("it should return the correct values for 0.5.", () => {
    const value: number = 0.5;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [0, 1, 4];

    expect(result).toEqual(correctResult);
  });
  
  test("it should return the correct values for 0.4.", () => {
    const value: number = 0.4;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [0, 0, 5];

    expect(result).toEqual(correctResult);
  });
  
  test("it should return the correct values for 0.6.", () => {
    const value: number = 0.6;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [0, 1, 4];

    expect(result).toEqual(correctResult);
  });

  test("it should return the correct values for 1.", () => {
    const value: number = 1;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [1, 0, 4];

    expect(result).toEqual(correctResult);
  });

  test("it should return the correct values for 1.3.", () => {
    const value: number = 1.3;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [1, 0, 4];

    expect(result).toEqual(correctResult);
  });
  
  test("it should return the correct values for 1.8.", () => {
    const value: number = 1.8;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [1, 1, 3];

    expect(result).toEqual(correctResult);
  });

  test("it should return the correct values for 2.", () => {
    const value: number = 2;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [2, 0, 3];

    expect(result).toEqual(correctResult);
  });

  test("it should return the correct values for 4.9.", () => {
    const value: number = 4.9;
    const result: number[] = figureStarsForm(value);
    const correctResult: number[] = [4, 1, 0];

    expect(result).toEqual(correctResult);
  });
});
