# @ohos.resourceschedule.backgroundProcessManager

本模块提供了后台子进程管控接口。开发者可以通过本模块接口对子进程进行压制、解压制，避免子进程过多占用系统资源，导致系统使用卡顿。本模块接口仅对通过 [OH_Ability_StartNativeChildProcess](docroot://reference/apis-ability-kit/capi-native-child-process-h.md#oh_ability_startnativechildprocess) 接口创建的子进程生效。

**Since:** 17

**System capability:** SystemCapability.Resourceschedule.BackgroundProcessManager

## Modules to Import

```TypeScript
import { backgroundProcessManager } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getPowerSaveMode](arkts-backgroundprocessmanager-getpowersavemode-f.md#getPowerSaveMode-1) | 获取进程能效模式。使用Promise异步回调。 |
| [isPowerSaveMode](arkts-backgroundprocessmanager-ispowersavemode-f.md#isPowerSaveMode-1) | 查询进程是否处于能效模式，使用Promise异步回调。 |
| [resetProcessPriority](arkts-backgroundprocessmanager-resetprocesspriority-f.md#resetProcessPriority-1) | 为子进程解压制，即子进程策略恢复为主进程调度策略。若主进程调度策略发生变化，如从后台切至前台等， 子进程会跟随主进程一同变化，等效于执行一次resetProcessPriority动作。使用Promise异步回调。 |
| [setPowerSaveMode](arkts-backgroundprocessmanager-setpowersavemode-f.md#setPowerSaveMode-1) | 设置进程的能效模式，使用Promise异步回调。 当应用满足以下条件时，可以设置自身是否进入能效模式： - 应用未获取系统焦点，未执行音频或界面刷新操作。 - 无法通过框架层获取电源锁。 - 应用需要执行压缩、解压缩、编译等耗时较长的计算任务，不希望这些任务受到显著的CPU资源限制（即被迫进入能效模式）。 |
| [setProcessPriority](arkts-backgroundprocessmanager-setprocesspriority-f.md#setProcessPriority-1) | 设置子进程的压制档位，子进程被压制后可获得的CPU资源将会受到限制。如果主进程调度策略发生变化，如从后台切至前台等，子进程会跟随主进程一同变化，子进程如需继续压制，需要重新调用本接口。使用Promise异步回调。 |

### Enums

| Name | Description |
| --- | --- |
| [PowerSaveMode](arkts-backgroundprocessmanager-powersavemode-e.md) | 能效模式。 |
| [ProcessPriority](arkts-backgroundprocessmanager-processpriority-e.md) | 子进程压制档位。 |

