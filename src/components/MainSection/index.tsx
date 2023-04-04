import Button from "../Button";

const MainSection = () => {
  return (
    <div className="flex flex-col w-full h-[90vh]">
      <div className="flex px-10 py-10 md:px-0 justify-center items-center h-full flex-col md:flex-row w-full md:w-[1000px] m-auto">
        <div className="flex flex-col w-full h-full gap-5 justify-center md:w-3/6">
          <h1 className="tracking-tighter leading-[45px] text-[50px] text-secondary">
            Split expenses seamlessly with Web3
          </h1>
          <h1 className="text-[20px]">
            Experience a decentralized, secure, and easy-to-use
            solution for sharing expenses among friends and groups.
          </h1>
          <div className="w-[200px] flex">
            <Button text="Connect Wallet" size="md" />
          </div>
        </div>
        <div className="w-full md:w-3/6 h-full bg-transparent"></div>
      </div>
    </div>
  );
};

export default MainSection;
