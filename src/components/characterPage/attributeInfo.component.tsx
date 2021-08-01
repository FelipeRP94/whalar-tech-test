interface Props {
  title: string;
  data: string;
}

export const AttributeInfo = (props: Props) => {
  const { title, data } = props;

  return (
    <p>
      <span>{title}: </span>
      <span className="information--data">{data}</span>
    </p>
  );
};
