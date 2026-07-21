# getSystemResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
```

<a id="getsystemresourcemanager"></a>
## getSystemResourceManager

```TypeScript
export function getSystemResourceManager(): ResourceManager
```

Obtains a system **ResourceManager** object.

> **NOTE**  
>  
> The **Configuration** field in the **ResourceManager** object obtained via this API uses the default value,  
> which is as follows:  
> {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}.

**Since:** 10

**Deprecated since:** 20

**Substitutes:** [getSysResourceManager](arkts-localization-resourcemanager-getsysresourcemanager-f.md#getsysresourcemanager-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-resourceManager-export function getSystemResourceManager(): ResourceManager--><!--Device-resourceManager-export function getSystemResourceManager(): ResourceManager-End-->

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| [ResourceManager](arkts-localization-resourcemanager-resourcemanager-i.md) | The system **ResourceManager** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9001009](../errorcode-resource-manager.md#9001009-failed-to-obtain-the-system-resource-management-object) | Failed to access the system resource.which is not mapped to application sandbox, This error code will be thrown. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let systemResourceManager = resourceManager.getSystemResourceManager();
  systemResourceManager.getStringValue($r('sys.string.ohos_lab_vibrate').id).then((value: string) => {
    let str = value;
  }).catch((error: BusinessError) => {
    console.error("systemResourceManager getStringValue promise error is " + error);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getSystemResourceManager failed, error code: ${code}, message: ${message}.`);
}

```

