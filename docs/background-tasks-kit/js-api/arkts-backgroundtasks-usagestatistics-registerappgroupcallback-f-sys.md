# registerAppGroupCallBack (System API)

## Modules to Import

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';
```

<a id="registerappgroupcallback"></a>
## registerAppGroupCallBack

```TypeScript
function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>, callback: AsyncCallback<void>): void
```

Register appGroup change callback to service.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>, callback: AsyncCallback<void>): void--><!--Device-usageStatistics-function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AppGroupCallbackInfo&gt; | Yes | callback of AppGroupCallbackInfo when the group of app changed. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result.If the registration is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10100001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100001-duplicate-application-group-operation) | Repeated operation on the application group. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

function onBundleGroupChanged(res: usageStatistics.AppGroupCallbackInfo) {
  console.info('BUNDLE_ACTIVE onBundleGroupChanged RegisterGroupCallBack callback success.');
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result appOldGroup is : ' + res.appOldGroup);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result appNewGroup is : ' + res.appNewGroup);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result changeReason is : ' + res.changeReason);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result userId is : ' + res.userId);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result bundleName is : ' + res.bundleName);
};
usageStatistics.registerAppGroupCallBack(onBundleGroupChanged, (err: BusinessError) => {
  if(err) {
    console.error('BUNDLE_ACTIVE registerAppGroupCallBack callback failed. code is: ' + err.code + ',message is: ' + err.message);
  } else {
    console.info('BUNDLE_ACTIVE registerAppGroupCallBack callback success.');
  }
});

```


<a id="registerappgroupcallback-1"></a>
## registerAppGroupCallBack

```TypeScript
function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>): Promise<void>
```

Register appGroup change callback to service.

**Since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

<!--Device-usageStatistics-function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>): Promise<void>--><!--Device-usageStatistics-function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>): Promise<void>-End-->

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupCallback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AppGroupCallbackInfo&gt; | Yes | callback of AppGroupCallbackInfo when the group of app changed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by registerAppGroupCallBack. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;<br> 2. Incorrect parameters types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [10000001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000001-memory-operation-failure) | Memory operation failed. |
| [10000002](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000002-ipc-parcel-write-failure) | Failed to write data into parcel. Possible reasons: 1. Invalid parameters;<br> 2. Failed to apply for memory. |
| [10000003](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000003-system-service-operation-failure) | Failed to get system ability manager. |
| [10000004](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10000004-ipc-failure) | Failed to access the device usage service. |
| [10100001](../../apis-backgroundtasks-kit/errorcode-DeviceUsageStatistics.md#10100001-duplicate-application-group-operation) | Repeated operation on the application group. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { usageStatistics } from '@kit.BackgroundTasksKit';

function onBundleGroupChanged(res: usageStatistics.AppGroupCallbackInfo) {
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack RegisterGroupCallBack callback success.');
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result appOldGroup is : ' + res.appOldGroup);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result appNewGroup is : ' + res.appNewGroup);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result changeReason is : ' + res.changeReason);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result userId is : ' + res.userId);
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack result bundleName is : ' + res.bundleName);
};
usageStatistics.registerAppGroupCallBack(onBundleGroupChanged).then( () => {
  console.info('BUNDLE_ACTIVE registerAppGroupCallBack promise succeeded.');
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE registerAppGroupCallBack promise failed. code is: ' + err.code + ',message is: ' + err.message);
});

```

