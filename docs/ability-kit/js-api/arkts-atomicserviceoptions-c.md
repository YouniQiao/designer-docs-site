# AtomicServiceOptions

AtomicServiceOptions** is used as an input parameter of [openAtomicService()]./application/UIAbilityContext:UIAbilityContext.openAtomicService to carry arguments. It inherits from [StartOptions](arkts-startoptions-c.md#StartOptions).

**Inheritance:** AtomicServiceOptionsextends: StartOptions.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { AtomicServiceOptions } from '@kit.AbilityKit';
```

## completionHandlerForAtomicService

```TypeScript
completionHandlerForAtomicService?: CompletionHandlerForAtomicService
```

打开原子化服务结果的操作类，用于接收打开原子化服务的结果。

**Type:** CompletionHandlerForAtomicService

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## flags

```TypeScript
flags?: int
```

系统处理该次启动的方式。例如通过wantConstant.Flags.FLAG_INSTALL_ON_DEMAND表示使用免安装能力。

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## parameters

```TypeScript
parameters?: Record<string, Object>
```

表示额外参数描述。具体描述参考[Want](arkts-want-c.md#Want)中parameters字段描述。

**Type:** Record<string, Object>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
parameters?: Record<string, RecordData>
```

表示额外参数描述。具体描述参考[Want](arkts-want-c.md#Want)中parameters字段描述。

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

