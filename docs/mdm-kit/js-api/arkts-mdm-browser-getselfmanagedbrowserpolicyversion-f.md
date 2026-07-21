# getSelfManagedBrowserPolicyVersion

## Modules to Import

```TypeScript
import { browser } from '@kit.MDMKit';
```

<a id="getselfmanagedbrowserpolicyversion"></a>
## getSelfManagedBrowserPolicyVersion

```TypeScript
function getSelfManagedBrowserPolicyVersion(): string
```

Obtains the policy version of a specified browser.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

<!--Device-browser-function getSelfManagedBrowserPolicyVersion(): string--><!--Device-browser-function getSelfManagedBrowserPolicyVersion(): string-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Return value:**

| Type | Description |
| --- | --- |
| string | Browser policy version. |

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

