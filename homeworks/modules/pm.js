import { Employee } from "./employee.js";

export class PM extends Employee {
    #jobType = "I am a PM";
  
    getJobType() {
      return this.#jobType;
    }
  }
