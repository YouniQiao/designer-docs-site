# SizeChangeCallback

```TypeScript
export type SizeChangeCallback = (size: window.Size, keyboardArea?: KeyboardArea) => void
```

Callback triggered when the size of the input method panel changes.

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | window.Size | 是 | Panel size. |
| keyboardArea | KeyboardArea | 否 | Size of the keyboard area. |

