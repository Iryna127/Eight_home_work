console.log("===First task===");
//чуть добавила своиз проверок для треугольника,для практики

let triangle = {
  aSide: 0,
  bSide: 0,
  cSide: 0,
  setValues: function () {
    this.cSide = +prompt("Ведите длинну первой стороны треуголька");
    this.bSide = +prompt("Ведите длинну второй стороны треуголька");
    this.aSide = +prompt("Ведите длинну третей стороны треуголька");
    console.log(triangle.aSide, triangle.bSide, triangle.cSide);
  },

  getPerimeter: function () {
    if (
      this.aSide + this.bSide < this.cSide ||
      this.bSide + this.cSide < this.aSide ||
      this.aSide + this.cSide < this.bSide
    ) {
      console.log("Из этих отрезков нельзя составить треугольник");
      return;
    } else {
      return console.log(this.aSide + this.bSide + this.cSide);
    }
  },
  isEqualSides: function () {
    if (this.aSide === this.bSide && this.bSide === this.cSide) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  },
};

triangle.setValues(this.triangle);
triangle.getPerimeter(this.triangle);
triangle.isEqualSides(this.triangle);

console.log("===Second task===");

var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};
function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, "", "");
format.apply(country, ["[", "]"]);
format.call(country.capital, "", "");
format.apply(country.capital, ["", ""]);
format.apply(country.area, [""]);

console.log("===Third task===");

function createCalculator(num1) {
  return {
    add: function (num2) {
      let rezultadd = typeof num2 === "number" ? (num1 += num2) : NaN;
      return rezultadd;
    },
    sub: function (num2) {
      let rezultsub = typeof num2 === "number" ? (num1 -= num2) : NaN;
      return rezultsub;
    },
  };
}
const calculator = createCalculator(100);

console.log(calculator.add(10));
console.log(calculator.add(10));
console.log(calculator.sub(20));
console.log(calculator.add("qwe"));
