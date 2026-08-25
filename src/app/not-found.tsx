import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-white py-32">
      <Container className="flex flex-col items-center text-center">
        <p className="font-heading text-6xl font-bold text-navy-950">404</p>
        <h1 className="mt-4 font-heading text-2xl font-semibold text-navy-950">Page Not Found</h1>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" variant="ghost" className="mt-8">Back to Home</Button>
      </Container>
    </section>
  );
}
