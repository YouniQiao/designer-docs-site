# @ohos.multimodalInput.inputDevice

The inputDevice module implements input device management functions such as listening for the connection and disconnection of input devices and querying input device information such as the device name.

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## Modules to Import

```TypeScript
import { inputDevice } from '@ohos.multimodalInput.inputDevice';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getDevice](arkts-input-getdevice-f.md#getdevice-1) | Obtains the information about the input device with the specified ID. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. Use &gt; [inputDevice.getDeviceInfo](arkts-input-getdeviceinfo-f.md#getdeviceinfo-1) instead. |
| [getDevice](arkts-input-getdevice-f.md#getdevice-2) | Obtains the information about the input device with the specified ID. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. Use &gt; [inputDevice.getDeviceInfo](arkts-input-getdeviceinfo-f.md#getdeviceinfo-1) instead. |
| [getDeviceIds](arkts-input-getdeviceids-f.md#getdeviceids-1) | Obtains the IDs of all input devices. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. Use &gt; [inputDevice.getDeviceList](arkts-input-getdevicelist-f.md#getdevicelist-1) instead. |
| [getDeviceIds](arkts-input-getdeviceids-f.md#getdeviceids-2) | Obtains the IDs of all input devices. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API is supported since API version 8 and deprecated since API version 9. Use &gt; [inputDevice.getDeviceList](arkts-input-getdevicelist-f.md#getdevicelist-1) instead. |
| [getDeviceInfo](arkts-input-getdeviceinfo-f.md#getdeviceinfo-1) | Obtains information about the specified input device. This API uses an asynchronous callback to return the result. |
| [getDeviceInfo](arkts-input-getdeviceinfo-f.md#getdeviceinfo-2) | Obtains the information about the input device with the specified ID. This API uses a promise to return the result. |
| [getDeviceInfoSync](arkts-input-getdeviceinfosync-f.md#getdeviceinfosync-1) | Obtains information about the specified input device. |
| [getDeviceList](arkts-input-getdevicelist-f.md#getdevicelist-1) | Obtains the IDs of all input devices. This API uses an asynchronous callback to return the result. |
| [getDeviceList](arkts-input-getdevicelist-f.md#getdevicelist-2) | Obtains the IDs of all input devices. This API uses a promise to return the result. |
| [getIntervalSinceLastInput](arkts-input-getintervalsincelastinput-f.md#getintervalsincelastinput-1) | Obtains the interval (including the device sleep time) elapsed since the last system input event. This API uses a promise to return the result. |
| [getKeyboardType](arkts-input-getkeyboardtype-f.md#getkeyboardtype-1) | Obtains the keyboard type of the input device, such as full keyboard and numeric keypad. The keyboard type of the input device is subject to the result returned by this API. This API uses an asynchronous callback to return the result. |
| [getKeyboardType](arkts-input-getkeyboardtype-f.md#getkeyboardtype-2) | Obtains the keyboard type of an input device. This API uses a promise to return the result. |
| [getKeyboardTypeSync](arkts-input-getkeyboardtypesync-f.md#getkeyboardtypesync-1) | Obtains the keyboard type of the input device. |
| [isFunctionKeyEnabled](arkts-input-isfunctionkeyenabled-f.md#isfunctionkeyenabled-1) | Checks whether the specified function key (for example, **CapsLock**) is enabled. This API uses a promise to return the result. |
| [off](arkts-input-off-f.md#off-1) | Disables listening for device hot swap events. This API is called before the application exits. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f.md#on-1) | Enables listening for device hot swap events. When performing this operation, you need to connect to external devices such as a mouse, keyboard, and touchscreen. This API uses an asynchronous callback to return the result. |
| [setFunctionKeyEnabled](arkts-input-setfunctionkeyenabled-f.md#setfunctionkeyenabled-1) | Specifies whether to enable a function key (for example, **CapsLock**). This API uses a promise to return the result. |
| [supportKeys](arkts-input-supportkeys-f.md#supportkeys-1) | Queries whether a specified input device supports specified keys. This API uses an asynchronous callback to return the result. |
| [supportKeys](arkts-input-supportkeys-f.md#supportkeys-2) | Checks whether the input device supports the specified keys. This API uses a promise to return the result. |
| [supportKeysSync](arkts-input-supportkeyssync-f.md#supportkeyssync-1) | Checks whether the input device supports the specified keys. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getKeyboardRepeatDelay](arkts-input-getkeyboardrepeatdelay-f-sys.md#getkeyboardrepeatdelay-1) | Obtains the keyboard repeat delay. This API uses an asynchronous callback to return the result. |
| [getKeyboardRepeatDelay](arkts-input-getkeyboardrepeatdelay-f-sys.md#getkeyboardrepeatdelay-2) | Obtains the keyboard repeat delay. This API uses a promise to return the result. |
| [getKeyboardRepeatRate](arkts-input-getkeyboardrepeatrate-f-sys.md#getkeyboardrepeatrate-1) | Obtains the keyboard repeat rate. This API uses an asynchronous callback to return the result. |
| [getKeyboardRepeatRate](arkts-input-getkeyboardrepeatrate-f-sys.md#getkeyboardrepeatrate-2) | Obtains the keyboard repeat rate. This API uses a promise to return the result. |
| [setInputDeviceEnabled](arkts-input-setinputdeviceenabled-f-sys.md#setinputdeviceenabled-1) | Sets the input switch status of an input device. Take the touchscreen as an example. If the input switch is off, the touchscreen does not respond when being touched. If the input switch is on, the touchscreen wakes up when being touched. This API uses a promise to return the result. |
| [setKeyboardRepeatDelay](arkts-input-setkeyboardrepeatdelay-f-sys.md#setkeyboardrepeatdelay-1) | Sets the keyboard repeat delay. This API uses an asynchronous callback to return the result. |
| [setKeyboardRepeatDelay](arkts-input-setkeyboardrepeatdelay-f-sys.md#setkeyboardrepeatdelay-2) | Sets the keyboard repeat delay. This API uses a promise to return the result. |
| [setKeyboardRepeatRate](arkts-input-setkeyboardrepeatrate-f-sys.md#setkeyboardrepeatrate-1) | Sets the keyboard repeat rate. This API uses an asynchronous callback to return the result. |
| [setKeyboardRepeatRate](arkts-input-setkeyboardrepeatrate-f-sys.md#setkeyboardrepeatrate-2) | Sets the keyboard repeat rate. This API uses a promise to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AxisRange](arkts-input-axisrange-i.md) | Defines the axis range of an input device. |
| [DeviceListener](arkts-input-devicelistener-i.md) | Provides hot swap information about an input device. |
| [InputDeviceData](arkts-input-inputdevicedata-i.md) | Provides information about an input device. |

### Enums

| Name | Description |
| --- | --- |
| [FunctionKey](arkts-input-functionkey-e.md) | Enumerates function key types. |
| [KeyboardType](arkts-input-keyboardtype-e.md) | Enumerates keyboard types. |

### Types

| Name | Description |
| --- | --- |
| [AxisType](arkts-input-axistype-t.md) | Defines the axis type of an input device. |
| [ChangedType](arkts-input-changedtype-t.md) | Enumerates hot swap events. |
| [SourceType](arkts-input-sourcetype-t.md) | Input sources supported by the input device, including the keyboard, mouse, touchscreen, trackball, touchpad, and joystick. |

