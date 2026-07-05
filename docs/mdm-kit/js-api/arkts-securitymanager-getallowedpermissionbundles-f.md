# getAllowedPermissionBundles

## getAllowedPermissionBundles

```TypeScript
function getAllowedPermissionBundles(admin: Want | null, permission: string, accountId: number): Array<common.ApplicationInstance>
```

获取权限使用例外名单的应用列表。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 当设备有多个MDM应用时，传入admin  查询对应admin设置的策略。传入null时查询整机实际生效的策略。 |
| permission | string | Yes | 权限名称。 |
| accountId | number | Yes | 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取  取值应为≥0的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common.ApplicationInstance> | the list of applications  that are allowed to be granted the permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |

