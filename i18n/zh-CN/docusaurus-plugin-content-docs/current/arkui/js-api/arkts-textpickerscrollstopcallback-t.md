# TextPickerScrollStopCallback

```TypeScript
declare type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void
```

定义触发onScrollStop事件的回调类型。 **说明：** - 当选择器内容为文本或图文混排时，value值为选中项中的文本值； - 当选择器内容为图片时，value值为空。

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

| 类型 | 说明 |
| --- | --- |
| (value: string |  |
| string[], index: number |  |
| number[]) => void |  |

