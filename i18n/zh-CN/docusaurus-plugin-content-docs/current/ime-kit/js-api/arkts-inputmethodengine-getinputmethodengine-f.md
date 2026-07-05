# getInputMethodEngine

## getInputMethodEngine

```TypeScript
function getInputMethodEngine(): InputMethodEngine
```

Obtains an [InputMethodEngine]inputMethodEngine.InputMethodEngine instance for the input method. The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** inputMethodEngine.getInputMethodAbility()

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodEngine | InputMethodAbility instance. |

**示例：**

```TypeScript
// 获取输入法应用客户端实例（已废弃）
// 获取输入法应用客户端实例（已废弃）
let InputMethodEngine: inputMethodEngine.InputMethodEngine = inputMethodEngine.getInputMethodEngine();

```

