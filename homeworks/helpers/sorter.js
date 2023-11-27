export function sortBySalary(objects) {
        return objects.sort((a, b) => {
            if (a.salary > b.salary) {
              return 1;
            } else if (a.salary < b.salary) {
              return -1;
            } else {
              if (a.id > b.id) {
                return 1;
              } else if (a.id < b.id) {
                return -1;
              } else {
                return 0;
              }
            }
          });
      }
    