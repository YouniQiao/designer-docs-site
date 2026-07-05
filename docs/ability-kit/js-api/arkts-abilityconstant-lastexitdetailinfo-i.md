# LastExitDetailInfo

记录Ability所在进程上次退出时的关键运行信息。

**Since:** 18

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { AbilityConstant } from '@kit.AbilityKit';
```

## pss

```TypeScript
pss: int
```

Ability上次退出时所在进程实际使用的物理内存大小，单位KB。

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## uid

```TypeScript
uid: int
```

Ability上次退出所在应用的UID。

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## rss

```TypeScript
rss: int
```

Ability上次退出时所在进程实际占用内存大小，单位KB。

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## exitSubReason

```TypeScript
exitSubReason: int
```

Ability上次退出的子原因。

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processState

```TypeScript
processState?: appManager.ProcessState
```

Ability上次退出时的进程状态。

**Type:** appManager.ProcessState

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processName

```TypeScript
processName: string
```

Ability上次退出所在进程的名称。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## pid

```TypeScript
pid: int
```

Ability上次退出所在进程的进程号。

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## exitMsg

```TypeScript
exitMsg: string
```

Ability上次退出时所在进程被kill的描述信息。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## killReason

```TypeScript
killReason?: string
```

Ability上次退出时的原因，取值详见[应用终止事件reason字段说明](docroot://dfx/hiappevent-watcher-app-killed-events.md#reason字段说明)。

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## timestamp

```TypeScript
timestamp: long
```

Ability上次退出时的时间戳。

**Type:** long

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

