# activateOsAccount

## Modules to Import

```TypeScript
import { accountManager } from '@ohos.enterprise.accountManager';
```

## activateOsAccount

```TypeScript
function activateOsAccount(admin: Want, accountId: number): Promise<void>
```

Activates a specified OS account by ID.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | admin indicates the enterprise admin extension ability information. |
| accountId | number | Yes | accountId indicates the local ID of the OS account.<br>The value must be an integer greater than or equal to 100. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [9200016](../errorcode-enterpriseDeviceManager.md#9200016-service-timeout) | Service timeout. |
| 9201041 | Restricted account. |
| 9201046 | The number of signed-in accounts reaches the upper limit. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

