# isOtaUpdateNonceEnable

## isOtaUpdateNonceEnable

```TypeScript
function isOtaUpdateNonceEnable(admin: Want): boolean
```

查询是否使能服务器端生成随机Nonce标记

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回是否是能ota升级随机值 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200016 | Service timeout. |

