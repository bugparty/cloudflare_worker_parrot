import { parrot_frames } from "./parrot_frames.js";
export default {
	async fetch(request, env, ctx) {
	  const encoder = new TextEncoder();

	  const stream = new ReadableStream({
		async start(controller) {

		  let i = 0;
		  while (true) {
			const frame = parrot_frames[i % parrot_frames.length];
			const output = `${frame}`;
			controller.enqueue(encoder.encode(output));
			await new Promise((r) => setTimeout(r, 80)); // interval between frames
			i++;
		  }
		},
	  });

	  return new Response(stream, {
		headers: {
		  "Content-Type": "text/plain; charset=utf-8",
		  "Cache-Control": "no-cache",
		},
	  });
	},
  };
