# AbilityResult

定义UIAbility被拉起并退出后返回给调用方的结果码和数据。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityBase

## want

```TypeScript
want?: Want
```

表示UIAbility被拉起并退出后返回的数据。

**Type:** Want

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityBase

## resultCode

```TypeScript
resultCode: int
```

目标方的UIAbility被拉起并退出后，目标方返回给拉起方的结果码。<br/>-?正常情况下，返回目标方传递的结果码。<br/>-?异常情况下，返回-1。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityBase

