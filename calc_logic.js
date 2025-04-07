const clear = document.querySelector("#op_row1_ac");
const  percentage = document.querySelector("#op_row1_per");
const  remove = document.querySelector("#op_row1_del");
const  division= document.querySelector("#op_row1_div");
const  seven= document.querySelector("#op_row2_7");
const  eight= document.querySelector("#op_row2_8");
const  nine= document.querySelector("#op_row2_9");
const  product= document.querySelector("#op_row2_pro");
const  four= document.querySelector("#op_row3_4");
const  five= document.querySelector("#op_row3_5");
const  six= document.querySelector("#op_row3_6");
const  subtraction= document.querySelector("#op_row3_sub");
const  one= document.querySelector("#op_row4_1");
const  two= document.querySelector("#op_row4_2");
const  three= document.querySelector("#op_row4_3");
const  addition= document.querySelector("#op_row4_add");
const  doub_zero= document.querySelector("#op_row5_00");
const  zero= document.querySelector("#op_row5_0");
const  decimal= document.querySelector("#op_row5_des");
const  equal_to= document.querySelector("#op_row5_eq");

let main_arr=[];
let expression = "";  


clear.onclick = () =>{
    calc.innerHTML = "CLEARED"
    Result.innerHTML = ">.....<"

    
}

percentage.onclick = () =>{
    calc.innerHTML = "%"
    Result.innerHTML = ""
    main_arr.push("%");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

remove.onclick = () =>{}
   

division.onclick = () =>{
    calc.innerHTML = "/"
    Result.innerHTML = ""
    main_arr.push("/");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

seven.onclick = () =>{
    calc.innerHTML = "7"
    Result.innerHTML = ""
    main_arr.push("7");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

eight.onclick = () =>{
    calc.innerHTML = "8"
    Result.innerHTML = ""
    main_arr.push("8");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

nine.onclick = () =>{
    calc.innerHTML = "9"
    Result.innerHTML = ""
    main_arr.push("9");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

product.onclick = () =>{
    calc.innerHTML = "*"
    Result.innerHTML = ""
    main_arr.push("*");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

four.onclick = () =>{
    calc.innerHTML = "4"
    Result.innerHTML = ""
    main_arr.push("4");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

five.onclick = () =>{
    calc.innerHTML = "5"
    Result.innerHTML = ""
    main_arr.push("5");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

six.onclick = () =>{
    calc.innerHTML = "6"
    Result.innerHTML = ""
    main_arr.push("6");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

subtraction.onclick = () =>{
    calc.innerHTML = "-"
    Result.innerHTML = ""
    main_arr.push("-");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

one.onclick = () =>{
    calc.innerHTML = "1"
    Result.innerHTML = ""
    main_arr.push("1");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

two.onclick = () =>{
    calc.innerHTML = "2"
    Result.innerHTML = ""
    main_arr.push("2");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

three.onclick = () =>{
    calc.innerHTML = "3"
    Result.innerHTML = ""
    main_arr.push("3");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

addition.onclick = () =>{
    calc.innerHTML = "+"
    Result.innerHTML = ""
    main_arr.push("+");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

doub_zero.onclick = () =>{
    calc.innerHTML = "00"
    Result.innerHTML = ""
    main_arr.push("00");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

zero.onclick = () =>{
    calc.innerHTML = "0"
    Result.innerHTML = ""
    main_arr.push("0");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

decimal.onclick = () =>{
    calc.innerHTML = "."
    Result.innerHTML = ""
    main_arr.push(".");
    console.log(main_arr.join(""));
    expression = main_arr.join("");
    console.log(expression);
    expression = main_arr.join("");
}

equal_to.onclick = () =>{
    calc.innerHTML = "=";
    Result.innerHTML = "";
    const result = eval(expression); 
    Result.innerHTML = result;
    console.log("Result:", result);
}

