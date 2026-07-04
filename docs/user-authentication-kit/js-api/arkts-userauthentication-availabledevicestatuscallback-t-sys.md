# AvailableDeviceStatusCallback (System API)

```TypeScript
type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void
```

Defines the callback used to receive the changes of the list of devices that can be added.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceStatusList | DeviceStatus[] | Yes | Device status list. |

