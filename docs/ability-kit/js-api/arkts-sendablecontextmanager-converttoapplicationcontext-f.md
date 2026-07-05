# convertToApplicationContext

## convertToApplicationContext

```TypeScript
function convertToApplicationContext(sendableContext: SendableContext): common.ApplicationContext
```

将SendableContext对象转换为ApplicationContext。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sendableContext | SendableContext | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| common.ApplicationContext | [ApplicationContext]./application/ApplicationContext:ApplicationContext  object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

