# startAsyncTrace

## startAsyncTrace

```TypeScript
function startAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: int, customCategory: string,
      customArgs?: string): void
```

Starts an asynchronous trace with the trace output level specified. If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed multiple times concurrently, different task IDs must be specified in **startAsyncTrace**. If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For details, see [finishAsyncTrace()]hiTraceMeter.finishAsyncTrace.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | HiTraceOutputLevel | 是 | Trace output level. |
| name | string | 是 | Name of the trace to start. The maximum length of a trace record is 512 bytes. The  excess part will be truncated. It is recommended that the total length of name, customCategory, and  customArgs be less than or equal to 420 bytes. |
| taskId | int | 是 | Task ID. It is used to distinguish multiple tasks with the same name. Ensure that the  task IDs of concurrently executed tasks with the same name are unique. |
| customCategory | string | 是 | Custom category name, which is used to collect asynchronous trace data of the  same type. The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is  recommended that the total length of name, customCategory, and customArgs be less than or equal to  420 bytes. |
| customArgs | string | 否 |  |

**示例：**

```TypeScript
// 不需要customCategory参数时，可传入空字符串
// 不需要customArgs参数时，可不传入该参数或传入空字符串
const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 1, "", "");
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 2, "");
// 多个键值对用逗号分隔
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 3, "categoryTest", "key1=value");
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 4, "categoryTest", "key1=value1,key2=value2");

```

