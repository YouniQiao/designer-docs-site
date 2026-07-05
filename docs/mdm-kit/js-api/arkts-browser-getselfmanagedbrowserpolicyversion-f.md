# getSelfManagedBrowserPolicyVersion

## getSelfManagedBrowserPolicyVersion

```TypeScript
function getSelfManagedBrowserPolicyVersion(): string
```

获取指定浏览器的浏览器策略版本。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Return value:**

| Type | Description |
| --- | --- |
| string | 浏览器策略版本。 |

**Example**

```TypeScript
import { browser } from '@kit.MDMKit';

try {
  let version: string = browser.getSelfManagedBrowserPolicyVersion();
  console.info(`Succeeded in getting self managed browser policy version, result : ${version}`);
} catch(err) {
  console.error(`Failed to get self managed browser policy version. Code is ${err.code}, message is ${err.message}`);
}

```

