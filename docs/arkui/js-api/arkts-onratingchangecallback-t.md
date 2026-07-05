# OnRatingChangeCallback

```TypeScript
declare type OnRatingChangeCallback = (rating: number) => void
```

操作评分条的评星变化时触发该回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rating | number | Yes | 评分条的评分。 |

