import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export default function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiArrowToLeft className="text-slate-900 size-8 bg-slate-400 rounded-full p-2 " />
    </div>
  );
}
