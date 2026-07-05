# onChangeWithAttribute

## onChangeWithAttribute

```TypeScript
function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<long>): void
```

开启显示设备指定属性变化的监听。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayAttributeOption | Array&lt;string> | Yes | 指定需要监听的屏幕属性名称，且仅限于  [display属性](docroot://reference/apis-arkui/js-apis-display.md#属性)中包含的属性。 |
| callback | Callback&lt;long> | Yes | 回调函数。返回监听到的屏幕ID，该参数为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function onChangeWithAttribute can not work correctly  due to limited device capabilities. |
| 1400003 | This display manager service works abnormally.  Possible causes: Internal IPC error. |

**Example**

```TypeScript
import { Callback } from '@kit.BasicServicesKit';

let attributesChangeCallback: Callback<number> = (data: number) => {
  console.info(`Listening enabled. Data: ${data}`);
};
let attributes: Array<string> = ["rotation", "width"];
display.onChangeWithAttribute(attributes, attributesChangeCallback);

```

