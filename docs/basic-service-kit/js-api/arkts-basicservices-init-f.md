# init

## Modules to Import

```TypeScript
import { scan } from '@ohos.scan';
```

## init

```TypeScript
function init(): Promise<void>
```

Initializes the scan service. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { scan } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

scan.init().then(() => {
    console.info('scan init success');
}).catch((error: BusinessError) => {
    console.error('scan init failed: ' + JSON.stringify(error));
})

```

