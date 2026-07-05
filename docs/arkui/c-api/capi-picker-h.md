# picker.h

## Overview

Defines the common types and APIs for picker components.

**Library**: libace_ndk.z.so

**System capability**: SystemCapability.ArkUI.ArkUI.Full

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ARKUI_TextPickerRangeContent](capi-arkui-nativemodule-arkui-textpickerrangecontent.md) | ARKUI_TextPickerRangeContent | Defines the input structure of the single-column text picker with image resources. |
| [ARKUI_TextPickerCascadeRangeContent](capi-arkui-nativemodule-arkui-textpickercascaderangecontent.md) | ARKUI_TextPickerCascadeRangeContent | Defines the input structure of the interconnected multi-column text picker. |
| [ArkUI_PickerIndicatorBackground](capi-arkui-nativemodule-arkui-pickerindicatorbackground.md) | ArkUI_PickerIndicatorBackground | Style parameters of background indicator. |
| [ArkUI_PickerIndicatorDivider](capi-arkui-nativemodule-arkui-pickerindicatordivider.md) | ArkUI_PickerIndicatorDivider | Style parameters of divider indicator. |
| [ArkUI_PickerIndicatorStyle](capi-arkui-nativemodule-arkui-pickerindicatorstyle.md) | ArkUI_PickerIndicatorStyle | Definition of indicator style. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_DatePickerMode](#arkui_datepickermode) | ArkUI_DatePickerMode | Enumerates the modes of the date picker. |
| [ArkUI_TextPickerRangeType](#arkui_textpickerrangetype) | ArkUI_TextPickerRangeType | Enumerates the types of the text picker. |
| [ArkUI_CalendarAlignment](#arkui_calendaralignment) | ArkUI_CalendarAlignment | Enumerates the alignment modes between the calendar picker and the entry component. |
| [ArkUI_PickerIndicatorType](#arkui_pickerindicatortype) | ArkUI_PickerIndicatorType | Enumerates the selected indicator type of picker. |

### Function

| Name | Description |
| -- | -- |
| [ArkUI_TextPickerRangeContentArray* OH_ArkUI_TextPickerRangeContentArray_Create(int32_t length)](#oh_arkui_textpickerrangecontentarray_create) | Creates a TextPickerRangeContent instance. |
| [void OH_ArkUI_TextPickerRangeContentArray_SetIconAtIndex(ArkUI_TextPickerRangeContentArray* handle, char* icon, int32_t index)](#oh_arkui_textpickerrangecontentarray_seticonatindex) | Sets the icon resource path or URI for one item in an {@link ArkUI_TextPickerRangeContentArray}. |
| [void OH_ArkUI_TextPickerRangeContentArray_SetTextAtIndex(ArkUI_TextPickerRangeContentArray* handle, char* text, int32_t index)](#oh_arkui_textpickerrangecontentarray_settextatindex) | Sets the display text for one item in an {@link ArkUI_TextPickerRangeContentArray}. |
| [void OH_ArkUI_TextPickerRangeContentArray_Destroy(ArkUI_TextPickerRangeContentArray* handle)](#oh_arkui_textpickerrangecontentarray_destroy) | Releases an {@link ArkUI_TextPickerRangeContentArray} created by[OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create). |
| [ArkUI_TextCascadePickerRangeContentArray* OH_ArkUI_TextCascadePickerRangeContentArray_Create(int32_t length)](#oh_arkui_textcascadepickerrangecontentarray_create) | Allocates one column level of an interconnected (cascade) TextPicker range. Use with range type[ARKUI_TEXTPICKER_RANGETYPE_CASCADE_RANGE_CONTENT](capi-picker-h.md#arkui_textpickerrangetype). The returned pointer addresses a contiguous arrayof sibling nodes; each node may carry display text and an optional next-level range from[OH_ArkUI_TextCascadePickerRangeContentArray_SetChildAtIndex](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_setchildatindex). |
| [void OH_ArkUI_TextCascadePickerRangeContentArray_SetTextAtIndex(ArkUI_TextCascadePickerRangeContentArray* handle, char* text, int32_t index)](#oh_arkui_textcascadepickerrangecontentarray_settextatindex) | Sets the display text for one sibling node on a cascade TextPicker level. |
| [void OH_ArkUI_TextCascadePickerRangeContentArray_SetChildAtIndex(ArkUI_TextCascadePickerRangeContentArray* handle, ArkUI_TextCascadePickerRangeContentArray* child, int32_t index)](#oh_arkui_textcascadepickerrangecontentarray_setchildatindex) | Sets the childs info of items in a multi text picker ranges. |
| [void OH_ArkUI_TextCascadePickerRangeContentArray_Destroy(ArkUI_TextCascadePickerRangeContentArray* handle)](#oh_arkui_textcascadepickerrangecontentarray_destroy) | Releases a cascade range level allocated with [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create). |
| [ArkUI_PickerIndicatorStyle* OH_ArkUI_PickerIndicatorStyle_Create(ArkUI_PickerIndicatorType type)](#oh_arkui_pickerindicatorstyle_create) | Create the ArkUI_PickerIndicatorStyle instance. |
| [void OH_ArkUI_PickerIndicatorStyle_Dispose(ArkUI_PickerIndicatorStyle* style)](#oh_arkui_pickerindicatorstyle_dispose) | Destroy the ArkUI_PickerIndicatorStyle instance. |

## Enum type description

### ArkUI_DatePickerMode

```c
enum ArkUI_DatePickerMode
```

**Description**

Enumerates the modes of the date picker.

**Since**: 18

| Enum item | Description |
| -- | -- |
| ARKUI_DATEPICKER_MODE_DATE = 0 |  |
| ARKUI_DATEPICKER_YEAR_AND_MONTH = 1 |  |
| ARKUI_DATEPICKER_MONTH_AND_DAY = 2 |  |

### ArkUI_TextPickerRangeType

```c
enum ArkUI_TextPickerRangeType
```

**Description**

Enumerates the types of the text picker.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_TEXTPICKER_RANGETYPE_SINGLE = 0 |  |
| ARKUI_TEXTPICKER_RANGETYPE_MULTI = 1 |  |
| ARKUI_TEXTPICKER_RANGETYPE_RANGE_CONTENT = 2 |  |
| ARKUI_TEXTPICKER_RANGETYPE_CASCADE_RANGE_CONTENT = 3 |  |

### ArkUI_CalendarAlignment

```c
enum ArkUI_CalendarAlignment
```

**Description**

Enumerates the alignment modes between the calendar picker and the entry component.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_CALENDAR_ALIGNMENT_START = 0 |  |
| ARKUI_CALENDAR_ALIGNMENT_CENTER = 1 |  |
| ARKUI_CALENDAR_ALIGNMENT_END = 2 |  |

### ArkUI_PickerIndicatorType

```c
enum ArkUI_PickerIndicatorType
```

**Description**

Enumerates the selected indicator type of picker.

**Since**: 23

| Enum item | Description |
| -- | -- |
| ARKUI_PICKER_INDICATOR_BACKGROUND = 0 |  |
| ARKUI_PICKER_INDICATOR_DIVIDER = 1 |  |


## Function description

### OH_ArkUI_TextPickerRangeContentArray_Create()

```c
ArkUI_TextPickerRangeContentArray* OH_ArkUI_TextPickerRangeContentArray_Create(int32_t length)
```

**Description**

Creates a TextPickerRangeContent instance.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t length | The length of the picker array. Value range: [1, +infinity). |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_TextPickerRangeContentArray* | Returns a pointer to the created instance on success. Initialize each item of the array<br>         as a null pointer;call [OH_ArkUI_TextPickerRangeContentArray_SetIconAtIndex](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_seticonatindex) and/or<br>         [OH_ArkUI_TextPickerRangeContentArray_SetTextAtIndex](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_settextatindex) for each index as needed.<br>         Returns <b>nullptr</b> if <b>length</b> is not in <b>[1, +infinity)</b>.<br>         When the object is no longer used, release it with [OH_ArkUI_TextPickerRangeContentArray_Destroy](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_destroy). |

### OH_ArkUI_TextPickerRangeContentArray_SetIconAtIndex()

```c
void OH_ArkUI_TextPickerRangeContentArray_SetIconAtIndex(ArkUI_TextPickerRangeContentArray* handle, char* icon, int32_t index)
```

**Description**

Sets the icon resource path or URI for one item in an {@link ArkUI_TextPickerRangeContentArray}.

>**Note**: 
>If an icon was already set at <b>index</b>, the previous buffer is released before assigning the new value.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TextPickerRangeContentArray* handle | Pointer returned by [OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create). If <b>nullptr</b>, thisfunction has no effect. |
| char* icon | Null-terminated C string for the icon (path or URI). The content is copied into the array; the callerkeeps ownership of <b>icon</b>. If <b>nullptr</b>, this function has no effect. |
| int32_t index | Index of the item to set. Valid values are greater than or equal to <b>0</b> and less than the<b>length</b> argument passed to [OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create). Otherwise this functiondoes nothing. |

### OH_ArkUI_TextPickerRangeContentArray_SetTextAtIndex()

```c
void OH_ArkUI_TextPickerRangeContentArray_SetTextAtIndex(ArkUI_TextPickerRangeContentArray* handle, char* text, int32_t index)
```

**Description**

Sets the display text for one item in an {@link ArkUI_TextPickerRangeContentArray}.

>**Note**: 
>If text was already set at <b>index</b>, the previous buffer is released before assigning the new value.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TextPickerRangeContentArray* handle | Pointer returned by [OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create). If <b>nullptr</b>, thisfunction has no effect. |
| char* text | Null-terminated C string shown for the item. The content is copied into the array; the caller keepsownership of <b>text</b>. If <b>nullptr</b>, this function has no effect. |
| int32_t index | Index of the item to set. Valid values are greater than or equal to <b>0</b> and less than the<b>length</b> argument passed to [OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create). Otherwise this functiondoes nothing. |

### OH_ArkUI_TextPickerRangeContentArray_Destroy()

```c
void OH_ArkUI_TextPickerRangeContentArray_Destroy(ArkUI_TextPickerRangeContentArray* handle)
```

**Description**

Releases an {@link ArkUI_TextPickerRangeContentArray} created by[OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create).

>**Note**: 
>After this call, <b>handle</b> must not be used. Do not pass pointers that were not returned by
 *       [OH_ArkUI_TextPickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textpickerrangecontentarray_create).

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TextPickerRangeContentArray* handle | Instance to destroy. If <b>nullptr</b>, this function has no effect. |

### OH_ArkUI_TextCascadePickerRangeContentArray_Create()

```c
ArkUI_TextCascadePickerRangeContentArray* OH_ArkUI_TextCascadePickerRangeContentArray_Create(int32_t length)
```

**Description**

Allocates one column level of an interconnected (cascade) TextPicker range. Use with range type[ARKUI_TEXTPICKER_RANGETYPE_CASCADE_RANGE_CONTENT](capi-picker-h.md#arkui_textpickerrangetype). The returned pointer addresses a contiguous arrayof sibling nodes; each node may carry display text and an optional next-level range from[OH_ArkUI_TextCascadePickerRangeContentArray_SetChildAtIndex](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_setchildatindex).

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t length | Number of sibling entries on this column. Value range: <b>[1, +infinity)</b>. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkUI_TextCascadePickerRangeContentArray* | Returns a pointer to the first sibling node when <b>length</b> is in <b>[1, +infinity)</b>; returns<br>     <b>nullptr</b> otherwise. The sibling count used for bounds checks equals <b>length</b>. |

### OH_ArkUI_TextCascadePickerRangeContentArray_SetTextAtIndex()

```c
void OH_ArkUI_TextCascadePickerRangeContentArray_SetTextAtIndex(ArkUI_TextCascadePickerRangeContentArray* handle, char* text, int32_t index)
```

**Description**

Sets the display text for one sibling node on a cascade TextPicker level.

>**Note**: 
>If text was already set at <b>index</b>, the previous buffer is released before assigning the new value.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TextCascadePickerRangeContentArray* handle | Pointer returned by [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create). If <b>nullptr</b>,this function has no effect. |
| char* text | Null-terminated C string. The content is copied; the caller keeps ownership of <b>text</b>. If<b>nullptr</b>, this function has no effect. |
| int32_t index | Index of the sibling to set. Valid values are greater than or equal to <b>0</b> and less than the<b>length</b> argument passed to [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create). Otherwise thisfunction does nothing. |

### OH_ArkUI_TextCascadePickerRangeContentArray_SetChildAtIndex()

```c
void OH_ArkUI_TextCascadePickerRangeContentArray_SetChildAtIndex(ArkUI_TextCascadePickerRangeContentArray* handle, ArkUI_TextCascadePickerRangeContentArray* child, int32_t index)
```

**Description**

Sets the childs info of items in a multi text picker ranges.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TextCascadePickerRangeContentArray* handle | Pointer returned by [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create). If <b>nullptr</b>,this function has no effect. |
| ArkUI_TextCascadePickerRangeContentArray* child | Pointer returned by [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create) for the child column.If <b>nullptr</b>, this function has no effect. If a subtree already exists at <b>index</b>, it is destroyedwith [OH_ArkUI_TextCascadePickerRangeContentArray_Destroy](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_destroy) before the new <b>child</b> is stored.While <b>child</b> stays attached under the parent, the caller must not call[OH_ArkUI_TextCascadePickerRangeContentArray_Destroy](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_destroy) on <b>child</b>. |
| int32_t index | Index of the sibling that owns the subtree. Valid values are greater than or equal to <b>0</b> and lessthan the <b>length</b> argument passed to [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create).Otherwise this function does nothing. |

### OH_ArkUI_TextCascadePickerRangeContentArray_Destroy()

```c
void OH_ArkUI_TextCascadePickerRangeContentArray_Destroy(ArkUI_TextCascadePickerRangeContentArray* handle)
```

**Description**

Releases a cascade range level allocated with [OH_ArkUI_TextCascadePickerRangeContentArray_Create](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_create).

>**Note**: 
>Do not call [OH_ArkUI_TextCascadePickerRangeContentArray_Destroy](capi-picker-h.md#oh_arkui_textcascadepickerrangecontentarray_destroy) on a <b>child</b> while
 *       it is still stored in a parent's {@code children}.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TextCascadePickerRangeContentArray* handle | Instance to destroy. If <b>nullptr</b>, this function has no effect. |

### OH_ArkUI_PickerIndicatorStyle_Create()

```c
ArkUI_PickerIndicatorStyle* OH_ArkUI_PickerIndicatorStyle_Create(ArkUI_PickerIndicatorType type)
```

**Description**

Create the ArkUI_PickerIndicatorStyle instance.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_PickerIndicatorType](capi-picker-h.md#arkui_pickerindicatortype) type | The picker selection indicator enumeration type. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_PickerIndicatorStyle*](capi-arkui-nativemodule-arkui-pickerindicatorstyle.md) | ArkUI_PickerIndicatorStyle instance. If the instance returns a null pointer,<br>         it indicates creation failure, and the reason for the failure may be that the address space is full or<br>         the type not supported. |

### OH_ArkUI_PickerIndicatorStyle_Dispose()

```c
void OH_ArkUI_PickerIndicatorStyle_Dispose(ArkUI_PickerIndicatorStyle* style)
```

**Description**

Destroy the ArkUI_PickerIndicatorStyle instance.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_PickerIndicatorStyle](capi-arkui-nativemodule-arkui-pickerindicatorstyle.md)* style | The ArkUI_PickerIndicatorStyle instance to be destroyed. |


