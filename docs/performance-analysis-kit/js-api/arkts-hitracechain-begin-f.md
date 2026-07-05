# begin

## begin

```TypeScript
function begin(name: string, flags?: int): HiTraceId
```

Starts call chain trace. This API returns the result synchronously. If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, and returns it. If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returns an invalid HiTrace ID with all property values being 0.

**Since:** 8

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Traced service name. It is recommended that the length of this parameter be less than  or equal to 63 bytes. The excess part will be truncated. |
| flags | int | No | Trace flag combination. For details, see [HiTraceFlag]hiTraceChain.HiTraceFlag. The  default value is 0. |

**Return value:**

| Type | Description |
| --- | --- |
| HiTraceId | HiTraceId instance. |

**Example**

```TypeScript
// Start tracing. The trace flag is the union of INCLUDE_ASYNC and DONOT_CREATE_SPAN.
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC | hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);
// End the call chain trace after the service logic is executed for several times.
hiTraceChain.end(traceId);

```

