# replace

## replace

```TypeScript
function replace(options: RouterOptions): void
```

用应用内的某个页面替换当前页面，并销毁被替换的页面。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [replaceUrl](arkts-router-c.md#replaceUrl)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.arkui.UIContext:Router#replaceUrl(options:

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | 替换页面描述信息。 |

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

