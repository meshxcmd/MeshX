import Image from "next/image";
import Link from "next/link";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <>
      <div className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Image
            src="/mesh-x.svg"
            alt="MeshX Logo"
            width={240}
            height={64}
            priority
            className="mb-2"
          />
          <h1 className="text-6xl font-bold tracking-tight text-foreground">
            MeshX
          </h1>
          <p className="text-xl text-muted-foreground">
            Autonomous Agent Mesh Network
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <p className="max-w-[42rem] text-center text-muted-foreground">
              The world&apos;s first framework for creating dynamic, self-organizing networks of AI agents
              that learn, adapt, and evolve together.
            </p>
            <Link 
              href="/docs" 
              className="button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
}
