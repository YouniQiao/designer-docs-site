# LinkParamCategory

```TypeScript
declare enum LinkParamCategory
```

[@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) 装饰器的意图参数类别，用于定义意图参数的传递形式。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## LINK

```TypeScript
LINK = 'link'
```

表示意图参数类别为'link'。意图参数将被拼接到uri链接的末尾，以uri链接的形式传给应用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## WANT

```TypeScript
WANT = 'want'
```

表示意图参数类别为'want'。意图参数将通过[Want](arkts-want-c.md#Want)的parameters字段传给应用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

