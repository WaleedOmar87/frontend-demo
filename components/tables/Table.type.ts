export default interface ITable {
  id: string;
  data: {};
  columns: {};
  headers: {};
  isLoading?: boolean;
  isError?: boolean;
  error?: {
    error?: string;
    code: number;
  };
}
