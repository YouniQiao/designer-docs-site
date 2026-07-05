# AVCastPickerHelper

A helper to enable a picker to select output devices

**Since:** 14

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## constructor

```TypeScript
constructor(context: Context)
```

The constructor used to create a AVCastPickerHelper object.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | represents the context. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

## off('pickerStateChange')

```TypeScript
off(type: 'pickerStateChange', callback?: Callback<AVCastPickerState>) : void
```

Unregister picker state change callback.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pickerStateChange' | Yes | 'pickerStateChange' |
| callback | Callback&lt;AVCastPickerState> | No | The callback used to handle picker state changed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

## offPickerStateChange

```TypeScript
offPickerStateChange(callback?: Callback<AVCastPickerState>) : void
```

Unregister picker state change callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVCastPickerState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |

## on('pickerStateChange')

```TypeScript
on(type: 'pickerStateChange', callback: Callback<AVCastPickerState>) : void
```

Register picker state change callback.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pickerStateChange' | Yes | 'pickerStateChange' |
| callback | Callback&lt;AVCastPickerState> | Yes | The callback used to handle picker state changed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

## onPickerStateChange

```TypeScript
onPickerStateChange(callback: Callback<AVCastPickerState>) : void
```

Register picker state change callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVCastPickerState> | Yes | The callback used to handle picker state changed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |

## resetCommunicationDevice

```TypeScript
resetCommunicationDevice(): Promise<void>
```

Reset audio device to be default set by the platform which is used for communication use cases including voice or video calls. For example, the audio output device will be switched to earpiece for voice call and to speaker for video call on phone.

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

## select

```TypeScript
select(options?: AVCastPickerOptions): Promise<void>
```

Pull up the avcastpicker based on the options.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AVCastPickerOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

