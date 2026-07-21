# push

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

<a id="push"></a>
## push

```TypeScript
function push(options: RouterOptions): void
```

Navigates to a specified page in the application.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [pushUrl(options:](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1)

<!--Device-router-function push(options: RouterOptions): void--><!--Device-router-function push(options: RouterOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RouterOptions](arkts-arkui-router-routeroptions-i.md) | Yes | Page routing parameters. |

**Example**

```TypeScript
import { router } from '@kit.ArkUI';

class innerParams {
  data3: number[];

  constructor(tuple: number[]) {
    this.data3 = tuple;
  }
}

class RouterParams {
  data1: string;
  data2: innerParams;

  constructor(str: string, tuple: number[]) {
    this.data1 = str;
    this.data2 = new innerParams(tuple);
  }
}

router.push({
  url: 'pages/routerpage2',
  params: new RouterParams('message', [123, 456, 789])
});

```

```TypeScript
import { router } from '@kit.ArkUI';

class innerParams {
  data3: number[];

  constructor(tuple: number[]) {
    this.data3 = tuple;
  }
}

class RouterParams {
  data1: string;
  data2: innerParams;

  constructor(str: string, tuple: number[]) {
    this.data1 = str;
    this.data2 = new innerParams(tuple);
  }
}

router.push({
  url: 'pages/routerpage2',
  params: new RouterParams('message', [123, 456, 789])
});

```

