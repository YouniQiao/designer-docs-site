# exit

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

<a id="exit"></a>
## exit

```TypeScript
function exit(): Promise<void>
```

Exits the scan service. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.PRINT

<!--Device-scan-function exit(): Promise<void>--><!--Device-scan-function exit(): Promise<void>-End-->

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

scan.exit().then(() => {
    console.info('scan exit success');
}).catch((error: BusinessError) => {
    console.error('scan exit failed: ' + JSON.stringify(error));
})

```

