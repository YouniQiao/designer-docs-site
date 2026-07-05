# getDefaultInputMethod

## getDefaultInputMethod

```TypeScript
function getDefaultInputMethod(): InputMethodProperty
```

Get default input method

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodProperty | property of the default input method. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
let defaultIme: inputMethod.InputMethodProperty = inputMethod.getDefaultInputMethod();

```

