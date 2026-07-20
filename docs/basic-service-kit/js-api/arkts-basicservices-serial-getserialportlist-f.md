# getSerialPortList

## Modules to Import

```TypeScript
import { serial } from '@kit.BasicServicesKit';
```

## getSerialPortList

```TypeScript
function getSerialPortList(): Promise<SerialPort[]>
```

Obtains the serial port list. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-serial-function getSerialPortList(): Promise<SerialPort[]>--><!--Device-serial-function getSerialPortList(): Promise<SerialPort[]>-End-->

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<SerialPort[]> | - Promise used to return the list of serial port devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |

