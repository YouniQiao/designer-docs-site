# off

## Modules to Import

```TypeScript
import { userStatus } from '@kit.MultimodalAwarenessKit';
```

## off('userAgeGroupDetected')

```TypeScript
function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void
```

Disables the age group detection function.

> **NOTE**  
>  
> This API is supported only on some phones. Error code **33900003** is returned if it is called on unsupported  
> phones.

**Since:** 20

**Deprecated since:** 24

<!--Device-userStatus-function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void--><!--Device-userStatus-function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'userAgeGroupDetected' | Yes | Event type. The value **userAgeGroupDetected** indicates the event of enabling age group detection. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<UserClassification> | No | Callback used to return the detection result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function can not work correctly due to limited<br> device capabilities. |
| [33900001](../../apis-multimodalawareness-kit/errorcode-userStatus.md#33900001-service-exception) | Service exception. Possible causes:<br>1. System error, such as a null pointer and container-related exception.<br>2. Node-API invocation exception, such as invalid Node-API status. |
| 33900003 | Unsubscription failed. Possible causes:<br>1. Callback failure.<br>2. Node-API invocation exception, such as invalid Node-API status.<br>3. IPC request exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    userStatus.off('userAgeGroupDetected');
    console.info("off succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed off and err code is " + error.code);
}

```

