# startSyncTrace

## startSyncTrace

```TypeScript
function startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void
```

Starts a synchronous trace with the trace output level specified. For details, see [finishSyncTrace()]hiTraceMeter.finishSyncTrace.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | HiTraceOutputLevel | 是 | Trace output level. |
| name | string | 是 | Name of the trace to start. The maximum length of a trace record is 512 bytes. The  excess part will be truncated. It is recommended that the total length of name and customArgs be less  than or equal to 420 bytes. |
| customArgs | string | 否 |  |

**示例：**

```TypeScript
const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;
// 不需要customArgs参数时，可不传入该参数或传入空字符串
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc");
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "");
// 多个键值对用逗号分隔
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "key=value");
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "key1=value1,key2=value2");

```

