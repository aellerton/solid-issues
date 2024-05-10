import { A } from '@solidjs/router'
import Counter from '~/components/Counter'

export default function Contact() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs text-1xl my-16 font-thin uppercase text-sky-700">
        Contact
      </h1>
      <Counter />
    </main>
  )
}
