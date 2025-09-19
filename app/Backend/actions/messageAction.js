"use server";
import { Message } from "../models/messageSchmea";
import connectdb from "../db/dbConnect";
async function text(data) {
  await connectdb();

  const messageText = new Message({
    message: data.Message,
    authorid: data.authorid,
  });
  messageText.save();
  return {
    success: true,

    result: "posted successfull !",
  };
}
export { text };
