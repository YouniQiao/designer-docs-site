# traceByValue

## traceByValue

```TypeScript
function traceByValue(name: string, count: long): void
```

Traces the value changes of an integer variable. Since API version 19, you are advised to use the [traceByValue<sup>19+</sup>()]hiTraceMeter.traceByValue(level: HiTraceOutputLevel, name: string, count: long) API to specify the trace output level

**起始版本：** 8

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Name of the integer variable to trace. The maximum length of a trace record is 512  bytes. The excess part will be truncated. It is recommended that the length of this parameter be less than or  equal to 420 bytes. |
| count | long | 是 | Value of an integer variable. |

**示例：**

```TypeScript
let traceCount = 3;
hiTraceMeter.traceByValue("myTestCount", traceCount);  // 使用trace打点记录myTestCount的值。
traceCount = 4;
hiTraceMeter.traceByValue("myTestCount", traceCount);  // 当myTestCount发生变化时，记录新值。
// 业务流程......

```

## traceByValue

```TypeScript
function traceByValue(level: HiTraceOutputLevel, name: string, count: long): void
```

Traces an integer with the trace output level specified. It is used to mark the name and value of a predefined integer variable to be traced.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | HiTraceOutputLevel | 是 | Trace output level. |
| name | string | 是 | Name of the integer variable to trace. The maximum length of a trace record is 512  bytes. The excess part will be truncated. It is recommended that the length of this parameter be less than or  equal to 420 bytes. |
| count | long | 是 | Value of an integer variable. |

**示例：**

```TypeScript
const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;
let traceCount = 3;
hiTraceMeter.traceByValue(COMMERCIAL, "myTestCount", traceCount);
traceCount = 4;
hiTraceMeter.traceByValue(COMMERCIAL, "myTestCount", traceCount);
// 业务流程......

```

