import { Avatar, AvatarFallback } from "./ui/avatar";

export const AvatarComponent = () => {
  return (
    <Avatar className="size-36">
      <img
        src="https://avatars.githubusercontent.com/u/66889261?v=4"
        alt="Avatar"
      />
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
  );
};
