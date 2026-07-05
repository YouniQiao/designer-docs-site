# getSerialPortList

## Modules to Import

```TypeScript
import { serial } from '@ohos.busManager.serial';
```

## getSerialPortList

```TypeScript
function getSerialPortList(): Promise<SerialPort[]>
```

Obtains the serial port list. This API returns the result asynchronously through a promise.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SerialPort[]&gt; | - Promise used to return the list of serial port devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |

