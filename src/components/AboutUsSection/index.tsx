const AboutUsSection = () => {
  return (
    <div className="flex gap-10 flex-col w-full h-full my-10 h-[800px]">
      <div className="flex px-10 py-10 md:px-0 justify-center items-start h-full flex-col w-full md:w-[1000px] m-auto gap-10">
        <h1 className="tracking-tighter w-full text-center text-[40px] text-secondary">
          About us
        </h1>
        <div className="w-3/6 gap-5 flex flex-col">
          <h1 className="text-[20px]">
            Decentralized applications that empower individuals to
            manage their finances with ease and security.
          </h1>
          <h1 className="text-[20px]">
            This project harnesses the power of StarkNet, a scalable
            and privacy-focused Layer 2 solution for Ethereum, to
            deliver a robust web3 application that streamlines expense
            sharing among friends and groups. Our platform is built
            using Next.js.
          </h1>
          <h1 className="text-[20px]">
            To deploy smart contracts and handle user authentication,
            we leverage the capabilities of Cairo, Rust, and Semaphore
            ID.
          </h1>
          <h1 className="text-[20px]">
            Cairo, enables us to write provably correct smart
            contracts, while Rust serves as a high-performance
            language for backend operations.
            <br />
            Semaphore ID, a privacy-focused authentication protocol,
            ensures secure and private login processes for our users.
          </h1>
          <h1 className="text-[20px]">
            By combining these cutting-edge technologies, we aim to
            provide a seamless, efficient, and accessible solution for
            managing shared expenses, making the benefits of
            blockchain technology available to everyday users.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
