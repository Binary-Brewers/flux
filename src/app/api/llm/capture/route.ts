import OpenAIConnector from '@/lib/llm/OpenAIConnector';
import { CaptureImage } from '@/lib/llm/types';
import { NextRequest, NextResponse } from 'next/server';

const openAI = new OpenAIConnector();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();
    const image = body.image as CaptureImage;
    const lang = body.lang;

    console.log(image);
    if(!image || !image.data || !image.mime || !lang) return NextResponse.json({error: "Missing image."},{status: 422})

    const prompt = "From the following picture, analize every distinct object on it. Return ONLY a json object of the format `{vocab: [{name: 'string', translation: 'string'}]}` with translations into " + lang;

    const completionStream = await openAI.getChatCompletionStream({
      messages: [
        {
          role: "system",
          content: "You are a helpful language assistant that responds with JSON objects."
        },
        {
          role: "user",
          content: [
            {
              type: "text", 
              text: prompt
            },
            {
              type: "image_url",
               image_url: {
                url: `data:${image.mime};base64,${image.data}`
               }
            }
          ],
        },

      ]
    });

    // streaming section
    // Create encoding to convert token (string) to Uint8Array
    // const encoder = new TextEncoder();

    // Create a TransformStream for writing the response as the tokens as generated
    // const stream = new TransformStream();
    // const writer = stream.writable.getWriter();

    // for await (const chunk of completionStream) {
    //   // await writer.ready;
    //   // await writer.write(encoder.encode(`${chunk.choices[0].delta.content || ""}`));
      
    // }
    
    // await writer.ready;
    // await writer.close();

    return new Response(completionStream.toReadableStream());

    // return NextResponse.json({
    //     message: "Ok"
    //   }, {
    //     status: 200,
    //   })


  } catch(e: any) {
    return NextResponse.json({
        error: e.message
    },
    {
        status: 500,
    })
  }
}
