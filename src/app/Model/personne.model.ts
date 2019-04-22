export class Personne {
  id: number;
  name: string;
  firstname: string;
  job: string;
  path: string;
  cin: number;
  age: number;

  constructor(id: number = 0,
              name: string = '',
              firstname: string = '',
              job: string = '',
              path: string = '',
              cin: number = 0,
              age: number = 0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.path = path;
    this.cin = cin;
    this.age = age;
  }
}
