# NotifyNetDisconnectCallback

```TypeScript
type NotifyNetDisconnectCallback = (deviceId: string, state: int) => void
```

Callback function on network disconnect.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates the deviceId network disconnect. |
| state | int | Yes | Indicates the state of network. |

