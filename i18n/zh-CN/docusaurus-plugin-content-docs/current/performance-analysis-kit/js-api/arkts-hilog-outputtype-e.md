# OutputType

```TypeScript
enum OutputType
```

Enumerates output type of hilog.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.HiviewDFX.HiLog

## DEFAULT

```TypeScript
DEFAULT = 0
```

DEFAULT Default output type, equivalent to CONSOLE_ONLY.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

## CONSOLE_ONLY

```TypeScript
CONSOLE_ONLY = 0
```

CONSOLE_ONLY Hilog is output to the console only, equivalent to DEFAULT.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

## PRIVATE_SANDBOX_ONLY

```TypeScript
PRIVATE_SANDBOX_ONLY = 1
```

PRIVATE_SANDBOX_ONLY Hilog is output to files in its own private sandbox.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

## SHARE_SANDBOX_ONLY

```TypeScript
SHARE_SANDBOX_ONLY = 2
```

SHARE_SANDBOX_ONLY Hilog is output to files in its own sandbox, accessible to itself and the hiview service.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

## PRIVATE_SANDBOX_WITH_CONSOLE

```TypeScript
PRIVATE_SANDBOX_WITH_CONSOLE = 3
```

PRIVATE_SANDBOX_WITH_CONSOLE Enable both CONSOLE_ONLY and PRIVATE_SANDBOX_ONLY at the same time.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

## SHARE_SANDBOX_WITH_CONSOLE

```TypeScript
SHARE_SANDBOX_WITH_CONSOLE = 4
```

SHARE_SANDBOX_WITH_CONSOLE Enable both CONSOLE_ONLY and SHARE_SANGBOX_ONLY at the same time.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiLog

