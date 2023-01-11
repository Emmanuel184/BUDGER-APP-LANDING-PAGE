import React from "react";

interface Props {
  name: string;
  description?: string;
  image: string;
}

const Class = (props: Props) => {
  const name = props.name;
  const description = props.description;
  const image = props.image;

  const overlayStyles =
    "p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90";

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="w-auto mx-auto h-[21rem]" alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
