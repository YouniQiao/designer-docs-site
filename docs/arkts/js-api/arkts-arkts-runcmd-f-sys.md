# runCmd (System API)

## Modules to Import

```TypeScript
import { process } from '@ohos.process';
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

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | String of the shell commands executed by the child process. |
| options | ConditionType | No | This is an object. The object contains three parameters. Timeout is the running time of the childprocess, killSignal is the signal sent when the child process reaches timeout, and maxBuffer is the size of themaximum buffer area for standard input and output. |

**Return value:**

| Type | Description |
| --- | --- |
| ChildProcess | Returns a child process object. |

