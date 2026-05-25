import { Hammer } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 gap-y-12 grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <div className="badge badge-neutral bg-slate-100 text-slate-500 font-semibold py-2 px-3 border border-slate-300 w-fit text-xs rounded-full">Modern SaaS boilerplate</div>
              <h1 className="text-6xl font-semibold">Build faster.<br /> Scale smarter.</h1>
              <p className="text-lg text-neutral-600">
                The complete platform for teams building modern digital products without slowing down as they grow.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="bg-black text-white py-3 px-5 rounded-lg font-medium w-fit cursor-pointer">Start Building</button>
                <button className="bg-white text-black py-3 px-5 rounded-lg font-medium w-fit cursor-pointer border border-slate-200">Book a Demo</button>
              </div>
            </div>
            <img
              src="https://unsplash.it/1200/1200?image=1"
              alt="IEEE WIE Hero"
              className="rounded-lg max-h-fit"
            />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-semibold text-center">What makes us different?</h2>
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="space-y-4 p-6 border border-neutral-200 rounded-lg">
            <div className="bg-slate-100 flex items-center justify-center p-4 rounded-full w-fit">
              <Hammer className="h-7 w-7 text-slate-800" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium">Build faster. Scale smarter.</h3>
            <p className="text-neutral-600">
              The complete platform for teams building modern digital products without slowing down as they grow.</p>
          </div>
          <div className="space-y-4 p-6 border border-neutral-200 rounded-lg">
            <div className="bg-slate-100 flex items-center justify-center p-4 rounded-full w-fit">
              <Hammer className="h-7 w-7 text-slate-800" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium">Build faster. Scale smarter.</h3>
            <p className="text-neutral-600">
              The complete platform for teams building modern digital products without slowing down as they grow.</p>
          </div>
          <div className="space-y-4 p-6 border border-neutral-200 rounded-lg">
            <div className="bg-slate-100 flex items-center justify-center p-4 rounded-full w-fit">
              <Hammer className="h-7 w-7 text-slate-800" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium">Build faster. Scale smarter.</h3>
            <p className="text-neutral-600">
              The complete platform for teams building modern digital products without slowing down as they grow.</p>
          </div>

        </div>
      </section>
    </div>
  );
}