let valGift = "love";

switch (valGift) {
  case "love":
  case "heart":
    console.log("He loves you");
    break;
  case "chocolates":
  case "rose":
    console.log("He likes you");
    break;
  default:
    console.log("There is still future");
}

//Ternary operator

let status = "off";

let color = status === "online" ? "green" : "red";
console.log(color);
