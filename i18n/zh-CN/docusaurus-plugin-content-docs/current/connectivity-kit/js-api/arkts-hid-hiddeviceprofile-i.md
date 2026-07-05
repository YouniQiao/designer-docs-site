# HidDeviceProfile

Manager HID device profile.

**继承实现关系：** HidDeviceProfile继承自：BaseProfile。

**起始版本：** 23

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { hid } from '@kit.ConnectivityKit';
```

## connect

```TypeScript
connect(deviceId: BluetoothAddress): void
```

Initiate an HID connection to a remote HID host device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | BluetoothAddress | 是 | Indicates the address of the remote Bluetooth device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Remote Device profile not supported. |
| 2900099 | Operation failed. |
| 2903052 | App not register. |

**示例：**

```TypeScript
import { common } from '@kit.ConnectivityKit';

let device: common.BluetoothAddress = {
    "address": "11:22:33:44:55:66",
    "addressType": common.BluetoothAddressType.REAL,
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.connect(device);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## disconnect

```TypeScript
disconnect(): void
```

Disconnect the HID connection with the remote device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |
| 2903052 | App not register. |

**示例：**

```TypeScript
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.disconnect();
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## offGetReport

```TypeScript
offGetReport(callback?: Callback<GetReportData>): void
```

Unsubscribe from the event that a GET_REPORT message is received from the peer device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;GetReportData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.GetReportData) {
    console.info(`type: ${callback.type}, id: ${callback.id}, bufferSize: ${callback.bufferSize}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onGetReport(onReceiveEvent);
    hidDevice.offGetReport(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## offInterruptDataReceived

```TypeScript
offInterruptDataReceived(callback?: Callback<InterruptData>): void
```

Unsubscribe from the event reported when InterruptData is received from the remote.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;InterruptData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.InterruptData) {
    console.info(`id: ${callback.id}, dataSize: ${callback.data.length}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onInterruptDataReceived(onReceiveEvent);
    hidDevice.offInterruptDataReceived(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## offSetProtocol

```TypeScript
offSetProtocol(callback?: Callback<ProtocolData>): void
```

Unsubscribe from the event that a SET_PROTOCOL message is received from the peer device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ProtocolData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.ProtocolData) {
    console.info(`protocol: ${callback.protocol}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onSetProtocol(onReceiveEvent);
    hidDevice.offSetProtocol(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## offSetReport

```TypeScript
offSetReport(callback?: Callback<SetReportData>): void
```

Unsubscribe from the event that a SET_REPORT message is received from the peer device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SetReportData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.SetReportData) {
    console.info(`type: ${callback.type}, id: ${callback.id}, dataSize: ${callback.data.length}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onSetReport(onReceiveEvent);
    hidDevice.offSetReport(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## offVirtualCableUnplug

```TypeScript
offVirtualCableUnplug(callback?: Callback<void>): void
```

Unsubscribe from the event reported when virtual Cable is removed.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent() {
    console.info(`onVirtualCableUnplug`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onVirtualCableUnplug(onReceiveEvent);
    hidDevice.offVirtualCableUnplug(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## onGetReport

```TypeScript
onGetReport(callback: Callback<GetReportData>): void
```

Subscribe to the event reported when GET_REPORT message is received from the remote.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;GetReportData> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.GetReportData) {
    console.info(`type: ${callback.type}, id: ${callback.id}, bufferSize: ${callback.bufferSize}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onGetReport(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## onInterruptDataReceived

```TypeScript
onInterruptDataReceived(callback: Callback<InterruptData>): void
```

Subscribe to the event reported when InterruptData is received from the remote.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;InterruptData> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.InterruptData) {
    console.info(`id: ${callback.id}, dataSize: ${callback.data.length}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onInterruptDataReceived(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## onSetProtocol

```TypeScript
onSetProtocol(callback: Callback<ProtocolData>): void
```

Subscribe to the event reported when SET_PROTOCOL message is received from the remote.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ProtocolData> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.ProtocolData) {
    console.info(`protocol: ${callback.protocol}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onSetProtocol(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## onSetReport

```TypeScript
onSetReport(callback: Callback<SetReportData>): void
```

Subscribe to the event reported when SET_REPORT message is received from the remote.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SetReportData> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent(callback: hid.SetReportData) {
    console.info(`type: ${callback.type}, id: ${callback.id}, dataSize: ${callback.data.length}`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onSetReport(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## onVirtualCableUnplug

```TypeScript
onVirtualCableUnplug(callback: Callback<void>): void
```

Subscribe to the event reported when virtual Cable is removed.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
function onReceiveEvent() {
    console.info(`onVirtualCableUnplug`);
}
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.onVirtualCableUnplug(onReceiveEvent);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## registerHidDevice

```TypeScript
registerHidDevice(sdp: HidDeviceSdp, inQos: HidDeviceQos, outQos: HidDeviceQos, callback: Callback<boolean>): void
```

Application registers the HID Device capability. The application will only successfully call this API when it's in the foreground. If the application that has registered the HID Device capability is switched to the background, the system automatically cancels the HID Device capability registration. The application can listen to the appStatusChange callback to detect the status change.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sdp | HidDeviceSdp | 是 | Describe the hid device capability fields of this endpoint being queried. |
| inQos | HidDeviceQos | 是 | Describe the In Quality of Service (QoS) settings  for the Bluetooth HID device application. |
| outQos | HidDeviceQos | 是 | Describe the Out Quality of Service (QoS) settings  for the Bluetooth HID device application. |
| callback | Callback&lt;boolean> | 是 | Callback for HID device registration status changes,  {@code true} indicates register success or {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |
| 2903050 | Application is not in the foreground. |
| 2903051 | Any app has been registered. |

**示例：**

```TypeScript
let descriptors: Uint8Array = new Uint8Array([
    // 描述符示例，需要遵循USB HID规范
    0x05, 0x01,        // 指定设备类别为通用桌面控制
    0x09, 0x06,        // 具体设备为键盘
    0xA1, 0x01,        // 应用集合开始
    
    // 按键字段定义
    0x05, 0x07,        // 切换到键盘/键区
    0x19, 0x00,        // 定义最小按键码为0（无按键）
    0x29, 0x01,        // 定义最大按键码为1（只支持2个值）
    0x15, 0x00,        // 逻辑最小值0（数据范围下限）
    0x25, 0x01,        // 逻辑最大值1（数据范围上限）
    0x75, 0x08,        // 每个字段八位
    0x95, 0x01,        // 只有一个字段
    0x81, 0x00,        // 定义输入字段：数据字段，值为按键数组
    
    // 结束设备定义
    0xC0               // 应用集合结束
]);
// 以键盘为例
let sdp: hid.HidDeviceSdp = {
    "name": "testName",
    "description": "testDescription",
    "provider": "testProvider",
    "subclass": hid.Subclass.SUBCLASS_KEYBOARD,
    "descriptors": descriptors,
};
let inqos: hid.HidDeviceQos = {
    "serviceType": hid.ServiceType.SERVICE_BEST_EFFORT,
    "tokenRate": 0,
    "tokenBucketSize": 0,
    "peakBandwidth": 0,
    "latency": -1,
    "delayVariation": -1,
};
let outqos: hid.HidDeviceQos = {};
function registerStateCallback(callback: boolean) {
    console.info(`state: ${callback}`);
}

try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.registerHidDevice(sdp, inqos, outqos, registerStateCallback)
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## replyReport

```TypeScript
replyReport(type: ReportType, id: int, reportData: Uint8Array): void
```

Reply report to a remote HID host device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ReportType | 是 | Report type for reply |
| id | int | 是 | Report Id, as defined in descriptor.  It can be 0 in case Report Id are not defined in descriptor. |
| reportData | Uint8Array | 是 | Report Data send to host. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |
| 2903052 | App not register. |
| 2903053 | Device not connected. |

**示例：**

```TypeScript
let type = hid.ReportType.REPORT_TYPE_INPUT;
let id: number = 0;
let reportData: Uint8Array = new Uint8Array([0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77]);
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.replyReport(type, id, reportData);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## reportError

```TypeScript
reportError(error: ErrorReason): void
```

Report error to a remote HID host device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| error | ErrorReason | 是 | error reason to send. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |
| 2903052 | App not register. |
| 2903053 | Device not connected. |

**示例：**

```TypeScript
let error = hid.ErrorReason.RSP_SUCCESS;
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.reportError(error);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## sendReport

```TypeScript
sendReport(id: int, reportData: Uint8Array): void
```

Send report to a remote HID host device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | Report ID defined in the descriptor. |
| reportData | Uint8Array | 是 | Report data sent to the host device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |
| 2903052 | App not register. |
| 2903053 | Device not connected. |

**示例：**

```TypeScript
let reportData: Uint8Array = new Uint8Array([0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77]);
let id: number = 0;
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.sendReport(id, reportData);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## unregisterHidDevice

```TypeScript
unregisterHidDevice(): void
```

Application unregisters the HID Device capability.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
try {
    let hidDevice: hid.HidDeviceProfile = hid.createHidDeviceProfile();
    hidDevice.unregisterHidDevice();
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

