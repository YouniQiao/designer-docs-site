# getRunningFormInfosByFilter (System API)

## Modules to Import

```TypeScript
import { formObserver } from '@kit.FormKit';
```

## getRunningFormInfosByFilter

```TypeScript
function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter
  ): Promise<Array<formInfo.RunningFormInfo>>
```

Obtains the RunningFormInfo objects by FormProviderFilter.

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the stage model.

<!--Device-formObserver-function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter
  ): Promise<Array<formInfo.RunningFormInfo>>--><!--Device-formObserver-function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter
  ): Promise<Array<formInfo.RunningFormInfo>>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formProviderFilter | formInfo.FormProviderFilter | Yes | Indicates the form provider app info. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<formInfo.RunningFormInfo>> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |


## getRunningFormInfosByFilter

```TypeScript
function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter,
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>
  ): void
```

Obtains the RunningFormInfo objects by FormProviderFilter.

**Since:** 10

**Required permissions:** ohos.permission.OBSERVE_FORM_RUNNING

**Model restriction:** This API can be used only in the stage model.

<!--Device-formObserver-function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter,
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>
  ): void--><!--Device-formObserver-function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter,
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>
  ): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formProviderFilter | formInfo.FormProviderFilter | Yes | Indicates the form provider app info. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<formInfo.RunningFormInfo>> | Yes | The callback of getFormInstancesByFilter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |

