const contacts = {

};

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
    { cmd: "add", desc: "Yangi kontakt qo‘shish" },
    { cmd: "search", desc: "Kontaktni qidirish" },
    { cmd: "delete", desc: "Kontaktni o‘chirish" },
    { cmd: "list", desc: "Barcha kontaktlarni ko‘rsatish" },
    { cmd: "help", desc: "Mavjud komandalarni ko‘rsatish" },
    { cmd: "exit", desc: "Dasturdan chiqish" },
  ];

  return commands.map((c) => `- ${c.cmd}: ${c.desc}`).join("\n");
}

function exitContacts() {
  return "Dasturdan chiqish...";
}

//chatgpt dan test qilish uchun misollar oldim

//TODO addContacts
console.log(addContacts("Ali", "941234567"));  // ✅ "Kontakt qoshildi"
console.log(addContacts("Vali", "941234568")); // ✅ "Kontakt qoshildi"
console.log(addContacts("Ali", "941234567"));  // ❌ "Bu kontakt bor" (Duplicate)
console.log(addContacts("Botir", "12345"));    // ❌ "raqam 9ta bolishi kerak"

//TODO searchContacts
console.log(searchContacts("941"));   
// ✅ ["Ali: 941234567", "Vali: 941234568"]

console.log(searchContacts("567"));   
// ✅ ["Ali: 941234567"]

console.log(searchContacts("000"));   
// ❌ "Kontakt yoq"

//TODO deleteContacts
console.log(deleteContacts("Ali"));   
// ✅ "kontakt ochib ketdi"

console.log(deleteContacts("941234568")); 
// ✅ "kontakt ochib ketdi"

console.log(deleteContacts("941234569")); 
// ❌ "Bunday kontakt yoq"

//TODO listContacts
console.log(listContacts());  
// ✅ ["Ali: 941234567", "Vali: 941234568"]

// After deleting all contacts:
console.log(listContacts());  
// ❌ "kontakt yoq"

//TODO helpContacts
console.log(helpContacts());
/* ✅
add: Yangi kontakt qo‘shish
search: Kontaktni qidirish
delete: Kontaktni o‘chirish
list: Barcha kontaktlarni ko‘rsatish
help: Mavjud komandalarni ko‘rsatish
exit: Dasturdan chiqish
*/

//TODO exitContacts
console.log(exitContacts()); 
// ✅ "Dasturdan chiqish..."




