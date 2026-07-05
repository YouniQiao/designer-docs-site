# setScreenLockDisabledForAccount

## setScreenLockDisabledForAccount

```TypeScript
function setScreenLockDisabledForAccount(admin: Want, disable: boolean): void
```

禁用/启用当前用户的滑动解锁能力。启用时：设备灭屏后再亮屏，用户需要在屏幕上滑动后才能进入桌面。禁用时：设备灭屏后再亮屏会直接进入桌面。 > **说明：** > > 1.该接口能力仅在设备无锁屏密码时生效。 > > 2.设备默认属于启用滑动解锁的状态。 > > 3.设备上存在密码时，设置禁用滑动解锁会失败，抛出9201021错误码。 > > 4.下发禁用滑动解锁的策略后，用户输入了设备密码，此时密码会生效，设备需要验证密码后才能进入桌面，之前下发的策略失效。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| disable | boolean | Yes | 是否禁用当前用户的滑动解锁能力。true表示禁用，false表示不禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201021 | A lock screen password has been set for the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

