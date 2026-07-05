# requestSerialRight

## requestSerialRight

```TypeScript
function requestSerialRight(portId: int): Promise<boolean>
```

请求应用程序访问串口设备的权限。应用退出自动移除对串口设备的访问权限，在应用重启后需要重新申请授权。使用Promise异步回调。

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | int | Yes | 目标设备的端口号，来自[getPortList]serialManager.getPortList()获取的串口参数SerialPort。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，true表示请求权限成功，false表示请求权限失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 |  |
| 14400005 |  |
| 31400001 |  |
| 31400003 |  |

**Example**

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function requestSerialRight() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('usbSerial portList: ' + JSON.stringify(portList));
  if (!portList || portList.length === 0) {
    console.error('usbSerial portList is empty');
    return;
  }
  let portId: number = portList[0].portId;

  // Check whether the device can be accessed by the application.
  if (!serialManager.hasSerialRight(portId)) {
    serialManager.requestSerialRight(portId).then(result => {
      if (!result) {
        // If the application does not have the access permission and is not granted by the user, the application exits.
        console.error('user is not granted the operation permission');
        return;
      } else {
        console.info('grant permission successfully');
      }
    });
  }
}

```

