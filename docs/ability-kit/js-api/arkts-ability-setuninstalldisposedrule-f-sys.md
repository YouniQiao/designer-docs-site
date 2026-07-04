# setUninstallDisposedRule (System API)

## Modules to Import

```TypeScript
import { appControl } from '@ohos.bundle.appControl';
```

## setUninstallDisposedRule

```TypeScript
function setUninstallDisposedRule(appIdentifier: string, rule: UninstallDisposedRule, appIndex?: number): void
```

Sets an uninstallation disposed rule for an application or an application clone.

**Since:** 15

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appIdentifier | string | Yes | appIdentifier of the target application.<br> If the application does not have anappIdentifier, use its appId instead. **appId** is the unique identifier of an application and is determined bythe bundle name and signature information of the application. For details about how to obtain **appId**, see[How do I obtain appId from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information). |
| rule | UninstallDisposedRule | Yes | Uninstallation disposed rule. |
| appIndex | number | No | Index of the application clone. The default value is **0**.<br> The value **0** meansto set the uninstallation disposed rule for the main application. A value greater than 0 means to set theuninstallation disposed rule for the application clone. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. A non-system application is not allowed to call a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | AppIndex is not in the valid range. |
| [17700074](../errorcode-bundle.md#17700074-invalid-appidentifier) | The specified appIdentifier is invalid. |
| [17700075](../errorcode-bundle.md#17700075-bundle-name-specified-in-want-is-inconsistent-with-that-of-the-caller) | The specified bundleName of want is not the same with caller. |

