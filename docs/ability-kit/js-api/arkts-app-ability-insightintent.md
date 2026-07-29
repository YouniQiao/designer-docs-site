# @ohos.app.ability.insightIntent

This module provides basic definitions of the [InsightIntent framework](../../../application-models/insight-intent-overview.md).

**Since:** 11

<!--Device-unnamed-declare namespace insightIntent--><!--Device-unnamed-declare namespace insightIntent-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { insightIntent } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AppIntentEntity](arkts-ability-insightintent-appintententity-c.md) | Define AppIntentEntity. |

### Interfaces

| Name | Description |
| --- | --- |
| [ExecuteResult](arkts-ability-insightintent-executeresult-i.md) | Enumerates the return results of intent execution. |
| [IntentEntity](arkts-ability-insightintent-intententity-i.md) | Defines the struct of an intent entity. It represents key information objects involved during intent execution,including intent parameters and execution results.  You can define intent entities by inheriting this class. The child class must be decorated with [@InsightIntentEntity](../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity). |
| [IntentResult](arkts-ability-insightintent-intentresult-i.md) | Defines the return result of intent execution. The [generic type](../../../quick-start/introduction-to-arkts.md#generic-class-and-interface) is supported. |
| [QueryEntityParam](arkts-ability-insightintent-queryentityparam-i.md) | Parameter for query entity. |

### Enums

| Name | Description |
| --- | --- |
| [ExecuteMode](arkts-ability-insightintent-executemode-e.md) | Enumerates the intent execution modes. It specifies the mode of execution passed when the intent is triggered by a system entry point. The supported execution modes for each intent are defined during intent development. |
| [QueryType](arkts-ability-insightintent-querytype-e.md) | Enum for query entity mode. |
| [ReturnMode](arkts-ability-insightintent-returnmode-e.md) | Enumerates the modes that define how the execution result of an intent is returned to the intent initiator. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ExecuteMode](arkts-ability-insightintent-executemode-e-sys.md) | Enumerates the intent execution modes. It specifies the mode of execution passed when the intent is triggered by a system entry point. The supported execution modes for each intent are defined during intent development. |
<!--DelEnd-->

