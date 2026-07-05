# traceByValue

## traceByValue

```TypeScript
function traceByValue(name: string, count: number): void
```

Records a trace for generating a count, such as clock pulse and the number of layers.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.hiTraceMeter.traceByValue

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Indicates the name used to identify the count. |
| count | number | 是 | Indicates the number of the count. |

**示例：**

```TypeScript
let traceCount = 3;
bytrace.traceByValue("myTestCount", traceCount);
traceCount = 4;
bytrace.traceByValue("myTestCount", traceCount);
// 业务流程......

```

