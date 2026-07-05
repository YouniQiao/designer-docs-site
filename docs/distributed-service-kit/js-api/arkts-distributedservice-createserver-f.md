# createServer

## Modules to Import

```TypeScript
import { linkEnhance } from '@ohos.distributedsched.linkEnhance';
```

## createServer

```TypeScript
function createServer(name: string): Server
```

Creates a **Server** object. After **start()** is called, the device can be connected to other devices as a server.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | **Server** object name. The value is a string of up to 255 bytes. It cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Server | **Server** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supportedbecause the linkEnhance function has been trimmed.<br>**Applicable version:** 26.0.0 |
| [32390206](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390206-invalid-parameter) | Invalid parameter. |
| [32390203](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390203-duplicate-service-name) | Duplicate server name. |

**Example**

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let name: string = "demo";
  hilog.info(0x0000, TAG, 'start server name = ' + name);
  // Construct a Server object using the specified name.
  let server: linkEnhance.Server = linkEnhance.createServer(name);
} catch (err) {
  hilog.error(0x0000, TAG, 'start server errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

