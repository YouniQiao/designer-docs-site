# ChildProcess

ChildProcess is the base class for you to customize child processes. When starting a child process through [childProcessManager](arkts-app-ability-childprocessmanager.md#childprocessmanager), you must inherit this class and override the entrypoint method.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { ChildProcess } from '@ohos.app.ability.ChildProcess';
```

## onStart

```TypeScript
onStart(args?: ChildProcessArgs): void
```

Entrypoint method of the child process. This callback is triggered when the child process is started through [childProcessManager](arkts-app-ability-childprocessmanager.md#childprocessmanager).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | ChildProcessArgs | No | Parameters transferred to the child process. |

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

