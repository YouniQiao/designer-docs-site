# SaveModeFlag

```TypeScript
enum SaveModeFlag
```

状态保存标志，[enableAppRecovery]appRecovery.enableAppRecovery接口状态保存方式的参数，该类型为枚举。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SAVE_WITH_FILE

```TypeScript
SAVE_WITH_FILE = 0x0001
```

每次状态保存都会写入到本地文件缓存。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SAVE_WITH_SHARED_MEMORY

```TypeScript
SAVE_WITH_SHARED_MEMORY = 0x0002
```

状态先保存在内存中，应用故障退出时写入到本地文件缓存。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

