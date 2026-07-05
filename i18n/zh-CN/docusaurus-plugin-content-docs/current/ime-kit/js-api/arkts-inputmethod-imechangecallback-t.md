# ImeChangeCallback

```TypeScript
export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
```

The callback of 'imeChange' event.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | 是 | the property of current inputmethod. |
| inputMethodSubtype | InputMethodSubtype | 是 | the subtype of current inputmethod. |

