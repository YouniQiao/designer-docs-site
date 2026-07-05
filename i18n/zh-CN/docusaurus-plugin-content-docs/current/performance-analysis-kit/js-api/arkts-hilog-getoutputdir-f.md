# getOutputDir

## getOutputDir

```TypeScript
function getOutputDir(): string
```

Returns the directory path of hilog logs in the sandbox. If the output type of hilog is DEFAULT, an empty string is returned.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | the directory path of hilog logs in the sandbox. |

**示例：**

```TypeScript
hilog.setOutputType(hilog.OutputType.SHARE_SANDBOX_WITH_CONSOLE);
let dir = hilog.getOutputDir();
hilog.info(0x0001, "testTag", 'sandbox output dir:%{public}s', dir);


05-15 16:57:04.238  40518-40518  A00001/testTag  com.example.hilogDemo  I  sandbox output dir:/data/storage/el2/log/hiapplog/

```

