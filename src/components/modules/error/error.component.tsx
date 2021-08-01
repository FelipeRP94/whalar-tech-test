interface Props {
  error: string;
}

export const ErrorAlert = (props: Props) => {
  const { error } = props;
  return <div className="error">{error}</div>;
};
