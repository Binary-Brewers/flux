import { CaptureImage } from "./types";

export async function sendCapture(image: CaptureImage, callback: (text: string) => void) {
    try {
      const response = await fetch('/api/llm/capture', {
        method: 'POST',
        body: JSON.stringify({
            image: image,
            lang: "spanish",
          }), // Customize messages as needed
      });
      console.log("get body")
      if (!response.body) return;
      console.log("reading start")

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let text = ""
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
  
        const chunk = decoder.decode(value);
        text += chunk
        // Handle each chunk of streamed data (e.g., display in UI)
        // console.log(chunk);
        callback(text);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

