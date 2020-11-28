const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// console.log(tutorials)

// const titleCased = () => {
//   return tutorials
// }



///// WHY?? MY SOLUTION WORKS BUT DOESN"T PASS TEST /////
// let titleCased = () => {
//     tutorials.map(function(tutorial) {
//       console.log("Hello?")
//       return tutorial.replace(
//         /\w\S*/g,
//         function(txt) {
//           return txt.charAt(0).toUpperCase() + txt.substr(1);
//         }
//       );
//     })
//   }

// console.log("I'm here now")
// console.log(titleCased)


////////////  ⬇️ SOLUTION ⬇️  ////////////

const titleCased = () => {
  return tutorials.map( tutorialTitle => {
    let splitTitles = tutorialTitle.split(' ')
    let capitalizedFirstLetter =
      splitTitles.map( splitTitle => splitTitle.charAt(0).toUpperCase() + splitTitle.slice(1) )
    let reJoinedTitle = capitalizedFirstLetter.join(' ')
    return reJoinedTitle
  })
}

////////////  ⬆️ SOLUTION ⬆️  ////////////
