/*
    Classes and interfaces in typescript
 */

interface Print {
    printNameAndAge(): void;
}

class Person implements Print{
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printNameAndAge (): void {
        console.log('Person object');
        console.log('Name = ' + this.name);
        console.log('Age = ' + this.age);
    }
}

class Student extends Person {
    private schoolName: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.schoolName = school;
    }
}

let student1 = new Student('bharath', 25, 'kumarans');
student1.printNameAndAge();


/*
    generic function declarations in interfaces
 */

interface Employee {
    (name: string):string;
}

let emp:Employee;
emp = function(name: string): string {
    return 'hi ' + name;
}

console.log("Employee = " + emp('ashwin'));

/*
    interfaces can extend other interfaces
 */

interface interA {
    display(str:String):void;
    arr: Array<number>;
}

interface interB extends interA {
    brr: Array<string>;
}

let c:interB;
c = {
        arr: new Array<number>(),
        brr: new Array<string>(),
        display:function(str: string):void {
            console.log(this.brr + ' ' + this.arr + ' ' +str);
        }
    };

c.arr.push(123);
c.brr.push('hello');
c.display('welcome');









