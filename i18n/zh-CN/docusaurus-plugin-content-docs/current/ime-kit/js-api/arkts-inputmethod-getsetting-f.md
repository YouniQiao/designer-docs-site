# getSetting

## getSetting

```TypeScript
function getSetting(): InputMethodSetting
```

Input method setting

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodSetting | the object of InputMethodSetting. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800007 | input method setter error. Possible cause:  create InputMethodSetting object failed. |

**示例：**

```TypeScript
let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();

```

