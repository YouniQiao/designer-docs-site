# DeviceSelectCallback (System API)

```TypeScript
type DeviceSelectCallback = (selectPurpose: number) => DeviceSelectResult
```

Defines the callback of companion device selection.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectPurpose | int | Yes | Selection purpose. For details about the values, see[SelectPurpose](arkts-userauthentication-selectpurpose-e-sys.md#selectpurpose). The value can be customized. |

**Return value:**

| Type | Description |
| --- | --- |
| DeviceSelectResult | Device selection result. |

