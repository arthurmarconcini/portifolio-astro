import { Avatar, AvatarFallback } from "./ui/avatar";

export const AvatarComponent = () => {
  return (
    <Avatar className="size-36 bg-gradient-to-tr from-fuchsia-500 via-violet-600 to-cyan-500 ">
      <img
        className="rounded-full m-1 "
        src="https://avatars.githubusercontent.com/u/66889261?v=4"
        alt="Avatar"
      />
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
  );
};
