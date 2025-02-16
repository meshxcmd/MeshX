import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
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
          An AI Systems Framework
        </p>
        <button className="button mt-4">
          Get Started
        </button>
      </div>
    </div>
  );
}
