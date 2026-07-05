# getLogFile

## getLogFile

```TypeScript
function getLogFile(latestSeconds: int): Array<string>
```

Returns the list of hilog log file paths in the sandbox for the specified recent time period.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| latestSeconds | int | 是 | the specified time period from a given number of seconds in the past to the present. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | list of hilog log file paths in the sandbox for the specified rencent time period,  with newer files appearing first in the list. |

**示例：**

```TypeScript
hilog.setOutputType(hilog.OutputType.SHARE_SANDBOX_WITH_CONSOLE);
hilog.info(0x0001, "testTag", 'sandbox log to share sandbox with console');
hilog.flush();
let logs = hilog.getLogFile(300);
hilog.info(0x0001, "testTag", 'sandbox log files:%{public}s', logs.toString());


05-15 16:57:04.238 40518 40518 I A00001/testTag: sandbox log files:hiapplog.40518.001.20260515-165602.log

```

