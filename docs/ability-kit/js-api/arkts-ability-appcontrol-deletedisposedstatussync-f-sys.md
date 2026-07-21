# deleteDisposedStatusSync (System API)

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

<a id="deletedisposedstatussync"></a>
## deleteDisposedStatusSync

```TypeScript
function deleteDisposedStatusSync(appId: string, appIndex?: number): void
```

Deletes the disposed status for an application or an application clone. This API returns the result synchronously.If the operation is successful, **null** is returned. If the operation fails, an error message is returned.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS

<!--Device-appControl-function deleteDisposedStatusSync(appId: string, appIndex?: int): void--><!--Device-appControl-function deleteDisposedStatusSync(appId: string, appIndex?: int): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId or appIdentifier of the target application. If a rule is set using appId, it must be deleted using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique identifier of an application and is determined by the bundle name and signature information of the application.For details about how to obtain **appId**, see [How do I obtain appId from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information).<br> [appIdentifier](arkts-ability-bundleinfo-signatureinfo-i.md) is also the unique identifier of an app.For details, see [What is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier). For details about how to obtain **appIdentifier**, see [How do I obtain appIdentifier from application information](docroot://quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information). |
| appIndex | number | No | Index of the application clone. The default value is **0**.<br> The value **0** means to delete the disposed status of the main application. A value greater than 0 means to delete the disposed status of the application clone.<br>**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application is not allowed to call a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700005](../errorcode-bundle.md#17700005-appid-is-an-empty-string) | The specified app ID is invalid. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | AppIndex is not in the valid range.<br>**Applicable version:** 12 and later |

