# getInstalledBundleStorageStats

## getInstalledBundleStorageStats

```TypeScript
function getInstalledBundleStorageStats(admin: Want, bundleNames: Array<string>, accountId: number): Promise<Array<BundleStorageStats>>
```

获取设备指定用户下已安装应用的存储占用信息。使用Promise异步回调。 > **说明：** > > 1.仅能获取已安装应用的存储占用信息。 > > 2.bundleNames参数为empty或全部传入未安装的应用包名，会抛出9200012错误码。 > > 3.bundleNames参数传递的包名部分应用已安装，部分应用未安装时，接口返回正常，已安装的应用返回实际的存储占用信息，未安装的应用存储占用信息为0。 > > 4.该接口支持跨用户查询，比如可以在100用户下，查询101用户下的某些应用的存储占用信息。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleNames | Array&lt;string> | Yes | 应用包名列表。取值范围：小于等于200个应用包名。 |
| accountId | number | Yes | 账号ID  取值应为≥0的整数。  - 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleStorageStats>> | Promise对象，返回已安装应用的存储占用信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

