// function quote(fighter, callback) {
//   return callback(fighter);
// }

// const George_Saint_Pierre = (fighter) => {
//   return (
//     fighter.toLowerCase() === "george saint pierre" &&
//     "I am not impressed by your performance."
//   );
// };

// const Conor_McGregor = (fighter) => {
//   return (
//     fighter.toLowerCase() === "conor mcgregor" &&
//     "I'd like to take this chance to apologize.. To absolutely NOBODY!"
//   );
// };
// console.log(quote("geOrGe saiNT pieRRE", George_Saint_Pierre));
// console.log(quote("Conor McGregor", Conor_McGregor));

function quote(fighter) {
  switch (fighter.toLowerCase()) {
    case "george saint pierre":
      console.log("I am not impressed by your performance.");
      break;
    case "conor mcgregor":
      console.log(
        "I'd like to take this chance to apologize.. To absolutely NOBODY!"
      );
      break;
    default:
      console.log("");
      break;
  }
}
quote("geOrGe saiNT pieRRE");
quote("Conor McGregor");
quote("Conor ");
