# finishTrace

## finishTrace

```TypeScript
function finishTrace(name: string, taskId: number): void
```

标记一个时间片跟踪事件的结束。
> **说明：**  
>  
> finishTrace的name和taskId必须与流程开始的startTrace对应参数值一致。

**起始版本：** 7

**废弃版本：** 8

**替代接口：** finishTrace

<!--Device-bytrace-function finishTrace(name: string, taskId: number): void--><!--Device-bytrace-function finishTrace(name: string, taskId: number): void-End-->

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 时间片跟踪任务名称，必须与startTrace调用时的name参数值一致。 |
| taskId | number | 是 | 时间片跟踪任务id，必须与startTrace调用时的taskId参数值一致。 |

