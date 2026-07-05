# GestureCollectInterceptCallback

```TypeScript
declare type GestureCollectInterceptCallback = (recognizers: Array<GestureRecognizer>,
   touchRecognizers?: Array<TouchRecognizer>) => GestureCollectIntervention
```

定义在[onGestureCollectIntercept](arkts-commonmethod-c.md#onGestureCollectIntercept)中使用的回调类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recognizers | Array&lt;GestureRecognizer> | Yes | 响应链上组件的手势识别器对象。 |
| touchRecognizers | Array&lt;TouchRecognizer> | no |  |

**Return value:**

| Type | Description |
| --- | --- |
| GestureCollectIntervention | 手势收集干预结果。 |

