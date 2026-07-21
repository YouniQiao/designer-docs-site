# releaseExemptionResource (System API)

## Modules to Import

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';
```

<a id="releaseexemptionresource"></a>
## releaseExemptionResource

```TypeScript
function releaseExemptionResource(request: ResourceRequest): void
```

Releases exemption resources.

**Since:** 10

**Required permissions:** ohos.permission.DEVICE_STANDBY_EXEMPTION

<!--Device-deviceStandby-function releaseExemptionResource(request: ResourceRequest): void--><!--Device-deviceStandby-function releaseExemptionResource(request: ResourceRequest): void-End-->

**System capability:** SystemCapability.ResourceSchedule.DeviceStandby

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [ResourceRequest](arkts-backgroundtasks-devicestandby-resourcerequest-i-sys.md) | Yes | requesting or releasing resources. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [9800001](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800001-memory-operation-failure) | Memory operation failed. |
| [9800002](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800002-parcel-operation-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters. |
| [9800003](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800003-ipc-failure) | Failed to complete inner transaction. |
| [9800004](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#9800004-system-service-failure) | Failed to get device standby service. Possible cause: A necessary system service is not ready. |
| [18700001](../../apis-backgroundtasks-kit/errorcode-backgroundTaskMgr.md#18700001-caller-information-verification-failure-for-an-energy-resource-request) | Caller information verification failed. |

**Example**

```TypeScript
import { deviceStandby } from '@kit.BackgroundTasksKit';

let resRequest: deviceStandby.ResourceRequest = {
  resourceTypes: deviceStandby.ResourceType.TIMER,
  uid:10003,
  name:"com.demo.app",
  duration:10,
  reason:"unapply",
};
deviceStandby.releaseExemptionResource(resRequest);

```

