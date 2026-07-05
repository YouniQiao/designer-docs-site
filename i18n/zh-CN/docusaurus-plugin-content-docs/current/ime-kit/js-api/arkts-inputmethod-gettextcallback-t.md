# GetTextCallback

```TypeScript
export type GetTextCallback = (length: int) => string
```

The callback of 'getLeftTextOfCursor' or 'getRightTextOfCursor' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | int | 是 | the length of text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | represents the text in edit box. |

