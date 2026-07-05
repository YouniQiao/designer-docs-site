# NotifySnapshotCallback

```TypeScript
type NotifySnapshotCallback = (deviceId: string, mission: int) => void
```

Callback function on snapshot changed.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates the deviceId snapshot changed. |
| mission | int | Yes | Indicates the id of mission. |

