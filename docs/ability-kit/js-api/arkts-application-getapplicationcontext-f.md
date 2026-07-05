# getApplicationContext

## getApplicationContext

```TypeScript
export function getApplicationContext(): ApplicationContext
```

获取应用上下文。开发者使用该接口时，无需依赖Context基类。 重复调用该接口，将生成新的ApplicationContext对象。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| ApplicationContext | 应用上下文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000050 | Internal error. |

