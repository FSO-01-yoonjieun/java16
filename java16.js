// 1. JavaScript에서 클래스를 정의하는 키워드는 무엇인가요? class
// 2. `constructor`는 클래스에서 어떤 역할을 하나요? 클래스로 생성된 객체의 속성 초기화.
// 3. 아래 코드에서 `alice` 객체의 `greet` 메서드를 호출하면 출력될 결과는 무엇인가요?
    

    class Person {
      constructor(name) {
        this.name = name;
      }
    
      greet() {
        console.log(`Hello, my name is ${this.name}.`);
      }
    }
    
    const alice = new Person('Alice');
    
    alice.greet();

    // Hello, my name is Alice.


// 4. JavaScript에서 함수가 인수로 전달되는 방식을 무엇이라고 하나요? 콜백함수
// 5. 아래 코드는 콜백 함수의 예시입니다. `greet` 함수에서 `callback` 함수를 호출하는 부분을 채워 넣으세요.
    

    function greet(name, callback) {
      console.log(`Hello, ${name}`);
      callback();
    }
    
    function sayGoodbye() {
      console.log('Goodbye!');
    }
    
    greet('Alice', sayGoodbye);

    
// 6. 다음 코드에서 `result` 변수의 값은 무엇인가요?
    

    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.map(num => num * 2);
    // [2, 4, 6, 8, 10]


// 7. 클로저는 함수와 그 함수가 선언된 **무엇**의 조합인가요? 어휘적 환경
// 8. 아래 코드를 실행하면 어떤 결과가 나오는지 설명하세요.
    
    function outer() {
      let count = 0;
      
      return function inner() {
        count++;
        console.log(count);
      };
    }
    
    const counter2 = outer();
    
    counter2(); //1
    counter2(); //2
    
// 9. 고차 함수란 **무엇**을 인수로 받거나 반환하는 함수인가요? 함수를
// 10. JavaScript에서 비동기 작업을 처리하기 위해 주로 사용하는 방법은 무엇인가요?
//     - 답: callback, `Promise`, `async/await`

// 11. 객체에서 메서드를 공유하여 메모리 효율성을 높이는 데 사용하는 JavaScript의 개념은 무엇인가요?
        // 프로토타입

// 12. 프로토타입 체인을 통해 JavaScript 객체가 다른 객체의 속성이나 메서드를 **무엇**하나요? 상속합니다.

// 13. 다음 코드에서 `speak` 메서드를 재정의(오버라이딩)하여 `Dog` 클래스가 `Rex barks`를 출력하도록 수정하세요.

    
    class Animal {
      constructor(name) {
        this.name = name;
      }
    
      speak() {
        console.log(`${this.name} makes a sound.`);
      }
    }
    
    class Dog extends Animal {
      speak(){
        console.log(`${this.name} barks.`);
      }
    }
    
    const dog = new Dog('Rex');
    dog.speak(); // Rex barks

    
// 14. 다음 코드를 고차 함수를 사용해 중복을 줄여보세요.
    
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action();
    }
  }
  
  function repeatTwice() {
    repeat ( 2 , ( ) => {
    console.log('Repeated twice');
     });
  }
  
  
  function repeatThrice() {
    repeat ( 3 , ( ) => {
    console.log('Repeated thrice');
     });
  }

  repeatTwice();
  repeatThrice();

  
// 15. 클로저의 특성상 내부 함수에서 외부 함수의 변수를 참조할 수 있는데, 이때 외부 함수가 종료된 후에도 그 변수가 사라지지 않는 이유는 무엇인가요?
//  클로저가 생성될 때 함수가 선언된 어휘적 환경을 기억하기 때문에.

// 16. 아래 `Car` 생성자 함수에 `drive` 메서드를 추가해, 각 인스턴스가 `Driving [브랜드]`를 출력하도록 해보세요.
    
function Car(brand) {
    this.brand = brand;
  
    // 여기에 코드를 작성해보세요.
    this.drive = function () {
      console.log(`Driving [${this.brand}]`);
    };
  }
  
  const car1 = new Car("Tesla");
  
  car1.drive();
  
  
// 17. **중**: 아래 코드에서 `add1` 함수와 `multiply2` 함수를 조합해 `add1ThenMultiply2` 함수를 정의하세요.

    const add1 = n => n + 1;
    const multiply2 = n => n * 2;

