interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName:string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

let myPrint: printTeacherFunction;

myPrint = function printTeacher(firstName: string, lastName: string) {
  return (`${firstName[0]}. ${lastName}`);
};

interface studentClassConstructor {
  new (fistName: string, lastName: string): StudentClassInterface; 
};

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
};

const StudentClass: studentClassConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework() {
    return ('Currently working');
  };

  displayName() {
    return (this.firstName);
  };
}

const myClass = new StudentClass('corbin', 'vandeventer');
console.log(myClass);
