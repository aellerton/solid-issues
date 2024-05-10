import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-1xl text-sky-700 font-thin uppercase my-16">solid-start SEK issues</h1>
      <Counter />
      <p class="mt-8 flex gap-x-2 justify-center">
        <a href="https://github.com/sek-consulting/solid-ui" target="_blank" class="text-sky-600 hover:underline">
          sek-consulting's solid-ui on GitHub
        </a>
        <a href="https://www.solid-ui.com/" target="_blank" class="text-sky-600 hover:underline pl-2 border-l-2">
          solid-ui.com
        </a>
      </p>
    </main>
  );
}
