import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChatInput } from "@/features/chat/components/chat-input";
import { ChatMessage } from "@/features/chat/components/chat-message";
import type { IChatMessage } from "@/features/chat/interfaces";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [messages, setMessages] = useState<IChatMessage[]>([
    { id: "1", type: "user", content: "Hello, how are you?" },
    { id: "2", type: "assistant", content: "I'm good, thank you!" },
    {
      id: "3",
      type: "assistant",
      content: `¡Claro! Aquí tienes un ejemplo de texto largo para que puedas ver cómo se muestra en la interfaz, cómo se comporta con varios saltos de línea y qué tan bien maneja los desbordamientos o la visualización en diferentes tamaños de pantalla.

Esta es una lista de puntos para probar:
- El diseño debe respetar los márgenes y el padding definidos en los estilos.
- El texto sigue siendo legible incluso si el mensaje es muy extenso.
- Los botones de copiar y otras utilidades siguen alineados correctamente.
- El contenido se adapta a distintos dispositivos.

Puedes agregar aún más texto si quieres seguir comprobando cómo el contenedor gestiona palabras muy largas como: Supercalifragilisticoespialidoso o enlaces: https://www.example.com/para/verificar/enlaces/largos

También puedes mezclar código en el mensaje:

\`\`\`typescript
function holaMundo() {
  console.log("¡Hola mundo!");
}
\`\`\`

¿Se siguen mostrando los emojis correctamente? 😎🚀✨

¡Sigue escribiendo para ver los límites del diseño!`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    const userMsgId = crypto.randomUUID();
    const botMsgId = crypto.randomUUID();

    // 1. Añadir mensaje del usuario
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, type: "user", content: message },
    ]);

    // 2. Añadir mensaje de carga del bot
    setMessages((prev) => [
      ...prev,
      { id: botMsgId, type: "assistant", content: "", isTyping: true },
    ]);

    // 3. Simular "pensando"
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 4. Iniciar streaming
    const fullResponse =
      "¡Hola! Soy Fobos, tu asistente virtual. Esta es una respuesta simulada para demostrar el efecto de streaming palabra por palabra. ¿En qué más puedo ayudarte hoy?";
    let currentContent = "";

    // Quitar estado de typing y empezar streaming
    setMessages((prev) =>
      prev.map((m) => (m.id === botMsgId ? { ...m, isTyping: false } : m))
    );

    const words = fullResponse.split(" ");
    for (const word of words) {
      currentContent += (currentContent ? " " : "") + word;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botMsgId ? { ...m, content: currentContent } : m
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 70)); // Velocidad del streaming
    }
  };

  return (
    <div>
      <div className="mx-auto mt-6 mb-28 flex max-w-[50%] flex-col gap-2">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
