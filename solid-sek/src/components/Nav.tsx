import { useLocation } from '@solidjs/router'
import { For, Show, createSignal } from 'solid-js'
import { experimental, nav, working } from '../lib/links'
import { Button, buttonVariants } from './ui/button'

export default function Nav() {
  const location = useLocation()
  const [showExp, setShowExp] = createSignal(false)

  const active = (path: string) =>
    path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600'
  return (
    <>
      <nav class="bg-slate-800">
        <ul class="container flex items-center p-3 text-gray-200">
          <For each={nav}>
            {(item) => (
              <li class={`border-b-2 ${active(item.link)} mx-1.5 sm:mx-6`}>
                <a href={item.link}>{item.display}</a>
              </li>
            )}
          </For>
        </ul>
      </nav>
      <nav class="container flex items-center justify-between bg-slate-200 p-3">
        <ul class="flex items-center text-gray-700">
          <li>Components:</li>
          <For each={working}>
            {(item) => (
              <li class={`border-b-2 ${active(item.link)} mx-1.5 sm:mx-6`}>
                <a href={item.link}>{item.display}</a>
              </li>
            )}
          </For>
        </ul>
        <Button
          class={buttonVariants({ variant: 'secondary', size: 'sm' })}
          onClick={() => setShowExp(!showExp())}>
          Experimental
        </Button>
      </nav>
      <Show when={showExp()}>
        <nav class="container bg-fuchsia-100 p-3">
          <ul class=" flex items-center text-gray-700">
            <li>Experimental:</li>
            <For each={experimental}>
              {(item) => (
                <li class={`border-b-2 ${active(item.link)} mx-1.5 sm:mx-6`}>
                  <a href={item.link}>{item.display}</a>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </Show>
    </>
  )
}
