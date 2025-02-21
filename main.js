const contacts = {};

function addContacts(name, number) {
  if (contacts[number]) {
    return "Bu kontakt bor";
  }
  if (number.toString().length === 9) {
    contacts[number] = { name, number: number.toString() };
    return "Kontakt qoshildi";
  } else {
    return "raqam 9ta bolishi kerak";
  }
}

function searchContacts(numbers) {
  let matched = [];
  for (phone in contacts) {
    if (contacts[phone].number.includes(numbers.toString())) {
      matched.push(`${contacts[phone].name}: ${contacts[phone].number}`);
    }
  }
  if (matched.length === 0) {
    return "Kontakt yoq";
  }
  return matched;
}

function deleteContacts(input) {
  if (!isNaN(input) && contacts[input]) {
    delete contacts[input];
    return "kontakt ochib ketdi";
  }

  for (let phone in contacts) {
    if (contacts[phone].name === input) {
      delete contacts[phone];
      return "kontakt ochib ketdi";
    }
  }
  return "Bunday kontakt yoq";
}

function listContacts() {
  let result = [];
  if (Object.keys(contacts).length === 0) {
    return "kontakt yoq";
  }
  for (let contact in contacts) {
    result.push(`${contacts[contact].name}: ${contacts[contact].number}`);
  }

  return result.join("\n");
}

function helpContacts() {
  let commands = [
    { cmd: "addContacts", desc: "Yangi kontakt qo‘shish" },
    { cmd: "searchContacts", desc: "Kontaktni qidirish" },
    { cmd: "deleteContacts", desc: "Kontaktni o‘chirish" },
    { cmd: "list", desc: "Barcha kontaktlarni ko‘rsatish" },
    { cmd: "help", desc: "Mavjud komandalarni ko‘rsatish" },
    { cmd: "exit", desc: "Dasturdan chiqish" },
  ];

  return commands.map((c) => `- ${c.cmd}: ${c.desc}`).join("\n");
}

function exitContacts() {
  return "Dasturdan chiqish...";
}

while (true) {
  let choice = prompt(`${helpContacts()}\n\n Servisdan tanlang`)
    .trim()
    .toLowerCase();

  if (choice === "exit") {
    console.log(exitContacts());
    break;
  } else if (choice === "addcontacts") {
    let name = prompt("Ism kiriting:");
    let number = prompt("Raqam kiriting:");
    console.log(addContacts(name, number));
  } else if (choice === "searchcontacts") {
    let query = prompt("Qidirilayotgan raqamni kiriting:");
    console.log(searchContacts(query));
  } else if (choice === "deletecontacts") {
    let input = prompt("Ochirmoqchi bolgan ism yoki raqamni kiriting:");
    console.log(deleteContacts(input));
  } else if (choice === "list") {
    console.log(listContacts());
  } else if (choice === "help") {
    console.log(helpContacts());
  } else {
    console.log("Notogri buyruq! Qaytadan urinib koring.");
  }
}
