# getSdkVersion

## getSdkVersion

```TypeScript
function getSdkVersion(options: HuksOptions): string
```

获取当前系统sdk版本。 > **说明：** > > 从API version 8开始支持，从API version 11开始废弃。

**Since:** 8

**Deprecated since:** 11

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | HuksOptions | Yes | 空对象（此处传空即可）。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回sdk版本。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let emptyOptions: huks.HuksOptions = {
  properties: []
};
let result = huks.getSdkVersion(emptyOptions);

```

