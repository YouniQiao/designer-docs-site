# EntityInfo

EntityInfo继承自[IntentEntityDecoratorInfo](arkts-intententitydecoratorinfo-i.md#IntentEntityDecoratorInfo)， 用于描述 [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) 装饰器定义的意图实体的信息。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## supportedQueryProperties

```TypeScript
readonly supportedQueryProperties?: string[]
```

支持查询属性。

**Type:** string[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## parentClassName

```TypeScript
readonly parentClassName: string
```

表示 [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) 装饰器修饰的类的父类名。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## entityCategory

```TypeScript
readonly entityCategory: string
```

表示意图实体类别。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## isQueryable

```TypeScript
readonly isQueryable?: boolean
```

实体是可查询的。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## entityId

```TypeScript
readonly entityId: string
```

表示意图实体的ID。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## className

```TypeScript
readonly className: string
```

表示 [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) 装饰器修饰的类名。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## parameters

```TypeScript
readonly parameters: Record<string, Object>
```

表示意图实体参数的数据格式声明，用于意图调用时定义实体参数的数据格式。

**Type:** Record<string, Object>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
readonly parameters: Record<string, RecordData>
```

The parameters of intent entity.

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

