async function division(num1, num2){
    try {
        if (num2 === 0) throw new Error("can't divide by 0");
        return num1 / num2;
    } catch (error) {
        console.log("error:", error);
        return null;
    }
}

async function mainFn(){
    console.log(await division(10, 2)); // Should print: 5
    console.log(await division(10, 0)); // Should print: error: [Error: can't divide by 0] and then null
}

mainFn()
