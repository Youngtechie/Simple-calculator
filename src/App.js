import { useEffect } from "react";
import "./App.css";

function App() {
  let arrD = [];
  let arrN = [];

  function addNumbers() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    arrN.push(parseFloat(display.value));

    display.value = "0";

    arrD.push(arrN[0], "+");

    arrN.splice(0, arrN.length);

    displayW.value = arrD.join(" ");
  }

  function subtractNumbers() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    arrN.push(parseFloat(display.value));

    display.value = "0";

    arrD.push(arrN[0], "-");

    arrN.splice(0, arrN.length);

    displayW.value = arrD.join(" ");
  }

  function multiplyNumber() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    arrN.push(parseFloat(display.value));

    display.value = "0";

    arrD.push(arrN[0], "*");

    arrN.splice(0, arrN.length);

    displayW.value = arrD.join(" ");
  }

  function divideNumber() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    arrN.push(parseFloat(display.value));

    display.value = "0";

    arrD.push(arrN[0], "/");

    arrN.splice(0, arrN.length);

    displayW.value = arrD.join(" ");
  }

  function EqualTo() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");

    arrD.push(parseFloat(display.value));

    let working = arrD.join(" ");

    displayW.value = working;

    let solution = eval(working);

    let solutionS = solution.toFixed(5);

    let solutionA = `${solution}`.split("");

    if (`${solution}`.length > 10 && solutionA.includes(".")) {
      display.value = solutionS;
    } else {
      display.value = solution;
    }

    arrD.splice(0, arrD.length);
  }

  function reset() {
    let display = document.querySelector(".display");
    let displayW = document.querySelector(".displayW");
    display.value = "0";
    displayW.value = "";
  }

  function addpoint() {
    let display = document.querySelector(".display");
    let point = document.querySelector(".point");
    let span = point.querySelector("span");
    let presentN = display.value.split("");

    if (!presentN.includes(".")) {
      display.value = display.value + span.innerHTML;
      display.scrollLeft += 30;
    }
  }

  function deleteprev() {
    let display = document.querySelector(".display");
    let OldN = display.value.split("");
    OldN.pop();
    let presentN = OldN.join("");
    display.value = presentN;
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
    display.style.fontSize = "xx-large";
    let btn = document.querySelectorAll(".number");

    btn.forEach((x) => {
      x.addEventListener("click", () => {
        let span = x.querySelector("span");

        let toNumber = span.innerHTML;

        if (display.value === "0") {
          display.value = parseFloat("0") + parseFloat(toNumber);
        } else {
          display.value = display.value + toNumber;
        }

        if (display.value.length > 14) {
          display.scrollLeft += 50;
        }
      });
    });
  }

  useEffect(() => {
    let id = setTimeout(() => {
      input();
    }, 100);

    return () => clearTimeout(id);
  });

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
