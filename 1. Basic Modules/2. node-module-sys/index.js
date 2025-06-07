  const firstModule= require ('./first-module')

  console.log(firstModule.add(12,98))

  console.log(firstModule.divide(12,98))

  try{
    console.log("trying to divide by 0");
    let result = firstModule.divide(10,0);
    console.log(result);
  }

  catch(error){
    console.log('caught an error', error.message)
  }

  