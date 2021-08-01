interface Props {
  title: string;
  data: string;
}

export const AttributeInfo = (props: Props) => {
  const { title, data } = props;

  return (
    <p>
      <span className="info--title">{title}: </span>
      <span className="info--data">{data}</span>
    </p>
  );
};
