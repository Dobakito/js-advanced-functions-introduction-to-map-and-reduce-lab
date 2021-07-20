// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(i => {
    return i * -1
  })
}

function mapToNoChange(sourceArray){
  return sourceArray.map(i => {
    return  i;
  })
}

function mapToDouble(sourceArray){
  return sourceArray.map(i => {
    return i * 2
  })
}

function mapToSquare(sourceArray){
  return sourceArray.map((i) => {
    return i ** 2
  })
}


function reduceToTotal(sourceArray, startingPoint){
  return sourceArray.reduce((p, c) => {
  return  p + c, startingPoint
  })
}

reduceToAllTrue(sourceArray)

reduceToAnyTrue(sourceArray)
