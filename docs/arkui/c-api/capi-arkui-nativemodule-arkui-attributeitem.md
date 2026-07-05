# ArkUI_AttributeItem

```c
typedef struct ArkUI_AttributeItem {...} ArkUI_AttributeItem
```

## Overview

Defines the general input parameter structure of the [setAttribute](capi-arkui-nativemodule-arkui-nativenodeapi-1.md#setattribute) function. The propertysetting interfaces can utilize the member variables within it to store data of specific parameter types.

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

**Header file**: [native_node.h](capi-native-node-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| const [ArkUI_NumberValue*](capi-arkui-nativemodule-arkui-numbervalue.md) value | A number array, used to store parameters of the number array type. |
| int32_t size | The size of the number array, used together with the variable value, indicating the length of the value array. |
| const char* string | String type, used to store parameters of the string type. |
| void* object | Object type, used to store parameters of the object type. |


