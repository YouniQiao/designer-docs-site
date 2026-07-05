# start_options.h

## Overview

Defines the start options APIs.

**Library**: libability_runtime.so

**System capability**: SystemCapability.Ability.AbilityRuntime.Core

**Since**: 17

**Related module**: [AbilityRuntime](capi-abilityruntime.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [AbilityRuntime_StartOptions* OH_AbilityRuntime_CreateStartOptions(void)](#oh_abilityruntime_createstartoptions) | Create start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_DestroyStartOptions(AbilityRuntime_StartOptions **startOptions)](#oh_abilityruntime_destroystartoptions) | Destroy input start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowMode(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_WindowMode windowMode)](#oh_abilityruntime_setstartoptionswindowmode) | Set window mode for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowMode(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_WindowMode &windowMode)](#oh_abilityruntime_getstartoptionswindowmode) | Get window mode from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsDisplayId(AbilityRuntime_StartOptions *startOptions, int32_t displayId)](#oh_abilityruntime_setstartoptionsdisplayid) | Set display id for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsDisplayId(AbilityRuntime_StartOptions *startOptions, int32_t &displayId)](#oh_abilityruntime_getstartoptionsdisplayid) | Get display id from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWithAnimation(AbilityRuntime_StartOptions *startOptions, bool withAnimation)](#oh_abilityruntime_setstartoptionswithanimation) | Set with animation flag for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWithAnimation(AbilityRuntime_StartOptions *startOptions, bool &withAnimation)](#oh_abilityruntime_getstartoptionswithanimation) | Get with animation from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowLeft(AbilityRuntime_StartOptions *startOptions, int32_t windowLeft)](#oh_abilityruntime_setstartoptionswindowleft) | Set window left for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowLeft(AbilityRuntime_StartOptions *startOptions, int32_t &windowLeft)](#oh_abilityruntime_getstartoptionswindowleft) | Get window left from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowTop(AbilityRuntime_StartOptions *startOptions, int32_t windowTop)](#oh_abilityruntime_setstartoptionswindowtop) | Set window top for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowTop(AbilityRuntime_StartOptions *startOptions, int32_t &windowTop)](#oh_abilityruntime_getstartoptionswindowtop) | Get window top from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t windowHeight)](#oh_abilityruntime_setstartoptionswindowheight) | Set window height for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t &windowHeight)](#oh_abilityruntime_getstartoptionswindowheight) | Get window height from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t windowWidth)](#oh_abilityruntime_setstartoptionswindowwidth) | Set window width for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t &windowWidth)](#oh_abilityruntime_getstartoptionswindowwidth) | Get window width from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsStartVisibility(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_StartVisibility startVisibility)](#oh_abilityruntime_setstartoptionsstartvisibility) | Set start visibility for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsStartVisibility(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_StartVisibility &startVisibility)](#oh_abilityruntime_getstartoptionsstartvisibility) | Get start visibility from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsStartWindowIcon(AbilityRuntime_StartOptions *startOptions, OH_PixelmapNative *startWindowIcon)](#oh_abilityruntime_setstartoptionsstartwindowicon) | Set start window icon for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsStartWindowIcon(AbilityRuntime_StartOptions *startOptions, OH_PixelmapNative **startWindowIcon)](#oh_abilityruntime_getstartoptionsstartwindowicon) | Get start window icon from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsStartWindowBackgroundColor(AbilityRuntime_StartOptions *startOptions, const char *startWindowBackgroundColor)](#oh_abilityruntime_setstartoptionsstartwindowbackgroundcolor) | Set start window background color for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsStartWindowBackgroundColor(AbilityRuntime_StartOptions *startOptions, char **startWindowBackgroundColor, size_t &size)](#oh_abilityruntime_getstartoptionsstartwindowbackgroundcolor) | Get start window background color from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsSupportedWindowModes(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_SupportedWindowMode *supportedWindowModes, size_t size)](#oh_abilityruntime_setstartoptionssupportedwindowmodes) | Set start window modes for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsSupportedWindowModes(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_SupportedWindowMode **supportedWindowModes, size_t &size)](#oh_abilityruntime_getstartoptionssupportedwindowmodes) | Get start window modes from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMinWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t minWindowWidth)](#oh_abilityruntime_setstartoptionsminwindowwidth) | Set min window width for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMinWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t &minWindowWidth)](#oh_abilityruntime_getstartoptionsminwindowwidth) | Get min window width from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMaxWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t maxWindowWidth)](#oh_abilityruntime_setstartoptionsmaxwindowwidth) | Set max window width for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMaxWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t &maxWindowWidth)](#oh_abilityruntime_getstartoptionsmaxwindowwidth) | Get max window width from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMinWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t minWindowHeight)](#oh_abilityruntime_setstartoptionsminwindowheight) | Set min window height for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMinWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t &minWindowHeight)](#oh_abilityruntime_getstartoptionsminwindowheight) | Get min window height from start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMaxWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t maxWindowHeight)](#oh_abilityruntime_setstartoptionsmaxwindowheight) | Set max window height for start options. |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMaxWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t &maxWindowHeight)](#oh_abilityruntime_getstartoptionsmaxwindowheight) | Get max window height from start options. |

## Function description

### OH_AbilityRuntime_CreateStartOptions()

```c
AbilityRuntime_StartOptions* OH_AbilityRuntime_CreateStartOptions(void)
```

**Description**

Create start options.

**Since**: 17

**Returns**:

| Type | Description |
| -- | -- |
| AbilityRuntime_StartOptions* | Returns the newly created AbilityRuntime_StartOptions object. |

### OH_AbilityRuntime_DestroyStartOptions()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_DestroyStartOptions(AbilityRuntime_StartOptions **startOptions)
```

**Description**

Destroy input start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions **startOptions | The options to be deleted. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsWindowMode()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowMode(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_WindowMode windowMode)
```

**Description**

Set window mode for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set window mode for. |
| [AbilityRuntime_WindowMode](capi-context-constant-h.md#abilityruntime_windowmode) windowMode | The window mode. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions or windowMode is invalid. |

### OH_AbilityRuntime_GetStartOptionsWindowMode()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowMode(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_WindowMode &windowMode)
```

**Description**

Get window mode from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get window mode from. |
| windowMode | The obtained window mode. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsDisplayId()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsDisplayId(AbilityRuntime_StartOptions *startOptions, int32_t displayId)
```

**Description**

Set display id for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set display id for. |
| int32_t displayId | The display id. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsDisplayId()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsDisplayId(AbilityRuntime_StartOptions *startOptions, int32_t &displayId)
```

**Description**

Get display id from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get display id from. |
| displayId | The obtained display id. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsWithAnimation()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWithAnimation(AbilityRuntime_StartOptions *startOptions, bool withAnimation)
```

**Description**

Set with animation flag for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set with animation for. |
| bool withAnimation | The with animation. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsWithAnimation()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWithAnimation(AbilityRuntime_StartOptions *startOptions, bool &withAnimation)
```

**Description**

Get with animation from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get with animation from. |
| withAnimation | The obtained with animation. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsWindowLeft()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowLeft(AbilityRuntime_StartOptions *startOptions, int32_t windowLeft)
```

**Description**

Set window left for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set window left for. |
| int32_t windowLeft | The window left. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsWindowLeft()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowLeft(AbilityRuntime_StartOptions *startOptions, int32_t &windowLeft)
```

**Description**

Get window left from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get window left from. |
| windowLeft | The obtained window left. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsWindowTop()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowTop(AbilityRuntime_StartOptions *startOptions, int32_t windowTop)
```

**Description**

Set window top for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set window top for. |
| int32_t windowTop | The window top. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsWindowTop()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowTop(AbilityRuntime_StartOptions *startOptions, int32_t &windowTop)
```

**Description**

Get window top from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get window top from. |
| windowTop | The obtained window top. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsWindowHeight()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t windowHeight)
```

**Description**

Set window height for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set window height for. |
| int32_t windowHeight | The window height. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsWindowHeight()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t &windowHeight)
```

**Description**

Get window height from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get window height from. |
| windowHeight | The obtained window height. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsWindowWidth()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t windowWidth)
```

**Description**

Set window width for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set window width for. |
| int32_t windowWidth | The window width. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsWindowWidth()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t &windowWidth)
```

**Description**

Get window width from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get window width from. |
| windowWidth | The obtained window width. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsStartVisibility()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsStartVisibility(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_StartVisibility startVisibility)
```

**Description**

Set start visibility for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set start visibility for. |
| [AbilityRuntime_StartVisibility](capi-context-constant-h.md#abilityruntime_startvisibility) startVisibility | The start visibility. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsStartVisibility()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsStartVisibility(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_StartVisibility &startVisibility)
```

**Description**

Get start visibility from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get start visibility from. |
| startVisibility | The obtained start visibility. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsStartWindowIcon()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsStartWindowIcon(AbilityRuntime_StartOptions *startOptions, OH_PixelmapNative *startWindowIcon)
```

**Description**

Set start window icon for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set start window icon for. |
| [OH_PixelmapNative](../ImageKit/capi-image-nativemodule-oh-pixelmapnative.md) *startWindowIcon | The start window icon. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid<br>              or startWindowIcon is nullptr. |

### OH_AbilityRuntime_GetStartOptionsStartWindowIcon()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsStartWindowIcon(AbilityRuntime_StartOptions *startOptions, OH_PixelmapNative **startWindowIcon)
```

**Description**

Get start window icon from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get start window icon from. |
| [OH_PixelmapNative](../ImageKit/capi-image-nativemodule-oh-pixelmapnative.md) **startWindowIcon | The obtained start window icon. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid<br>              or startWindowIcon is NOT nullptr. |

### OH_AbilityRuntime_SetStartOptionsStartWindowBackgroundColor()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsStartWindowBackgroundColor(AbilityRuntime_StartOptions *startOptions, const char *startWindowBackgroundColor)
```

**Description**

Set start window background color for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set start window background color for. |
| const char *startWindowBackgroundColor | The start window background color. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid<br>              or startWindowBackgroundColor is nullptr. |

### OH_AbilityRuntime_GetStartOptionsStartWindowBackgroundColor()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsStartWindowBackgroundColor(AbilityRuntime_StartOptions *startOptions, char **startWindowBackgroundColor, size_t &size)
```

**Description**

Get start window background color from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get start window background color from. |
| char **startWindowBackgroundColor | The obtained start window background color. |
| size | The size of start window background color. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid<br>              or startWindowBackgroundColor is NOT nullptr.<br>         [ABILITY_RUNTIME_ERROR_CODE_INTERNAL](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if error occurred in malloc. |

### OH_AbilityRuntime_SetStartOptionsSupportedWindowModes()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsSupportedWindowModes(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_SupportedWindowMode *supportedWindowModes, size_t size)
```

**Description**

Set start window modes for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set start window modes for. |
| [AbilityRuntime_SupportedWindowMode](capi-context-constant-h.md#abilityruntime_supportedwindowmode) *supportedWindowModes | The start window modes. |
| size_t size | The size of start window modes. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions or supportWindowMode<br>              or size is invalid. |

### OH_AbilityRuntime_GetStartOptionsSupportedWindowModes()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsSupportedWindowModes(AbilityRuntime_StartOptions *startOptions, AbilityRuntime_SupportedWindowMode **supportedWindowModes, size_t &size)
```

**Description**

Get start window modes from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get start window modes from. |
| [AbilityRuntime_SupportedWindowMode](capi-context-constant-h.md#abilityruntime_supportedwindowmode) **supportedWindowModes | The obtained start window modes. |
| size | The size of the returned start window modes. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invallid<br>              or supportWindowMode is NOT nullptr<br>         [ABILITY_RUNTIME_ERROR_CODE_INTERNAL](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if error occurred in malloc. |

### OH_AbilityRuntime_SetStartOptionsMinWindowWidth()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMinWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t minWindowWidth)
```

**Description**

Set min window width for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set min window width for. |
| int32_t minWindowWidth | The min window width. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsMinWindowWidth()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMinWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t &minWindowWidth)
```

**Description**

Get min window width from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get min window width from. |
| minWindowWidth | The obtained min window width. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsMaxWindowWidth()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMaxWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t maxWindowWidth)
```

**Description**

Set max window width for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set max window width for. |
| int32_t maxWindowWidth | The max window width. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsMaxWindowWidth()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMaxWindowWidth(AbilityRuntime_StartOptions *startOptions, int32_t &maxWindowWidth)
```

**Description**

Get max window width from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get max window width from. |
| maxWindowWidth | The obtained max window width. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsMinWindowHeight()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMinWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t minWindowHeight)
```

**Description**

Set min window height for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set min window height for. |
| int32_t minWindowHeight | The min window height. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsMinWindowHeight()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMinWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t &minWindowHeight)
```

**Description**

Get min window height from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get min window height from. |
| minWindowHeight | The obtained min window height. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_SetStartOptionsMaxWindowHeight()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_SetStartOptionsMaxWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t maxWindowHeight)
```

**Description**

Set max window height for start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to set max window height for. |
| int32_t maxWindowHeight | The max window height. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |

### OH_AbilityRuntime_GetStartOptionsMaxWindowHeight()

```c
AbilityRuntime_ErrorCode OH_AbilityRuntime_GetStartOptionsMaxWindowHeight(AbilityRuntime_StartOptions *startOptions, int32_t &maxWindowHeight)
```

**Description**

Get max window height from start options.

**Since**: 17

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_StartOptions *startOptions | The options to get max window height from. |
| maxWindowHeight | The obtained max window height. |

**Returns**:

| Type | Description |
| -- | -- |
| [AbilityRuntime_ErrorCode](capi-ability-runtime-common-h.md#abilityruntime_errorcode) | The error code.<br>         [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the operation is successful.<br>         [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](capi-ability-runtime-common-h.md#abilityruntime_errorcode) if the startOptions is invalid. |


