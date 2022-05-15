# Astro Typetura

A set of customisable components using Typetura futuristic typeography system, built for [Astro](astro.build).

## Getting Started

Add `astro-typetura` as a developer dependency to your project.

```bash
npm i astro-typetura -D
```

Apply `<Typetura>` to the `<head>` of your `layout.astro` or `page.astro`. This would instantiate the Typetura typography system onto the page.

```astro
---
import { Typetura } from 'astro-typetura/components';
---

<head>
  <Typetura />
</head>
```

**Props:**

- [`TypeturaProps`](#typeturaprops)

From here you can start using any of the Typetura Text Components that have been created, within your project.

You can customise the gloabl settings of your Typetura system by passing through overrides for the font `base` size and its `scale` factor even apply additional `selectors`.

## Typetura Packages

Typetura Packages are pre-configured text styles that can be added to your website. Packages include fonts, basic typographic styles, and various headline and label styles.

A good way of thinking about these packages is that they are **design systems for your text**.

Typetura Packages are provided via an `API_Key`, to subscribe for membership visit: [Create an Account](https://typetura.com/auth/create-account)

This would provide you access to over 30+ specialised Font packages built using Typetura's furturistic font system.

To view the Packages avaible vist: [Browse Packages](https://typetura.com/typography-packages)

To use Typetura's Font Packages within your project Store your `PUBLIC_TYPETURA_KEY` within your projects `.env` file. This plugin would automatically detect if the key is valid etc. Once provided you can simply use any package by applying:

```jsx
<Typetura pack="Boston">
```

---

## Props

Here we are taking a overview over the different properties (`props`) that is accepted by the different types of components.

### `TypeturaProps`

The `<Typetura>` Component comes with its own set of properties.

```ts
export interface TypeturaProps {
  /** Set Base Value for Fonts */
  base?: number;
  /** Set Scale Value */
  scale?: number;
  /** Use JS to Apply overrides */
  js?: boolean;
  /** Apply additional Selectors */
  selectors?: string | string[];
  /** Use Typetura's Custom Font Packs */
  pack?: Packs;
}
```

---

### `StyleProps`

All Typetura's Typography components share a common set of `props`, known as the `StyleProps`, this is its shape:

```ts
export interface StyleProps {
  /** Apply a new Animatiton Key */
  key?: string;
  /** Disable Typetura */
  none?: boolean;
  /** Adjust the Scale for this Component */
  scale?: number;
  /** Adjust the Base Size for this Component */
  base?: number;
  /** Adjust the Font Timing for this Component */
  ease?: CSSStyleDeclaration['animationTimingFunction'];
}
```

These would apply individual style overrides to the `astro-typetura` plugin, allowing you to customise the apperence and behaviour of each element.

---

## Typography Components

Each Typetura component has its own semantic name and has been designed and tested for use in a wide range of layouts.

You can use the same headline component everywhere in your layout, and it will scale to the space available, as opposed to needing to choose the right sized headline for your layout.

### `<Headline>`

```astro
---
import { Headline } from 'astro-typetura/components';
---

<Headline>An Award Winning Headline</Headline>
<!-- Renders as -->
<h1 class="primary-headline">An Award Winning Headline</h1>
```

**Props:**

- `level?: string | number`
- [`extends StyleProps`](#styleprops)

The Headline Component is here to help with setting bold site headlines.

You can set the `level` of each `Headline` anywhere between `h1->h3`.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`,`scale`,`ease`,`key`.

---

### `<SubHeadline>`

```astro
---
import { SubHeadline } from 'astro-typetura/components';
---

<SubHeadline>A Catchy SubHeadline</SubHeadline>
<!-- Renders as -->
<h2 class="primary-headline">A Catchy SubHeadline</h2>
```

**Props:**

- `level?: string | number`
- [`extends StyleProps`](#styleprops)

The SubHeadline Component is here for setting subheadlines on your page.

You can set the `level` of each `SubHeadline` anywhere between `h2->h5`.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<SectionHeadline>`

```astro
---
import { SectionHeadline } from 'astro-typetura/components';
---

<SectionHeadline>A Fancy Section Headline</SectionHeadline>
<!-- Renders as -->
<h2 class="section-headline">A Fancy Section Headline</h2>
```

**Props:**

- `level?: string | number`
- [`extends StyleProps`](#styleprops)

The `SectionHeadline` Component is for appling section headlines to your content.

You can set the `level` of each `SectionHeadline` anywhere between `h2->h5`.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<SectionSubHeadline>`

```astro
---
import { SectionSubHeadline } from 'astro-typetura/components';
---

<SectionSubHeadline>An Award Winning SectionSubHeadline</SectionSubHeadline>
<!-- Renders as -->
<h2 class="section-subheadline">An Award Winning SectionSubHeadline</h2>
```

**Props:**

- `level?: string | number`
- [`extends StyleProps`](#styleprops)

The SectionSubHeadline Component is here to help setting subheadlines to your individual sections.

You can set the `level` of each `SectionSubHeadline` anywhere between `h2->h5`.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<SectionLabel>`

```astro
---
import { SectionLabel } from 'astro-typetura/components';
---

<SectionLabel>A Section Label</SectionLabel>
<!-- Renders as -->
<h2 class="section-label">A Section Label</h2>
```

**Props:**

- `level?: string | number`
- [`extends StyleProps`](#styleprops)

The `SectionLabel` Component is for applying labels to your individual sections.

You can set the `level` of each `SectionLabel` anywhere between `h1->h5`.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<Text>`

```astro
---
import { Text } from 'astro-typetura/components';
---

<Text>Your text content would go here</Text>
<!-- Renders as -->
<p class="regular">Your text content would go here</p>
```

**Props:**

- `big?: boolean`
- `small?: boolean`
- [`extends StyleProps`](#styleprops)

The `Text` Component is for typical text content.

You can set the size of each `Text` between `big` or `small`.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<Caption>`

```astro
---
import { Caption } from 'astro-typetura/components';
---

<Caption>CAptioned Text</Caption>
<!-- Renders as -->
<caption class="caption"> Meta-text descriptions </caption>
```

**Props:**

- `is?: 'caption' | 'figcaption' | 'p' | 'div'`
- [`extends StyleProps`](#styleprops)]

The `Caption` Component is for providing captioned text descriptions.

You can choose between a range of different html caption elements by using the `is` prop.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<Meta>`

```astro
---
import { Meta } from 'astro-typetura/components';
---

<Meta>Meta-text descriptions</Meta>
<!-- Renders as -->
<p class="meta">Meta-text descriptions</p>
```

**Props:**

- [`extends StyleProps`](#styleprops)

The `Meta` Component is for specialised meta text descriptions.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<Blockquote>`

```astro
---
import { Blockquote } from 'astro-typetura/components';
---

<Blockquote>Meta-text descriptions</Blockquote>
<!-- Renders as -->
<blockquote class="blockquote">Meta-text descriptions</blockquote>
```

**Props:**

- `is?: 'blockquote' | 'p' | 'div'`
- [`extends StyleProps`](#styleprops)

The `Blockquote` Component is for providing quoted text content.

You can choose between a range of different html blockquote elements by using the `is` prop.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

### `<Prose>`

```astro
---
import {Prose} from 'astro-typetura/components'
import Markdown from '../markdown.md
---

<Prose>
    <Mardown.Content>
</Prose>
<!-- Renders as -->
<div class="blockquote">
  <!-- HTML Rendered Markdown Content -->
</div>
```

**Props:**

- `is?: 'div' | 'article' | 'section'`
- [`extends StyleProps`](#styleprops)

The `Prose` Component is for providing Typetura typography over Markdown content in Astro.

You can choose between a range of different html blockquote elements by using the `is` prop.

To customise the Typetura Font system see: [Typetura Props](#typeturaprops)

---

### `<Pullquote>`

```astro
---
import { Pullquote } from 'astro-typetura/components';
---

<Pullquote>Meta-text descriptions</Pullquote>
<!-- Renders as -->
<blockquote class="pullquote">Meta-text descriptions</blockquote>
```

**Props:**

- `is?: 'blockquote' | 'p' `
- [`extends StyleProps`](#styleprops)

The `Pullquote` Component is for providing an alternative quoted text content.

You can choose between a range of different html blockquote elements by using the `is` prop.

You can also customise the Typetura effects on each off these elements further by applying your own values for: `base`, `scale`, `ease`, `key`.

---

## Further Information

For further information on cusotmising and creating your own Typetura Typography system, visit our [documentation](https://docs.typetura.com/)
