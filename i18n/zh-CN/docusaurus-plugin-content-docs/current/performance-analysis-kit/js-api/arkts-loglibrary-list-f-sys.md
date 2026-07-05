# list

## list

```TypeScript
function list(logType: string): LogEntry[]
```

以同步方法查询指定类型的日志文件列表，接收string类型的对象作为参数，返回指定类型日志的文件列表信息。

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_HIVIEW_SYSTEM

**系统能力：** SystemCapability.HiviewDFX.Hiview.LogLibrary

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| logType | string | 是 | 日志类型字符串，例如“HILOG”, "FAULTLOG", "BETACLUB", "REMOTELOG"等。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LogEntry[] | 日志文件对象的数组。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission denied, non-system app called system api |
| 401 | Invalid argument. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |

**示例：**

```TypeScript
import { logLibrary } from '@kit.PerformanceAnalysisKit';

try {
  let logFiles = logLibrary.list('HILOG');
  // do something here.
} catch (error) {
  console.error(`Failed to call logLibrary API. Code: ${error?.code}, message: ${error?.message}`);
}

```

