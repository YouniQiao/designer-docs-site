# addAllowedDistributeAbilityConnBundles

## addAllowedDistributeAbilityConnBundles

```TypeScript
function addAllowedDistributeAbilityConnBundles(admin: Want, appIdentifiers: Array<string>, serviceType: ServiceType, accountId: number): void
```

为指定用户添加允许使用分布式能力的应用名单，名单中的应用在指定用户下可以使用指定的分布式能力。 当前支持的分布式类型有：[协同服务]applicationManager.ServiceType。 > **说明：** > > 1.如果要设置允许使用协同服务的应用名单，在调用本接口前必须已经通过 > [setDisallowedPolicyForAccount](arkts-restrictions-setdisallowedpolicyforaccount-f.md#setDisallowedPolicyForAccount-1) > 接口禁用了向其他设备传输数据的设备间单向传输数据的能力，否则会抛出错误码9201043。 > 2.当向其他设备传输数据的设备间单向传输数据的能力被解除禁用时，通过本接口设置的允许使用协同服务的应用名单会被同步清除。

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
| 9201043 | Prerequisites for the API call have not been satisfied. For example,  distributed outgoing transmission is not disallowed before adding the distributed bidirectional collaboration  trustlist. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

