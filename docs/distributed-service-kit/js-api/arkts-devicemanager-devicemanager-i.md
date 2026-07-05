# DeviceManager

设备管理实例，用于获取可信设备和本地设备的相关信息。在调用DeviceManager的方法前，需要先通过createDeviceManager构建一个DeviceManager实例dmInstance。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## Modules to Import

```TypeScript
import { deviceManager } from '@kit.DistributedServiceKit';
```

## authenticateDevice

```TypeScript
authenticateDevice(
      deviceInfo: DeviceInfo,
      authParam: AuthParam,
      callback: AsyncCallback<{ deviceId: string, pinToken?: number }>
    ): void
```

认证设备。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.bindTarget(deviceId:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceInfo | DeviceInfo | Yes | 设备信息。 |
| authParam | AuthParam | Yes | 认证参数。 |
| callback | AsyncCallback&lt;{ deviceId: string, pinToken?: number }> | Yes | 认证结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  deviceId: string = "";
  pinToken?: number = 0;
}

interface DeviceInfo {
  deviceId: string;
  deviceName: string;
  deviceType: number;
  networkId: string;
  range: number;
};

interface ExtraInfo {
  targetPkgName: string;
  appName: string;
  appDescription: string;
  business: string;
}

interface AuthParam {
  authType: number; // Authentication type. The value 1 means no account PIN authentication.
  extraInfo: ExtraInfo;
}

// Information about the device to authenticate. The information can be obtained from the device discovery result.
let deviceInfo: deviceManager.DeviceInfo = {
  deviceId: "XXXXXXXX",
  deviceName: "",
  deviceType: 0x0E,
  networkId: "xxxxxxx",
  range: 0,
  authForm: 0
};
let extraInfo: ExtraInfo = {
  targetPkgName: 'ohos.samples.xxx',
  appName: 'xxx',
  appDescription: 'xxx',
  business: '0'
};
let authParam: AuthParam = {
  authType: 1, // Authentication type. The value 1 means no account PIN authentication.
  extraInfo: extraInfo
};

