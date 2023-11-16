import { Employee } from "./employee.js";

export class Dev extends Employee {
    #jobType = "I am a Dev";
  
    getJobType() {
      return this.#jobType;
    }

    static returnArrayOfDevs(...objects) {
        const devs = [];
    
        for (const obj of objects) {
          if (obj instanceof Dev) {
            devs.push(obj);
          }
        }
    
        return devs;
      }
  }