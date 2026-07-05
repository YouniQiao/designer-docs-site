# PageTransitionCallback

```TypeScript
declare type PageTransitionCallback = (type: RouteType, progress: number) => void
```

页面转场事件回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RouteType | Yes | transition route type |
| progress | number | Yes | transition progess |

