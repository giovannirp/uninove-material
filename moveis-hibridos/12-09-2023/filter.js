const ages = [32, 33, 16, 40, 19, 11, 8, 50];

const resultAgesOr18 = ages.filter((item) => {
  return item >= 18;
});

console.log(resultAgesOr18);