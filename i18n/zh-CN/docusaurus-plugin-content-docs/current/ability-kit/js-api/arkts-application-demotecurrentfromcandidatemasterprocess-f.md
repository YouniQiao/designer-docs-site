# demoteCurrentFromCandidateMasterProcess

## demoteCurrentFromCandidateMasterProcess

```TypeScript
export function demoteCurrentFromCandidateMasterProcess(): Promise<void>
```

撤销当前进程的备选主控进程资格。使用Promise异步回调。 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 16000116 | The current process is already a master process and does not support cancellation. |
| 16000117 | The current process is not a candidate master process and does not support  cancellation. |

