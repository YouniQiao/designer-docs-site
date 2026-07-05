# createKeyboardDelegate

## createKeyboardDelegate

```TypeScript
function createKeyboardDelegate(): KeyboardDelegate
```

Obtains a [KeyboardDelegate]inputMethodEngine.KeyboardDelegate instance for the input method. The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.getKeyboardDelegate()

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| KeyboardDelegate | KeyboardDelegate instance. |

**示例：**

```TypeScript
let keyboardDelegate: inputMethodEngine.KeyboardDelegate = inputMethodEngine.createKeyboardDelegate();

```

