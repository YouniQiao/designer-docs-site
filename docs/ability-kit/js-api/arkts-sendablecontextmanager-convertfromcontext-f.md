# convertFromContext

## convertFromContext

```TypeScript
function convertFromContext(context: common.Context): SendableContext
```

将Context转换为SendableContext对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| SendableContext | [SendableContext]./application/SendableContext:SendableContext对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

