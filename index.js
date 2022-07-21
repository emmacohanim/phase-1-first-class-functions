function receivesAFunction (fun) {
    return fun()
}

function returnsANamedFunction () {
    return function named() {
        return named()
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        return "Hi"
    }}



// function iInvokeThings (thing) {
//     return thing();
//   }
  
//   iInvokeThings(function () { return 4 + 5; });
//   // => 9
  
//   iInvokeThings(function () { return 'Hello, ' + 'world!'; });

function runFiveMiles () {
    console.log("Go for a five-mile run")
}

function liftWeights () {
    console.log("Pump iron")
}

function swimFortyLaps() {
    console.log("Swim 40 laps")
}

function Monday() {
    runFiveMiles()
    liftWeights()


function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}

function Monday() {
    exerciseRoutine(liftWeights)
}

function Tuesday() {
    exerciseRoutine(swimFortyLaps)
}
function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}
Monday()
Tuesday()



exerciseRoutine(function () {console.log("Stretch! Work that core!")
})
exerciseRoutine(() => console.log("Get those situps right in"))

function morningRoutine(exercise) {
    let breakfast
    if (exercise===liftWeights) {
        breakfast="protein bar"
    } else if (exercise===swimFortyLaps) {
        breakfast="kale smoothie"
    } else {
        breakfast="granola"
    }
return function () {
    console.log(`Nom nom nom, this ${breakfast} is deliciious!`)
}
}

// function morningRoutine(exercise) {
//     let breakfast;
  
//     if (exercise === liftWeights) {
//       breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//       breakfast = "kale smoothie";
//     } else {
//       breakfast = "granola";
//     }


    exerciseRoutine(exercise)


    // function morningRoutine(exercise) {
    //     let breakfast;
      
    //     if (exercise === liftWeights) {
    //       breakfast = "protein bar";
    //     } else if (exercise === swimFortyLaps) {
    //       breakfast = "kale smoothie";
    //     } else {
    //       breakfast = "granola";
    //     }
      
        exerciseRoutine(exercise);
      
        // we could give this function a name if we wanted to, but since
        // it's only available _inside_ morningRoutine(), we don't need to
        return function () {
          console.log(`Nom nom nom, this ${breakfast} is delicious!`);
        };
      morningRoutine()

       

    }
