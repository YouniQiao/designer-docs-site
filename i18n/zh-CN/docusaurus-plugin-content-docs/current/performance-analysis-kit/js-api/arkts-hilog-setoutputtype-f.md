# setOutputType

## setOutputType

```TypeScript
function setOutputType(type: OutputType): OutputType
```

Sets the output type of hilog.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | OutputType | 是 | output type of hilog. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OutputType | previous output type of hilog. |

**示例：**

```TypeScript
hilog.setOutputType(hilog.OutputType.SHARE_SANDBOX_ONLY);
hilog.info(0x0001, "testTag", 'sandbox log to share sandbox only');
hilog.flush();


05-15 16:57:04.238 40518 40518 I A00001/testTag: sandbox log to share sandbox only

```

