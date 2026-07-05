# JsRawHeapTrimLevel

```TypeScript
enum JsRawHeapTrimLevel
```

Trimming level of raw heap snapshot.

**起始版本：** 20

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## TRIM_LEVEL_1

```TypeScript
TRIM_LEVEL_1 = 0
```

Basic heap snapshot trimming(e.g. reducing content of string object).

**起始版本：** 20

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## TRIM_LEVEL_2

```TypeScript
TRIM_LEVEL_2 = 1
```

On top of level 1 trimming, object address size has been additionally trimmed. Please use latest version of rawheap-translator tool for parsing and converting .rawheap into .heapsnapshot file. Conversion process may fail when legacy tool is utilized. A higher trimming level means a longer time needed to generate the .rawheap file. Ensure that this duration falls below the app freeze threshold.

**起始版本：** 20

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

