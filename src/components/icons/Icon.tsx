import techIcons from "./techIcons"

type IconName = keyof typeof techIcons;

function Icon({ name, className }: { name: IconName, className: string }) {
  const IconContent = techIcons[name]
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <IconContent />
    </svg>
  )
}

export default Icon