# remove

## remove

```TypeScript
function remove(logType: string, logName: string): void
```

以同步方法删除指定日志类型的指定文件。

**起始版本：** 10

**需要权限：** 

 ohos.permission.WRITE_HIVIEW_SYSTEM

**系统能力：** SystemCapability.HiviewDFX.Hiview.LogLibrary

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| logType | string | 是 | 日志类型字符串，例如"FAULTLOG", "BETACLUB", "REMOTELOG"等。 |
| logName | string | 是 | 日志文件名称。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Permission denied, non-system app called system api |
| 401 | Invalid argument. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 21300001 | Source file does not exists |

**示例：**

```TypeScript
import { logLibrary } from '@kit.PerformanceAnalysisKit';

try {
  let logFiles = logLibrary.list('FAULTLOG');
  if (logFiles.length > 0) {
    logLibrary.remove('FAULTLOG', logFiles[0].name);
  }
} catch (error) {
  console.error(`Failed to call logLibrary API. Code: ${error?.code}, message: ${error?.message}`);
}

```

