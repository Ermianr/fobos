import { Streamdown } from "streamdown";
import { ClipboardComponent } from "@/components/clipboard";
import type { IChatMessage } from "@/features/chat/interfaces";
import { cn } from "@/lib/utils";

export function ChatMessage({ type, content, isTyping }: IChatMessage) {
  const isUser = type === "user";

  return (
    <div
      className={cn(
        "group/message flex max-w-[80%] flex-col gap-2",
        isUser ? "items-end self-end" : "items-start self-start"
      )}
    >
      {isTyping ? (
        <div className="flex gap-1 rounded-md bg-muted px-4 py-2 text-secondary-foreground">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce [animation-delay:0.2s]">.</span>
          <span className="animate-bounce [animation-delay:0.4s]">.</span>
        </div>
      ) : (
        <Streamdown
          className={cn(
            "rounded-md px-4 py-2",
            isUser
              ? "bg-primary text-primary-foreground"
              : "text-secondary-foreground"
          )}
        >
          {content}
        </Streamdown>
      )}
      {!isTyping && (
        <ClipboardComponent
          className="opacity-0 transition-opacity duration-300 group-focus-within/message:opacity-100 group-hover/message:opacity-100"
          content={content}
        />
      )}
    </div>
  );
}
