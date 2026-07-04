# OH_AbilityRuntime_ModObjDispatcher_TypeInfo

```c
typedef struct OH_AbilityRuntime_ModObjDispatcher_TypeInfo {...} OH_AbilityRuntime_ModObjDispatcher_TypeInfo
```

## Overview

Defines the parameter type descriptor for modular object dispatcher.Describes the type of a parameter or return value using a tagged union.for array types, use u.arrayType.pElementType and u.arrayType.size;for vector/set types, use u.pElementType;for struct/proxy/stub/enum types, use u.idlType.

**Since**: 26.0.0

**Related module**: [AbilityRuntime](capi-abilityruntime.md)

**Header file**: [modular_object_dispatcher.h](capi-modular-object-dispatcher-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| OH_AbilityRuntime_ModObjDispatcher_ValueType vt | Type tag that determines which union member is valid.<br>**Since**: 26.0.0 |
| union | Union of type-specific metadata. The valid member is determined by {@link vt}.<br>**Since**: 26.0.0 |


