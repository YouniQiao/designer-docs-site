# GestureListenerCallback

```TypeScript
export declare type GestureListenerCallback = (info: GestureTriggerInfo) => void
```

定义了用于在UIObserver中监控特定手势触发信息的回调类型。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | GestureTriggerInfo | Yes | 交互触发的手势详情。 |

