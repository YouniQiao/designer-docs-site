# getDisposedRule (System API)

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## getDisposedRule

```TypeScript
function getDisposedRule(appId: string, appIndex?: number): DisposedRule
```

Obtains the disposed rule of an application or an application clone.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

<!--Device-appControl-function getDisposedRule(appId: string, appIndex?: int): DisposedRule--><!--Device-appControl-function getDisposedRule(appId: string, appIndex?: int): DisposedRule-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId or appIdentifier of the target application. If a rule is set using appId, it must be obtained using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique identifier of an application and is determined by the bundle name and signature information of the application.For details about how to obtain **appId**, see [How do I obtain appId from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information).<br> [appIdentifier](arkts-ability-bundleinfo-signatureinfo-i.md) is also the unique identifier of an app.For details, see [What is appIdentifier](../../../../quick-start/common_problem_of_application.md#what-is-appidentifier). For details about how to obtain **appIdentifier**, see [How do I obtain appIdentifier from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information). |
| appIndex | number | No | Index of the application clone. The default value is **0**.<br> The value **0** means to obtain the disposed rule of the main application. A value greater than 0 means to obtain the disposed rule of the application clone with the specified index.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| [DisposedRule](arkts-ability-appcontrol-disposedrule-i-sys.md) | Disposed rule of the application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application is not allowed to call a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700005](../errorcode-bundle.md#17700005-appid-is-an-empty-string) | The specified app ID is invalid. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | AppIndex is not in the valid range.<br>**Applicable version:** 12 and later |

