<div align="center">
  <h1>Listbox bug with aria-describedby repro</h1>
  <strong>Repo to reproduce a bug with aria-describedby and Listbox from headlessui</strong>
</div>

<hr>

# Usage

- Run `npm i`
- Run `npm run dev`

Inspect the DOM. You'll see that the `aria-describedby` attribute assigned to the `Listbox` component is assigned to the `div` parent element but I believe it should be assigned to the `input[type="hidden"]` when a `name` is passed to `Listbox`.
