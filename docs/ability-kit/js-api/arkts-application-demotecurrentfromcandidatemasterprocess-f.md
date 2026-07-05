# demoteCurrentFromCandidateMasterProcess

## demoteCurrentFromCandidateMasterProcess

```TypeScript
export function demoteCurrentFromCandidateMasterProcess(): Promise<void>
```

撤销当前进程的备选主控进程资格。使用Promise异步回调。 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 16000116 | The current process is already a master process and does not support cancellation. |
| 16000117 | The current process is not a candidate master process and does not support  cancellation. |

