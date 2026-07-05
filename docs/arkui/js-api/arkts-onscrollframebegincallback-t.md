# OnScrollFrameBeginCallback

```TypeScript
declare type OnScrollFrameBeginCallback = (offset: number, state: ScrollState) => OnScrollFrameBeginHandlerResult
```

Scroll每帧滚动前触发的回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | 即将发生的滑动量，单位vp。 |
| state | ScrollState | Yes | 当前滑动状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| OnScrollFrameBeginHandlerResult | data - 返回实际滑动量。 |

