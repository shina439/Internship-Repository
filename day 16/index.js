let addressBook = [];

function addContact(name,phone,email) {
    let contact = {
        name: name,
        phone: phone,
        email: email,
    };
    addressBook.push(contact);
    console.log(`contact added: ${name}`);

}
//    let addressBook = [];
//     addContact("Aisha", "1234567890", "aisha@mail.com"),
   
    function showContacts() {
    console.log("address book:");
    if (addressBook.length === 0) {
        console.log("no contacts found.");
        return;
    }else {
        addressBook.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.name} | ${contact.phone} | ${contact.email}`);

        });
    }
}
function deleteContact(name) {
    let index = addressBook.findIndex(contact => contact.name === name);

    if (index !== -1) {
        addressBook.splice(index,1);
        console.log(`contact deleted: ${name}`); 
    }else {
        console.log(`contact not found: ${name}`);

    }
}
function searchContact(name) {
    let result = addressBook.filter(contact => contact.name.toLowerCase().includes(name .toLowerCase()));
     
    if (result.length> 0) {
        console.log("search result:");
        result.forEach((contact,i) => {
            console.log(`${i+1}. ${contact.name} | ${contact.phone} | ${contact.email}`);

        });
    }else {
            console.log(`No contact found for "${name}"`);
        }
    }
