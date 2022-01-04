import axios from "axios";
import { RequestHandler } from "express";
const url = 'https://slack.com/api/chat.postMessage';

const { SLACK_BOT_TOKEN } = process.env;

const pushMessage : RequestHandler = async (req, res) => {
  const text = `
Check out this *cool* function!
`;

console.log(text, SLACK_BOT_TOKEN, "its here")
  const postResponse = await axios.post(url, {
    channel: 'C02R6P88K7E',
    text,
    username: 'Test App',
    icon_emoji: ':+1:'
  }, { headers: { authorization: `Bearer ${SLACK_BOT_TOKEN}` } })

  console.log(postResponse)

 res.status(200).json("yey");
}

export default pushMessage;