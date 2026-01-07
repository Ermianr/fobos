import { Clipboard } from "@effect/platform-browser";
import { Effect, Fiber } from "effect";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClipboardProps {
  content: string;
  className?: string;
}

export function ClipboardComponent({ content, className }: ClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const fiberRef = useRef<Fiber.RuntimeFiber<unknown, unknown> | null>(null);

  useEffect(() => {
    return () => {
      if (fiberRef.current) {
        Effect.runSync(Fiber.interruptFork(fiberRef.current));
      }
    };
  }, []);

  const handleCopy = () => {
    if (fiberRef.current) {
      Effect.runSync(Fiber.interruptFork(fiberRef.current));
    }

    fiberRef.current = Effect.gen(function* () {
      const cb = yield* Clipboard.Clipboard;
      yield* cb.writeString(content);
      yield* Effect.sync(() => setIsCopied(true));
      yield* Effect.sync(() => toast.success("Copied to clipboard"));
      yield* Effect.sleep("2 seconds");
      yield* Effect.sync(() => setIsCopied(false));
    }).pipe(
      Effect.provide(Clipboard.layer),
      Effect.catchAll(() =>
        Effect.sync(() => toast.error("Failed to copy to clipboard"))
      ),
      Effect.runFork
    );
  };

  return (
    <Button
      className={cn("size-6 rounded-md", className)}
      onClick={handleCopy}
      size="icon"
      variant="ghost"
    >
      <div className="relative size-3">
        <CheckIcon
          className={cn(
            "absolute inset-0 size-3 transition-all duration-300 ease-in-out",
            isCopied
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
        <CopyIcon
          className={cn(
            "absolute inset-0 size-3 transition-all duration-300 ease-in-out",
            isCopied
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </div>
    </Button>
  );
}
