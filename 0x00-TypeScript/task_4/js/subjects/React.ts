namespace Subjects {
  export interface TeacherInterface {
    experienceTeachingReact?
  };

  export class React extends Subject {
    function getRequirements(): string {
      return ("Here is the list of requirements for React");
    };
    function getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return ("No available teacher");
      };
      else {
        return (`Available Teacher: ${this.teacher.firstName}`);
      };
    }; 
  };
};
