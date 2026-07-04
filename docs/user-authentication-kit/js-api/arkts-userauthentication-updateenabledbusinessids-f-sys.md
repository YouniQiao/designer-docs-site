# updateEnabledBusinessIds (System API)

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@ohos.userIAM.companionDeviceAuth';
```

## updateEnabledBusinessIds

```TypeScript
function updateEnabledBusinessIds(templateId: Uint8Array, enabledBusinessIds: number[]): Promise<void>
```

Updates the service scope supported by the specified companion device template. This API uses a promise to return the result.

**Since:** 23

**Required permissions:** ohos.permission.USE_USER_IDM

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateId | Uint8Array | Yes | ID of the target template. |
| enabledBusinessIds | number[] | Yes | ID set of services supported by the template. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [32600001](../errorcode-useriam.md#32600001-system-service-not-working-properly) | The system service is not working properly. Please try again later. |
| [32600002](../errorcode-useriam.md#32600002-template-not-found) | The template is not found. |
| [32600003](../errorcode-useriam.md#32600003-invalid-service-id) | The business ID is invalid. |

