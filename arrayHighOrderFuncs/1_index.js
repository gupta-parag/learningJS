//map
//find
//filter
//forEach
//reduce
//some
//every

const triple = (d) => {
  console.log(d * 3);
};

const nums2 = [5, 234, , 7865, 42, 213, 46, 86, 6, 34, 786, 6877423, 435];
nums2.forEach(triple);

const nums = [5, 234, , 7865, 42, 213, 46, 86, 6, 34, 786, 6877423, 435];
nums.forEach((d, i, n) => {
  console.log(d * 2);
});
