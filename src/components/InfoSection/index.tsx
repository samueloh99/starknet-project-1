const InfoSection = () => {
  return (
    <div className="flex gap-10 flex-col w-full h-full my-10">
      <div className="flex px-10 py-10 md:px-0 justify-center items-center h-full flex-col md:flex-row w-full md:w-[1000px] m-auto">
        <div className="flex flex-col w-full h-full gap-5 justify-center md:w-3/6">
          <h1 className="tracking-tighter text-[40px] text-secondary">
            Secure and Private.
          </h1>
          <h1 className="text-[20px]">
            Leverage the power of Ethereum blockchain and
            zero-knowledge proofs to ensure the highest level of
            security and privacy for your expense sharing.
          </h1>
        </div>
        <div className="w-full md:w-3/6 h-[300px] bg-transparent"></div>
      </div>

      <div className="flex px-10 py-10 md:px-0 justify-center items-center h-full flex-col md:flex-row w-full md:w-[1000px] m-auto">
        <div className="flex flex-col w-full h-full gap-5 justify-center md:w-3/6">
          <h1 className="tracking-tighter text-[40px] text-secondary">
            Instant Settlements
          </h1>
          <h1 className="text-[20px]">
            Settle your debts in real-time with our web3-powered smart
            contracts.
          </h1>
        </div>
        <div className="w-full md:w-3/6 h-[300px] bg-transparent"></div>
      </div>

      <div className="flex px-10 py-10 md:px-0 justify-center items-center h-full flex-col md:flex-row w-full md:w-[1000px] m-auto">
        <div className="flex flex-col w-full h-full gap-5 justify-center md:w-3/6">
          <h1 className="tracking-tighter text-[40px] text-secondary">
            Transparent and Trustless
          </h1>
          <h1 className="text-[20px]">
            Trustless expense tracking with complete transparency
            provided by the blockchain.
          </h1>
        </div>
        <div className="w-full md:w-3/6 h-[300px] bg-transparent"></div>
      </div>

      <div className="flex px-10 py-10 md:px-0 justify-center items-center h-full flex-col md:flex-row w-full md:w-[1000px] m-auto">
        <div className="flex flex-col w-full h-full gap-5 justify-center md:w-3/6">
          <h1 className="tracking-tighter text-[40px] text-secondary">
            Global Access
          </h1>
          <h1 className="text-[20px]">
            Split expenses with friends and family from all around the
            world using cryptocurrency.
          </h1>
        </div>
        <div className="w-full md:w-3/6 h-[300px] bg-transparent"></div>
      </div>

      <div className="flex px-10 py-10 md:px-0 justify-center items-center h-full flex-col md:flex-row w-full md:w-[1000px] m-auto">
        <div className="flex flex-col w-full h-full gap-5 justify-center md:w-3/6">
          <h1 className="tracking-tighter text-[40px] text-secondary">
            Seamless Integration.
          </h1>
          <h1 className="text-[20px]">
            Easily connect your Ethereum wallet to manage your
            expenses directly from your browser.
          </h1>
        </div>
        <div className="w-full md:w-3/6 h-[300px] bg-transparent"></div>
      </div>
    </div>
  );
};

export default InfoSection;
