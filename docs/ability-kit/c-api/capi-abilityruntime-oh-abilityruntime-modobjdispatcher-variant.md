# OH_AbilityRuntime_ModObjDispatcher_Variant

```c
typedef struct OH_AbilityRuntime_ModObjDispatcher_Variant {...} OH_AbilityRuntime_ModObjDispatcher_Variant
```

## Overview

Defines a variant structure using union + type tag for ABI compatibility.

**Since**: 26.0.0

**Related module**: [AbilityRuntime](capi-abilityruntime.md)

**Header file**: [modular_object_dispatcher.h](capi-modular-object-dispatcher-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| OH_AbilityRuntime_ModObjDispatcher_ValueType vt | Variant type.<br>**Since**: 26.0.0 |
| uint64_t reserved1 | Reserved field 1 for future use.<br>**Since**: 26.0.0 |
| uint64_t reserved2 | Reserved field 2 for future use.<br>**Since**: 26.0.0 |
| uint64_t reserved3 | Reserved field 3 for future use.<br>**Since**: 26.0.0 |
| union | Variant value data.<br>**Since**: 26.0.0 |


