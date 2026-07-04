# getSysResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@ohos.resourceManager';
```

## getSysResourceManager

```TypeScript
export function getSysResourceManager(): ResourceManager
```

Obtains a system **ResourceManager** object.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Global.ResourceManager

**Return value:**

| Type | Description |
| --- | --- |
| ResourceManager | The system **ResourceManager** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9001009](../errorcode-resource-manager.md#9001009-failed-to-obtain-a-resourcemanager-object) | Failed to access the system resource.which is not mapped to application sandbox, This error code will be thrown. |

**Example**

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let systemResourceManager = resourceManager.getSysResourceManager();
  // Replace 'sys.string.ohos_lab_vibrate' with the actual resource.
  systemResourceManager.getStringValue($r('sys.string.ohos_lab_vibrate').id).then((value: string) => {
    let str = value;
  }).catch((error: BusinessError) => {
    console.error(`systemResourceManager getStringValue promise error: ${error}`);
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getSysResourceManager failed, error code: ${code}, message: ${message}.`);
}

```

