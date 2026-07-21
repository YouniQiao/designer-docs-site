# queryAllAutoStartupApplications (System API)

## Modules to Import

```TypeScript
import { autoStartupManager } from '@kit.AbilityKit';
```

<a id="queryallautostartupapplications"></a>
## queryAllAutoStartupApplications

```TypeScript
function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void
```

Obtains information about all auto-startup application components. This API uses an asynchronous callback to return the result.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and wearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on other device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called on other device types, error code 16000050 is returned.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the stage model.

<!--Device-autoStartupManager-function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void--><!--Device-autoStartupManager-function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;AutoStartupInfo&gt;&gt; | Yes | Callback used to return the result. If the information is obtained, **err** is **undefined** and **data** is **Array<[AutoStartupInfo](arkts-ability-autostartupinfo-i-sys.md)>**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied, interface caller does not have permission"ohos.permission.MANAGE_APP_BOOT". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Failed to connect to the system service. |


<a id="queryallautostartupapplications-1"></a>
## queryAllAutoStartupApplications

```TypeScript
function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>
```

Obtains information about all auto-startup application components. This API uses a promise to return the result.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and wearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on other device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called on other device types, error code 16000050 is returned.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_APP_BOOT

**Model restriction:** This API can be used only in the stage model.

<!--Device-autoStartupManager-function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>--><!--Device-autoStartupManager-function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AutoStartupInfo&gt;&gt; | Promise used to return the information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied, interface caller does not have permission"ohos.permission.MANAGE_APP_BOOT". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameters types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Failed to connect to the system service. |

