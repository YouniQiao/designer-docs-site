# getKeyboardDelegate

## getKeyboardDelegate

```TypeScript
function getKeyboardDelegate(): KeyboardDelegate
```

Obtains a [KeyboardDelegate]inputMethodEngine.KeyboardDelegate instance for the input method. The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| KeyboardDelegate | KeyboardDelegate instance. |

**示例：**

```TypeScript
// 获取客户端编辑事件监听代理实例
let KeyboardDelegate: inputMethodEngine.KeyboardDelegate = inputMethodEngine.getKeyboardDelegate();

```

