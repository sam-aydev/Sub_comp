import { BiArrowToRight } from "react-icons/bi";

export default function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiArrowToRight className="size-8 bg-slate-400 rounded-full p-2 text-slate-900 " />
    </div>
  );
}
