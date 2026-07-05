# setDefaultData

## setDefaultData

```TypeScript
function setDefaultData(admin: Want, slotId: number): void
```

设置指定卡槽的SIM卡为默认数据流量卡，设备将使用指定卡槽的SIM卡流量上网。该接口需要插入SIM卡并关闭飞行模式才能成功调用。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| slotId | number | Yes | 卡槽ID，目前仅支持单卡槽设备和双卡槽设备，取值范围为0或1，其中0表示卡槽1，1表示卡槽2。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201020 | Failed to set the default data SIM card.  The airplane mode is enabled or no SIM card is inserted. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

