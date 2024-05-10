import { Button, buttonVariants } from "~/components/ui/button"


export default function Comp() {
  return (
    <main class="mx-auto text-gray-700 p-4 flex flex-col pad-4 items-center">
      <article class="text-center border p-5 my-2">
        <p>A plain old button</p>
        <Button>Plain button</Button>
      </article>
      <article class="text-center border p-5 my-2">
        <div class="grid max-w-md grid-cols-3 gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </article>
      <article class="text-center border p-5 my-2">
        <p>A link done with button styles:
          <a class={buttonVariants({ variant: "outline" })}>Click here</a>
        </p>
      </article>
    </main>
  );
}
