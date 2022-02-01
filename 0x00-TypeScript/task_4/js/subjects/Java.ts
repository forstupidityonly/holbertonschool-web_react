namespace Subjects {
  export interface TeacherInterface {
    experienceTeachingJava?
  };

  export class React extends Subject {
    function getRequirements(): string {
      return ("Here is the list of requirements for Java");
    };
    function getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return ("No available teacher");
      };
      else {
        return (`Available Teacher: ${this.teacher.firstName}`);
      };
    }; 
  };
};
