# getSelfManagedBrowserPolicy

## getSelfManagedBrowserPolicy

```TypeScript
function getSelfManagedBrowserPolicy(): ArrayBuffer
```

获取当前设备浏览器策略。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 浏览器策略。 |

**Example**

```TypeScript
import { browser } from '@kit.MDMKit';
import { util } from '@kit.ArkTS';

try {
  let buffer: ArrayBuffer = browser.getSelfManagedBrowserPolicy();
  let intBuffer: Uint8Array = new Uint8Array(buffer);
  let decoder: util.TextDecoder = util.TextDecoder.create('utf-8');
  let stringData: string = decoder.decodeToString(intBuffer);
  console.info(`Succeeded in getting self managed browser policy, result : ${stringData}`);
} catch(err) {
  console.error(`Failed to get self managed browser policy. Code is ${err.code}, message is ${err.message}`);
}

```

