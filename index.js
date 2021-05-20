const convertFahrToCelsius = (temp) => {
  let celcius;
  if(Array.isArray(temp)) {
    return `${temp} is not a valid number but a/an array.`
  }
  if(typeof temp === "object") {
    return `{"temp":${temp.temp}} is not a valid number but a/an object.`
  }
  if( typeof temp === 'string'){
    celcius = (Number(temp) - 32) * 5/9;
    return celcius.toFixed(4);
  }
  celcius = (temp - 32) * 5/9;
  return celcius

}



const checkYuGiOh = (n) => {

  if(isNaN(n)){
    if(typeof(n) === "string"){
      return `invalid parameter: "${n}"`
    }
  }
  let newArray = []

  for (let i = 1; i <= n; i++){
    if(i % 2 === 0 && i % 3===0 && i % 5 === 0){
      newArray.push('yu-gi-oh')
    }else if(i % 2 === 0 && i % 3 === 0) {
      newArray.push("yu-gi")
    }else if( i % 2 === 0 && i % 5 === 0){
      newArray.push("yu-oh")
    }else if(i % 3 === 0 && i % 5 === 0){
      newArray.push("gi-oh")
    }else if(i % 2 === 0){
      newArray.push("yu")
    }else if(i % 3 === 0){
      newArray.push("gi")
    }else if(i % 5 === 0){
      newArray.push("oh")
    }else{
      newArray.push(i)
    }
  }
  return newArray;
}