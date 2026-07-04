# HiDebug_NativeStackFrame

```c
typedef struct HiDebug_NativeStackFrame {...} HiDebug_NativeStackFrame
```

## Overview

Defines native frame content

**Since**: 20

**Related module**: [HiDebug](capi-hidebug.md)

**Header file**: [hidebug_type.h](capi-hidebug-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint64_t relativePc | The pc relative to the start of current file in /proc/self/maps |
| uint64_t funcOffset | The pc relative to the start of current function |
| const char* mapName | The name parsed by pc from /proc/self/maps |
| const char* functionName | The functionName parsed by relativePc from symbol table in elf, maybe NULL |
| const char* buildId | The buildId parsed from .note.gnu.build-id in elf, maybe NULL |
| const char* reserved | Reserved, maybe NULL |


