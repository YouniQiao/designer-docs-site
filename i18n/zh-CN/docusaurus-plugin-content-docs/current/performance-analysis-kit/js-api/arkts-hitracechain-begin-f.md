# begin

## begin

```TypeScript
function begin(name: string, flags?: int): HiTraceId
```

Starts call chain trace. This API returns the result synchronously. If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, and returns it. If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returns an invalid HiTrace ID with all property values being 0.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Traced service name. It is recommended that the length of this parameter be less than  or equal to 63 bytes. The excess part will be truncated. |
| flags | int | 否 | Trace flag combination. For details, see [HiTraceFlag]hiTraceChain.HiTraceFlag. The  default value is 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HiTraceId | HiTraceId instance. |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是INCLUDE_ASYNC与DONOT_CREATE_SPAN的并集。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC | hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);
// 若干业务逻辑完成后，结束跟踪。
hiTraceChain.end(traceId);

```

