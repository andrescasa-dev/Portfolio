
import Icon from "./icons/Icon";

interface Props {
  iconName: string;
  title: string;
  clarification?: string;
}


function Skill({ clarification, iconName, title }: Props) {
  return (
    <div
      className="px-0 py-4 border border-border rounded-md bg-background flex flex-col items-center"
    >
      <Icon className="w-10 h-10" name={"TechIcon"} />
      <h3 className="base mt-2">{title}</h3>
      <p className="clarification text-center">{clarification}</p>
    </div>
  )
}

export default Skill