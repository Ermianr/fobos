import { SendIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatInput({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const message = formData.get("message") as string;

    if (!message?.toString().trim()) {
      return;
    }

    (event.currentTarget as HTMLFormElement).reset();
    onSendMessage(message);
  };

  return (
    <form
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="pointer-events-auto w-full px-4 pb-4 md:w-1/2">
        <div className="relative">
          <Textarea
            aria-label="Type a message"
            className="min-h-16 w-full resize-none rounded-sm pr-16 shadow-xl backdrop-blur-md focus:outline-none md:text-base"
            name="message"
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            rows={1}
          />
          <Button
            aria-label="Send message"
            className="absolute right-2 bottom-2 rounded px-2 py-1 transition-colors duration-300 hover:bg-primary/80"
            type="submit"
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
