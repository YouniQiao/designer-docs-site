# AVCastPickerHelper

A helper to enable a picker to select output devices

**Since:** 14

<!--Device-avSession-class AVCastPickerHelper--><!--Device-avSession-class AVCastPickerHelper-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(context: Context)
```

The constructor used to create a AVCastPickerHelper object.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-AVCastPickerHelper-constructor(context: Context)--><!--Device-AVCastPickerHelper-constructor(context: Context)-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | represents the context. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

<a id="off"></a>
## off('pickerStateChange')

```TypeScript
off(type: 'pickerStateChange', callback?: Callback<AVCastPickerState>) : void
```

Unregister picker state change callback.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-AVCastPickerHelper-off(type: 'pickerStateChange', callback?: Callback<AVCastPickerState>) : void--><!--Device-AVCastPickerHelper-off(type: 'pickerStateChange', callback?: Callback<AVCastPickerState>) : void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pickerStateChange' | Yes | 'pickerStateChange' |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AVCastPickerState&gt; | No | The callback used to handle picker state changed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

<a id="on"></a>
## on('pickerStateChange')

```TypeScript
on(type: 'pickerStateChange', callback: Callback<AVCastPickerState>) : void
```

Register picker state change callback.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-AVCastPickerHelper-on(type: 'pickerStateChange', callback: Callback<AVCastPickerState>) : void--><!--Device-AVCastPickerHelper-on(type: 'pickerStateChange', callback: Callback<AVCastPickerState>) : void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pickerStateChange' | Yes | 'pickerStateChange' |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AVCastPickerState&gt; | Yes | The callback used to handle picker state changed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

<a id="resetcommunicationdevice"></a>
## resetCommunicationDevice

```TypeScript
resetCommunicationDevice(): Promise<void>
```

Reset audio device to be default set by the platform which is used for communication use cases including voice or video calls.For example, the audio output device will be switched to earpiece for voice call and to speaker for video call on phone.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-AVCastPickerHelper-resetCommunicationDevice(): Promise<void>--><!--Device-AVCastPickerHelper-resetCommunicationDevice(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

<a id="select"></a>
## select

```TypeScript
select(options?: AVCastPickerOptions): Promise<void>
```

Pull up the avcastpicker based on the options.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-AVCastPickerHelper-select(options?: AVCastPickerOptions): Promise<void>--><!--Device-AVCastPickerHelper-select(options?: AVCastPickerOptions): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [AVCastPickerOptions](arkts-avsession-avsession-avcastpickeroptions-i.md) | No | represents the options provided to the picker. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

