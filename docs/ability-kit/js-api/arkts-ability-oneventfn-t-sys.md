# OnEventFn (System API)

```TypeScript
type OnEventFn = (event: CliToolEvent) => void
```

Define cli event callback function.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-type OnEventFn = (event: CliToolEvent) => void--><!--Device-unnamed-type OnEventFn = (event: CliToolEvent) => void-End-->

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | CliToolEvent | Yes | The event send by cli tool. |

