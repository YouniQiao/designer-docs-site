# getApplicationContextInstance

## getApplicationContextInstance

```TypeScript
export function getApplicationContextInstance(): ApplicationContext
```

获取应用上下文。开发者使用该接口时，无需依赖Context基类。 重复调用该接口，将获取同一个ApplicationContext实例。

**Since:** 23

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
| 16000050 | Internal error. Possible causes: Memory operation error. |

