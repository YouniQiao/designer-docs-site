# SerialPort

Serial port object, which provides information and communication capabilities of the serial port device.

**Since:** 26.0.0

<!--Device-serial-interface SerialPort--><!--Device-serial-interface SerialPort-End-->

**System capability:** SystemCapability.BusManager.Serial

## Modules to Import

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

<a id="close"></a>
## close

```TypeScript
close(): Promise<void>
```

Closes the serial port device. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-close(): Promise<void>--><!--Device-SerialPort-close(): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="drain"></a>
## drain

```TypeScript
drain(): Promise<void>
```

Waits until all write requests are complete. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-drain(): Promise<void>--><!--Device-SerialPort-drain(): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="flush"></a>
## flush

```TypeScript
flush(): Promise<void>
```

Flushes the serial port buffer. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-flush(): Promise<void>--><!--Device-SerialPort-flush(): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="getcts"></a>
## getCts

```TypeScript
getCts(): Promise<boolean>
```

Obtains the CTS signal status. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-getCts(): Promise<boolean>--><!--Device-SerialPort-getCts(): Promise<boolean>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | - Promise used to return the CTS signal status, indicating whether data can be sent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="getdsr"></a>
## getDsr

```TypeScript
getDsr(): Promise<boolean>
```

Obtains the DSR signal status. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-getDsr(): Promise<boolean>--><!--Device-SerialPort-getDsr(): Promise<boolean>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates the remote end is ready, and **false** indicates the remote end is not ready. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="offdataread"></a>
## offDataRead

```TypeScript
offDataRead(callback?: Callback<Uint8Array>): void
```

Cancels listening for data receiving events on the serial port.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-offDataRead(callback?: Callback<Uint8Array>): void--><!--Device-SerialPort-offDataRead(callback?: Callback<Uint8Array>): void-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Uint8Array&gt; | No | Callback used to return the data received by the serial port.<br>Default value: Clear all listeners for data receiving events on the serial port. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="offdisconnect"></a>
## offDisconnect

```TypeScript
offDisconnect(callback?: Callback<void>): void
```

This command is used to cancel the monitoring of the USB virtual serial port disconnection event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-offDisconnect(callback?: Callback<void>): void--><!--Device-SerialPort-offDisconnect(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | Callback of the USB virtual serial port disconnection event.<br>Default value: Clears all callbacks for USB virtual serial port disconnection events. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="ondataread"></a>
## onDataRead

```TypeScript
onDataRead(callback: Callback<Uint8Array>): void
```

Listens for data received by the serial port. This API uses an asynchronous callback to return the result.When {@link close} is called, all callbacks are cleared.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-onDataRead(callback: Callback<Uint8Array>): void--><!--Device-SerialPort-onDataRead(callback: Callback<Uint8Array>): void-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Uint8Array&gt; | Yes | Callback used to return the data received by the serial port. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="ondisconnect"></a>
## onDisconnect

```TypeScript
onDisconnect(callback: Callback<void>): void
```

This interface is used to listen to the disconnection event of the USB virtual serial port. Use Callback asynchronous callback.When the {@link close} interface is invoked, all callbacks are cleared.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-onDisconnect(callback: Callback<void>): void--><!--Device-SerialPort-onDisconnect(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | Callback of the USB virtual serial port disconnection event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="open"></a>
## open

```TypeScript
open(config?: SerialConfigs): Promise<void>
```

Enables the port. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-open(config?: SerialConfigs): Promise<void>--><!--Device-SerialPort-open(config?: SerialConfigs): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [SerialConfigs](arkts-basicservices-serial-serialconfigs-i.md) | No | Serial port communication parameter.<br>Default value: Refer to the default value of SerialConfigs.* |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700002](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700002-parameter-error) | Invalid parameter. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700004](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700004-port-in-use) | Port already in use. |
| [35700007](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700007-user-authorization-rejected) | User authorization required. |

<a id="sendbrk"></a>
## sendBrk

```TypeScript
sendBrk(): Promise<void>
```

Sends a BRK signal. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-sendBrk(): Promise<void>--><!--Device-SerialPort-sendBrk(): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="setdtr"></a>
## setDtr

```TypeScript
setDtr(enable: boolean): Promise<void>
```

Sets the DTR signal status. Use Promise asynchronous callbacks.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-setDtr(enable: boolean): Promise<void>--><!--Device-SerialPort-setDtr(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | DTR signal status, indicating whether the local end is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="setrts"></a>
## setRts

```TypeScript
setRts(enable: boolean): Promise<void>
```

Sets the RTS signal. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-setRts(enable: boolean): Promise<void>--><!--Device-SerialPort-setRts(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | RTS signal status, indicating whether to request sending data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |

<a id="write"></a>
## write

```TypeScript
write(data: Uint8Array, timeout?: number): Promise<number>
```

Sends data. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-write(data: Uint8Array, timeout?: int): Promise<int>--><!--Device-SerialPort-write(data: Uint8Array, timeout?: int): Promise<int>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Uint8Array | Yes | Data to be sent.<br>Length range: (0, 4096] |
| timeout | number | No | Timeout interval.<br>Length range: [0, 300000]. The value must be an integer, in milliseconds. The default value is 0,indicating that when data cannot be written to the port, the API does not wait and directly returns 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | - Promise used to return the length of the data written. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700002](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700002-parameter-error) | Invalid parameter. |
| [35700003](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700003-virtual-serial-port-disconnected) | Virtual serial port disconnected. |
| [35700005](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700005-port-not-opened) | Port not open. |
| [35700006](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700006-transmission-timeout) | Transmission timeout. |

## portInfo

```TypeScript
readonly portInfo: SerialPortInfo
```

Serial port information.

**Type:** SerialPortInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SerialPort-readonly portInfo: SerialPortInfo--><!--Device-SerialPort-readonly portInfo: SerialPortInfo-End-->

**System capability:** SystemCapability.BusManager.Serial

