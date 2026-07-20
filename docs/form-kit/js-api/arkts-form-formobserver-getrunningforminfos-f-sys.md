# getRunningFormInfos (System API)

## Modules to Import

```TypeScript
import { formObserver } from '@kit.FormKit';
```

## getRunningFormInfos

```TypeScript
function getRunningFormInfos(callback: AsyncCallback<Array<formInfo.RunningFormInfo>>, hostBundleName?: string): void
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function getRunningFormInfos(callback: AsyncCallback<Array<formInfo.RunningFormInfo>>, hostBundleName?: string): void--><!--Device-formObserver-function getRunningFormInfos(callback: AsyncCallback<Array<formInfo.RunningFormInfo>>, hostBundleName?: string): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<formInfo.RunningFormInfo>> | Yes | The callback is used to return the RunningFormInfo. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |


## getRunningFormInfos

```TypeScript
function getRunningFormInfos(
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>,
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): void
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function getRunningFormInfos(
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>,
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): void--><!--Device-formObserver-function getRunningFormInfos(
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>,
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<formInfo.RunningFormInfo>> | Yes | The callback is used to return the RunningFormInfo. |
| isUnusedIncluded | boolean | Yes | Indicates whether to include unused form. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |


## getRunningFormInfos

```TypeScript
function getRunningFormInfos(hostBundleName?: string): Promise<Array<formInfo.RunningFormInfo>>
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function getRunningFormInfos(hostBundleName?: string): Promise<Array<formInfo.RunningFormInfo>>--><!--Device-formObserver-function getRunningFormInfos(hostBundleName?: string): Promise<Array<formInfo.RunningFormInfo>>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<formInfo.RunningFormInfo>> | Returns the RunningFormInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |


## getRunningFormInfos

```TypeScript
function getRunningFormInfos(
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): Promise<Array<formInfo.RunningFormInfo>>
```

Obtains the RunningFormInfo objects provided by a specific card host application on the device.

**Since:** 11

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

<!--Device-formObserver-function getRunningFormInfos(
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): Promise<Array<formInfo.RunningFormInfo>>--><!--Device-formObserver-function getRunningFormInfos(
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): Promise<Array<formInfo.RunningFormInfo>>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUnusedIncluded | boolean | Yes | Indicates whether to include unused form. |
| hostBundleName | string | No | Indicates the bundle name of the form host application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<formInfo.RunningFormInfo>> | Returns the RunningFormInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500060](../errorcode-form.md#16500060-service-connection-failure) | Service connection error. |

