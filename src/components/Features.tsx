import { desc } from "framer-motion/client"
import { title } from "process"


export default function Features() {
  const features = [
    {
      title: "Never miss a request",
      description:
        "Tenants’ texts, images, and voice messages get processed instantly — even outside office hours.",
    },
    {

      title: "Automated Issue Classification",
      description:
        "AI sorts text, images, and voice requests into categories like plumbing, electrical, HVAC, and urgency level.",
    },
    {

      title: "Instant Response Generation",
      description:
        "Tenants get meaningful replies in real time — troubleshooting or escalation — without manual effort.",
    },
    {
      title: "Vendor Coordination",
      description: "AI surfaces urgency and contacts third-party vendors when needed.",
    },
    {
      title: "Dashboard Visibility",
      description:
        "Landlords see all requests, statuses, and action outcomes in one place.",
    },
  ]

  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden py-10 py-5">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #000000 45%, rgba(251, 251, 231, 0) 100%), radial-gradient(ellipse at 50% 120%,  rgb(49, 170, 154)  0%, rgb(49, 170, 154) 65%)",
          opacity: 0.7,
        }}
      >
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(211, 22, 22, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            bottom: "-10%",
            height: "30%",
            left: "50%",
            maskImage:
              "linear-gradient(to bottom, rgba(208, 190, 190, 0) 0%, rgba(0,0,0,0.5) 100%)",
            pointerEvents: "none",
            position: "absolute",
            transform: "translateX(-50%) perspective(300px) rotateX(45deg)",
            width: "100%",
          }}
        />
      </div>
      <div className="relative z-10 container">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mx-5">
            Why Modern Properties Choose <span className="text-[#056058]">ReqFix</span>
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
              >
                <div className="relative mx-auto w-full max-w-sm rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:px-8 ">
                  <div className="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 " />
                  <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 " />
                  <div className="relative w-full border-x border-zinc-400 ">
                    <div className="absolute z-0 grid h-full w-full items-center">
                      <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
                        <div className="bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline outline-8 outline-gray-950 sm:my-6 md:my-8 " />
                        <div className="bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline outline-8 outline-gray-950 sm:my-6 md:my-8 " />
                        <div className="bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline outline-8 outline-gray-950 sm:my-6 md:my-8 " />
                      </section>
                    </div>
                    <div className="relative z-20 mx-auto py-8">
                      <div className="p-6">
                        <h3 className="mb-1 text-lg font-bold text-gray-100">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
