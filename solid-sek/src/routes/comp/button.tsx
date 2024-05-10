import { Button, buttonVariants } from '~/components/ui/button'

export default function Comp() {
  return (
    <main class="pad-4 mx-auto flex flex-col items-center p-4 text-gray-700">
      <article class="my-2 border p-5 text-center">
        <p>A plain old button</p>
        <Button>Plain button</Button>
      </article>
      <article class="my-2 border p-5 text-center">
        <div class="grid max-w-md grid-cols-3 gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </article>
      <article class="my-2 border p-5 text-center">
        <p>
          A link done with button styles:
          <a class={buttonVariants({ variant: 'outline' })}>Click here</a>
        </p>
      </article>
    </main>
  )
}
