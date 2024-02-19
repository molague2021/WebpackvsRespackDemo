import { Avatar } from './Avatar';
export const Header = () => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar src={'/img/eiric-wolfbane.png'} />
      <div>
        <p>
          <strong>Welcome Back, </strong>Eirik Wolfbane
        </p>
        <p className="text-gray-500 text-sm">Monthly Active Users</p>
      </div>
    </div>
  );
};
