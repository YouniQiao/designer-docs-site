# PageTransitionCallback

```TypeScript
declare type PageTransitionCallback = (type: RouteType, progress: number) => void
```

Represents the callback for page transition events.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RouteType | Yes | transition route type |
| progress | number | Yes | transition progess |

