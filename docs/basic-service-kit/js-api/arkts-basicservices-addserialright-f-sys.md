# addSerialRight (System API)

## Modules to Import

```TypeScript
import { serialManager } from '@ohos.usbManager.serial';
```

## addSerialRight

```TypeScript
function addSerialRight(tokenId: number, portId: number): void
```

Adds the permission to an application for accessing the serial port device. serialManager.requestSerialRight triggers a dialog box to request user authorization. addSerialRight does not trigger a dialog box but directly adds the device access permission for the application. After the application exits, the access permission on the serial port device is automatically removed. After the application is restarted , you need to request the permission again.

**Since:** 19

**Required permissions:** ohos.permission.MANAGE_USB_CONFIG

**System capability:** SystemCapability.USB.USBManager.Serial

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | number | Yes | ID of the token that requires the access permission. |
| portId | number | Yes | Port number of the target device, which is obtained from the serial port parameter SerialPortreturned by [getPortList](arkts-basicservices-getportlist-f.md#getportlist-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) |  |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) |  |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [14400005](../../apis-basic-services-kit/errorcode-usb.md#14400005-database-operation-exception) |  |
| [31400001](../../apis-basic-services-kit/errorcode-usb.md#31400001-serial-port-service-error) |  |
| [31400003](../../apis-basic-services-kit/errorcode-usb.md#31400003-port-number-not-exist) |  |

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

