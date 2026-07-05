# on

## on('operatingHandChanged')

```TypeScript
function on(type: 'operatingHandChanged', callback: Callback<OperatingHandStatus>): void
```

Subscribes to operating hand change events. If the device does not support this function, error code 801 is returned.

**Since:** 15

**Required permissions:** 

- API version15  to  19: ohos.permission.ACTIVITY_MOTION

- API version20 and later: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'operatingHandChanged' | Yes | Event type. This parameter has a fixed value of operatingHandChanged. |
| callback | Callback&lt;OperatingHandStatus> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to subscribe operatingHandChanged  event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE. |
| 401 | Parameter error. Parameter verification failed. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |
| 31500002 | Subscription failed. Possible causes: 1. Callback registration failure;  2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC  request exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let callback:Callback<motion.OperatingHandStatus> = (data:motion.OperatingHandStatus) => {
    console.info('callback succeeded' + data);
};

try {
    motion.on('operatingHandChanged', callback);  
    console.info("on succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed on and err code is " + error.code);
}

```

## on('holdingHandChanged')

```TypeScript
function on(type: 'holdingHandChanged', callback: Callback<HoldingHandStatus>): void
```

Enables listening for holding hand status changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.DETECT_GESTURE

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'holdingHandChanged' | Yes | Event type. The value holdingHandChanged indicates the holding hand  status change event. |
| callback | Callback&lt;HoldingHandStatus> | Yes | Callback used to return the holding hand status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. An attempt was made to subscribe holdingHandChanged  event forbidden by permission: ohos.permission.DETECT_GESTURE. |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 31500001 | Service exception. Possible causes: 1. A system error, such as null pointer,  container-related exception;  2. N-API invocation exception, invalid N-API status. |
| 31500002 | Subscription failed. Possible causes: 1. Callback registration failure;  2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC  request exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let callback:Callback<motion.HoldingHandStatus> = (data:motion.HoldingHandStatus) => {
  console.info('callback succeeded: ' + data);
};

try {
  motion.on('holdingHandChanged', callback);
  console.info('on succeeded');
} catch (err) {
  let error = err as BusinessError;
  console.error('Failed on; err code = ' + error.code);
}

```

