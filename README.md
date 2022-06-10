# svelte-headlessui

This is a _fork_ of [@rgossiaux/svelte-headlessui](https://github.com/rgossiaux/svelte-headlessui), an unofficial, complete Svelte port of the Headless UI component library (https://headlessui.dev/). It's base version is [1.0.2](https://github.com/rgossiaux/svelte-headlessui/tree/v1.0.2).

The only difference is that it exposes components' apis, so that one can use api functions. This package exists as a temporal remedy, until issue [#47](https://github.com/rgossiaux/svelte-headlessui/issues/47) is resolved.

```svelte
<script>
// make sure it is called inside the context, <TabGroup />
const { setSelectedIndex } = useTabsContext();

function onClick(event) {
  setSelectedIndex(0);
}

</script>
```

## Installation

```
npm install -D github:jangxyz/svelte-headlessui#package
```

## Usage

See https://svelte-headlessui.goss.io for full documentation. Check out the source code to see how the api is used.

## Credits

All Credits goes to the original author, and to whom he/she [credits](https://github.com/rgossiaux/svelte-headlessui#credits).

## License

This library is licensed under the MIT license; see the LICENSE file for more.
