# SerialPort

串口对象，提供串口设备信息和通信相关能力

**Since:** 26.0.0

**System capability:** SystemCapability.BusManager.Serial

## Modules to Import

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## close

```TypeScript
close(): Promise<void>
```

关闭串口。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700005 | Port not open. |

## drain

```TypeScript
drain(): Promise<void>
```

等待所有写入请求完成。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## flush

```TypeScript
flush(): Promise<void>
```

flush串口缓冲区。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## getCts

```TypeScript
getCts(): Promise<boolean>
```

获取cts信号状态。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | - Promise对象，返回CTS信号状态，表示是否允许发送数据 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## getDsr

```TypeScript
getDsr(): Promise<boolean>
```

获取DSR信号状态，使用Promise异步返回

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | DSR信号状态，true表示对端已就绪，false表示对端未就绪 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## offDataRead

```TypeScript
offDataRead(callback?: Callback<Uint8Array>): void
```

取消监听串口端口接收数据事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Uint8Array> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700005 | Port not open. |

## offDisconnect

```TypeScript
offDisconnect(callback?: Callback<void>): void
```

取消监听USB虚拟串口断开事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700005 | Port not open. |

## onDataRead

```TypeScript
onDataRead(callback: Callback<Uint8Array>): void
```

监听串口端口接收到的数据。使用Callback异步回调。 调用{@link close}接口时，会清理全部回调

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Uint8Array> | Yes | 回调函数，返回串口端口接收到的数据 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## onDisconnect

```TypeScript
onDisconnect(callback: Callback<void>): void
```

监听USB虚拟串口断开事件。使用Callback异步回调。 调用{@link close}接口时，会清理全部回调

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | USB虚拟串口断开事件的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700005 | Port not open. |

## open

```TypeScript
open(config?: SerialConfigs): Promise<void>
```

打开端口。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | SerialConfigs | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700002 | Invalid parameter. |
| 35700003 | Virtual serial port disconnected. |
| 35700004 | Port already in use. |
| 35700007 | User authorization required. |

## sendBrk

```TypeScript
sendBrk(): Promise<void>
```

发送brk信号。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## setDtr

```TypeScript
setDtr(enable: boolean): Promise<void>
```

设置DTR信号状态，使用Promise异步返回

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | DTR信号状态，表示本端是否就绪。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 不返回任何值的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## setRts

```TypeScript
setRts(enable: boolean): Promise<void>
```

设置rts信号。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | RTS信号状态，表示是否请求发送。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |

## write

```TypeScript
write(data: Uint8Array, timeout?: int): Promise<int>
```

发送数据。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Uint8Array | Yes | 要发送的数据  长度范围:(0,4096]。 |
| timeout | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | - Promise对象，返回成功写入的长度 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35700001 | Service error. |
| 35700002 | Invalid parameter. |
| 35700003 | Virtual serial port disconnected. |
| 35700005 | Port not open. |
| 35700006 | Transmission timeout. |

## portInfo

```TypeScript
readonly portInfo: SerialPortInfo
```

串口端口信息

**Type:** SerialPortInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

