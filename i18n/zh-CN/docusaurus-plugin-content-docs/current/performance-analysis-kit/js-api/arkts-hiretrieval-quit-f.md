# quit

## quit

```TypeScript
function quit(): void
```

Quit the HiRetrieval project. This operation clears the current HiRetrieval config. Invoking init function again is required after invoking quit function.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiRetrieval

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 36000001 | Initialization error.  Possibly caused by invoking this function before invoking init function. |

