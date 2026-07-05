# ButtonElement

The <button> component includes capsule, circle, text, arc, and download buttons.

**继承实现关系：** ButtonElement继承自：Element。

**起始版本：** 4

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## setProgress

```TypeScript
setProgress(param: { progress: number }): void
```

Progress bar of the download button. The value ranges from 0 to 100. The progress bar is displayed if the value is greater than 0. If the value is greater than or equal to 100, the progress bar is not displayed. NOTE The text displayed on the progress bar is changed based on the value.

**起始版本：** 4

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | { progress: number } | 是 |  |

