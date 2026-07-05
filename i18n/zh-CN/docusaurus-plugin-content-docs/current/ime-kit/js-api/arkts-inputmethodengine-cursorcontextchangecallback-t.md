# CursorContextChangeCallback

```TypeScript
export type CursorContextChangeCallback = (x: double, y: double, height: double) => void
```

The callback of 'cursorContextChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | double | 是 | the left point of the cursor, unit is px. |
| y | double | 是 | the top point of the cursor, unit is px. |
| height | double | 是 | the height of the cursor, unit is px. |

