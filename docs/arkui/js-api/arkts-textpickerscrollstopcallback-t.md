# TextPickerScrollStopCallback

```TypeScript
declare type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void
```

定义触发onScrollStop事件的回调类型。 **说明：** - 当选择器内容为文本或图文混排时，value值为选中项中的文本值； - 当选择器内容为图片时，value值为空。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| (value: string |  |
| string[], index: number |  |
| number[]) => void |  |

