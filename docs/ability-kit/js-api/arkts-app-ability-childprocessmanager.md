# @ohos.app.ability.childProcessManager

The childProcessManager module provides the child process management capability. Currently, it provides APIs to
create and start a child process
The created child process will exit when the parent process exits and cannot run independently.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { childProcessManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [isArkChildProcessSupported](arkts-ability-isarkchildprocesssupported-f.md#isarkchildprocesssupported-1) | Checks whether the caller is allowed to create ark child processes on this device.Some devices may not support creating ark child processes, so it is recommended to use this interface toverify support beforehand. |
| [isNativeChildProcessSupported](arkts-ability-isnativechildprocesssupported-f.md#isnativechildprocesssupported-1) | Checks whether the caller is allowed to create native child processes on this device.Some devices may not support creating native child processes, so it is recommended to use this interface toverify support beforehand. |
| [startArkChildProcess](arkts-ability-startarkchildprocess-f.md#startarkchildprocess-1) | Starts an [ArkTS child process](../../../../application-models/ability-terminology.md#arkts-child-process). This APIuses a promise to return the result.This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 801 is returned.&gt; **NOTE**&gt;&gt; The child process started by calling this API does not inherit the resources of the parent process. If the child&gt; process is created successfully, its PID is returned, and its&gt; [ChildProcess.onStart](arkts-ability-childprocess-c.md#onstart-1) function is executed. After the&gt; function is done, the child process is not automatically destroyed. Instead, it must be destroyed by calling&gt; [process.abort](../../apis-arkts/arkts-apis/arkts-arkts-abort-f.md#abort-1). After the process that calls this API is destroyed, the&gt; created child process is also destroyed. |
| [startChildProcess](arkts-ability-startchildprocess-f.md#startchildprocess-1) | Starts an [ArkTS child process](../../../../application-models/ability-terminology.md#arkts-child-process). This APIuses a promise to return the result.This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 16000061 is returned.&gt; **NOTE**&gt;&gt; If the child process is created successfully, its PID is returned, and its&gt; [ChildProcess.onStart](arkts-ability-childprocess-c.md#onstart-1) function is executed. Once the&gt; function is done, the child process is automatically destroyed.&gt;&gt; The child process started by calling this API does not support asynchronous ArkTS API calls. It supports only&gt; synchronous ArkTS API calls. |
| [startChildProcess](arkts-ability-startchildprocess-f.md#startchildprocess-2) | Starts an [ArkTS child process](../../../../application-models/ability-terminology.md#arkts-child-process). This APIuses an asynchronous callback to return the result.This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 16000061 is returned.&gt; **NOTE**&gt;&gt; If the child process is created successfully, its PID is returned, and its&gt; [ChildProcess.onStart](arkts-ability-childprocess-c.md#onstart-1) function is executed. Once the&gt; function is done, the child process is automatically destroyed.&gt;&gt; The child process started by calling this API does not support asynchronous ArkTS API calls. It supports only&gt; synchronous ArkTS API calls. |
| [startNativeChildProcess](arkts-ability-startnativechildprocess-f.md#startnativechildprocess-1) | Starts a [native child process](../../../../application-models/ability-terminology.md#native-child-process). This API uses a promise to return the result.This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 801 is returned.&gt; **NOTE**&gt;&gt; The child process started by calling this API does not inherit the resources of the parent process. After the&gt; child process is created, its PID is returned, the dynamic link library file specified in the parameters is&gt; loaded, and the entry function of the child process is executed. Once the entry function is done, the child&gt; process is automatically destroyed. After the process that calls this API is destroyed, the created child process&gt; is also destroyed. |

### Enums

| Name | Description |
| --- | --- |
| [StartMode](arkts-ability-startmode-e.md) | Enumerates the child process start modes. |

