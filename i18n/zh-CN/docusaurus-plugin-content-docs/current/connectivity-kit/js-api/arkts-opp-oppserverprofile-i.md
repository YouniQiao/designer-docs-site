# OppServerProfile

Manager OPP server profile.

**起始版本：** 16

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { opp } from '@kit.ConnectivityKit';
```

## cancelTransfer

```TypeScript
cancelTransfer(): Promise<void>
```

cancel the current file transfer action.

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to cancel the current transfer. |
| 2903002 | Current Transfer Information is busy. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
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

Obtains the information about the file that is being transferred. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**起始版本：** 16

**需要权限：** 

- API版本16 - 24： ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

- API版本26.0.0+： ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * and ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OppTransferInformation> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. |
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

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'transferStateChange' | 是 | Type of transport state change event to listen for. |
| callback | Callback&lt;OppTransferInformation> | 否 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
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

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveIncomingFile' | 是 | Type of the event for receiving a file request to listen for. |
| callback | Callback&lt;OppTransferInformation> | 否 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.off("receiveIncomingFile");
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## offReceiveIncomingFile

```TypeScript
offReceiveIncomingFile(callback?: Callback<OppTransferInformation>): void
```

Unsubscribe to the event of receiving a file transfer request.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OppTransferInformation> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

## offTransferStateChange

```TypeScript
offTransferStateChange(callback?: Callback<OppTransferInformation>): void
```

Unsubscribe the event reported when the file transfer status changes.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OppTransferInformation> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

## on('transferStateChange')

```TypeScript
on(type: 'transferStateChange', callback: Callback<OppTransferInformation>): void
```

Subscribe the event reported when the file transfer status changes. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**起始版本：** 16

**需要权限：** 

- API版本16 - 24： ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

- API版本26.0.0+： ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * and ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'transferStateChange' | 是 | Type of transport state change event to listen for. |
| callback | Callback&lt;OppTransferInformation> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. [since 16 - 24] |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
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

Subscribe to the event of receiving a file transfer request. On API 26.0.0 and above, if the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**起始版本：** 16

**需要权限：** 

- API版本16 - 24： ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

- API版本26.0.0+： ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * and ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'receiveIncomingFile' | 是 | Type of the event for receiving a file request to listen for. |
| callback | Callback&lt;OppTransferInformation> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. [since 16 - 24] |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
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

## onReceiveIncomingFile

```TypeScript
onReceiveIncomingFile(callback: Callback<OppTransferInformation>): void
```

Subscribe to the event of receiving a file transfer request. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * and ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OppTransferInformation> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

## onTransferStateChange

```TypeScript
onTransferStateChange(callback: Callback<OppTransferInformation>): void
```

Subscribe the event reported when the file transfer status changes. If the application has ohos.permission.GET_BLUETOOTH_PEERS_MAC, the type of the peer device address is real. Otherwise, the type of the peer device address is virtual.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH * and ohos.permission.GET_BLUETOOTH_PEERS_MAC)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OppTransferInformation> | 是 | Callback used to listen for event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |

## sendFile

```TypeScript
sendFile(deviceId: string, fileHolds: Array<FileHolder>): Promise<void>
```

Send files to the remote device.

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| fileHolds | Array&lt;FileHolder> | 是 | Indicates the information about files to be sent. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to send file. |
| 2903001 | The file type is not supported. |
| 2903002 | Current Transfer Information is busy. |
| 2903003 | The file is not accessible. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo as fs} from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
try {
    let oppProfile = opp.createOppServerProfile();
    let fileHolders : Array<opp.FileHolder> = [];
    // 有效的URIS
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
    // 等待文件传输完后，记得关闭文件描述符  fs.close(file.fd);
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## setIncomingFileConfirmation

```TypeScript
setIncomingFileConfirmation(accept: boolean, fileFd: int): Promise<void>
```

Set the user confirmation information for incoming files.

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accept | boolean | 是 | Indicates whether to accept the incoming file, {@code true} indicates accept or  {@code false} otherwise. |
| fileFd | int | 是 | : the receive file fd to receive need contains open when accepting. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth switch is off. |
| 2900004 | Profile is not supported. |
| 2900099 | Failed to confirm the received file information. |
| 2903002 | Current Transfer Information is busy. |
| 2903003 | The file is not accessible. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo as fs} from '@kit.CoreFileKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
let file: fs.File | undefined = undefined;
try {
    let oppProfile = opp.createOppServerProfile();
    let pathDir = "/test.jpg"; // 应用根据实际情况填写路径
    file = fs.openSync(pathDir, fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE);
    oppProfile.setIncomingFileConfirmation(true, file.fd);
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
} finally {
  // 接收完成后关闭  
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

**起始版本：** 16

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | the uri of last received file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 203 | This function is prohibited by enterprise management policies. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Failed to set the URI of the last file. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { opp } from '@kit.ConnectivityKit';
// 创建fileHolders
try {
    let oppProfile = opp.createOppServerProfile();
    oppProfile.setLastReceivedFileUri("file://media/Photo/1/IMG_1739266559_000/screenshot_20250211_173419.jpg"); // 应用根据实际情况填写路径
} catch (err) {
      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

