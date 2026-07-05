# OnContinueResult

```TypeScript
export enum OnContinueResult
```

Ability迁移结果，该类型为枚举，可配合UIAbility的[onContinue()](arkts-uiability-c.md#onContinue)方法完成相应的返回。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## AGREE

```TypeScript
AGREE = 0
```

表示同意。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## REJECT

```TypeScript
REJECT = 1
```

表示拒绝：如应用在[onContinue](arkts-uiability-c.md#onContinue)中异常会导致迁移以后数据恢复时显示异常，则可以返回REJECT。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## MISMATCH

```TypeScript
MISMATCH = 2
```

表示版本不匹配：迁移发起端应用可以在[onContinue](arkts-uiability-c.md#onContinue)中获取到迁移目标端应用的版本号，进行协商后，如果版本不 匹配导致无法迁移，可以返回该结果。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