try {
  dmInstance.authenticateDevice(deviceInfo, authParam, (err: BusinessError, data: Data) => {
    if (err) {
      console.error("authenticateDevice errCode:" + err.code + ",errMessage:" + err.message);
      return;
    }
    console.info("authenticateDevice result:" + JSON.stringify(data));
    let token = data.pinToken;
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("authenticateDevice errCode:" + e.code + ",errMessage:" + e.message);
}

```

## deleteCredential

```TypeScript
deleteCredential(queryInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void
```

删除凭据信息。

**Since:** 10

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| queryInfo | string | Yes | 删除凭据信息。长度范围1~64000字符。 |
| callback | AsyncCallback&lt;{ resultInfo: string }> | Yes | 删除凭据结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified queryInfo is greater than 5999. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  resultInfo: string = "";
}

interface QueryInfo {
  processType: number;
  authType: number;
  userId: string;
}

let queryInfo: QueryInfo = {
  processType: 1,
  authType: 1,
  userId: "123"
};

try {
  let jsonQueryInfo = JSON.stringify(queryInfo);
  dmInstance.deleteCredential(jsonQueryInfo, (err: BusinessError, data: Data) => {
    if (data) {
      console.info("deleteCredential result:" + JSON.stringify(data));
    } else {
      console.info("deleteCredential result: data is null");
    }
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("deleteCredential err:" + e.code + "," + e.message);
}

```

## getDeviceInfo

```TypeScript
getDeviceInfo(networkId: string, callback: AsyncCallback<DeviceInfo>): void
```

通过指定设备的网络标识获取该设备的信息。使用callback异步回调。

**Since:** 10

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getDeviceName

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | 设备的网络标识。长度范围1~255字符。 |
| callback | AsyncCallback&lt;DeviceInfo> | Yes | 获取指定设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified networkId is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

try {
  // Network ID of the device, which can be obtained from the trusted device list
  let networkId = "xxxxxxx";
  dmInstance.getDeviceInfo(networkId, (err: BusinessError, data: deviceManager.DeviceInfo) => {
    if (err) {
      console.error("getDeviceInfo errCode:" + err.code + ",errMessage:" + err.message);
      return;
    }
    console.info('get device info: ' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("getDeviceInfo errCode:" + e.code + ",errMessage:" + e.message);
}

```

## getDeviceInfo

```TypeScript
getDeviceInfo(networkId: string): Promise<DeviceInfo>
```

通过指定设备的网络标识获取该设备的信息。使用Promise异步回调。

**Since:** 10

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getDeviceName

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | 设备的网络标识。长度范围1~255字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DeviceInfo> | Promise实例，用于获取异步返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified networkId is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

// Network ID of the device, which can be obtained from the trusted device list
let networkId = "xxxxxxx";
dmInstance.getDeviceInfo(networkId).then((data: deviceManager.DeviceInfo) => {
  console.info('get device info: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error("getDeviceInfo errCode:" + err.code + ",errMessage:" + err.message);
});

```

## getLocalDeviceInfo

```TypeScript
getLocalDeviceInfo(callback: AsyncCallback<DeviceInfo>): void
```

获取本地设备信息。使用callback异步回调。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeviceInfo> | Yes | 获取本地设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';


try {
  dmInstance.getLocalDeviceInfo((err: BusinessError, data: deviceManager.DeviceInfo) => {
    if (err) {
      console.error("getLocalDeviceInfo errCode:" + err.code + ",errMessage:" + err.message);
      return;
    }
    console.info('get local device info: ' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("getLocalDeviceInfo errCode:" + e.code + ",errMessage:" + e.message);
}

```

## getLocalDeviceInfo

```TypeScript
getLocalDeviceInfo(): Promise<DeviceInfo>
```

获取本地设备信息。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DeviceInfo> | Promise实例，用于获取异步返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

dmInstance.getLocalDeviceInfo().then((data: deviceManager.DeviceInfo) => {
  console.info('get local device info: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error("getLocalDeviceInfo errCode:" + err.code + ",errMessage:" + err.message);
});

```

## getLocalDeviceInfoSync

```TypeScript
getLocalDeviceInfoSync(): DeviceInfo
```

同步获取本地设备信息。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getLocalDeviceNetworkId

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DeviceInfo | 返回本地设备列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

try {
  let deviceInfo: deviceManager.DeviceInfo = dmInstance.getLocalDeviceInfoSync();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("getLocalDeviceInfoSync errCode:" + e.code + ",errMessage:" + e.message);
}

```

## getTrustedDeviceList

```TypeScript
getTrustedDeviceList(callback: AsyncCallback<Array<DeviceInfo>>): void
```

获取所有可信设备列表。使用callback异步回调。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList(callback:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;DeviceInfo>> | Yes | 获取所有可信设备列表的回调，返回设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

try {
  dmInstance.getTrustedDeviceList((err: BusinessError, data: Array<deviceManager.DeviceInfo>) => {
    if (err) {
      console.error("getTrustedDeviceList errCode:" + err.code + ",errMessage:" + err.message);
      return;
    }
    console.info('get trusted device info: ' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("getTrustedDeviceList errCode:" + e.code + ",errMessage:" + e.message);
}

```

## getTrustedDeviceList

```TypeScript
getTrustedDeviceList(): Promise<Array<DeviceInfo>>
```

获取所有可信设备列表。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList()

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DeviceInfo>> | Promise实例，用于获取异步返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

dmInstance.getTrustedDeviceList().then((data: Array<deviceManager.DeviceInfo>) => {
  console.info('get trusted device info: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error("getTrustedDeviceList errCode:" + err.code + ",errMessage:" + err.message);
});

```

## getTrustedDeviceListSync

```TypeScript
getTrustedDeviceListSync(): Array<DeviceInfo>
```

同步获取所有可信设备列表。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;DeviceInfo> | 返回可信设备列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

try {
  let deviceInfoList: Array<deviceManager.DeviceInfo> = dmInstance.getTrustedDeviceListSync();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("getTrustedDeviceListSync errCode:" + e.code + ",errMessage:" + e.message);
}

```

## getTrustedDeviceListSync

```TypeScript
getTrustedDeviceListSync(isRefresh: boolean): Array<DeviceInfo>
```

打开软总线系统端的心跳模式，让周围处于下线状态的可信设备快速上线，同时刷新已上线的可信设备列表。

**Since:** 10

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isRefresh | boolean | Yes | 是否打开心跳模式，刷新可信列表，true表示打开心跳模式，false表示关闭心跳模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;DeviceInfo> | 返回可信设备列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

try {
  let deviceInfoList: Array<deviceManager.DeviceInfo> = dmInstance.getTrustedDeviceListSync(true);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("getTrustedDeviceListSync errCode:" + e.code + ",errMessage:" + e.message);
}

```

## importCredential

```TypeScript
importCredential(credentialInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void
```

导入凭据信息。

**Since:** 10

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| credentialInfo | string | Yes | 导入凭据信息。长度范围1~64000字符。 |
| callback | AsyncCallback&lt;{ resultInfo: string }> | Yes | 导入凭据结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified credentialInfo is greater than 5999. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  resultInfo: string = "";
}

interface CredentialData {
  credentialType: number;
  credentialId: string;
  serverPk: string;
  pkInfoSignature : string;
  pkInfo: string;
  authCode: string;
  peerDeviceId: string;
}

interface CredentialInfo {
  processType: number;
  authType: number;
  userId: string;
  deviceId: string;
  version: string;
  devicePk : string;
  credentialData : CredentialData;
}

let credentialData: CredentialData = {
  credentialType: 2,
  credentialId: "102",
  serverPk: "3059301306072A8648CE3D020106082A8648CE3D03",
  pkInfoSignature : "30440220490BCB4F822004C9A76AB8D97F80041FC0E",
  pkInfo: "",
  authCode: "",
  peerDeviceId: ""
};


let credentialInfo: CredentialInfo = {
  processType: 1,
  authType: 1,
  userId: "123",
  deviceId: "aaa",
  version: "1.2.3",
  devicePk : "0000",
  credentialData : credentialData
};

try {
  let jsonCredentialInfo = JSON.stringify(credentialInfo);
  dmInstance.importCredential(jsonCredentialInfo, (err: BusinessError, data: Data) => {
    if (data) {
      console.info("importCredential result:" + JSON.stringify(data));
    } else {
      console.info("importCredential result: data is null");
    }
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("importCredential err:" + e.code + "," + e.message);
}

```

## off('uiStateChange')

```TypeScript
off(type: 'uiStateChange', callback?: Callback<{ param: string }>): void
```

取消ui状态变更回调。

**Since:** 9

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'uiStateChange' | Yes | 取消注册的设备管理器 ui 状态回调，固定为uiStateChange。 |
| callback | Callback&lt;{ param: string }> | No | 指示要取消注册的设备管理器 ui 状态，返回UI状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  dmInstance.off('uiStateChange');
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("uiStateChange errCode:" + e.code + ",errMessage:" + e.message);
}

```

## off('deviceStateChange')

```TypeScript
off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void
```

取消注册设备状态回调。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceStateChange' | Yes | 根据应用程序的包名取消注册设备状态回调，固定为deviceStateChange。 |
| callback | Callback&lt;{ action: DeviceStateChangeAction, device: DeviceInfo }> | No | 指示要取消注册的设备状态回调，返回设备状态和设备信  息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

class Data {
  action: deviceManager.DeviceStateChangeAction = 0;
  device: deviceManager.DeviceInfo = {
    deviceId: "",
    deviceName: "",
    deviceType: 0,
    networkId: "",
    range: 0,
    authForm:0
  };
}

try {
  dmInstance.off('deviceStateChange', (data: Data) => {
    console.info('deviceStateChange' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("deviceStateChange errCode:" + e.code + ",errMessage:" + e.message);
}

```

## off('deviceFound')

```TypeScript
off(type: 'deviceFound', callback?: Callback<{ subscribeId: number, device: DeviceInfo }>): void
```

取消注册设备发现回调。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceFound' | Yes | 取消注册设备发现回调，固定为deviceFound。 |
| callback | Callback&lt;{ subscribeId: number, device: DeviceInfo }> | No | 指示要取消注册的设备发现回调，返回设备状态和设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

class Data {
  subscribeId: number = 0;
  device: deviceManager.DeviceInfo = {
    deviceId: "",
    deviceName: "",
    deviceType: 0,
    networkId: "",
    range: 0,
    authForm:0
  };
}

try {
  dmInstance.off('deviceFound', (data: Data) => {
    console.info('deviceFound' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("deviceFound errCode:" + e.code + ",errMessage:" + e.message);
}

```

## off('discoverFail')

```TypeScript
off(type: 'discoverFail', callback?: Callback<{ subscribeId: number, reason: number }>): void
```

取消注册设备发现失败回调。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discoverFail' | Yes | 取消注册设备发现失败回调，固定为discoverFail。 |
| callback | Callback&lt;{ subscribeId: number, reason: number }> | No | 指示要取消注册的设备发现失败回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  subscribeId: number = 0;
  reason: number = 0;
}

try {
  dmInstance.off('discoverFail', (data: Data) => {
    console.info('discoverFail' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("discoverFail errCode:" + e.code + ",errMessage:" + e.message);
}

```

## off('publishSuccess')

```TypeScript
off(type: 'publishSuccess', callback?: Callback<{ publishId: number }>): void
```

取消注册设备发布成功回调。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'publishSuccess' | Yes | 取消注册设备发布成功回调，固定为publishSuccess。 |
| callback | Callback&lt;{ publishId: number }> | No | 指示要取消注册的设备发布成功回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  publishId: number = 0;
}

try {
  dmInstance.off('publishSuccess', (data: Data) => {
    console.info('publishSuccess' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("publishSuccess errCode:" + e.code + ",errMessage:" + e.message);
}

```

## off('publishFail')

```TypeScript
off(type: 'publishFail', callback?: Callback<{ publishId: number, reason: number }>): void
```

取消注册设备发布失败回调。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'publishFail' | Yes | 取消注册设备发布失败回调，固定为publishFail。 |
| callback | Callback&lt;{ publishId: number, reason: number }> | No | 指示要取消注册设备发布失败回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  publishId: number = 0;
  reason: number = 0;
}

try {
  dmInstance.off('publishFail', (data: Data) => {
    console.info('publishFail' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("publishFail errCode:" + e.code + ",errMessage:" + e.message);
}

```

## off('serviceDie')

```TypeScript
off(type: 'serviceDie', callback?: () => void): void
```

取消注册设备管理服务死亡监听。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceDie' | Yes | 取消注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。 |
| callback | () => void | No | 取消注册serviceDie的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  dmInstance.off("serviceDie", () => {
    console.info("serviceDie off");
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("serviceDie errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('uiStateChange')

```TypeScript
on(type: 'uiStateChange', callback: Callback<{ param: string }>): void
```

ui状态变更回调。

**Since:** 9

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'uiStateChange' | Yes | 注册的设备管理器 ui 状态回调，以便在状态改变时通知应用，固定为uiStateChange。 |
| callback | Callback&lt;{ param: string }> | Yes | 指示要注册的设备管理器 ui 状态回调，返回ui状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  param: string = "";
}

interface TmpStr {
  verifyFailed: boolean;
}

try {
  dmInstance.on('uiStateChange', (data: Data) => {
    console.info("uiStateChange executed, dialog closed" + JSON.stringify(data));
    let tmpStr: TmpStr = JSON.parse(data.param);
    let isShow = tmpStr.verifyFailed;
    console.info("uiStateChange executed, dialog closed" + isShow);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("uiStateChange errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('deviceStateChange')

```TypeScript
on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void
```

注册设备状态回调。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceStateChange' | Yes | 注册设备状态回调，固定为deviceStateChange。 |
| callback | Callback&lt;{ action: DeviceStateChangeAction, device: DeviceInfo }> | Yes | 指示要注册的设备状态回调，返回设备状态和设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

class Data {
  action: deviceManager.DeviceStateChangeAction = 0;
  device: deviceManager.DeviceInfo = {
    deviceId: "",
    deviceName: "",
    deviceType: 0,
    networkId: "",
    range: 0,
    authForm:0
  };
}

try {
  dmInstance.on('deviceStateChange', (data: Data) => {
    console.info("deviceStateChange on:" + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("deviceStateChange errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('deviceFound')

```TypeScript
on(type: 'deviceFound', callback: Callback<{ subscribeId: number, device: DeviceInfo }>): void
```

注册发现设备回调监听。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceFound' | Yes | 注册设备发现回调，以便在发现周边设备时通知应用程序，固定为deviceFound。 |
| callback | Callback&lt;{ subscribeId: number, device: DeviceInfo }> | Yes | 注册设备发现的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';
import { BusinessError } from '@ohos.base';

class Data {
  subscribeId: number = 0;
  device: deviceManager.DeviceInfo = {
    deviceId: "",
    deviceName: "",
    deviceType: 0,
    networkId: "",
    range: 0,
    authForm:0
  };
}

try {
  dmInstance.on('deviceFound', (data: Data) => {
    console.info("deviceFound:" + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("deviceFound errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('discoverFail')

```TypeScript
on(type: 'discoverFail', callback: Callback<{ subscribeId: number, reason: number }>): void
```

注册设备发现失败回调监听。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discoverFail' | Yes | 注册设备发现失败回调，以便在发现周边设备失败时通知应用程序，固定为discoverFail。 |
| callback | Callback&lt;{ subscribeId: number, reason: number }> | Yes | 注册设备发现失败的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  subscribeId: number = 0;
  reason: number = 0;
}

try {
  dmInstance.on('discoverFail', (data: Data) => {
    console.info("discoverFail on:" + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("discoverFail errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('publishSuccess')

```TypeScript
on(type: 'publishSuccess', callback: Callback<{ publishId: number }>): void
```

注册发布设备发现回调监听。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'publishSuccess' | Yes | 注册发布设备成功回调，以便将发布成功时通知应用程序，固定为publishSuccess。 |
| callback | Callback&lt;{ publishId: number }> | Yes | 注册设备发布成功的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  publishId: number = 0;
}

try {
  dmInstance.on('publishSuccess', (data: Data) => {
    console.info("publishSuccess:" + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("publishSuccess errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('publishFail')

```TypeScript
on(type: 'publishFail', callback: Callback<{ publishId: number, reason: number }>): void
```

注册设备发布失败回调监听。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'publishFail' | Yes | 注册设备发布失败回调，以便在发布设备失败时通知应用程序，固定为publishFail。 |
| callback | Callback&lt;{ publishId: number, reason: number }> | Yes | 注册设备发布失败的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

class Data {
  publishId: number = 0;
  reason: number = 0;
}

try {
  dmInstance.on('publishFail', (data: Data) => {
    console.info("publishFail on:" + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("publishFail errCode:" + e.code + ",errMessage:" + e.message);
}

```

## on('serviceDie')

```TypeScript
on(type: 'serviceDie', callback: () => void): void
```

注册设备管理服务死亡监听。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceDie' | Yes | 注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。 |
| callback | () => void | Yes | 注册serviceDie的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified eventType is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  dmInstance.on("serviceDie", () => {
    console.info("serviceDie on");
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("serviceDie errCode:" + e.code + ",errMessage:" + e.message);
}

```

## publishDeviceDiscovery

```TypeScript
publishDeviceDiscovery(publishInfo: PublishInfo): void
```

发布设备发现。发布状态持续两分钟，超过两分钟会停止发布。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| publishInfo | PublishInfo | Yes | 发布设备发现信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600105 | Publish unavailable. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

interface PublishInfo {
  publishId: number;
  mode: number, // Active discovery
  freq: number,    // High frequency
  ranging: boolean // Whether the device supports reporting the distance to the discovery initiator.
};

// Automatically generate a unique subscription ID.
let publishId = Math.floor(Math.random() * 10000 + 1000);
let publishInfo: PublishInfo = {
  publishId: publishId,
  mode: 0xAA, // Active discovery
  freq: 2,    // High frequency
  ranging: true  // The device supports reporting the distance to the discovery initiator.
};

try {
  dmInstance.publishDeviceDiscovery(publishInfo); // A callback is invoked to notify the application when the device information is published.
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("publishDeviceDiscovery errCode:" + e.code + ",errMessage:" + e.message);
}

```

## release

```TypeScript
release(): void
```

设备管理实例不再使用后，通过该方法释放DeviceManager实例。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.releaseDeviceManager

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  dmInstance.release();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("release errCode:" + e.code + ",errMessage:" + e.message);
}

```

## requestCredentialRegisterInfo

```TypeScript
requestCredentialRegisterInfo(requestInfo: string, callback: AsyncCallback<{ registerInfo: string }>): void
```

获取凭据的注册信息。

**Since:** 10

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| requestInfo | string | Yes | 请求凭据信息。最大长度255字符。 |
| callback | AsyncCallback&lt;{ registerInfo: string }> | Yes | 凭据的注册信息回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified requestInfo is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

interface CredentialInfo {
  version: string;
  userId: string;
}

class Data {
  registerInfo: string = "";
}

let credentialInfo: CredentialInfo = {
  version: "1.2.3",
  userId: "123"
};
try {
  let jsonCredentialInfo = JSON.stringify(credentialInfo);
  dmInstance.requestCredentialRegisterInfo(jsonCredentialInfo, (err: BusinessError, data: Data) => {
    if (data) {
      console.info("requestCredentialRegisterInfo result:" + JSON.stringify(data));
    } else {
      console.info("requestCredentialRegisterInfo result: data is null");
    }
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("requestCredentialRegisterInfo err:" + e.code + "," + e.message);
}

```

## setUserOperation

```TypeScript
setUserOperation(operateAction: number, params: string): void
```

设置用户ui操作行为。

**Since:** 9

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.replyUiAction

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| operateAction | number | Yes | 用户操作动作。取值范围为0~5。 |
| params | string | Yes | 表示用户的输入参数。长度范围1~255字符。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified params is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  /*
    operateAction = 0 - Grant the permission.
    operateAction = 1 - Revoke the permission.
    operateAction = 2 - The user operation in the permission request dialog box times out.
    operateAction = 3 - Cancel the display of the PIN box.
    operateAction = 4 - Cancel the display of the PIN input box.
    operateAction = 5 - Confirm the input in the PIN input box.
  */
  let operation = 0;
  dmInstance.setUserOperation(operation, "extra");
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("setUserOperation errCode:" + e.code + ",errMessage:" + e.message);
}

```

## startDeviceDiscovery

```TypeScript
startDeviceDiscovery(subscribeInfo: SubscribeInfo): void
```

发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeInfo | SubscribeInfo | Yes | 发现信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified param is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600104 | Discovery unavailable. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

interface SubscribeInfo {
  subscribeId: number;
  mode: number, // Active discovery
  medium: number,  // Automatic. Multiple media can be used for device discovery.
  freq: number,    // High frequency
  isSameAccount: boolean;
  isWakeRemote: boolean;
  capability: number;
}

// Automatically generate a unique subscription ID.
let subscribeId = Math.floor(Math.random() * 10000 + 1000);
let subscribeInfo: SubscribeInfo = {
  subscribeId: subscribeId,
  mode: 0xAA, // Active discovery
  medium: 0,  // Automatic. Multiple media can be used for device discovery.
  freq: 2,    // High frequency
  isSameAccount: false,
  isWakeRemote: false,
  capability: 1
};
try {
  dmInstance.startDeviceDiscovery(subscribeInfo); // The deviceFound callback is called to notify the application when a device is discovered.
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("startDeviceDiscovery errCode:" + e.code + ",errMessage:" + e.message);
}

```

## startDeviceDiscovery

```TypeScript
startDeviceDiscovery(subscribeInfo: SubscribeInfo, filterOptions?: string): void
```

发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。

**Since:** 9

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam:

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeInfo | SubscribeInfo | Yes | 发现信息。 |
| filterOptions | string | No | 发现设备过滤信息。可选，默认为undefined，发现未上线设备。长度范围1~255字符。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified param is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600104 | Discovery unavailable. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

interface Filters {
  type: string;
  value: number;
}

interface FilterOptions {
  filter_op: string, // Optional. The default value is OR.
  filters: Filters[];
}

interface SubscribeInfo {
  subscribeId: number;
  mode: number, // Active discovery
  medium: number,  // Automatic. Multiple media can be used for device discovery.
  freq: number,    // High frequency
  isSameAccount: boolean;
  isWakeRemote: boolean;
  capability: number;
}

// Automatically generate a unique subscription ID.
let subscribeId = Math.floor(Math.random() * 10000 + 1000);
let subscribeInfo: SubscribeInfo = {
  subscribeId: subscribeId,
  mode: 0xAA, // Active discovery
  medium: 0,  // Automatic. Multiple media can be used for device discovery.
  freq: 2,    // High frequency
  isSameAccount: false,
  isWakeRemote: false,
  capability: 1
};

let filters: Filters[] = [
  {
      type: "range",
      value: 50 // Filter discovered devices based on the distance (in cm).
  }
];

let filterOptions: FilterOptions = {
  filter_op: "OR", // Optional. The default value is OR.
  filters: filters
};
try {
  dmInstance.startDeviceDiscovery(subscribeInfo, JSON.stringify(filterOptions)); // The deviceFound callback is invoked to notify the application when a device is discovered.
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("startDeviceDiscovery errCode:" + e.code + ",errMessage:" + e.message);
}

```

## stopDeviceDiscovery

```TypeScript
stopDeviceDiscovery(subscribeId: number): void
```

停止发现周边设备。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.stopDiscovering

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscribeId | number | Yes | 发现标识。取值范围为1~65535。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified param is greater than 255. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  // stopDeviceDiscovery and startDeviceDiscovery must be used in pairs, and the input parameter **subscribeId** passed in them must be the same.
  let subscribeId = 12345;
  dmInstance.stopDeviceDiscovery(subscribeId);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("stopDeviceDiscovery errCode:" + e.code + ",errMessage:" + e.message);
}

```

## unAuthenticateDevice

```TypeScript
unAuthenticateDevice(deviceInfo: DeviceInfo): void
```

解除认证设备。

**Since:** 8

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.unbindTarget

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceInfo | DeviceInfo | Yes | 设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

interface DeviceInfo {
  deviceId: string;
  deviceName: string;
  deviceType: number;
  networkId: string;
  range: number;
}

try {
  let deviceInfo: deviceManager.DeviceInfo = {
    deviceId: "XXXXXXXX",
    deviceName: "",
    deviceType: 0x0E,
    networkId: "xxxxxxx",
    range: 0,
    authForm: 0
  };
  dmInstance.unAuthenticateDevice(deviceInfo);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("unAuthenticateDevice errCode:" + e.code + ",errMessage:" + e.message);
}

```

## unPublishDeviceDiscovery

```TypeScript
unPublishDeviceDiscovery(publishId: number): void
```

停止发布设备发现。

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| publishId | number | Yes | 发布标识。 取值范围为1~2147483647。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
  // unPublishDeviceDiscovery and publishDeviceDiscovery must be used in pairs, and the input parameter **publishId** passed in them must be the same.
  let publishId = 12345;
  dmInstance.unPublishDeviceDiscovery(publishId);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("unPublishDeviceDiscovery errCode:" + e.code + ",errMessage:" + e.message);
}

```

## verifyAuthInfo

```TypeScript
verifyAuthInfo(authInfo: AuthInfo, callback: AsyncCallback<{ deviceId: string, level: number }>): void
```

验证认证信息。

**Since:** 7

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_SERVICE_DM

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authInfo | AuthInfo | Yes | 认证信息。 |
| callback | AsyncCallback&lt;{ deviceId: string, level: number }> | Yes | 验证结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

interface ExtraInfo {
  authType: number;
  token: number;
}

interface AuthInfo {
  authType: number;
  token: number;
  extraInfo: ExtraInfo;
}

class Data {
  deviceId: string = "";
  level: number = 0;
}

let extraInfo: ExtraInfo = {
  authType: 0,
  token: 0
};

let authInfo: AuthInfo = {
  authType: 1,
  token: 123456,
  extraInfo: extraInfo
};
try {
  dmInstance.verifyAuthInfo(authInfo, (err: BusinessError, data: Data) => {
    if (err) {
      console.error("verifyAuthInfo errCode:" + err.code + ",errMessage:" + err.message);
      return;
    }
  console.info("verifyAuthInfo result:" + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error("verifyAuthInfo errCode:" + e.code + ",errMessage:" + e.message);
}

```

