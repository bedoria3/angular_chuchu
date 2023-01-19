export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  gender: "Male"|"Female",
  age: number,
  home_address: string,
  nationality: string,
  elementary_school: string,
  high_school: string;
  college?: string,
  degree?: string,
  status: "Single"|"Married",

}
