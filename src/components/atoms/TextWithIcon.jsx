import Image from "./Image";

export const TextWithIcon = ({ iconsrc, text, className }) => {
  return (
    <div className={`h-6 items-left gap-4 inline-flex ${className}`}>
      <Image className="relative w-6 h-6" src={iconsrc}></Image>
      <div>{text}</div>
    </div>
  );
};
