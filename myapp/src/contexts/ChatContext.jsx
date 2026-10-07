import { createContext, useRef, useState } from "react";

export const ChatContext = createContext();

const GEMINI_KEY = "use your api key here";
const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");
  const chatRef = useRef();

  const [status, setStatus] = useState("");

  const clearChat = () => setChat("");
  const sendMessage = () => {
    if (chat.length === 0) return;
    const newMessage = {
      message: chat,
      id: parseInt(Math.random() * 10000000),
      timestamp: Date.now(),
      sender: "Me",
      isBot: false,
    };

    setMessages((curr) => [...curr, newMessage]); //async
    setTimeout(
      () => (chatRef.current.scrollTop = chatRef.current.scrollHeight),
      100,
    );
    sendAI(chat);
    clearChat();
  };

  const saveBotMessage = (message) => {
    if (!message || message.length === 0) return;
    const newMessage = {
      message: message,
      id: parseInt(Math.random() * 10000000),
      timestamp: Date.now(),
      sender: "Support",
      isBot: true,
    };

    setMessages((curr) => [...curr, newMessage]); //async
    setTimeout(
      () => (chatRef.current.scrollTop = chatRef.current.scrollHeight),
      100,
    );
  };

  const waiting = () => new Promise((resolve) => setTimeout(resolve, 20000));

  const sendAI = async (text) => {
    setStatus("sending");
    try {
      const res = await Promise.race([
        fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
          method: "POST",
          headers: {
            "x-goog-api-key": GEMINI_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gemini-3.1-flash-lite",

            input: text,
            generation_config: {
              thinking_level: "low",
            },
          }),
        }),
        waiting(),
      ]);
      if (res && res.status >= 200 && res.status < 400) {
        const data = await res.json();
        const message = "Customer Support is busy, Please come later.";
        saveBotMessage(message);
        setStatus("");
        return;
      }
      throw res;
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };
  const isSending = status === "sending";
  const isError = status === "error";
  return (
    <ChatContext
      value={{
        chatRef,
        isError,
        isSending,
        messages,
        sendMessage,
        setChat,
        chat,
      }}
    >
      {children}
    </ChatContext>
  );
};
export default ChatProvider;
