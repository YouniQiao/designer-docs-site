# startSyncTrace

## startSyncTrace

```TypeScript
function startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void
```

Starts a synchronous trace with the trace output level specified. For details, see [finishSyncTrace()]hiTraceMeter.finishSyncTrace.

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | HiTraceOutputLevel | Yes | Trace output level. |
| name | string | Yes | Name of the trace to start. The maximum length of a trace record is 512 bytes. The  excess part will be truncated. It is recommended that the total length of name and customArgs be less  than or equal to 420 bytes. |
| customArgs | string | No |  |

**Example**

```TypeScript
const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;
// If the customArgs parameter is not required, do not pass in this parameter or pass in an empty string.
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc");
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "");
// Use commas (,) to separate multiple key-value pairs.
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "key=value");
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "key1=value1,key2=value2");

```

