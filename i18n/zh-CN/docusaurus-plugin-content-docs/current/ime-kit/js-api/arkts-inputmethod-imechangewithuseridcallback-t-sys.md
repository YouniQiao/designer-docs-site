# ImeChangeWithUserIdCallback

```TypeScript
export type ImeChangeWithUserIdCallback =
      (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, userId: int) => void
```

The callback of the inputmethod change event which carries the user ID whose inputmethod is changed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputMethodProperty | InputMethodProperty | 是 | the property of current inputmethod. |
| inputMethodSubtype | InputMethodSubtype | 是 | the subtype of current inputmethod. |
| userId | int | 是 | the user ID whose inputmethod is changed. |

