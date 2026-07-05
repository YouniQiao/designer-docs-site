# StartMode

```TypeScript
export const enum StartMode
```

子进程启动模式枚举。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SELF_FORK

```TypeScript
SELF_FORK = 0
```

从App自身进程Fork子进程。以该模式启动的子进程会继承父进程资源，不能使用Binder IPC和其他进程通信，否则会导致子进程崩溃退出。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## APP_SPAWN_FORK

```TypeScript
APP_SPAWN_FORK = 1
```

从AppSpawn Fork子进程。以该模式启动的子进程不会继承父进程资源，可以使用Binder IPC和其他进程通信。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

