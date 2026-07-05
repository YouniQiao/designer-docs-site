# @ohos.app.ability.insightIntent

本模块提供[意图框架](docroot://application-models/insight-intent-overview.md)基础定义。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { insightIntent } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AppIntentEntity](arkts-insightintent-appintententity-c.md) | 定义AppIntentEntity。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ExecuteResult](arkts-insightintent-executeresult-i.md) | 意图执行的返回结果。 |
| [IntentEntity](arkts-insightintent-intententity-i.md) | 意图实体结构体定义，用于定义意图执行过程中涉及的关键信息对象，包括意图参数和意图执行结果等。 开发者通过继承该类来定义意图实体，继承类需使用 [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) 装饰。 |
| [IntentResult](arkts-insightintent-intentresult-i.md) | 意图执行的返回结果，支持[泛型类型](docroot://quick-start/introduction-to-arkts.md#泛型类和接口)。 |
| [QueryEntityParam](arkts-insightintent-queryentityparam-i.md) | 查询实体的参数。 |

### Enums

| Name | Description |
| --- | --- |
| [ExecuteMode](arkts-insightintent-executemode-e.md) | 意图执行模式。表示系统入口触发意图执行时传递的执行模式，每个意图支持的执行模式在意图开发时定义。 |
| [QueryType](arkts-insightintent-querytype-e.md) | 查询实体模式的枚举。 |
| [ReturnMode](arkts-insightintent-returnmode-e.md) | 意图执行结果返回给意图拉起方的返回形式。 |

