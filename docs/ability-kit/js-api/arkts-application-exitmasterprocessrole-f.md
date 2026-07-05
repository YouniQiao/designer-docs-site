# exitMasterProcessRole

## exitMasterProcessRole

```TypeScript
export function exitMasterProcessRole(): Promise<void>
```

放弃当前进程的[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)身份。使用Promise异步回调。 该接口仅在2in1、Tablet设备中可正常调用，在其他设备中返回801错误码。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 16000118 | Not a master process. |
| 16000119 | Cannot exit because there is an unfinished request. |

