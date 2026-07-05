# convertToAbilityStageContext

## convertToAbilityStageContext

```TypeScript
function convertToAbilityStageContext(sendableContext: SendableContext): common.AbilityStageContext
```

将SendableContext对象转换为AbilityStageContext。

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
| common.AbilityStageContext | [AbilityStageContext]./application/AbilityStageContext:AbilityStageContext  object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

