# getNetAccessPolicy

## getNetAccessPolicy

```TypeScript
function getNetAccessPolicy(): Promise<NetAccessPolicy>
```

Query the network access policy of the calling application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetAccessPolicy> | Returns the network access policy of the application.  For details, see {@link NetAccessPolicy}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error, such as nullptr。 |

**Example**

```TypeScript
import { policy } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

policy.getNetAccessPolicy().then((policyInfo: policy.NetAccessPolicy) => {
  console.info(`getNetAccessPolicy success. WiFi: ${policyInfo.allowWiFi}, Cellular: ${policyInfo.allowCellular}`);
}).catch((err: BusinessError) => {
  console.error(`getNetAccessPolicy fail. error info: ${err.code} - ${err.message}`);
});

```

