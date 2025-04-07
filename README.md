# CF Parrot 🦜

A Cloudflare Worker implementation of [parrot.live](https://github.com/hugomd/parrot.live), bringing animated party parrots to your terminal through Cloudflare's edge network.

## Try it!

```bash
curl https://parrot.0x1f0c.dev
```

## About

This project is a Cloudflare Worker version of the popular [parrot.live](https://github.com/hugomd/parrot.live) project. It allows you to display an animated party parrot in your terminal using a simple `curl` command, but with the added benefits of Cloudflare's global edge network:

- Ultra-low latency worldwide
- High availability
- Automatic HTTPS
- Zero server maintenance

## How it Works

The project uses Cloudflare Workers to serve ASCII art frames of an animated parrot. When you make a request using `curl`, the worker streams the animation frames to your terminal, creating a smooth animation effect.

for the detail, check my [blog post](https://www.0x1f0c.dev/2025/04/06/write-your-own-parrot-as-a-service-in-cloudflare-worker/)

## Credits

- Original parrot.live project by [hugomd](https://github.com/hugomd/parrot.live)
- Animation frames from [terminal-parrot](https://github.com/jmhobbs/terminal-parrot)
- Inspired by [cultofthepartyparrot.com](https://cultofthepartyparrot.com)

## Similar Projects

- [parrot.live](https://github.com/hugomd/parrot.live)
- [terminal-parrot](https://github.com/jmhobbs/terminal-parrot)
- [parrotsay](https://github.com/mtth/parrotsay)
- [ascii.live](https://ascii.live)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. 
