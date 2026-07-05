# SelectionChangeCallback

```TypeScript
export type SelectionChangeCallback = (oldBegin: int, oldEnd: int, newBegin: int, newEnd: int) => void
```

The callback of 'selectionChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| oldBegin | int | 是 | the old begin of the selected text. |
| oldEnd | int | 是 | the old end of the selected text. |
| newBegin | int | 是 | the new begin of the selected text. |
| newEnd | int | 是 | the new end of the selected text. |

