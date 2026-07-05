# getSerialPortList

## getSerialPortList

```TypeScript
function getSerialPortList(): Promise<SerialPort[]>
```

获取串口列表。使用Promise异步回调。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BusManager.Serial

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SerialPort[]> | - Promise used to return the list of serial port devices. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 203 | This function is prohibited by enterprise management policies. |
| 35700001 | Service error. |

