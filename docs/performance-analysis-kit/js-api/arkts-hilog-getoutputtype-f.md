# getOutputType

## getOutputType

```TypeScript
function getOutputType(): OutputType
```

Returns the current output type of hilog.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiLog

**Return value:**

| Type | Description |
| --- | --- |
| OutputType | current output type for hilog. |

**Example**

```TypeScript
hilog.setOutputType(hilog.OutputType.SHARE_SANDBOX_WITH_CONSOLE);
let last = hilog.getOutputType();
hilog.info(0x0001, "testTag", 'last output type:%{public}d', last);


05-15 16:57:04.238  40518-40518  A00001/testTag  com.example.hilogDemo  I  last output type:4

```

