# ChildProcess

开发者自定义子进程的基类。通过[childProcessManager](arkts-app-ability-childprocessmanager.md#childProcessManager)启动子进程时，需要继承此类并重写 入口方法。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { ChildProcess } from '@kit.AbilityKit';
```

## onStart

```TypeScript
onStart(args?: ChildProcessArgs): void
```

子进程的入口方法，通过[childProcessManager](arkts-app-ability-childprocessmanager.md#childProcessManager)启动子进程后调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | ChildProcessArgs | No |  |

**Example**

```TypeScript
import { ChildProcess, ChildProcessArgs } from '@kit.AbilityKit';

export default class DemoProcess extends ChildProcess {

  onStart(args?: ChildProcessArgs) {
    let entryParams = args?.entryParams;
    let fd = args?.fds?.key1;
    // ..
  }
}

```

