# removeAllowedDistributeAbilityConnBundles

## removeAllowedDistributeAbilityConnBundles

```TypeScript
function removeAllowedDistributeAbilityConnBundles(admin: Want, appIdentifiers: Array<string>, serviceType: ServiceType, accountId: number): void
```

为指定用户移除允许使用分布式能力的应用名单。移除后，若名单中还有剩余的应用，则仅名单中的应用在指定用户下可以使用指定类型的分布式能力；若名单中已被清空，无剩余的应用，则所有应用在指定用户下都不允许使用指定类型的分布式能力。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIdentifiers | Array&lt;string> | Yes | 应用[唯一标识符]./bundleManager/BundleInfo:SignatureInfo的数组，可以通过接口  [bundleManager.getBundleInfo](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-3)  获取bundleInfo.signatureInfo.appIdentifier。允许列表总数不能超过200个。 |
| serviceType | ServiceType | Yes | 分布式能力类型。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0的整数。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