const add1ThenMultiply2 = n => {
    return(multiply2(add1(n)));
};

console.log(add1ThenMultiply2(5)); // 12
    
// 18. **중**: 생성자 함수에서 부모 객체의 생성자를 호출하여, 자식 객체가 부모 객체의 속성과 메서드를 물려받게 하는 방법을 설명하세요. 자식 생성자 함수에서 super()를 사용
// 19. 클로저를 사용하여, 외부에서 직접 접근할 수 없는 변수를 내부에서 조작할 수 있는 **카운터 함수**를 작성하세요.

function createCounter() {
    let count = 0;
  
    return {
      increment: () => {
        count++;
  
        console.log("count: " + count);
      },
      decrement: () => {
        count--;
  
        console.log("count: " + count);
      },
      getCount: () => {
        console.log("count: " + count);
      },
    };
}
  
  const counter9 = createCounter();
  counter9.increment();
  counter9.increment();
  counter9.decrement();


// 20. `Object.create()`를 사용하여, `Person` 객체를 프로토타입으로 갖는 `Student` 객체를 생성하고, `Student` 객체에만 존재하는 `study` 메서드를 추가하세요.
    
    const Person1 = {
      greet: function() {
        console.log('Hello');
      }
    };
    
    const Student = Object.create(Person1);
    
    Student.study = function() {
      console.log('Studying');
    };
    
    console.log(Student.__proto__);

    Student.greet();  // Hello
    Student.study();  // Studying


// 21. 아래 코드에서 클로저를 활용해 `bankAccount` 객체의 `deposit`, `withdraw`, `getBalance` 메서드를 구현하세요. 각 메서드는 외부에서 접근할 수 없는 `balance` 변수를 조작해야 합니다.
    
function bankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
        deposit: (amount) => {
          balance += amount;
        },
        withdraw: (amount) => {
          if (amount <= balance) {
            balance -= amount;
          } else {
            console.error("에러");
          }
        },
        getBalance: () => {
          return balance;
        },
      };
    }
  
  const account = bankAccount(1000);
  account.deposit(500); // 잔액: 1500
  account.withdraw(200); // 잔액: 1300
  console.log(account.getBalance()); // 1300
    
// 22. 다음 코드에서 `setTimeout` 함수의 비동기 특성을 고려해, 콜백 함수에서 정확한 순서로 출력되도록 코드를 수정하세요. (Start → Middle → End)

console.log('Start');

setTimeout(() => {
  console.log('End');
}, 0);

console.log('Middle');

// 23. `Person` 클래스에서 정적 메서드를 사용해, `isAdult`라는 메서드를 추가하세요. 이 메서드는 나이가 18세 이상이면 `true`를 반환해야 합니다.
    
class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static isAdult(age) {
      return age >= 18;
    }
  }
  
  const adult = Person2.isAdult(20);  // true
  const child = Person2.isAdult(15);  // false

// 24. 콜백 지옥 문제를 해결하기 위해 `Promise`를 사용하여 비동기 작업을 처리하는 코드를 작성하세요.
    
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
  }
  
  fetchData().then(data => console.log(data));
  
    
// 25. 클래스 상속을 활용하여 `Employee` 클래스를 만들고, `Person` 클래스의 `greet` 메서드를 호출한 후 `Job title: [직업명]`을 출력하도록 수정하세요.
    
class Person3 {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, I am ${this.name}.`);
    }
  }
  
  class Employee extends Person3 {
    constructor(name, jobTitle) {
      super(name);
      this.jobTitle = jobTitle;
    }
  
    greet() {
      super.greet();
      console.log(`Job title: ${this.jobTitle}`);
    }
  }
  
  const employee = new Employee('Alice', 'Engineer');
  employee.greet();
  
    
// 26. 다음 코드에서 클로저를 사용하여 `increment` 함수가 호출될 때마다 `step`만큼 증가하는 카운터를 구현하세요.

function createCounter2(step) {
    let count = 0;
  
    return function increment() {
      count += step;
      console.log(count);
    };
  } 
  
  const counter3 = createCounter2(2);
  counter3();//2
  counter3();//4
  
    
// 27. 고차 함수 `reduce`를 사용하여 배열 `[1, 2, 3, 4, 5]`의 요소를 모두 더하는 코드를 작성하세요.
    
const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("sum: " + sum); // 15
