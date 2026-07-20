# setScreenLockDisabledForAccount

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## setScreenLockDisabledForAccount

```TypeScript
function setScreenLockDisabledForAccount(admin: Want, disable: boolean): void
```

Sets the screen lock disabled for current account.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function setScreenLockDisabledForAccount(admin: Want, disable: boolean): void--><!--Device-securityManager-function setScreenLockDisabledForAccount(admin: Want, disable: boolean): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the administrator ability information. |
| disable | boolean | Yes | true if disable the screen lock for account, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| 9201021 | A lock screen password has been set for the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

