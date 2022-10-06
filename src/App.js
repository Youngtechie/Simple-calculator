import { useEffect } from "react"; //Get useEffect hook...
import "./App.css"; //Stylesheet

function App() {
  let arrD = []; //Create an empty array
  let arrN = []; //Create an empty array

  function addNumbers() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    //Get value and turn it to a float then push into empty array - 'arrN'
    arrN.push(parseFloat(display.value));

    //After pushing then set the value to 0
    display.value = "0";

    /**
     * Push the value in arrN into an empty array called - arrD.
     * Indicate the action (addition).
     */

    arrD.push(arrN[0], "+");

    //Clean up the array - arrN

    arrN.splice(0, arrN.length);

    /**
     * From arrD, get the inputs and join them with one space between them.
     * Display the value to the section 'displayW' while waiting for other input.
     */
    displayW.value = arrD.join(" ");
  }

  function subtractNumbers() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    //Get value and turn it to a float then push into empty array - 'arrN'
    arrN.push(parseFloat(display.value));

    //After pushing then set the value to 0
    display.value = "0";

    /**
     * Push the value in arrN into an empty array called - arrD.
     * Indicate the action (subtraction).
     */

    arrD.push(arrN[0], "-");

    //Clean up the array - arrN

    arrN.splice(0, arrN.length);

    /**
     * From arrD, get the inputs and join them with one space between them.
     * Display the value to the section 'displayW' while waiting for other input.
     */
    displayW.value = arrD.join(" ");
  }

  function multiplyNumber() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    //Get value and turn it to a float then push into empty array - 'arrN'
    arrN.push(parseFloat(display.value));

    //After pushing then set the value to 0
    display.value = "0";

    /**
     * Push the value in arrN into an empty array called - arrD.
     * Indicate the action (multiplication).
     */
    arrD.push(arrN[0], "*");

    //Clean up the array - arrN
    arrN.splice(0, arrN.length);

    /**
     * From arrD, get the inputs and join them with one space between them.
     * Display the value to the section 'displayW' while waiting for other input.
     */
    displayW.value = arrD.join(" ");
  }

  function divideNumber() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    //Get value and turn it to a float then push into empty array - 'arrN'
    arrN.push(parseFloat(display.value));

    //After pushing then set the value to 0
    display.value = "0";

    /**
     * Push the value in arrN into an empty array called - arrD.
     * Indicate the action (division).
     */
    arrD.push(arrN[0], "/");

    //Clean up the array - arrN
    arrN.splice(0, arrN.length);

    /**
     * From arrD, get the inputs and join them with one space between them.
     * Display the value to the section 'displayW' while waiting for other input.
     */
    displayW.value = arrD.join(" ");
  }

  function EqualTo() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    //
    /**
     * Get new value and turn it to a float.
     * Then input it into the array containing the operation - 'arrD'
     */
    arrD.push(parseFloat(display.value));

    //Get the values in arrD, join them with a space and store in a new variable.
    let working = arrD.join(" ");

    //Set the value (string) in the displayW section.
    displayW.value = working;

    //Set the solution of the statement in 'working' to a Javascript valid code.
    let solution = eval(working);

    //Create new variable and set the solution to 5 decimal place.
    let solutionS = solution.toFixed(5);

    //Create new variable, split the solution into 1 charcters in an array.
    let solutionA = `${solution}`.split("");

    /**
     * IF var (solution's length) is greater than 10 and
     * var (solutionA[an array] includes '.') to indicate it is a decimal number
     * THEN set display value to a number of 5 d.p.
     * ELSE set display value to the number gotten.
     */
    if (`${solution}`.length > 10 && solutionA.includes(".")) {
      display.value = solutionS;
    } else {
      display.value = solution;
    }

    //Clean up the array - arrD
    arrD.splice(0, arrD.length);
  }

  function reset() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    //Set display value to '0' initial state.
    display.value = "0";

    //Set displayW empty
    displayW.value = "";

    //Clean up the array - arrD
    arrD.splice(0, arrD.length);
  }

  function addpoint() {
    let display = document.querySelector(".display");
    let point = document.querySelector(".point");
    let span = point.querySelector("span");
    let presentN = display.value.split("");

    /**
     * IF the var present of type array does not includes '.'
     * Set display value to - display value + point btn clicked.
     * and if the number overflow, auto scroll-left by 30.
     */
    if (!presentN.includes(".")) {
      display.value = display.value + span.innerHTML;
      display.scrollLeft += 30;
    }
  }

  function deleteprev() {
    let display = document.querySelector(".display");

    //Set new variable and
    //make it an array containing the present display value in one just one characters per element.
    let OldN = display.value.split("");

    //Kick out the last one character of the display value
    OldN.pop();

    //Set the Var New value (presentN) to store the new characters in array (OldN).
    let presentN = OldN.join("");

    //Render the new value into display section.
    display.value = presentN;

    /**
     * While deleting....
     * Set display to initial state '0'...
     * IF the OldN array length is less than 1.
     * Else IF OldN array length is < 2 and (OldN array index 0 element) is 'minus'
     * Else IF OldN array length is < 3 and (OldN array index 1 element) is 'a point'
     */
    if (OldN.length < 1) {
      display.value = "0";
    } else if (OldN.length < 2 && OldN[0] === "-") {
      display.value = "0";
    } else if (OldN.length < 3 && OldN[1] === ".") {
      display.value = "0";
    }
  }

  function addRminus() {
    let display = document.querySelector(".display");
    let presentN = display.value.split("");

    /**
     * Get the present number in display value, split into an array of one characters
     * Then.
     * IF the display section value is not equal to '0' and
     * the element of index 0 in the array presentN is not '+' nor '-'
     *
     * Then add a new character ('-') in the index (0) of the array presentN,..
     * join the characters in presentN and display the value.
     *
     * Else if the character ('-') is in index 0 of the presentN...
     * remove the index 0 of presentN i.e the '-'.
     */
    if (display.value !== "0" && presentN[0] !== "+" && presentN[0] !== "-") {
      presentN.unshift("-");
      let joined = presentN.join("");
      display.value = joined;
    } else if (presentN[0] === "-") {
      presentN.shift();
      let normal = presentN.join("");
      display.value = normal;
    }
  }

  function input() {
    let display = document.querySelector(".display");
    display.style.fontSize = "xx-large"; //Set display value font size to xx-large

    //Get all btn labeled with the className = 'number'.
    let btn = document.querySelectorAll(".number");

    //Get each button in btn to work on each.
    btn.forEach((x) => {
      //Set an event to each buttons under btn.
      x.addEventListener("click", () => {
        let span = x.querySelector("span");

        let toNumber = span.innerHTML;

        //IF display section value is at the initial state '0'
        //Set the value as 0 + the button value clicked number.
        if (display.value === "0") {
          display.value = parseFloat("0") + parseFloat(toNumber);
        }
        //Else just set the present display value + the button value clicked number.
        else {
          display.value = display.value + toNumber;
        }

        //IF the display value length overflows, set auto scroll left by 30.
        if (display.value.length > 14) {
          display.scrollLeft += 50;
        }
      });
    });
  }

  //Set an effect to render later, which takes a timeout of 100milliseconds after page loading
  //Then render the function called input().
  useEffect(() => {
    let id = setTimeout(() => {
      input();
    }, 100);

    //Clear the timeout after the rendering the function.
    return () => clearTimeout(id);
  });

  //Return to the screen a simple calculator.
  return (
    <main className="calculatorDesign">
      <input type={"text"} value={"0"} className="display" readOnly />
      <input type={"text"} className={"displayW"} readOnly />
      <section className="btns">
        <section className="btnC">
          <button className="btn one number" title="Number One">
            <span>1</span>
          </button>
          <button className="btn two number" title="Number Two">
            <span>2</span>
          </button>
          <button className="btn three number" title="Number Three">
            <span>3</span>
          </button>
          <button
            className="btn addRminus"
            title="Plus or Minus"
            onClick={addRminus}
          >
            <span>+/-</span>
          </button>
          <button className="btn reset" title="Clear" onClick={reset}>
            <span>AC</span>
          </button>
        </section>

        <section className="btnC">
          <button className="btn four number" title="Number Four">
            <span>4</span>
          </button>
          <button className="btn five number" title="Number Five">
            <span>5</span>
          </button>
          <button className="btn six number" title="Number Six">
            <span>6</span>
          </button>
          <button
            className="btn add"
            title="Addition sign"
            onClick={addNumbers}
          >
            <span>+</span>
          </button>
          <button
            className="btn minus"
            title="Subtraction sign"
            onClick={subtractNumbers}
          >
            <span>-</span>
          </button>
        </section>

        <section className="btnC">
          <button className="btn seven number" title="Number Seven">
            <span>7</span>
          </button>
          <button className="btn eigth number" title="Number Eight">
            <span>8</span>
          </button>
          <button className="btn nine number" title="Number Nine">
            <span>9</span>
          </button>
          <button
            className="btn multiply"
            title="Multiply sign"
            onClick={multiplyNumber}
          >
            <span>*</span>
          </button>
          <button
            className="btn divide"
            title="Divide sign"
            onClick={divideNumber}
          >
            <span>/</span>
          </button>
        </section>

        <section className="btnC">
          <button className="btn zero number" title="Zero">
            <span>0</span>
          </button>
          <button className="btn twozero number" title="Two zeroes">
            <span>00</span>
          </button>
          <button className="btn dot point" title="Point" onClick={addpoint}>
            <span>.</span>
          </button>
          <button className="btn equal" title="Equal to sign" onClick={EqualTo}>
            <span>=</span>
          </button>
          <button className="btn delete" title="Backspace" onClick={deleteprev}>
            <span>DEL</span>
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
