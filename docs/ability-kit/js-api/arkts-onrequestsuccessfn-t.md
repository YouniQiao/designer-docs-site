# OnRequestSuccessFn

```TypeScript
export type OnRequestSuccessFn = (name: string) => void
```

拉起指定类型的Ability组件成功时的回调函数类型。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 被拉起Ability组件或系统操作的名称。   Ability组件名称采用'[bundleName]#[moduleName]#[abilityName]'格式拼接。 |

