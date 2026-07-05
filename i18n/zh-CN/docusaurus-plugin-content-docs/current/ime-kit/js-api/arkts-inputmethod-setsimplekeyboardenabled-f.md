# setSimpleKeyboardEnabled

## setSimpleKeyboardEnabled

```TypeScript
function setSimpleKeyboardEnabled(enable: boolean): void
```

Set simple keyboard mode.

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | indicates enable simple keyboard or not. |

**示例：**

```TypeScript
  let enable: boolean = false;
  inputMethod.setSimpleKeyboardEnabled(enable);

```

