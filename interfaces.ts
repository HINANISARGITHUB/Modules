//  create students data

export interface Entrytest {
  isPassed: boolean;
  obtainedMarks: number;
  totalMarks: number;
}

export interface Students {
  id: number;
  firstName: string;
  lastName: string;
  rollNo: number;
  e_mail: string;
  isOnsite: boolean;
  entry_Test: Entrytest;
}


