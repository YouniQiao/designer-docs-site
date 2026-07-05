# ButtonTriggerClickCallback

```TypeScript
declare type ButtonTriggerClickCallback = (xPos: number, yPos: number) => void
```

定义ButtonConfiguration中使用的回调类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xPos | number | Yes | 点击位置x的坐标。 单位：vp |
| yPos | number | Yes | 点击位置y的坐标。 单位：vp |

