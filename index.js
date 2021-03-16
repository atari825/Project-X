window.addEventListener("load", function (event) {
  let incrementButton = document.getElementsByClassName("inc");
  let decrementButton = document.getElementsByClassName("dec");
  //   console.log(incrementButton);
  // console.log(incrementButton.length);
  // console.log(decrementButton);

  // class demo {
  //   constructor(myName, age) {
  //     this.myName = myName;
  //     this.age = age;
  //   }
  // }
  // const test = new demo("john", 5   );
  // document.getElementById("demo").textContent = test.age;

  //Increment
  for (let i = 0; i < incrementButton.length; i++) {
    let button = incrementButton[i];
    button.addEventListener("click", function (event) {
      let buttonClicked = event.target;
      // console.log(buttonClicked);
      let input = buttonClicked.parentElement.children[2];
      // console.log(input)
      let inputValue = input.value;
      // console.log(inputValue);
      let newValue = parseInt(inputValue) + 1;
      // console.log(newValue);
      // input.value = newValue;

      if (newValue <= 3) {
        input.value = newValue;
      } else {
        input.value = 3;
      }
      getTotal();
      getTotal1();
    });
  }
  //Decrement
  for (let i = 0; i < decrementButton.length; i++) {
    let button = decrementButton[i];
    //   console.log("button");
    button.addEventListener("click", function (event) {
      let buttonClicked = event.target;
      // console.log(buttonClicked);
      let input = buttonClicked.parentElement.children[2];
      // console.log(input)
      let inputValue = input.value;
      // console.log(inputValue);
      let newValue = parseInt(inputValue) - 1;
      // console.log(newValue);

      if (newValue >= 1) {
        input.value = newValue;
      } else {
        input.value = 1;
      }
      getTotal();
      getTotal1();
    });
  }
  //hero total Energy
  function getTotal() {
    let totalE = document.querySelectorAll(".input-filed1");
    let total = 0;
    for (let i = 0; i < totalE.length; i++) {
      if (parseInt(totalE[i].value)) {
        total += parseInt(totalE[i].value);
      }
    }
    document.getElementById("total").value = total;
  }
  //enemy total energy
  function getTotal1() {
    let totalE = document.querySelectorAll(".input-filed2");
    let total = 0;
    for (let i = 0; i < totalE.length; i++) {
      if (parseInt(totalE[i].value)) {
        total += parseInt(totalE[i].value);
      }
    }
    document.getElementById("total1").value = total;
  }

  class Weapon {
    constructor(name, att, def, hp, energy) {
      this.name = name;
      this.att = att;
      this.def = def;
      this.hp = hp;
      this.energy = energy;
    }
  }
  let shotGun = new Weapon("Shotgun", 1, 1, 1, 1);
  let rifle = new Weapon("Rifle", 2, 2, 2);
  let uzi = new Weapon("Uzi", 3, 3, 3, 3);
  let machineGun = new Weapon("MachineGun", 4, 4, 4, 4);
  let pistol = new Weapon("Pistol", 5, 5, 5, 5);
  let weaponsArray = [shotGun, rifle, uzi, machineGun, pistol];

  class Frame {
    constructor(name, att, def, hp, agility, energy, bonus) {
      this.name = name;
      this.att = att;
      this.def = def;
      this.hp = hp;
      this.agility = agility;
      this.energy = energy;
      this.bonus = bonus;
    }
  }
  // const test = new Frame(lightFrame);
  // document.getElementById("Frame").textContent = test.name, test.att, test.def;

  let lightFrame = new Frame("light", 1, 1, 1, 1, 1, 1);
  let mediumFrame = new Frame("medium", 2, 2, 2, 2, 2, 2);
  let heavyFrame = new Frame("heavy", 3, 3, 3, 3, 3, 3);
  let frameArray = [lightFrame, mediumFrame, heavyFrame];

  //   class demo {
  //   constructor(myName, age) {
  //     this.myName = myName;
  //     this.age = age;
  //   }
  // }
  // const test = new demo("john", 5   );
  // document.getElementById("demo").textContent = test.age;

  class Mech {
    constructor(fr, ra, la, rl, ll) {
      this.fr = fr;
      this.ra = ra;
      this.la = la;
      this.rl = rl;
      this.ll = ll;
    }
  }

  let weaponSelect = document.getElementsByClassName("weapons");
  for (let ws = 0; ws < weaponSelect.length; ws++) {
    let select = weaponSelect[ws];
    weaponsArray.forEach(function (eachWeapon) {
      let option = document.createElement("option");
      option.text = eachWeapon.name;
      select.add(option);
    });
  }
  let frameSelect = document.getElementsByClassName("frames");
  console.log("frames");
  for (let fs = 0; fs < frameSelect.length; fs++) {
    let select = frameSelect[fs];
    frameArray.forEach(function (eachFrame) {
      let option = document.createElement("option");
      option.text = eachFrame.name;
      select.add(option);
    });
  }

  //   // let variableName = document.getElementById('idOfSomething').value;
  //   let s = document.getElementById('selectWeapon').value;

  //   let finalValue = ???
  // // document.getElementById('idOfOutput').value = finalValue;
  // document.getElementById('selectWeapon').value = finalValue;


}); //this needs to be at the end
