# push

## push

```TypeScript
function push(options: RouterOptions): void
```

跳转到应用内的指定页面。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [pushUrl](arkts-router-c.md#pushUrl)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.arkui.UIContext:Router#pushUrl(options:

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | 跳转页面描述信息。 |

**Example**

```TypeScript
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

