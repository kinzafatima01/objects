// N0 1:

// Array of objects
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
  ];
  
  // Function to calculate total price of each item and all items
  function calculateTotalPrice(items) {
    let grandTotal = 0;
  
    console.log("Item-wise Total Price:");
    items.forEach(item => {
      var totalPrice = item.price * item.quantity;
      grandTotal += totalPrice;
      console.log(`${item.name}: Rs. ${totalPrice}`);
    });
  
    console.log(`\nGrand Total: Rs. ${grandTotal}`);
  }
  
  // Call function
  calculateTotalPrice(itemsArray);
  

// N0 2:


// Create object
var user = {
    name: "kinza",
    email: "kinza@example.com",
    password: "password1234",
    age: 19,
    gender: "Female",
    city: "karachi",
    country: "pakistan"
  };
  
  // Check if age and country properties exist
  console.log("Age property exists:", "age" in user);
  console.log("Country property exists:", "country" in user);
  
  // Check if firstName and lastName properties exist
  console.log("FirstName property exists:", "firstName" in user);
  console.log("LastName property exists:", "lastName" in user);
  
  // Alternative method using hasOwnProperty()
  console.log("Age property exists:", user.hasOwnProperty("age"));
  console.log("Country property exists:", user.hasOwnProperty("country"));
  console.log("FirstName property exists:", user.hasOwnProperty("firstName"));
  console.log("LastName property exists:", user.hasOwnProperty("lastName"));
  
  

// N0 3:


// Constructor function
function Employee(id, name, department, salary) {
    // (link unavailable) = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }
  
  // Create multiple records
  const emp1 = new Employee(1, "batool", "HR", 50000);
  const emp2 = new Employee(2, "amna", "Marketing", 60000);
  const emp3 = new Employee(3, "kinza", "IT", 70000);
  
  console.log(emp1);
  console.log(emp2);
  console.log(emp3);
  

  


// N0 4:

// Constructor function
function Person(name, gender, education, profession) {
    this.name = name;
    this.gender = gender;
    this.education = education;
    this.profession = profession;
  }
  
  // Array to store records
  var people = [];
  
  // Function to add record
  function addRecord() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;
  
    var person = new Person(name, gender, education, profession);
    people.push(person);
  
    // Save to localStorage
    localStorage.setItem("people", JSON.stringify(people));
  
    console.log(people);
    displayRecords();
  }
  
  // Function to display records
  function displayRecords() {
    var recordList = document.getElementById("record-list");
    recordList.innerHTML = "";
  
    people.forEach((person, index) => {
      var record = document.createElement("li");
      record.textContent = `${person.name}, ${person.gender}, ${person.education}, ${person.profession}`;
      recordList.appendChild(record);
    });
  }
  
  // Load records from localStorage
  window.onload = function() {
    if (localStorage.getItem("people")) {
      people = JSON.parse(localStorage.getItem("people"));
      displayRecords();
    }
  }
  