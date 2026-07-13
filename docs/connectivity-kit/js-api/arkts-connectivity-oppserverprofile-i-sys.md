# OppServerProfile

Manager OPP server profile.

**Since:** 16

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { opp } from '@kit.ConnectivityKit';
```

## cancelTransfer

```TypeScript
cancelTransfer(): Promise<void>
```

cancel the current file transfer action.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to cancel the current transfer. |
| 2903002 | Current Transfer Information is busy. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.cancelTransfer();
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## getCurrentTransferInformation

```TypeScript
getCurrentTransferInformation(): Promise<OppTransferInformation>
```

Obtains the information about the file that is being transferred.
On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**Since:** 16

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH and ohos.permission.GET_BLUETOOTH_PEERS_MAC)
- API version 16 - 24: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OppTransferInformation&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to obtain the current transmission information. |
| 2903004 | Current Transfer Information is empty. |

## off('transferStateChange')

```TypeScript
off(type: 'transferStateChange', callback?: Callback<OppTransferInformation>): void
```

Unsubscribe the event reported when the file transfer status changes.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'transferStateChange' | Yes | Type of transport state change event to listen for. |
| callback | Callback&lt;OppTransferInformation&gt; | No | Callback used to listen for event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.off("transferStateChange");
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## off('receiveIncomingFile')

```TypeScript
off(type: 'receiveIncomingFile', callback?: Callback<OppTransferInformation>): void
```

Unsubscribe to the event of receiving a file transfer request.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveIncomingFile' | Yes | Type of the event for receiving a file request to listen for. |
| callback | Callback&lt;OppTransferInformation&gt; | No | Callback used to listen for event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.off("receiveIncomingFile");
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## on('transferStateChange')

```TypeScript
on(type: 'transferStateChange', callback: Callback<OppTransferInformation>): void
```

Subscribe the event reported when the file transfer status changes.
On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**Since:** 16

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH and ohos.permission.GET_BLUETOOTH_PEERS_MAC)
- API version 16 - 24: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'transferStateChange' | Yes | Type of transport state change event to listen for. |
| callback | Callback&lt;OppTransferInformation&gt; | Yes | Callback used to listen for event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed.<br>**Applicable version:** 16 - 24 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.on("transferStateChange", (data: opp.OppTransferInformation) => {
        if (data.status == opp.TransferStatus.PENDING) {
          console.info("[opp_js] waiting to transfer : " + data.remoteDeviceName);
        } else if (data.status == opp.TransferStatus.RUNNING){
          console.info("[opp_js] running data.currentBytes " + data.currentBytes + " data.totalBytes" + data.totalBytes);
        } else if (data.status == opp.TransferStatus.FINISH){
          console.info("[opp_js] transfer finished, result is " + data.result);
        }
      });
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## on('receiveIncomingFile')

```TypeScript
on(type: 'receiveIncomingFile', callback: Callback<OppTransferInformation>): void
```

Subscribe to the event of receiving a file transfer request.
On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC,
the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**Since:** 16

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH and ohos.permission.GET_BLUETOOTH_PEERS_MAC)
- API version 16 - 24: ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveIncomingFile' | Yes | Type of the event for receiving a file request to listen for. |
| callback | Callback&lt;OppTransferInformation&gt; | Yes | Callback used to listen for event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed.<br>**Applicable version:** 16 - 24 |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.on("receiveIncomingFile", (data: opp.OppTransferInformation) => {
        if (data.status == opp.TransferStatus.PENDING) {
          console.info("[opp_js] received file waiting to confirm : " + data.remoteDeviceName);
        } else if (data.status == opp.TransferStatus.RUNNING){
          console.info("[opp_js] running data.currentBytes " + data.currentBytes + " data.totalBytes" + data.totalBytes);
        } else if (data.status == opp.TransferStatus.FINISH){
          console.info("[opp_js] transfer finished, result is " + data.result);
        }
      });
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## sendFile

```TypeScript
sendFile(deviceId: string, fileHolds: Array<FileHolder>): Promise<void>
```

Send files to the remote device.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| fileHolds | Array&lt;FileHolder&gt; | Yes | Indicates the information about files to be sent. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to send file. |
| 2903001 | The file type is not supported. |
| 2903002 | Current Transfer Information is busy. |
| 2903003 | The file is not accessible. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo as fs} from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    let fileHolders : Array<opp.FileHolder> = [];
    // Valid URIs
    let uris: Array<string> = ['test1.jpg', 'test2.jpg'];
    for (let i = 0; i < uris.length; i++) {
        let filePath = uris[i];
        console.info('opp deal filePath is :' + filePath);
        let file = fs.openSync(filePath, fs.OpenMode.READ_ONLY);
        let stat: fs.Stat = fs.statSync(file.fd);
        let fileHolder: opp.FileHolder = {
        filePath:filePath,
        fileSize:stat.size,
        fileFd:file.fd
        };
        fileHolders.push(fileHolder);
    }
    oppProfile.sendFile("11:22:33:44:55:66", fileHolders);
    // After the file transfer is complete, call fs.close(file.fd) to close the file descriptor.
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## setIncomingFileConfirmation

```TypeScript
setIncomingFileConfirmation(accept: boolean, fileFd: number): Promise<void>
```

Set the user confirmation information for incoming files.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accept | boolean | Yes | Indicates whether to accept the incoming file, {@code true} indicates accept or{@code false} otherwise. |
| fileFd | number | Yes | : the receive file fd to receive need contains open when accepting. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to confirm the received file information. |
| 2903002 | Current Transfer Information is busy. |
| 2903003 | The file is not accessible. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo as fs} from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
let file: fs.File | undefined = undefined;
try {
    let oppProfile = opp.createOppServerProfile();
    let pathDir = "/test.jpg"; // Replace the example path with the actual one.
    file = fs.openSync(pathDir, fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE);
    oppProfile.setIncomingFileConfirmation(true, file.fd);
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
} finally {
  // Close the file descriptor after file receiving is complete. 
  if (file) {
    fs.close(file.fd);
  }
}

```

## setLastReceivedFileUri

```TypeScript
setLastReceivedFileUri(uri: string): Promise<void>
```

Set the URI of the last received file.

**Since:** 16

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | the uri of last received file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Failed to set the URI of the last file. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { opp } from '@kit.ConnectivityKit';
// Create fileHolders.
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.setLastReceivedFileUri("file://media/Photo/1/IMG_1739266559_000/screenshot_20250211_173419.jpg"); // Replace the example path with the actual one.
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

