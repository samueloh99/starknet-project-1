const HowWorksSection = () => {
  return (
    <div className="flex gap-10 flex-col w-full h-full my-10">
      <div className="flex px-10 py-10 md:px-0 justify-center items-center gap-5 h-full flex-col w-full md:w-[1000px] m-auto">
        <h1 className="text-[40px]">How It Works ?</h1>
        <div className="grid grid-cols-4 gap-5 text-center">
          <div className="bg-lightBase flex flex-col p-5 gap-2 rounded-[10px]">
            <h1 className="text-[20px] font-[600] text-secondary">
              FIRST STEP
            </h1>
            <h1 className="text-[16px]">
              Connect your Ethereum wallet to our platform.
            </h1>
          </div>
          <div className="bg-lightBase flex flex-col p-5 gap-2 rounded-[10px]">
            <h1 className="text-[20px] font-[600] text-secondary">
              SECOND STEP
            </h1>
            <h1 className="text-[16px]">
              Create or join a group with your friends or family
              members.
            </h1>
          </div>
          <div className="bg-lightBase flex flex-col p-5 gap-2 rounded-[10px]">
            <h1 className="text-[20px] font-[600] text-secondary">
              HIRD STEP
            </h1>
            <h1 className="text-[16px]">
              Add expenses and specify the participants and their
              shares.
            </h1>
          </div>
          <div className="bg-lightBase flex flex-col p-5 gap-2 rounded-[10px]">
            <h1 className="text-[20px] font-[600] text-secondary">
              FOURTH STEP
            </h1>
            <h1 className="text-[16px]">
              Track and settle outstanding debts using cryptocurrency
              in a secure and transparent manner.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorksSection;
