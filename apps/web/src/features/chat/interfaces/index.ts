export interface IChatMessage {
  id?: string;
  type: "user" | "assistant";
  content: string;
  isTyping?: boolean;
}
