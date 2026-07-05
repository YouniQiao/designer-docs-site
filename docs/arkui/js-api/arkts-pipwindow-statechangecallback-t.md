# StateChangeCallback

```TypeScript
type StateChangeCallback = (state: PiPState, reason: string) => void
```

Describe picture-in-picture stage change event callback.

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | PiPState | Yes | 画中画窗口状态。 |
| reason | string | Yes | the reason of state change |

