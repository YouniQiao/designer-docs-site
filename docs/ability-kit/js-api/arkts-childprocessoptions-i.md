# ChildProcessOptions

子进程的启动配置选项。通过[childProcessManager](arkts-app-ability-childprocessmanager.md#childProcessManager)启动子进程时，可以通过 ChildProcessOptions配置子进程启动选项。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { ChildProcessOptions } from '@kit.AbilityKit';
```

## isolationMode

```TypeScript
isolationMode?: boolean
```

控制子进程的沙箱隔离级别及网络访问权限。true表示子进程运行在独立沙箱环境中，且无法访问网络；false表示子进程与主进程共享沙箱和网络环境。默认为false。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## isolationUid

```TypeScript
isolationUid?: boolean
```

控制子进程是否使用独立的uid。true表示子进程运行拥有独立的uid；false表示子进程与主进程拥有相同uid。默认为false。仅在isolationMode为true时生效。

**Type:** boolean

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

