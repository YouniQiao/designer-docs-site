# on

## Modules to Import

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

## on('operatingHandChanged')

```TypeScript
function on(type: 'operatingHandChanged', callback: Callback<OperatingHandStatus>): void
```

Subscribes to operating hand change events.

If the device does not support this function, error code 801 is returned.

**Since:** 15

**Required permissions:** 
- API version 20+: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE
- API version 15 - 19: ohos.permission.ACTIVITY_MOTION

<!--Device-motion-function on(type: 'operatingHandChanged', callback: Callback<OperatingHandStatus>): void--><!--Device-motion-function on(type: 'operatingHandChanged', callback: Callback<OperatingHandStatus>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'operatingHandChanged' | Yes | Event type. This parameter has a fixed value of **operatingHandChanged**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<OperatingHandStatus> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. An attempt was made to subscribe operatingHandChanged<br> event forbidden by permission: ohos.permission.ACTIVITY_MOTION or ohos.permission.DETECT_GESTURE. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [31500001](../../apis-multimodalawareness-kit/errorcode-motion.md#31500001-service-exception) | Service exception. Possible causes: 1. A system error, such as null pointer,container-related exception;<br> 2. N-API invocation exception, invalid N-API status. |
| [31500002](../../apis-multimodalawareness-kit/errorcode-motion.md#31500002-subscription-failed) | Subscription failed. Possible causes: 1. Callback registration failure;<br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC request exception. |

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

**Required permissions:** ohos.permission.DETECT_GESTURE

<!--Device-motion-function on(type: 'holdingHandChanged', callback: Callback<HoldingHandStatus>): void--><!--Device-motion-function on(type: 'holdingHandChanged', callback: Callback<HoldingHandStatus>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.Motion

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'holdingHandChanged' | Yes | Event type. The value **holdingHandChanged** indicates the holding hand status change event. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<HoldingHandStatus> | Yes | Callback used to return the holding hand status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. An attempt was made to subscribe holdingHandChanged<br> event forbidden by permission: ohos.permission.DETECT_GESTURE. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [31500001](../../apis-multimodalawareness-kit/errorcode-motion.md#31500001-service-exception) | Service exception. Possible causes: 1. A system error, such as null pointer,container-related exception;<br> 2. N-API invocation exception, invalid N-API status. |
| [31500002](../../apis-multimodalawareness-kit/errorcode-motion.md#31500002-subscription-failed) | Subscription failed. Possible causes: 1. Callback registration failure;<br> 2. Failed to bind native object to js wrapper; 3. N-API invocation exception, invalid N-API status; 4. IPC request exception. |

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

