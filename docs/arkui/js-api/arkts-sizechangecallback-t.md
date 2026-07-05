# SizeChangeCallback

```TypeScript
declare type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void
```

组件区域变化时的回调类型。 oldValue表示目标元素变化之前的宽高。 newValue表示目标元素变化之后的宽高。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldValue | SizeOptions | Yes |  |
| newValue | SizeOptions | Yes |  |

