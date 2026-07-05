# getWatermarkImageApps

## getWatermarkImageApps

```TypeScript
function getWatermarkImageApps(admin: Want, accountId: number): Array<string>
```

查询设置了水印的应用列表

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |
| accountId | number | Yes | 系统账号ID  取值应为≥0的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 设置水印的应用列表 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | The parameter validation failed. |

