import Button from "../Button";

const Header = () => (
  <div className="flex max-w-[1000px] bg-darkBase right-0 left-0 absolute top-5 rounded-[40px] justify-between w-full m-auto p-5">
    <div className="flex justify-center items-center">
      <h1 className="uppercase text-[25px] font-logo font-bold tracking-[10px] text-primary">
        SHAREPAY
      </h1>
    </div>
    <ul className="flex text-lightBase gap-10 items-center">
      <li>About</li>
      <li>How Works</li>
      <li>FAQ</li>
    </ul>
    <div className="flex w-[150px]">
      <Button text="Connect Wallet" size="md" />
    </div>
  </div>
);

export default Header;
