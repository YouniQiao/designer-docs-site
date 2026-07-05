# ChildProcessArgs

传递到子进程的参数。[childProcessManager](arkts-app-ability-childprocessmanager.md#childProcessManager)启动子进程时，可以通过 ChildProcessArgs传递参数到子进程中。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { ChildProcessArgs } from '@kit.AbilityKit';
```

## fds

```TypeScript
fds?: Record<string, int>
```

文件描述符句柄集合，用于主进程和子进程通信，通过key-value的形式传入到子进程中，其中key为自定义字符串，value为文件描述符句柄。可以在 [ChildProcess.onStart](arkts-childprocess-c.md#onStart)方法中通过args.fds获取fd句柄。 <b>说明：</b> - fds最多支持16组，每组key的最大长度为20字符。 - 传递到子进程中句柄数字可能会变，但是指向的文件是一致的。

**Type:** Record<string, int>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## entryParams

```TypeScript
entryParams?: string
```

开发者自定义参数，透传到子进程中。可以在[ChildProcess.onStart](arkts-childprocess-c.md#onStart)方法中通过 args.entryParams获取，entryParams支持传输的最大数据量为150KB。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

