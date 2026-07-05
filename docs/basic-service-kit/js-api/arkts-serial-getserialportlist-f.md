# getSerialPortList

## getSerialPortList

```TypeScript
function getSerialPortList(): Promise<SerialPort[]>
```

获取串口列表。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SerialPort[]> | - Promise used to return the list of serial port devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 203 | This function is prohibited by enterprise management policies. |
| 35700001 | Service error. |

