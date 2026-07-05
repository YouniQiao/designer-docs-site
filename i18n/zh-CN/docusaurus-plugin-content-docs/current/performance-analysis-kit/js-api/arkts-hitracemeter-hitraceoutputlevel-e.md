# HiTraceOutputLevel

```TypeScript
enum HiTraceOutputLevel
```

Enumerates trace output levels. The trace output level lower than the threshold does not take effect. The log version threshold is **INFO**, and the nolog version threshold is **COMMERCIAL**.

**起始版本：** 19

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## DEBUG

```TypeScript
DEBUG = 0
```

Level used only for debugging, which has the lowest priority.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## INFO

```TypeScript
INFO = 1
```

Level for the log version.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## CRITICAL

```TypeScript
CRITICAL = 2
```

Level for the log version, which has a higher priority than **INFO**.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## COMMERCIAL

```TypeScript
COMMERCIAL = 3
```

Level for the nolog version, which has the highest priority.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## MAX

```TypeScript
MAX = COMMERCIAL
```

Maximum trace output level: **COMMERCIAL**.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

