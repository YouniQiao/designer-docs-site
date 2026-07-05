# getSystemInputMethodConfigAbility

## getSystemInputMethodConfigAbility

```TypeScript
function getSystemInputMethodConfigAbility(): ElementName
```

Get system input method config ability

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ElementName | the information of system input method config ability. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |

**示例：**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';

let inputMethodConfig: bundleManager.ElementName = inputMethod.getSystemInputMethodConfigAbility();

```

