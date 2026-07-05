# replace

## Modules to Import

```TypeScript
import { router } from '@ohos.router';
```

## replace

```TypeScript
function replace(options: RouterOptions): void
```

Replaces the current page with another one in the application and destroys the current page.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** replaceUrl(options:

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | Description of the new page. |

**Example**

```TypeScript
class RouterParams {
  data1: string;

  constructor(str: string) {
    this.data1 = str;
  }
}

router.replace({
  url: 'pages/detail',
  params: new RouterParams('message')
});

```

```TypeScript
class RouterParams {
  data1: string;

  constructor(str: string) {
    this.data1 = str;
  }
}

router.replace({
  url: 'pages/detail',
  params: new RouterParams('message')
});

```

