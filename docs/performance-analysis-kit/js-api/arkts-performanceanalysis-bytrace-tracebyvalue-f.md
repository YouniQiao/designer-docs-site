# traceByValue

<a id="tracebyvalue"></a>
## traceByValue

```TypeScript
function traceByValue(name: string, count: number): void
```

Records a trace for generating a count, such as clock pulse and the number of layers.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** traceByValue

<!--Device-bytrace-function traceByValue(name: string, count: number): void--><!--Device-bytrace-function traceByValue(name: string, count: number): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates the name used to identify the count. |
| count | number | Yes | Indicates the number of the count. |

**Example**

```TypeScript
let traceCount = 3;
bytrace.traceByValue("myTestCount", traceCount);
traceCount = 4;
bytrace.traceByValue("myTestCount", traceCount);
// Service flow...

```

