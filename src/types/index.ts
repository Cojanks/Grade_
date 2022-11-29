export type CompPropsWithChildren = {
  children?: React.ReactNode;
};

export type StudentProps = {
  id: string;
  name: string;
  goesBy: string;
  currentGrade: number;
  preferredPronouns: number;
};

export type DefaultRootStateProps = {
  error: object | string | null;
  students: StudentProps[];
};
