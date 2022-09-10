# Getting Started

## Installations
```
npm install --save @reactivers/show
yarn add @reactivers/show
```

## Props

```ts
interface IShowProps {
    showIf: boolean;
}
```

## Example

```ts
...
const [showIf, setShowIf] = useState(false);
...
<Show showIf={showIf}>
...
</Show>
```