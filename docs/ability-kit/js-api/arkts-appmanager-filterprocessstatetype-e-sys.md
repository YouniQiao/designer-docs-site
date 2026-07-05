# FilterProcessStateType

```TypeScript
export enum FilterProcessStateType
```

表示要监听的进程状态，该类型为枚举。可配合[AppStateFilter]appManager.AppStateFilter过滤想要监听的进程状态。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## CREATE

```TypeScript
CREATE = 1 << 0
```

进程刚创建完成，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值 为0的状态。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## FOREGROUND

```TypeScript
FOREGROUND = 1 << 1
```

进程处于前台，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值为 2的状态。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## BACKGROUND

```TypeScript
BACKGROUND = 1 << 2
```

进程处于后台，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值为 4的状态。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## DESTROY

```TypeScript
DESTROY = 1 << 3
```

进程已终止，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值为5 的状态。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

