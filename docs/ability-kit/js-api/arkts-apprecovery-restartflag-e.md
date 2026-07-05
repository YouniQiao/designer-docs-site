# RestartFlag

```TypeScript
enum RestartFlag
```

应用重启标志，[enableAppRecovery]appRecovery.enableAppRecovery接口重启选项参数，该类型为枚举。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ALWAYS_RESTART

```TypeScript
ALWAYS_RESTART = 0
```

总是重启应用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## RESTART_WHEN_JS_CRASH

```TypeScript
RESTART_WHEN_JS_CRASH = 0x0001
```

发生JS_CRASH时重启应用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## RESTART_WHEN_APP_FREEZE

```TypeScript
RESTART_WHEN_APP_FREEZE = 0x0002
```

发生APP_FREEZE时重启应用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## NO_RESTART

```TypeScript
NO_RESTART = 0xFFFF
```

总是不重启应用。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## RESTART_WHEN_CPP_CRASH

```TypeScript
RESTART_WHEN_CPP_CRASH = 0x0004
```

发生CPP_CRASH时重启应用。 **模型约束**：此接口仅可在Stage模型下使用。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

