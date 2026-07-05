# HiDebug_JsStackFrame

```c
typedef struct HiDebug_JsStackFrame {...} HiDebug_JsStackFrame
```

## Overview

Defines Js stack frame content

**Since**: 20

**Related module**: [HiDebug](capi-hidebug.md)

**Header file**: [hidebug_type.h](capi-hidebug-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint64_t relativePc | The pc relative to the start of current file in /proc/self/maps |
| int32_t line | The line number of the source code from url |
| int32_t column | The column number of the source code from url |
| const char* mapName | The name parsed by pc from /proc/self/maps, maybe NULL |
| const char* functionName | The functionName of current frame, maybe NULL |
| const char* url | The url of current frame, maybe NULL |
| const char* packageName | The packageName of current frame, maybe NULL |


