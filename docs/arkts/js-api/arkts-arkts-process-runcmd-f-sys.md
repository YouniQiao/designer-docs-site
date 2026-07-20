# runCmd (System API)

## Modules to Import

```TypeScript
import { process } from '@kit.ArkTS';
```

## runCmd

```TypeScript
function runCmd(
    command: string,
    options?: ConditionType
  ): ChildProcess
```

Returns a child process object and spawns a new ChildProcess to run the command.

**Since:** 7

<!--Device-process-function runCmd(
    command: string,
    options?: ConditionType
  ): ChildProcess--><!--Device-process-function runCmd(
    command: string,
    options?: ConditionType
  ): ChildProcess-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | String of the shell commands executed by the child process. |
| options | [ConditionType](arkts-arkts-process-conditiontype-i-sys.md) | No | This is an object. The object contains three parameters. Timeout is the running time of the child process, killSignal is the signal sent when the child process reaches timeout, and maxBuffer is the size of the maximum buffer area for standard input and output. |

**Return value:**

| Type | Description |
| --- | --- |
| [ChildProcess](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-childprocess-childprocess-c.md) | Returns a child process object. |

