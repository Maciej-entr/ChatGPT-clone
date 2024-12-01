import OpenAI from "openai";
const openai = new OpenAI({apiKey: "YOUR-API-KEY", dangerouslyAllowBrowser: true});
export async function sendMsgToOpenAI(message) {
const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {"role": "user", "content": "write a haiku about ai"}
    ]
})
return res.data.choices[0].text;
}
