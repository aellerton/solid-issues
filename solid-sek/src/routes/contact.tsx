import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Contact() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-1xl text-sky-700 font-thin uppercase my-16">Contact</h1>
      <Counter />
    </main>
  );
}
