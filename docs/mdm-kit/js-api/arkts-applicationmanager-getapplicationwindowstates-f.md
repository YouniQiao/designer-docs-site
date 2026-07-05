# getApplicationWindowStates

## getApplicationWindowStates

```TypeScript
function getApplicationWindowStates(admin: Want, bundleName: string, appIndex: number): Array<WindowStateInfo>
```

查询应用窗口状态

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |
| bundleName | string | Yes | 应用包名 |
| appIndex | number | Yes | 应用分身索引  取值应为≥0的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WindowStateInfo> | 返回应用窗口状态信息 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

