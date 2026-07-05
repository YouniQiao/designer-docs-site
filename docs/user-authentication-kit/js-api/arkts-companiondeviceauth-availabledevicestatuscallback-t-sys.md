# AvailableDeviceStatusCallback

```TypeScript
type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void
```

回调函数，用于接收可添加的设备列表变化通知。当可添加的伴随设备列表发生变化（如新设备上线、设备离线等）时，系统会通过此回调通知应用。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceStatusList | DeviceStatus[] | Yes | 设备状态列表。包含当前可添加为伴随设备的所有设备状态信息。应用可根据isOnline字段筛选在线设备，根据  supportedBusinessIds字段判断设备支持的业务范围。 |

