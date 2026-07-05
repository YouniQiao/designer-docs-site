# getOutputType

## getOutputType

```TypeScript
function getOutputType(): OutputType
```

Returns the current output type of hilog.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OutputType | current output type for hilog. |

**示例：**

```TypeScript
hilog.setOutputType(hilog.OutputType.SHARE_SANDBOX_WITH_CONSOLE);
let last = hilog.getOutputType();
hilog.info(0x0001, "testTag", 'last output type:%{public}d', last);


05-15 16:57:04.238  40518-40518  A00001/testTag  com.example.hilogDemo  I  last output type:4

```

