# LastExitReason

```TypeScript
export enum LastExitReason
```

Ability上次退出原因，该类型为枚举，可配合UIAbility的[onCreate()](arkts-uiability-c.md#onCreate)方法根据 launchParam.lastExitReason的不同类型执行相应操作。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UNKNOWN

```TypeScript
UNKNOWN = 0
```

未知原因。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ABILITY_NOT_RESPONDING

```TypeScript
ABILITY_NOT_RESPONDING = 1
```

Ability组件未响应。

**Since:** 9

**Deprecated since:** 10

**Substitute:** AbilityConstant.LastExitReason.APP_FREEZE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## NORMAL

```TypeScript
NORMAL = 2
```

用户主动关闭应用，应用程序正常退出。 **说明**：当开发者直接调用[process.exit()](../apis-arkts/js-apis-process.md#processexitdeprecated)、内核kill命令等非Ability Kit提供的能 力强制退出应用进程时，也会返回NORMAL。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CPP_CRASH

```TypeScript
CPP_CRASH = 3
```

[进程崩溃](docroot://dfx/cppcrash-guidelines.md)导致的应用程序退出。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## JS_ERROR

```TypeScript
JS_ERROR = 4
```

当应用存在JS语法错误并未被开发者捕获时，触发JS_ERROR故障，导致应用程序退出。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## APP_FREEZE

```TypeScript
APP_FREEZE = 5
```

[应用冻屏](docroot://dfx/appfreeze-guidelines.md)导致的应用程序退出。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## PERFORMANCE_CONTROL

```TypeScript
PERFORMANCE_CONTROL = 6
```

因系统性能问题（如设备内存不足）导致的应用程序退出。 **说明**：该接口即将废弃，建议使用RESOURCE_CONTROL替代。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## RESOURCE_CONTROL

```TypeScript
RESOURCE_CONTROL = 7
```

系统资源使用不当导致的应用程序退出。具体错误原因可以通过[LaunchParam.lastExitMessage]AbilityConstant.LaunchParam获取，可能原因如下: - CPU Highload，CPU高负载。 - CPU_EXT Highload，快速CPU负载检测。 - IO Manage Control，I/O管控。 - App Memory Deterioration，应用内存超限劣化。 - Temperature Control，温度管控。 - Memory Pressure，整机低内存触发按优先级由低到高终止进程。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UPGRADE

```TypeScript
UPGRADE = 8
```

应用升级导致的应用程序退出。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## USER_REQUEST

```TypeScript
USER_REQUEST = 9
```

应用程序因多任务中心请求而退出。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## SIGNAL

```TypeScript
SIGNAL = 10
```

应用程序因收到系统kill指令信号而退出。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

