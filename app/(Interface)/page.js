import { IconSend2 } from "@tabler/icons-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center-safe px-4">
      {/* Title */}
      <div className=" py-4 px-10  text-center rounded-2xl">
        <h2 className="font-medium text-2xl ">Chat Room</h2>
      </div>

      {/* Interior box */}
      <div className="w-full text-center rounded-2xl overflow-auto ">
        {/* Base chat place */}
        <div className="">
          {/* messages */}

          <div className="flex justify-start md:mr-50 mb-20">
            <div className="text-left w-[50%] px-4 py-2 bg-red-500  text-[18px] text-white  rounded-2xl">
              this is a message!!!
            </div>
          </div>

          <div className="flex justify-end md:ml-50 mb-20">
            <div className="text-left w-[50%] h-auto px-4 py-2 bg-green-500  text-[18px] text-white  rounded-2xl">
              This is sended
            </div>
          </div>
        </div>

        {/* Text box  */}
        <div className="fixed bottom-0 w-full flex flex-row items-center justify-center-safe p-2">
          <input
            type="text"
            placeholder="Type Your message"
            className="w-full border-0 px-2 py-2 rounded-2xl"
          ></input>

          {/* send button */}
          <div className="px-2">
            <button className="cursor-pointer">
              <span className="h-20">
                <IconSend2 stroke={2} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
