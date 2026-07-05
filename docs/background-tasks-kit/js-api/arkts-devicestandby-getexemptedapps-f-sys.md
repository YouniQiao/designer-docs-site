# getExemptedApps

## getExemptedApps

```TypeScript
function getExemptedApps(resourceTypes: int, callback: AsyncCallback<Array<ExemptedAppInfo>>): void
```

Returns the information about the specified exempted application.

**Since:** 10

**Required permissions:** 

 ohos.permission.DEVICE_STANDBY_EXEMPTION

**System capability:** SystemCapability.ResourceSchedule.DeviceStandby

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceTypes | int | Yes | the combination of {@link ResourceType} values. |
| callback | AsyncCallback&lt;Array&lt;ExemptedAppInfo>> | Yes | the callback of getExemptedApps. |

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
import { BusinessError } from '@kit.BasicServicesKit';
import { deviceStandby } from '@kit.BackgroundTasksKit';

let resourceTypes: deviceStandby.ResourceType  = deviceStandby.ResourceType.TIMER | deviceStandby.ResourceType.NETWORK;
deviceStandby.getExemptedApps(resourceTypes, (err: BusinessError, res: Array<deviceStandby.ExemptedAppInfo>) => {
  if (err) {
    console.error('DEVICE_STANDBY getExemptedApps callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('DEVICE_STANDBY getExemptedApps callback success.');
    for (let i = 0; i < res.length; i++) {
      console.info('DEVICE_STANDBY getExemptedApps callback result ' + JSON.stringify(res[i]));
    }
  }
});

```

## getExemptedApps

```TypeScript
function getExemptedApps(resourceTypes: int): Promise<Array<ExemptedAppInfo>>
```

Returns the information about the specified exempted application.

**Since:** 10

**Required permissions:** 

 ohos.permission.DEVICE_STANDBY_EXEMPTION

**System capability:** SystemCapability.ResourceSchedule.DeviceStandby

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceTypes | int | Yes | the combination of {@link ResourceType} values. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ExemptedAppInfo>> | the promise returned by getExemptedApps. |

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
import { BusinessError } from '@kit.BasicServicesKit';
import { deviceStandby } from '@kit.BackgroundTasksKit';

let resourceTypes: deviceStandby.ResourceType = deviceStandby.ResourceType.TIMER | deviceStandby.ResourceType.NETWORK;
deviceStandby.getExemptedApps(resourceTypes).then( (res: Array<deviceStandby.ExemptedAppInfo>) => {
  console.info('DEVICE_STANDBY getExemptedApps promise success.');
  for (let i = 0; i < res.length; i++) {
    console.info('DEVICE_STANDBY getExemptedApps promise result ' + JSON.stringify(res[i]));
  }
}).catch( (err: BusinessError) => {
  console.error('DEVICE_STANDBY getExemptedApps promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

