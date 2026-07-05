# addSerialRight

## addSerialRight

```TypeScript
function addSerialRight(tokenId: int, portId: int): void
```

为应用程序添加访问串口设备权限。 serialManager.requestSerialRight会触发弹窗请求用户授权；addSerialRight不会触发弹窗，而是直接添加应用程序访问设备的权限。应用退出自动移除对串口设备的访问权限，在应用重启后需要重新申请授 权。

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager.Serial

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | int | Yes | 需要访问权限的tokenId。 |
| portId | int | Yes | 目标设备的端口号，来自[getPortList]serialManager.getPortList()获取的串口参数SerialPort。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 |  |
| 202 |  |
| 401 |  |
| 14400005 |  |
| 31400001 |  |
| 31400003 |  |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function addSerialRight() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('portList: ', JSON.stringify(portList));
  if (portList === undefined || portList.length === 0) {
    console.info('portList is empty');
    return;
  }

  let portId: number = portList[0].portId;
  // Add permissions to the serial port.
  let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;
  bundleManager.getBundleInfoForSelf(bundleFlags).then((bundleInfo) => {
    console.info('getBundleInfoForSelf successfully. Data: %{public}s', JSON.stringify(bundleInfo));
    let tokenId = bundleInfo.appInfo.accessTokenId;
    try {
      serialManager.addSerialRight(tokenId, portId);
      console.info('addSerialRight success, portId: ' + portId);
    } catch (error) {
      console.error('addSerialRight error, ' + JSON.stringify(error));
    }
  }).catch((err : BusinessError) => {
    console.error('getBundleInfoForSelf failed');
  });
}

```

