# requestRight

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="requestright"></a>
## requestRight

```TypeScript
function requestRight(deviceName: string): Promise<boolean>
```

Requests the temporary device access permission for the application. This API uses a promise to return the result.System applications are granted the device access permission by default, and you do not need to apply for the permission separately.

**Since:** 9

<!--Device-usbManager-function requestRight(deviceName: string): Promise<boolean>--><!--Device-usbManager-function requestRight(deviceName: string): Promise<boolean>-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceName | string | Yes | Device name, which is name of USBDevice, obtained from the device list returned by [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the temporary device access permissions are granted; and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

**Example**

```TypeScript
function requestRight() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name).then(ret => {
    console.info(`requestRight = ${ret}`);
  }).catch((error: BusinessError) => {
    console.error(`requestRight failed : ${error}`);
  });
}

```

