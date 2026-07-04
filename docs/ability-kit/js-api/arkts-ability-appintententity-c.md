# AppIntentEntity

Define AppIntentEntity.

**Inheritance/Implementation:** AppIntentEntity implements [IntentEntity](arkts-ability-intententity-i.md#intententity)

**Since:** 26.0.0

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { insightIntent } from '@ohos.app.ability.insightIntent';
```

## onQueryEntity

```TypeScript
abstract onQueryEntity(params: QueryEntityParam): Promise<Array<T>>
```

Called when query entity execute.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | QueryEntityParam | Yes | The params of query entity. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T&gt;&gt; | - Returns an array of subclasses of the AppIntentEntity class, support promise. |

## displayName

```TypeScript
displayName: string
```

The display name of entity.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

