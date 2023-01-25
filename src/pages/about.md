# About me

I am Java Backend Developer professionally...

But at the night I am fullstack warrior fighting for justice with `Next.Js` with a little bit of `Go`.

Have I mention that I am in love with `Tailwind CSS`?.

I fill comfortable with Azure and I am familiar with GCP, but for personal use cases I avoid them, because I really dislike pay as you go pricing plans.

For that reason I lean towards Cloudflare R2 for storage (which is S3 compatible) - yes, I know it is pay as you go, but this is the exception - Cloudflare Pages for static hosting and Railway for hosting containers.

Periodically I have fun with self hosting and DevOps.

----


# The stack

I run all my applications in docker containers as it give me the most flexibility for hosting.

I am not big fan of `Kubernetes` because of the level of complexity it brings to the table. With K8S I am more DevOps than a developer. And it is big overkill for my needs as well...

The website that You are currently on is hosted on the VPS on the docker swarm stack along with most of the `*.notnulldev.com` domains.

For reverse proxy I use `Nginx` with Nginx proxy manager for GUI management.
I tried to use `Traefik` but I found it to be too complicated for my needs. NPM just works and it is really easy to use.

My management pages such as Portainer or custom made CI / CD (nano ci cd) are protected by Cloudflare Access.

---

# Ideology

I am constantly looking for new technologies that can me help improve quality or speed up development process.
But deeply in my heart I fill that I must know the basics of the technology I am using.
Thats where Go comes in. It helps me understand how the things work under the hood. Simply by trying to rebuild simple version of the technology I am using.

# Opinions

And that's also why I am not a big fan of Spring. It is a great framework, but it hides too much from the developer.
I feel like when you are learning Spring you are learning how to use Spring, not the backend concepts. Not mention the RAM usage. I bet that the 2GB RAM Spring app would take 100MB if written in Go. Which is huge difference. In hosting cost, as well as dev environments requirements.

---

# Why this and not that?

You may wonder why I am using React on the frontend when I like go so much due to it's lightweight nature. VDom is known to have it's caveats.

But I am not using React for it's VDom. I am using it for it's ecosystem. I am using Next.Js which is a framework on top of React. When you want to add some exotic thing to the website, if there is some library in the internet, you can bet that it will support React if anything. I couldn't not metion Vercel, the company behind Next.Js. They are doing great things to improve web development for all of us. And their hosting platform is really easy to use.

I am not (yet) a good web designer, I still need to utilize good component library. In react I have great options such as mui, mantine, chakra, etc. As my design skill progress I tend more towards tailwind, but I found Mantine to be the best rapid development. It is really easy to use and it has great documentation.

I am keeping eye on svelte, and in the future I may switch to it for personal projects. But for now I am happy with React.

# Ending thoughts

For now my main focus is to expand portfolio, but in the future I wan't to extend the website with blogs with knowledge I gain from my programming journey.

# Disclaimer

I will expand this page in the future, the next section will be about my programming journey, but I think thats enough for now. Code won't write itself. And I have to fix some weird bug after updating this website to astro 2... See you in the future readings.
