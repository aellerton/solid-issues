import { A } from '@solidjs/router'
import Counter from '~/components/Counter'

export default function Home() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs text-1xl my-16 font-thin uppercase text-sky-700">
        solid-start SEK issues
      </h1>
      <Counter />
      <p class="mt-8 flex justify-center gap-x-2">
        <a
          href="https://github.com/sek-consulting/solid-ui"
          target="_blank"
          class="text-sky-600 hover:underline">
          sek-consulting's solid-ui on GitHub
        </a>
        <a
          href="https://www.solid-ui.com/"
          target="_blank"
          class="border-l-2 pl-2 text-sky-600 hover:underline">
          solid-ui.com
        </a>
      </p>
    </main>
  )
}
