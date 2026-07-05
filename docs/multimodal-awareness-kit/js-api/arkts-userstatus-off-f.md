# off

## off('userAgeGroupDetected')

```TypeScript
function off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void
```

Disables the age group detection function. > **NOTE** > > This API is supported only on some phones. Error code **33900003** is returned if it is called on unsupported > phones.

**Since:** 20

**Deprecated since:** 24

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'userAgeGroupDetected' | Yes | Event type. The value userAgeGroupDetected indicates the event of  enabling age group detection. |
| callback | Callback&lt;UserClassification> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 33900001 | Service exception. Possible causes:  1. System error, such as a null pointer and container-related exception.  2. Node-API invocation exception, such as invalid Node-API status. |
| 33900003 | Unsubscription failed. Possible causes:  1. Callback failure.  2. Node-API invocation exception, such as invalid Node-API status.  3. IPC request exception. |

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

