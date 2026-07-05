# on

## on('userAgeGroupDetected')

```TypeScript
function on(type: 'userAgeGroupDetected', callback: Callback<UserClassification>): void
```

Enables the age group detection function. When the function is enabled, the application can recommend content based on the age group detection result. > **NOTE** > > This API is supported only on some phones. Error code **801** is returned if it is called on unsupported phones.

**Since:** 20

**Deprecated since:** 24

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'userAgeGroupDetected' | Yes | Event type. The value userAgeGroupDetected indicates the event of  enabling age group detection. |
| callback | Callback&lt;UserClassification> | Yes | Callback used to return the detection result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 33900001 | Service exception. Possible causes:  1. System error, such as a null pointer and container-related exception.  2. Node-API invocation exception, such as invalid Node-API status. |
| 33900002 | Subscription failed. Possible causes:  1. Callback registration failed.  2. Failed to bind the native object to the JS wrapper.  3. Node-API invocation exception, such as invalid Node-API status.  4. IPC request exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    userStatus.on('userAgeGroupDetected', (data: userStatus.UserClassification) => {
        console.info('callback succeeded, ageGroup:' + data.ageGroup + ", confidence:" + data.confidence);
    });
    console.info("on succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed on and err code is " + error.code);
}

```

