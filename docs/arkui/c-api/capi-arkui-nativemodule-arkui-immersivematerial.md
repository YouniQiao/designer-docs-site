# ArkUI_ImmersiveMaterial

```c
typedef struct ArkUI_ImmersiveMaterial ArkUI_ImmersiveMaterial
```

## Overview

Defines the immersive material object on the native side.Immersive materials have different performance levels based on the computing power of the device.The performance level is defined by [ArkUI_MaterialLevel](capi-native-material-h.md#arkui_materiallevel), which can be obtainedby [OH_ArkUI_NativeModule_GetGlobalMaterialLevel](capi-native-material-h.md#oh_arkui_nativemodule_getglobalmateriallevel).On high-end and mid-range computing power devices, they affect the filter effect of thematerial layer and shadow effect. On low-end computing power devices, it affects thebackground color, border color, border width, and shadow effect.

**Since**: 26.0.0

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

**Header file**: [native_material.h](capi-native-material-h.md)

