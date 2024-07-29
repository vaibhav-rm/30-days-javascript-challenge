// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  
    // Task 2: Add a method to update the age property and log the updated age.
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  const person = new Person('John', 'Doe', 30);
  console.log(person.getGreeting());
  person.updateAge(31);
  
  // Activity 2: Class Inheritance
  
  // Task 3: Define a class Student that extends the Person class.
  class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age);
      this.studentId = studentId;
    }
  
    // Method to return the student ID.
    getStudentId() {
      return this.studentId;
    }
  
    // Task 4: Override the greeting method to include the student ID in the message.
    getGreeting() {
      return `${super.getGreeting()} My student ID is ${this.studentId}.`;
    }
  }
  
  const student = new Student('Jane', 'Doe', 20, 'S12345');
  console.log(student.getStudentId());
  console.log(student.getGreeting());
  
  // Activity 3: Static Methods and Properties
  
  // Task 5: Add a static method to the Person class that returns a generic greeting message.
  Person.genericGreeting = function() {
    return 'Hello from the Person class!';
  };
  console.log(Person.genericGreeting());
  
  // Task 6: Add a static property to the Student class to keep track of the number of students created.
  Student.studentCount = 0;
  Student.incrementStudentCount = function() {
    Student.studentCount++;
  };
  Student.incrementStudentCount();
  Student.incrementStudentCount();
  console.log(`Total number of students: ${Student.studentCount}`);
  
  // Activity 4: Getters and Setters
  
  // Task 7: Add a getter method to the Person class to return the full name.
  Object.defineProperty(Person.prototype, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  
  const personWithFullName = new Person('Alice', 'Smith', 28);
  console.log(personWithFullName.fullName);
  
  // Task 8: Add a setter method to update the name properties.
  Object.defineProperty(Person.prototype, 'updateFullName', {
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  });
  
  personWithFullName.updateFullName = 'Bob Johnson';
  console.log(personWithFullName.fullName);
  
  // Activity 5: Private Fields (Optional)
  
  // Task 9: Define a class Account with private fields for balance and methods to deposit and withdraw money.
  class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. Current balance: $${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. Current balance: $${this.#balance}`);
      } else {
        console.log('Invalid withdraw amount.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Task 10: Create an instance of the Account class and test the deposit and withdraw methods.
  const myAccount = new Account(100);
  myAccount.deposit(50);
  myAccount.withdraw(30);
  console.log(`Final balance: $${myAccount.getBalance()}`);
  