// 3. write an arrow function that will take 2 parameter, one parameter will come from you and the other parameter will be a default parameter. Add these tow parameters and return the result 

const addWithDefault = (Param, defaultParam = 0) => {
    return Param + defaultParam;
  };
  const Value = 5;
  const result = addWithDefault(Value); 
  console.log(result);

  

  