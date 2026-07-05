# SizeUpdateCallback

```TypeScript
export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void
```

Callback triggered when the size of the input method panel changes.

**起始版本：** 14

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | window.Size | 是 | Panel size. |
| keyboardArea | KeyboardArea | 是 | Size of the keyboard area. |

