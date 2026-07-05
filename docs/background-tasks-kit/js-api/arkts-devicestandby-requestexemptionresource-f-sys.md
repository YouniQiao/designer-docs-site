# requestExemptionResource

## requestExemptionResource

```TypeScript
function requestExemptionResource(request: ResourceRequest): void
```

Requests exemption resources.

**Since:** 10

**Required permissions:** 

 ohos.permission.DEVICE_STANDBY_EXEMPTION

**System capability:** SystemCapability.ResourceSchedule.DeviceStandby

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | ResourceRequest | Yes | requesting or releasing resources. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 9800001 | Memory operation failed. |
| 9800002 | Failed to write data into parcel. Possible reasons: 1. Invalid parameters. |
| 9800003 | Failed to complete inner transaction. |
| 9800004 | Failed to get device standby service. Possible cause: A necessary system service is not ready. |
| 18700001 | Caller information verification failed. |

**Example**

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';

let resRequest: deviceStandby.ResourceRequest = {
  resourceTypes: deviceStandby.ResourceType.TIMER,
  uid:10003,
  name:"com.example.app",
  duration:10,
  reason:"apply",
};
deviceStandby.requestExemptionResource(resRequest);

```

