# openSession

## openSession

```TypeScript
function openSession(admin: Want, accountId: number): Promise<Uint8Array>
```

开启指定用户的凭据变更会话

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |
| accountId | number | Yes | 系统账号ID  取值范围:[0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | promise回调 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

