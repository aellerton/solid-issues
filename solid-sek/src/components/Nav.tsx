import { useLocation } from "@solidjs/router";
import { For } from "solid-js";
import { nav } from '../lib/links'

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-slate-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <For each={nav}>{(item) =>
          <li class={`border-b-2 ${active(item.link)} mx-1.5 sm:mx-6`}>
            <a href={item.link}>{item.display}</a>
          </li>
        }</For>
      </ul>
    </nav>
  );
}
