# EditableTextOnChangeCallback

```TypeScript
declare type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void
```

输入内容发生变化时，触发该回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | 是 | 文本框内正式上屏的文本内容。 |
| previewText | PreviewText | 否 |  |
| options | TextChangeOptions | 否 |  |

