const dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

//Vi forventer et svar der hedder [5, 20], fordi den henter datasættet der står i array 0
console.log(dataset[0,0]);
//Vi forventer et svar der hedder 5, fordi den henter det 0'de element i arrayet
console.log(dataset[0][0]);
//Vi forventer et svar der hedder 480, fordi den henter det 0'de element i array nr 1
console.log(dataset[1][0]);
//Vi forventer et svar der hedder 33, fordi den henter element 1 i array nr 3
console.log(dataset[3][1]);
//Vi forventer et svar der hedder 95, fordi den henter element 1 i array 4
console.log(dataset[4][1]);



