# isValid

## isValid

```TypeScript
function isValid(id: HiTraceId): boolean
```

Checks whether a **HiTraceId** instance is valid. This API returns the result synchronously.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | HiTraceId | 是 | HiTraceId instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | The value true indicates that HiTraceId is valid, and false indicates the  opposite. |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是DEFAULT。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.DEFAULT);
// traceIdIsvalid为true
let traceIdIsvalid = hiTraceChain.isValid(traceId);
if (traceIdIsvalid) {
// 基于跟踪标识合法性校验成功的场景的处理逻辑。
}
// 业务结束，结束跟踪。
hiTraceChain.end(traceId);

```

