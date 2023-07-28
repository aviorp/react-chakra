export type ArrayContextI<T> = {
  array: T[];
  set: (array: T[]) => void;
  push: (element: T) => void;
  filter: (callback: (element: T) => boolean) => void;
  update: (index: number, newElement: T) => void;
  remove: (index?: number) => void;
};

export type ResponseI = {
  status: number;
  data: {
    data: any;
  };
};

export type PersonI = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: string;
};

export type GameI = {
  id: string;
  name: string;
  type: string | string[];
  version: number;
};


export type SlotI = {
  id: string;
  username: string;
  server_name: string;
  votes: number;
  created_at: string;
};

type DataResponseSchema = {
  data: object | [] | unknown;
  message?: string;
  state: string;
};

export type AxiosResponseSchema = {
  data: DataResponseSchema;
  status: number;
  statusText: string;
  headers: object;
  config: object;
  request: object;
};