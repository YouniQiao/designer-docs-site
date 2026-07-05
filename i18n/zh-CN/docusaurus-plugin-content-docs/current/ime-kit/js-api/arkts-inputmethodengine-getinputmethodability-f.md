# getInputMethodAbility

## getInputMethodAbility

```TypeScript
function getInputMethodAbility(): InputMethodAbility
```

Obtains an [InputMethodAbility]inputMethodEngine.InputMethodAbility instance for the input method. This API can be called only by an input method. The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event, create/ destroy an input method panel, and the like.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| InputMethodAbility | InputMethodAbility instance. |

**示例：**

```TypeScript
// 获取输入法应用客户端实例
let InputMethodAbility: inputMethodEngine.InputMethodAbility = inputMethodEngine.getInputMethodAbility();

```

