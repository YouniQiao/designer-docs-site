# native_audio_converter.h

## Overview

Declare underlying data structure.

**Library**: libohaudiosuite.so

**System capability**: SystemCapability.Multimedia.Audio.SuiteEngine

**Since**: 26.0.0

**Related module**: [AudioConverter](capi-audioconverter.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_AudioConverter_Format](capi-audioconverter-oh-audioconverter-format.md) | OH_AudioConverter_Format | Define the audio converter format info structure, used to describe basic audio format. |
| [OH_AudioConverterStruct](capi-audioconverter-oh-audioconverterstruct.md) | OH_AudioConverter | Declare the audio converter.The handle of audio converter is used for audio converter related functions. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_AudioConverter_Result](#oh_audioconverter_result) | OH_AudioConverter_Result | Define the result of the function execution. |
| [OH_AudioConverter_InputStatus](#oh_audioconverter_inputstatus) | OH_AudioConverter_InputStatus | Define the status of input audio data provided by the callback (OH_AudioConverter_RequestDataCallback).The converter uses this status to determine how to handle subsequent conversion logic (e.g., continue pulling data,pause, or flush cached data).Note for callers: Even if the callback returns AUDIOCONVERTER_INPUT_DATA_FINISHED, OH_AudioConverter_Process()must be called repeatedlyuntil it returns AUDIOCONVERTER_SUCCESS with outputSize=0 (indicating all cached data has been flushed) |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_AudioConverter_Result OH_AudioConverter_Create(const OH_AudioConverter_Format* inputFormat, const OH_AudioConverter_Format* outputFormat, OH_AudioConverter** converter)](#oh_audioconverter_create) | - | Request to create the audio converter.The converter instance created by this function must be explicitly destroyed via OH_AudioConverter_Destroy().Supported audio format specifications (valid for Input/Output)The converter only supports PCM (Pulse Code Modulation) audio formats.Sample rate supports 8000 Hz, 11025 Hz, 12000 Hz, 16000 Hz, 22050 Hz, 24000 Hz, 32000 Hz, 44100 Hz, 48000 Hz,64000 Hz, 88200 Hz, 96000 Hz, 176400 Hz and 192000 Hz.Channel layout supports CH_LAYOUT_MONO, CH_LAYOUT_STEREO, CH_LAYOUT_STEREO_DOWNMIX,CH_LAYOUT_2POINT1, CH_LAYOUT_3POINT0, CH_LAYOUT_SURROUND, CH_LAYOUT_3POINT1, CH_LAYOUT_4POINT0, CH_LAYOUT_QUAD_SIDE,CH_LAYOUT_QUAD, CH_LAYOUT_2POINT0POINT2, CH_LAYOUT_4POINT1, CH_LAYOUT_5POINT0, CH_LAYOUT_5POINT0_BACK,CH_LAYOUT_2POINT1POINT2, CH_LAYOUT_3POINT0POINT2, CH_LAYOUT_5POINT1, CH_LAYOUT_5POINT1_BACK, CH_LAYOUT_6POINT0,CH_LAYOUT_3POINT1POINT2, CH_LAYOUT_6POINT0_FRONT, CH_LAYOUT_HEXAGONAL, CH_LAYOUT_6POINT1, CH_LAYOUT_6POINT1_BACK,CH_LAYOUT_6POINT1_FRONT, CH_LAYOUT_7POINT0, CH_LAYOUT_7POINT0_FRONT, CH_LAYOUT_7POINT1, CH_LAYOUT_OCTAGONAL,CH_LAYOUT_5POINT1POINT2, CH_LAYOUT_7POINT1_WIDE and CH_LAYOUT_7POINT1_WIDE_BACK.Sample format (bit depth) supports SAMPLE_U8 (8-bit unsigned PCM),SAMPLE_S16LE (16-bit short little-endian PCM), SAMPLE_S24LE (24-bit short little-endian PCM),SAMPLE_S32LE (32-bit short little-endian PCM), and SAMPLE_F32LE (32-bit float little-endian PCM). |
| [void OH_AudioConverter_Destroy(OH_AudioConverter* converter)](#oh_audioconverter_destroy) | - | Request to release the converter. |
| [typedef int32_t (\*OH_AudioConverter_RequestDataCallback)(void* userData, const void** outInputData, OH_AudioConverter_InputStatus* outStatus
)](#oh_audioconverter_requestdatacallback) | OH_AudioConverter_RequestDataCallback | Callback function of request data.The converter invokes this callback to actively request input audio data during OH_AudioConverter_Process().The caller must populate the output parameters (outInputData, outStatus) and return the valid size of input data.The maximum data size returned by a single callback is 400KB.The memory pointed to by outInputData must remain valid until OH_AudioConverter_Process() returns. |
| [OH_AudioConverter_Result OH_AudioConverter_SetInputCallback(OH_AudioConverter* converter, OH_AudioConverter_RequestDataCallback callback, void* userData
)](#oh_audioconverter_setinputcallback) | - | Set converter request data callback.This function binds the input data callback function for the audio converter.The callback is used by OH_AudioConverter_Process() to pull input audio data dynamically. |
| [OH_AudioConverter_Result OH_AudioConverter_Process(OH_AudioConverter* converter, void* outputData, int32_t outputCapacity, int32_t* outputSize
)](#oh_audioconverter_process) | - | Executing the audio format conversion.This function executes audio conversion to converts to the target format, and writes the result to the user-providedoutput buffer. This function must be called after OH_AudioConverter_SetInputCallback.The output buffer must be allocated and managed by the caller. |

## Enum type description

### OH_AudioConverter_Result

```c
enum OH_AudioConverter_Result
```

**Description**

Define the result of the function execution.

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| AUDIOCONVERTER_SUCCESS = 0 |  The call was successful.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_INVALID_PARAM = 1 |  This means that the function was executed with an invalid input parameter.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_UNSUPPORTED_FORMAT = 2 |  Unsupported audio format, such as unsupported encoding type, sample format etc.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_SYSTEM = 3 |  An system error has occurred.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_MEMORY_ALLOC_FAILED = 4 |  Memory allocation failed.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_BUFFER_TOO_SMALL = 5 |  Buffer capacity is insufficient.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_NOT_INITIALIZED = 6 |  Audio converter instance is not initialized.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_CALLBACK_INVALID = 7 |  Callback is invalid.<br>**Since**: 26.0.0 |
| AUDIOCONVERTER_ERROR_CALLBACK_NOT_SET = 8 |  Callback is not set.<br>**Since**: 26.0.0 |

### OH_AudioConverter_InputStatus

```c
enum OH_AudioConverter_InputStatus
```

**Description**

Define the status of input audio data provided by the callback (OH_AudioConverter_RequestDataCallback).The converter uses this status to determine how to handle subsequent conversion logic (e.g., continue pulling data,pause, or flush cached data).Note for callers: Even if the callback returns AUDIOCONVERTER_INPUT_DATA_FINISHED, OH_AudioConverter_Process()must be called repeatedlyuntil it returns AUDIOCONVERTER_SUCCESS with outputSize=0 (indicating all cached data has been flushed)

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| AUDIOCONVERTER_INPUT_HAVE_DATA = 1 |  |
| AUDIOCONVERTER_INPUT_NO_AVAILABLE_DATA = 2 |  |
| AUDIOCONVERTER_INPUT_DATA_FINISHED = 3 |  |


## Function description

### OH_AudioConverter_Create()

```c
OH_AudioConverter_Result OH_AudioConverter_Create(const OH_AudioConverter_Format* inputFormat, const OH_AudioConverter_Format* outputFormat, OH_AudioConverter** converter)
```

**Description**

Request to create the audio converter.The converter instance created by this function must be explicitly destroyed via OH_AudioConverter_Destroy().Supported audio format specifications (valid for Input/Output)The converter only supports PCM (Pulse Code Modulation) audio formats.Sample rate supports 8000 Hz, 11025 Hz, 12000 Hz, 16000 Hz, 22050 Hz, 24000 Hz, 32000 Hz, 44100 Hz, 48000 Hz,64000 Hz, 88200 Hz, 96000 Hz, 176400 Hz and 192000 Hz.Channel layout supports CH_LAYOUT_MONO, CH_LAYOUT_STEREO, CH_LAYOUT_STEREO_DOWNMIX,CH_LAYOUT_2POINT1, CH_LAYOUT_3POINT0, CH_LAYOUT_SURROUND, CH_LAYOUT_3POINT1, CH_LAYOUT_4POINT0, CH_LAYOUT_QUAD_SIDE,CH_LAYOUT_QUAD, CH_LAYOUT_2POINT0POINT2, CH_LAYOUT_4POINT1, CH_LAYOUT_5POINT0, CH_LAYOUT_5POINT0_BACK,CH_LAYOUT_2POINT1POINT2, CH_LAYOUT_3POINT0POINT2, CH_LAYOUT_5POINT1, CH_LAYOUT_5POINT1_BACK, CH_LAYOUT_6POINT0,CH_LAYOUT_3POINT1POINT2, CH_LAYOUT_6POINT0_FRONT, CH_LAYOUT_HEXAGONAL, CH_LAYOUT_6POINT1, CH_LAYOUT_6POINT1_BACK,CH_LAYOUT_6POINT1_FRONT, CH_LAYOUT_7POINT0, CH_LAYOUT_7POINT0_FRONT, CH_LAYOUT_7POINT1, CH_LAYOUT_OCTAGONAL,CH_LAYOUT_5POINT1POINT2, CH_LAYOUT_7POINT1_WIDE and CH_LAYOUT_7POINT1_WIDE_BACK.Sample format (bit depth) supports SAMPLE_U8 (8-bit unsigned PCM),SAMPLE_S16LE (16-bit short little-endian PCM), SAMPLE_S24LE (24-bit short little-endian PCM),SAMPLE_S32LE (32-bit short little-endian PCM), and SAMPLE_F32LE (32-bit float little-endian PCM).

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_AudioConverter_Format](capi-audioconverter-oh-audioconverter-format.md)* inputFormat | Pointer to the input audio format configuration. |
| [const OH_AudioConverter_Format](capi-audioconverter-oh-audioconverter-format.md)* outputFormat | Pointer to the output audio format configuration. |
| [OH_AudioConverter](capi-audioconverter-oh-audioconverterstruct.md)** converter | Pointer to a variable to receive audio converter. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioConverter_Result](capi-native-audio-converter-h.md#oh_audioconverter_result) | [AUDIOCONVERTER_SUCCESS](capi-native-audio-converter-h.md#oh_audioconverter_result) if execution succeeds,<br> or [AUDIOCONVERTER_ERROR_INVALID_PARAM](capi-native-audio-converter-h.md#oh_audioconverter_result) If the input parameters are invalid.<br> or [AUDIOCONVERTER_ERROR_UNSUPPORTED_FORMAT](capi-native-audio-converter-h.md#oh_audioconverter_result) if the specified input/output format combination is unsupported.<br> or [AUDIOCONVERTER_ERROR_MEMORY_ALLOC_FAILED](capi-native-audio-converter-h.md#oh_audioconverter_result) if memory allocation failed.<br> or [AUDIOCONVERTER_ERROR_SYSTEM](capi-native-audio-converter-h.md#oh_audioconverter_result) if the system has other abnormalities. |

### OH_AudioConverter_Destroy()

```c
void OH_AudioConverter_Destroy(OH_AudioConverter* converter)
```

**Description**

Request to release the converter.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioConverter](capi-audioconverter-oh-audioconverterstruct.md)* converter | Reference created by OH_AudioConverter_Create. |

### OH_AudioConverter_RequestDataCallback()

```c
typedef int32_t (*OH_AudioConverter_RequestDataCallback)(void* userData, const void** outInputData, OH_AudioConverter_InputStatus* outStatus
)
```

**Description**

Callback function of request data.The converter invokes this callback to actively request input audio data during OH_AudioConverter_Process().The caller must populate the output parameters (outInputData, outStatus) and return the valid size of input data.The maximum data size returned by a single callback is 400KB.The memory pointed to by outInputData must remain valid until OH_AudioConverter_Process() returns.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| (void\* userData | User-defined data passed to the callback. |
| const void\*\* outInputData | Pointer to a pointer that the callback sets to point to the input audio data buffer. |
| [OH_AudioConverter_InputStatus](capi-native-audio-converter-h.md#oh_audioconverter_inputstatus)\* outStatus | Set by the callback to inform the converter of data availability. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Size of valid input data pointed to by outInputData. |

### OH_AudioConverter_SetInputCallback()

```c
OH_AudioConverter_Result OH_AudioConverter_SetInputCallback(OH_AudioConverter* converter, OH_AudioConverter_RequestDataCallback callback, void* userData
)
```

**Description**

Set converter request data callback.This function binds the input data callback function for the audio converter.The callback is used by OH_AudioConverter_Process() to pull input audio data dynamically.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioConverter](capi-audioconverter-oh-audioconverterstruct.md)* converter | Reference created by OH_AudioConverter_Create. |
| [OH_AudioConverter_RequestDataCallback](capi-native-audio-converter-h.md#oh_audioconverter_requestdatacallback) callback | Callback to functions that will write audio data. |
| userData | Pointer to an application data structure that will be passed to the callback functions. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioConverter_Result](capi-native-audio-converter-h.md#oh_audioconverter_result) | [AUDIOCONVERTER_SUCCESS](capi-native-audio-converter-h.md#oh_audioconverter_result) if execution succeeds<br> or [AUDIOCONVERTER_ERROR_INVALID_PARAM](capi-native-audio-converter-h.md#oh_audioconverter_result) if parameter is invalid, e.g. converter is nullptr, e.t.c.<br> or [AUDIOCONVERTER_ERROR_NOT_INITIALIZED](capi-native-audio-converter-h.md#oh_audioconverter_result) if converter instance is not initialized.<br> or [AUDIOCONVERTER_ERROR_CALLBACK_INVALID](capi-native-audio-converter-h.md#oh_audioconverter_result) if callback is invalid, e.g. invalid callback return, e.t.c.<br> or [AUDIOCONVERTER_ERROR_SYSTEM](capi-native-audio-converter-h.md#oh_audioconverter_result) if the system has other abnormalities. |

### OH_AudioConverter_Process()

```c
OH_AudioConverter_Result OH_AudioConverter_Process(OH_AudioConverter* converter, void* outputData, int32_t outputCapacity, int32_t* outputSize
)
```

**Description**

Executing the audio format conversion.This function executes audio conversion to converts to the target format, and writes the result to the user-providedoutput buffer. This function must be called after OH_AudioConverter_SetInputCallback.The output buffer must be allocated and managed by the caller.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioConverter](capi-audioconverter-oh-audioconverterstruct.md)* converter | Reference created by OH_AudioConverter_Create. |
| void* outputData | Pointer to the output buffer allocated by the caller. |
| int32_t outputCapacity | Size of the output buffer user specified. |
| outputSize | Size of output buffer the system really write. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioConverter_Result](capi-native-audio-converter-h.md#oh_audioconverter_result) | [AUDIOCONVERTER_SUCCESS](capi-native-audio-converter-h.md#oh_audioconverter_result) if execution succeeds<br> or [AUDIOCONVERTER_ERROR_INVALID_PARAM](capi-native-audio-converter-h.md#oh_audioconverter_result) if parameter is invalid, e.g. converter is nullptr, e.t.c.<br> or [AUDIOCONVERTER_ERROR_NOT_INITIALIZED](capi-native-audio-converter-h.md#oh_audioconverter_result) if converter instance is not initialized.<br> or [AUDIOCONVERTER_ERROR_CALLBACK_INVALID](capi-native-audio-converter-h.md#oh_audioconverter_result) if callback is invalid,<br> e.g. callback returned an invalid value, e.t.c.<br> or [AUDIOCONVERTER_ERROR_CALLBACK_NOT_SET](capi-native-audio-converter-h.md#oh_audioconverter_result) no input callback is bound to the converter.<br> or [AUDIOCONVERTER_ERROR_BUFFER_TOO_SMALL](capi-native-audio-converter-h.md#oh_audioconverter_result) output buffer capacity is insufficient.<br> or [AUDIOCONVERTER_ERROR_SYSTEM](capi-native-audio-converter-h.md#oh_audioconverter_result) if the system has other abnormalities. |


