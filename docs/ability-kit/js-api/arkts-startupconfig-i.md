# StartupConfig

本模块提供[应用启动框架](docroot://application-models/app-startup.md)配置信息的定义。

**Since:** 12

**System capability:** SystemCapability.Ability.AppStartup

## Modules to Import

```TypeScript
import { StartupConfig } from '@kit.AbilityKit';
```

## timeoutMs

```TypeScript
timeoutMs?: int
```

执行所有启动任务的超时时间（单位：毫秒），默认值为10000毫秒。

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

## startupListener

```TypeScript
startupListener?: StartupListener
```

表示启动框架的监听器，该监听器将在所有启动任务完成时调用。

**Type:** StartupListener

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AppStartup

