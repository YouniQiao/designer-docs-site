# offUpdateFormsConfigCallback (System API)

## Modules to Import

```TypeScript
import { formHost } from '@kit.FormKit';
```

## offUpdateFormsConfigCallback

```TypeScript
function offUpdateFormsConfigCallback(callback?: formInfo.UpdateFormsConfigCallback): void
```

Unregister the callback for updating form config.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | formInfo.UpdateFormsConfigCallback | No | Identifies the callback for updating form config. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permissions denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | IPC connection error. |

