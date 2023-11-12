export default function Logo(props: any) {
  return <div className="uppercase">{props.renderDefault({ ...props, title: "Admin" })}</div>;
}
