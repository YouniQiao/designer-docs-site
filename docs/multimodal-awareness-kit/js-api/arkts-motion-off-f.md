# off

## off('operatingHandChanged')

```TypeScript
function off(type: 'operatingHandChanged', callback?: Callback<OperatingHandStatus>): void
```

Unsubscribes from operating hand change events.

**Since:** 15

**Required permissions:** 

- API version15  to  19: ohos.permission.ACTIVITY_MOTION

- API version20 and later: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'operatingHandChanged' | Yes | Event type. This parameter has a fixed value of operatingHandChanged. |
| callback | Callback&lt;OperatingHandStatus> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to unsubscribe operatingHandChanged  event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE. |
| 401 | Parameter error. Parameter verification failed. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |
| 31500003 | Unsubscription failed. Possible causes: 1. Callback failure;  2. N-API invocation exception, invalid N-API status; 3. IPC request exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    motion.off('operatingHandChanged');
    console.info("off succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed off and err code is " + error.code);
}

```

## off('holdingHandChanged')

```TypeScript
function off(type: 'holdingHandChanged', callback?: Callback<HoldingHandStatus>): void
```

Disables listening for holding hand status changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.DETECT_GESTURE

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'holdingHandChanged' | Yes | Event type. The value holdingHandChanged indicates the holding hand  status change event. |
| callback | Callback&lt;HoldingHandStatus> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to unsubscribe holdingHandChanged  event forbidden by permission: ohos.permission.DETECT_GESTURE. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |
| 31500003 | Unsubscription failed. Possible causes: 1. Callback failure;  2. N-API invocation exception, invalid N-API status; 3. IPC request exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  motion.off('holdingHandChanged'); // Unregister all callbacks for the holding hand status change event.
  console.info('off succeeded');
} catch (err) {
  let error = err as BusinessError;
  console.error('Failed off; err code = ' + error.code);
}

```

