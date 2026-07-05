# ScrollOnDidZoomCallback

```TypeScript
declare type ScrollOnDidZoomCallback = (scale: number) => void
```

Scroll每帧缩放完成时触发的回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | 当前缩放倍数。 |

