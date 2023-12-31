export default interface IForm {
  onSubmit?: () => void;
  isLoading?: boolean;
  isError?: boolean;
  error?: {
    error?: string;
    code: number;
  };
}
