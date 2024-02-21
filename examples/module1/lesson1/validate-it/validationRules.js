const isSmaller = (validatedNumer, comparedValue) => {
  return validatedNumer < comparedValue;
};

const isHigher = (validatedNumer, comparedValue) => {
  return validatedNumer > comparedValue;
};

const isEven = (validatedNumer) => {
  return validatedNumer % 2 == 0;
};

export const rangeAndIfEvenValidation = (validatedNumer, min, max) => {
  const result = [
    isSmaller(validatedNumer, max),
    isHigher(validatedNumer, min),
    isEven(validatedNumer),
  ];
  console.log(result.every((el) => el));
  return result.every((el) => el);
};
