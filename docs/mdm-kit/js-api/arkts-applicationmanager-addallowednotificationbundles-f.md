# addAllowedNotificationBundles

## addAllowedNotificationBundles

```TypeScript
function addAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void
```

添加允许发送通知的应用名单。设置通知白名单后，不在此名单内的应用无法发送通知。 > **说明：** > > 1.如果Kiosk模式与通知白名单策略同时设置，那么设置Kiosk模式的应用与通知白名单中的应用都可以发送通知。 > 2.当已经通过 > [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1) > 设置了禁用设备通知能力时，再通过本接口设置通知白名单，会抛出错误码9200010。 > 3.通知白名单对系统服务不生效，系统服务始终可以发送通知。系统应用受通知白名单管控。 > 4.支持跨用户设置，设置后跨用户立即生效。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleNames | Array&lt;string> | Yes | 应用包名数组，指定允许发送通知的应用。最多支持200个应用。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

