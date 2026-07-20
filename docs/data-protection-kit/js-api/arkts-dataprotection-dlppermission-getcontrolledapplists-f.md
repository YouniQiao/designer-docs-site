# getControlledAppLists

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## getControlledAppLists

```TypeScript
function getControlledAppLists(): Promise<Array<string>>
```

Obtain the list of applications that are subject to enterprise DLP control for the current user.

**Since:** 26.0.0

**Required permissions:** ohos.permission.DLP_POLICY_MANAGER

**Model restriction:** This API can be used only in the stage model.

<!--Device-dlpPermission-function getControlledAppLists(): Promise<Array<string>>--><!--Device-dlpPermission-function getControlledAppLists(): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<string>> | Promise that returns the appIdentifiers of controlled application for the current user. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

