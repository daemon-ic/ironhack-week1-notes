

class AfterLunch {
  name = "Alvin";
  greeting = "Hello my name is alvina";

  stringsAreArrays() {
    console.log(this.name.length);
  }

  slice() {
    // starts at 0, then gets the next 3 values ( 0, 1, 2);
    console.log(this.name.slice(0, 3));
  }

  substring() {
    // starts at 0, then skips the last 1 character
    console.log(this.name.slice(0, -1));
  }
}

class BooleanOperators {
  a = 5;
  b = "5";
  c = 10;

  equals() {
    // < , > , != , !== , == , === , && , ||
    console.log(this.a !== this.b);
  }
}

class Immutability {
  alterConstArray() {
    // refrence to array cannot change, content can change
    const array = ["r", "b", "y"];
    array.push("z");
    console.log(array);
  }
}

class Conditionals {
  alvinNational = "Indian";
  alvinDiet = "Vegan";
  foodYouEat = "taco";

  ifStatement() {
    if ((this.alvinNational = "Indian")) {
      console.log("Lets get curry");
    }
  }

  ifElse() {
    if (this.alvinNational === "Indian") {
      console.log("Lets get curry");
    } else if (this.alvinNational === "Colombian") {
      console.log("Lets go to Mondogos");
    }
  }

  nested() {
    if (this.alvinNational === "Indian") {
      if (this.alvinDiet === "Vegan") {
        console.log("Lets Eat Indian Vegan food");
      } else {
        console.log("No food for alvin");
      }
    }
  }

  switchCases(nationality) {
    switch (nationality) {
      case "mexican":
        this.foodYouEat = "tacos";
        break;
      case "peruvian":
        this.foodYouEat = "cevice";
        break;
      case "argentenian":
        this.foodYouEat = "asado";
        break;
      default:
        this.foodYouEat = "eat pizza then";
        break;
    }
    console.log(`You are ${nationality}, you might like ${this.foodYouEat}`);
  }
}

class Loops {
  forLoop() {
    const array = 10;
    for (let i = 0; i < array; i++) {
      console.log(i);
    }
  }

  whileLoop() {
    // common in video games
    // keep running while external variable is true

    let alive = "yes";
    while (alive === "yes") {
      console.log("keep playing...");
      // alive = prompt("Are you alive? Enter yes or no");
    }
  }

  doWhile() {
    // differnece is that it runs the thing first then checks
    do {
      console.log(i);
      i++;
    } while (i <= 10);
  }
}

const afterLunchLessons = new AfterLunch();
const boolean = new BooleanOperators();
const immutability = new Immutability();
const conditionals = new Conditionals();
const loop = new Loops();

// --- run function ---

// conditionals.switchCases("peruvian");

// loop.forLoop();
