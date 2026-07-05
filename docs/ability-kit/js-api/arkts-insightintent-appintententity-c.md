# AppIntentEntity

定义AppIntentEntity。

**Inheritance:** AppIntentEntityimplements: IntentEntity.

**Since:** 26.0.0

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { insightIntent } from '@kit.AbilityKit';
```

## onQueryEntity

```TypeScript
abstract onQueryEntity(params: QueryEntityParam): Promise<Array<T>>
```

在查询实体执行时调用。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | QueryEntityParam | Yes | 查询实体的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T>> | - Returns an array of subclasses of the AppIntentEntity class, support promise. |

## displayName

```TypeScript
displayName: string
```

实体的显示名称。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

