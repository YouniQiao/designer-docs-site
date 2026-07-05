# @ohos.multimodalInput.inputDevice

本模块提供输入设备管理能力，包括监听输入设备的连接和断开状态，查询设备名称等输入设备信息。 > **说明**：

**起始版本：** 8

**系统能力：** SystemCapability.MultimodalInput.Input.InputDevice

## 导入模块

```TypeScript
import { inputDevice } from '@kit.InputKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getDevice](arkts-inputdevice-getdevice-f.md#getDevice-1) | 获取指定id的输入设备信息，使用callback异步回调。 > **说明**： |
| [getDevice](arkts-inputdevice-getdevice-f.md#getDevice-2) | 获取指定id的输入设备信息，使用Promise异步回调。 > **说明**： |
| [getDeviceIds](arkts-inputdevice-getdeviceids-f.md#getDeviceIds-1) | 获取所有输入设备的ID列表，使用callback异步回调。 > **说明**： |
| [getDeviceIds](arkts-inputdevice-getdeviceids-f.md#getDeviceIds-2) | 获取所有输入设备的ID列表，使用Promise异步回调。 > **说明**： |
| [getDeviceInfo](arkts-inputdevice-getdeviceinfo-f.md#getDeviceInfo-1) | 获取指定输入设备的信息，使用callback异步回调。 |
| [getDeviceInfo](arkts-inputdevice-getdeviceinfo-f.md#getDeviceInfo-2) | 获取指定id的输入设备信息，使用Promise异步回调。 |
| [getDeviceInfoSync](arkts-inputdevice-getdeviceinfosync-f.md#getDeviceInfoSync-1) | 获取指定输入设备的信息。 |
| [getDeviceList](arkts-inputdevice-getdevicelist-f.md#getDeviceList-1) | 获取所有输入设备的ID列表，使用callback异步回调。 |
| [getDeviceList](arkts-inputdevice-getdevicelist-f.md#getDeviceList-2) | 获取所有输入设备的ID列表，使用Promise异步回调。 |
| [getIntervalSinceLastInput](arkts-inputdevice-getintervalsincelastinput-f.md#getIntervalSinceLastInput-1) | 获取距离上次系统输入事件的时间间隔（包含设备休眠时间），使用Promise异步回调。 |
| <!--DelRow-->[getKeyboardRepeatDelay](arkts-inputdevice-getkeyboardrepeatdelay-f-sys.md#getKeyboardRepeatDelay-1) | 获取键盘按键的重复时延，使用callback异步回调。 |
| <!--DelRow-->[getKeyboardRepeatDelay](arkts-inputdevice-getkeyboardrepeatdelay-f-sys.md#getKeyboardRepeatDelay-2) | 获取键盘按键的重复时延，使用Promise异步回调。 |
| <!--DelRow-->[getKeyboardRepeatRate](arkts-inputdevice-getkeyboardrepeatrate-f-sys.md#getKeyboardRepeatRate-1) | 获取键盘按键的重复速率，使用callback异步回调。 |
| <!--DelRow-->[getKeyboardRepeatRate](arkts-inputdevice-getkeyboardrepeatrate-f-sys.md#getKeyboardRepeatRate-2) | 获取键盘按键的重复速率，使用Promise异步回调。 |
| [getKeyboardType](arkts-inputdevice-getkeyboardtype-f.md#getKeyboardType-1) | 获取输入设备的键盘类型，如全键盘、小键盘等。输入设备的键盘类型以接口返回结果为准。使用callback异步回调。 |
| [getKeyboardType](arkts-inputdevice-getkeyboardtype-f.md#getKeyboardType-2) | 获取输入设备的键盘类型，使用Promise异步回调。 |
| [getKeyboardTypeSync](arkts-inputdevice-getkeyboardtypesync-f.md#getKeyboardTypeSync-1) | 获取输入设备的键盘类型。 |
| [isFunctionKeyEnabled](arkts-inputdevice-isfunctionkeyenabled-f.md#isFunctionKeyEnabled-1) | 检查功能键（如：CapsLock键）是否使能。使用Promise异步回调。 |
| [off](arkts-inputdevice-off-f.md#off-1) | 取消监听输入设备的热插拔事件。在应用退出前调用，取消监听。使用callback异步回调。 |
| [offChange](arkts-inputdevice-offchange-f.md#offChange-1) | Stops listening for an input device event. |
| [on](arkts-inputdevice-on-f.md#on-1) | 注册监听输入设备的热插拔事件，使用时需连接鼠标、键盘、触摸屏等外部设备。使用callback异步回调。 |
| [onChange](arkts-inputdevice-onchange-f.md#onChange-1) | Starts listening for an input device event. |
| [setFunctionKeyEnabled](arkts-inputdevice-setfunctionkeyenabled-f.md#setFunctionKeyEnabled-1) | 设置功能键（如：CapsLock键）使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setInputDeviceEnabled](arkts-inputdevice-setinputdeviceenabled-f-sys.md#setInputDeviceEnabled-1) | 设置输入设备的开关状态。以触摸屏为例：关闭时，点击触摸屏设备不响应；开启时，可正常操作触摸屏。使用Promise异步回调。 |
| <!--DelRow-->[setKeyboardRepeatDelay](arkts-inputdevice-setkeyboardrepeatdelay-f-sys.md#setKeyboardRepeatDelay-1) | 设置键盘按键的重复时延，使用callback异步回调。 |
| <!--DelRow-->[setKeyboardRepeatDelay](arkts-inputdevice-setkeyboardrepeatdelay-f-sys.md#setKeyboardRepeatDelay-2) | 设置键盘按键的重复时延，使用Promise异步回调。 |
| <!--DelRow-->[setKeyboardRepeatRate](arkts-inputdevice-setkeyboardrepeatrate-f-sys.md#setKeyboardRepeatRate-1) | 设置键盘按键的重复速率，使用callback异步回调。 |
| <!--DelRow-->[setKeyboardRepeatRate](arkts-inputdevice-setkeyboardrepeatrate-f-sys.md#setKeyboardRepeatRate-2) | 设置键盘按键的重复速率，使用Promise异步回调。 |
| [supportKeys](arkts-inputdevice-supportkeys-f.md#supportKeys-1) | 查询指定输入设备是否支持指定按键，使用callback异步回调。 |
| [supportKeys](arkts-inputdevice-supportkeys-f.md#supportKeys-2) | 查询指定输入设备是否支持指定按键，使用Promise异步回调。 |
| [supportKeysSync](arkts-inputdevice-supportkeyssync-f.md#supportKeysSync-1) | 查询指定id的输入设备对指定键值的支持情况。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AxisRange](arkts-inputdevice-axisrange-i.md) | 输入设备的轴信息。 |
| [DeviceListener](arkts-inputdevice-devicelistener-i.md) | 描述输入设备热插拔的信息。 |
| [InputDeviceData](arkts-inputdevice-inputdevicedata-i.md) | 描述输入设备的信息。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AxisType](arkts-inputdevice-axistype-t.md) | 输入设备的轴类型。 |
| [ChangedType](arkts-inputdevice-changedtype-t.md) | 监听设备热插拔事件类型。 |
| [SourceType](arkts-inputdevice-sourcetype-t.md) | 输入设备的输入能力。包括键盘、鼠标、触摸屏、轨迹球、触控板、操纵杆等。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [FunctionKey](arkts-inputdevice-functionkey-e.md) | 功能键的类型。 |
| [KeyboardType](arkts-inputdevice-keyboardtype-e.md) | 键盘输入设备的类型。 |

