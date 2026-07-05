# DeviceManager

设备管理实例，用于获取可信设备和本地设备的相关信息。在调用DeviceManager的方法前，需要先通过createDeviceManager构建一个DeviceManager实例dmInstance。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

## 导入模块

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
```

## bindTarget

```TypeScript
bindTarget(deviceId: string, bindParam: { [key: string]: Object; }, callback: AsyncCallback<{deviceId: string;}>): void
```

认证设备。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | 设备标识。长度范围1~255字符。 |
| bindParam | { [key: string]: Object; } | 是 | 认证参数。由开发者自行决定传入的键值对。默认会携带以下key值：  bindType 此值是绑定的类型，必填。  -1：PIN码。  targetPkgName 绑定目标的包名。  appName 尝试绑定目标的应用程序名称。  appOperation 应用程序要绑定目标的原因。  customDescription 操作的详细说明。 |
| callback | AsyncCallback&lt;{deviceId: string;}> | 是 | 认证结果回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified deviceId is greater than 255. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |
| 11600103 | Authentication unavailable. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  deviceId: string = '';
}

// 认证的设备信息，可以从发现的结果中获取
let deviceId = 'XXXXXXXX';
let bindParam: Record<string, string | number> = {
  'bindType': 1, // 认证类型： 1 - 无账号PIN码认证
  'targetPkgName': 'xxxx',
  'appName': 'xxxx',
  'appOperation': 'xxxx',
  'customDescription': 'xxxx'
};

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.bindTarget(deviceId, bindParam, (err: BusinessError, data: Data) => {
    if (err) {
      console.error('bindTarget errCode:' + err.code + ',errMessage:' + err.message);
      return;
    }
    console.info('bindTarget result:' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('bindTarget errCode:' + e.code + ',errMessage:' + e.message);
}

```

## bindTarget

```TypeScript
bindTarget(deviceId: string, bindParam: Record<string, int | string>, callback: AsyncCallback<BindTargetResult>): void
```

认证设备。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | 设备标识。长度范围1~255字符。 |
| bindParam | Record&lt;string, int \| string> | 是 | 认证参数。由开发者自行决定传入的键值对。  默认会携带以下key值：  bindType 此值是绑定的类型，必填。  -1：PIN码。  targetPkgName 绑定目标的包名。  appName 尝试绑定目标的应用程序名称。  appOperation 应用程序要绑定目标的原因。  customDescription 操作的详细说明。 |
| callback | AsyncCallback&lt;BindTargetResult> | 是 | 认证结果回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |
| 11600103 | Authentication unavailable. |

## getAvailableDeviceList

```TypeScript
getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>): void
```

获取所有可信设备列表。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;DeviceBasicInfo>> | 是 | 获取所有可信设备列表的回调，返回设备信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.getAvailableDeviceList((err: BusinessError, data: Array<distributedDeviceManager.DeviceBasicInfo>) => {
    if (err) {
      console.error('getAvailableDeviceList errCode:' + err.code + ',errMessage:' + err.message);
      return;
    }
    console.info('get available device info: ' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getAvailableDeviceList errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getAvailableDeviceList

```TypeScript
getAvailableDeviceList(): Promise<Array<DeviceBasicInfo>>
```

获取所有可信设备列表。使用Promise异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;DeviceBasicInfo>> | Promise实例，用于获取异步返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
dmInstance.getAvailableDeviceList().then((data: Array<distributedDeviceManager.DeviceBasicInfo>) => {
  console.info('get available device info: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error('getAvailableDeviceList errCode:' + err.code + ',errMessage:' + err.message);
});

```

## getAvailableDeviceListSync

```TypeScript
getAvailableDeviceListSync(): Array<DeviceBasicInfo>
```

同步获取所有可信设备列表。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;DeviceBasicInfo> | 返回可信设备列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceInfoList: Array<distributedDeviceManager.DeviceBasicInfo> = dmInstance.getAvailableDeviceListSync();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getAvailableDeviceListSync errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getDeviceIconInfo

```TypeScript
getDeviceIconInfo(filterOptions: DeviceIconInfoFilterOptions): Promise<DeviceIconInfo>
```

获取设备图标，使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filterOptions | DeviceIconInfoFilterOptions | 是 | 查询过程中使用的过滤条件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DeviceIconInfo> | Promise实例，返回设备图标信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed; |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain service. |
| 11600106 | Get data from cloud fail. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let productIds:Array<string> = ['M0D2', 'M0D3', 'M0D5', 'M0AB', 'M0BD', 'M0E9', 'M0BC', 'M0EA'];
  let options:distributedDeviceManager.DeviceIconInfoFilterOptions = {
    productId: 'P14U',
    imageType: 'ID',
    specName: 'lg',
  };
  if (productIds.indexOf(options.productId) != -1) {
    options.internalModel = '';
  } else {
    options.subProductId = '';
  }
  dmInstance.getDeviceIconInfo(options).then((data: distributedDeviceManager.DeviceIconInfo) => {
    console.info('getDeviceIconInfo' + JSON.stringify(data));
  }).catch((e : BusinessError) => {
    console.error('getDeviceIconInfo errCode:' + e.code + ',errMessage:' + e.message);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getDeviceIconInfo errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getDeviceName

```TypeScript
getDeviceName(networkId: string): string
```

通过指定设备的网络标识获取该设备名称。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | 设备的网络标识。长度范围1~255字符。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回指定设备名称。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified networkId is greater than 255. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 设备网络标识，可以从可信设备列表中获取
  let networkId = 'xxxxxxx';
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceName: string = dmInstance.getDeviceName(networkId);
  console.info('device name: ' + JSON.stringify(deviceName)); 
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getDeviceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getDeviceNetworkIdList

```TypeScript
getDeviceNetworkIdList(filterOptions: NetworkIdQueryFilter): Promise<Array<string>>
```

获取符合条件的网络设备ID列表。使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filterOptions | NetworkIdQueryFilter | 是 | 查询过程中使用的过滤条件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise实例，返回设备网络ID的列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Parameter verification failed; |
| 11600102 | Failed to obtain service. |
| 11600107 | A login account is required. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let queryFiler: distributedDeviceManager.NetworkIdQueryFilter = {
    wiseDeviceId: '',
    onlineStatus: 1,
  }
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.getDeviceNetworkIdList(queryFiler).then((data:Array<string>) => {
    console.info('getDeviceNetworkIdList name:' + JSON.stringify(data));
  }).catch((e: BusinessError) => {
    console.error('getDeviceNetworkIdList errCode:' + e.code + ',errMessage:' + e.message);
  })
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getDeviceNetworkIdList errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getDeviceProfileInfoList

```TypeScript
getDeviceProfileInfoList(filterOptions: DeviceProfileInfoFilterOptions): Promise<Array<DeviceProfileInfo>>
```

获取同账号下全部的设备列表，使用Promise异步回调。

**起始版本：** 15

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filterOptions | DeviceProfileInfoFilterOptions | 是 | 查询过程中使用的过滤条件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;DeviceProfileInfo>> | Promise实例，返回设备列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 500. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain service. |
| 11600106 | Get data from cloud fail. |
| 11600107 | A login account is required. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.getDeviceProfileInfoList({"isCloud": false}).then((data: Array<distributedDeviceManager.DeviceProfileInfo>) => {
    console.info('getDeviceProfileInfoList' + JSON.stringify(data));
  }).catch((e: BusinessError) => {
    console.error('getDeviceProfileInfoList errCode:' + e.code + ',errMessage:' + e.message);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getDeviceProfileInfoList errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getDeviceType

```TypeScript
getDeviceType(networkId: string): int
```

通过指定设备的网络标识获取该设备类型。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | 设备的网络标识。长度范围1~255字符。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 返回指定设备类型。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified networkId is greater than 255. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 设备网络标识，可以从可信设备列表中获取
  let networkId = 'xxxxxxx';
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceType: number = dmInstance.getDeviceType(networkId);
  console.info('device type: ' + JSON.stringify(deviceType)); 
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getDeviceType errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getIdentificationByDeviceIds

```TypeScript
getIdentificationByDeviceIds(deviceIds: Array<string>): Array<DeviceIdentification>
```

根据设备ID查询设备标识。

**起始版本：** 24

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM and * ohos.permission.sec.ACCESS_UDID

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceIds | Array&lt;string> | 是 | 应用程序可以获取的设备ID列表。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;DeviceIdentification> | DeviceIdentification列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | User permission verify failed. |
| 202 | The caller is not a system application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript

let idsLists: undefined|Array<distributedDeviceManager.DeviceIdentification> = [];
let deviceIds: Array<string> = [];
try {
  let deviceManager = distributedDeviceManager.createDeviceManager('com.example.myapplication');
  idsLists = deviceManager?.getIdentificationByDeviceIds(deviceIds);
  console.info("Successfully retrieved UDID list");
} catch (error) {
  console.error('Get device UDID failed:', error);
  idsLists = [];
}

```

## getLocalDeviceId

```TypeScript
getLocalDeviceId(): string
```

获取本地设备id，实际值为udid-hash与appid和盐值基于sha256方式进行混淆后的值。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回本地设备id。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceId: string = dmInstance.getLocalDeviceId();
  console.info('local device id: ' + JSON.stringify(deviceId));
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getLocalDeviceId errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getLocalDeviceName

```TypeScript
getLocalDeviceName(): string
```

获取本地设备名称。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回本地设备名称。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceName: string = dmInstance.getLocalDeviceName();
  console.info('local device name: ' + JSON.stringify(deviceName));
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getLocalDeviceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getLocalDeviceNetworkId

```TypeScript
getLocalDeviceNetworkId(): string
```

获取本地设备网络标识。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 返回本地设备网络标识。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceNetworkId: string = dmInstance.getLocalDeviceNetworkId();
  console.info('local device networkId: ' + JSON.stringify(deviceNetworkId));
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getLocalDeviceNetworkId errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getLocalDeviceType

```TypeScript
getLocalDeviceType(): int
```

获取本地设备类型。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 返回本地设备类型。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceType: number = dmInstance.getLocalDeviceType();
  console.info('local device type: ' + JSON.stringify(deviceType));
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getLocalDeviceType errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getLocalDisplayDeviceName

```TypeScript
getLocalDisplayDeviceName(maxNameLength: int): Promise<string>
```

获取本机指定长度（字节数）的显示名，使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxNameLength | int | 是 | 可显示的设备名称长度（字节数），取值范围为[18，100]，为0时表示不限制。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | 指定名称长度最大字节数的本机设备显示名。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed; |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain service. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let maxNameLength:number = 21;
  dmInstance.getLocalDisplayDeviceName(maxNameLength).then((data:string)=>{
    console.info('getLocalDisplayDeviceName name:' + JSON.stringify(data));
  }).catch((e: BusinessError)=>{
    console.error('getLocalDisplayDeviceName errCode:' + e.code + ',errMessage:' + e.message);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('getLocalDisplayDeviceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## getOsTypeByNetworkId

```TypeScript
getOsTypeByNetworkId(networkId: string): int
```

通过设备网络ID查询设备操作系统类型。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.ACCESS_SERVICE_DM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | The device's network ID |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | - Returns the device operating system type.  Possible return:  1. 10: Operating system based on OpenHarmony  2. 11: Operating system not based on OpenHarmony  3. -1: Unknown |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | User permission verify failed. |
| 202 | The caller is not a system application. |
| 11600102 | Failed to obtain service. |
| 11600110 | Invalid network ID. |

## off('deviceStateChange')

```TypeScript
off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void
```

取消注册设备状态回调。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceStateChange' | 是 | 根据应用程序的包名取消注册设备状态回调，固定为deviceStateChange。 |
| callback | Callback&lt;{ action: DeviceStateChange; device: DeviceBasicInfo; }> | 否 | 指示要取消注册的设备状态回调，返回设备状态和设备信  息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  action: distributedDeviceManager.DeviceStateChange = 0;
  device: distributedDeviceManager.DeviceBasicInfo = {
    deviceId: '',
    deviceName: '',
    deviceType: '',
    networkId: ''
  };
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.off('deviceStateChange', (data: Data) => {
    console.info('deviceStateChange' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('deviceStateChange errCode:' + e.code + ',errMessage:' + e.message);
}

```

## off('discoverSuccess')

```TypeScript
off(type: 'discoverSuccess', callback?: Callback<{ device: DeviceBasicInfo; }>): void
```

取消注册设备发现成功回调。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoverSuccess' | 是 | 取消注册设备发现回调，固定为discoverSuccess。 |
| callback | Callback&lt;{ device: DeviceBasicInfo; }> | 否 | 指示要取消注册的设备发现回调，返回设备状态和设备信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  device: distributedDeviceManager.DeviceBasicInfo = {
    deviceId: '',
    deviceName: '',
    deviceType: '',
    networkId: ''
  };
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.off('discoverSuccess', (data: Data) => {
    console.info('discoverSuccess' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('discoverSuccess errCode:' + e.code + ',errMessage:' + e.message);
}

```

## off('deviceNameChange')

```TypeScript
off(type: 'deviceNameChange', callback?: Callback<{ deviceName: string; }>): void
```

取消注册设备名称变更回调监听。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceNameChange' | 是 | 取消注册设备名称改变回调，固定为deviceNameChange。 |
| callback | Callback&lt;{ deviceName: string; }> | 否 | 指示要取消注册设备名称改变的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  deviceName: string = '';
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.off('deviceNameChange', (data: Data) => {
    console.info('deviceNameChange' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('deviceNameChange errCode:' + e.code + ',errMessage:' + e.message);
}

```

## off('discoverFailure')

```TypeScript
off(type: 'discoverFailure', callback?: Callback<{ reason: int; }>): void
```

取消注册设备发现失败回调。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoverFailure' | 是 | 取消注册设备发现失败回调，固定为discoverFailure。 |
| callback | Callback&lt;{ reason: int; }> | 否 | 指示要取消注册的设备发现失败回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  reason: number = 0;
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.off('discoverFailure', (data: Data) => {
    console.info('discoverFailure' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('discoverFailure errCode:' + e.code + ',errMessage:' + e.message);
}

```

## off('serviceDie')

```TypeScript
off(type: 'serviceDie', callback?: Callback<{}>): void
```

取消注册设备管理服务死亡回调。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceDie' | 是 | 取消注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。 |
| callback | Callback&lt;{}> | 否 | 取消注册serviceDie的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.off('serviceDie', () => {
    console.info('serviceDie off');
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('serviceDie errCode:' + e.code + ',errMessage:' + e.message);
}

```

## off('replyResult')

```TypeScript
off(type: 'replyResult', callback?: Callback<{ param: string; }>): void
```

取消回复UI操作结果回调。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'replyResult' | 是 | 取消注册的设备管理器 UI 状态回调，固定为replyResult。 |
| callback | Callback&lt;{ param: string; }> | 否 | 指示要取消注册的设备管理器 UI 状态，返回UI状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.off('replyResult');
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('replyResult errCode:' + e.code + ',errMessage:' + e.message);
}

```

## offDeviceNameChange

```TypeScript
offDeviceNameChange(callback?: Callback<DeviceNameChangeResult>): void
```

取消注册设备名称变更回调监听。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceNameChangeResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## offDeviceStateChange

```TypeScript
offDeviceStateChange(callback?: Callback<DeviceStateChangeResult>): void
```

取消注册设备状态回调。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceStateChangeResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## offDiscoverFailure

```TypeScript
offDiscoverFailure(callback?: Callback<DiscoveryFailureResult>): void
```

取消注册设备发现失败回调。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DiscoveryFailureResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## offDiscoverSuccess

```TypeScript
offDiscoverSuccess(callback?: Callback<DiscoverySuccessResult>): void
```

取消注册设备发现成功回调。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DiscoverySuccessResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## offReplyResult

```TypeScript
offReplyResult(callback?: Callback<ReplyResult>): void
```

取消回复UI操作结果回调。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ReplyResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## offServiceDie

```TypeScript
offServiceDie(callback?: Callback<ServiceDieData>): void
```

取消注册设备管理服务死亡回调。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ServiceDieData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## on('deviceStateChange')

```TypeScript
on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void
```

注册设备状态回调，以便在设备状态发生变化时根据应用捆绑包名通知应用。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceStateChange' | 是 | 注册设备状态回调，固定为deviceStateChange。 |
| callback | Callback&lt;{ action: DeviceStateChange; device: DeviceBasicInfo; }> | 是 | 指示要注册的设备状态回调，返回设备状态和设备信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  action: distributedDeviceManager.DeviceStateChange = 0;
  device: distributedDeviceManager.DeviceBasicInfo = {
    deviceId: '',
    deviceName: '',
    deviceType: '',
    networkId: ''
  };
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.on('deviceStateChange', (data: Data) => {
    console.info('deviceStateChange on:' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('deviceStateChange errCode:' + e.code + ',errMessage:' + e.message);
}

```

## on('discoverSuccess')

```TypeScript
on(type: 'discoverSuccess', callback: Callback<{ device: DeviceBasicInfo; }>): void
```

注册发现设备成功回调监听。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoverSuccess' | 是 | 注册设备发现回调，以便在发现周边设备时通知应用程序，固定为discoverSuccess。 |
| callback | Callback&lt;{ device: DeviceBasicInfo; }> | 是 | 注册设备发现的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  device: distributedDeviceManager.DeviceBasicInfo = {
    deviceId: '',
    deviceName: '',
    deviceType: '',
    networkId: ''
  };
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.on('discoverSuccess', (data: Data) => {
    console.info('discoverSuccess:' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('discoverSuccess errCode:' + e.code + ',errMessage:' + e.message);
}

```

## on('deviceNameChange')

```TypeScript
on(type: 'deviceNameChange', callback: Callback<{ deviceName: string; }>): void
```

注册设备名称变更回调，以便在设备名称改变时通知应用程序。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceNameChange' | 是 | 注册设备名称改变回调，以便在设备名称改变时通知应用程序，固定为deviceNameChange。 |
| callback | Callback&lt;{ deviceName: string; }> | 是 | 注册设备名称改变的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  deviceName: string = '';
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.on('deviceNameChange', (data: Data) => {
    console.info('deviceNameChange on:' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('deviceNameChange errCode:' + e.code + ',errMessage:' + e.message);
}

```

## on('discoverFailure')

```TypeScript
on(type: 'discoverFailure', callback: Callback<{ reason: number; }>): void
```

注册设备发现失败回调监听。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoverFailure' | 是 | 注册设备发现失败回调，以便在发现周边设备失败时通知应用程序，固定为discoverFailure。 |
| callback | Callback&lt;{ reason: number; }> | 是 | 注册设备发现失败的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  reason: number = 0;
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.on('discoverFailure', (data: Data) => {
    console.info('discoverFailure on:' + JSON.stringify(data));
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('discoverFailure errCode:' + e.code + ',errMessage:' + e.message);
}

```

## on('serviceDie')

```TypeScript
on(type: 'serviceDie', callback?: Callback<{}>): void
```

注册设备管理服务死亡回调，以便在服务死亡时通知应用程序。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceDie' | 是 | 注册serviceDie回调，以便在devicemanager服务异常终止时通知应用程序，固定为serviceDie。 |
| callback | Callback&lt;{}> | 否 | 注册serviceDie的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.on('serviceDie', () => {
    console.info('serviceDie on');
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('serviceDie errCode:' + e.code + ',errMessage:' + e.message);
}

```

## on('replyResult')

```TypeScript
on(type: 'replyResult', callback: Callback<{ param: string; }>): void
```

回复UI操作结果回调。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'replyResult' | 是 | 注册的设备管理器 UI 状态回调，以便在状态改变时通知应用，固定为replyResult。 |
| callback | Callback&lt;{ param: string; }> | 是 | 指示要注册的设备管理器 UI 状态回调，返回UI状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 255. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

class Data {
  param: string = '';
}

interface TmpStr {
  verifyFailed: boolean;
}

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.on('replyResult', (data: Data) => {
    console.info('replyResult executed, dialog closed' + JSON.stringify(data));
    let tmpStr: TmpStr = JSON.parse(data.param);
    let isShow = tmpStr.verifyFailed;
    console.info('replyResult executed, dialog closed' + isShow);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('replyResult errCode:' + e.code + ',errMessage:' + e.message);
}

```

## onDeviceNameChange

```TypeScript
onDeviceNameChange(callback: Callback<DeviceNameChangeResult>): void
```

注册设备名称变更回调，以便在设备名称改变时通知应用程序。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceNameChangeResult> | 是 | 注册设备名称改变的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## onDeviceStateChange

```TypeScript
onDeviceStateChange(callback: Callback<DeviceStateChangeResult>): void
```

注册设备状态回调，以便在设备状态发生变化时根据应用捆绑包名通知应用。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DeviceStateChangeResult> | 是 | 指示要注册的设备状态回调，返回设备状态和设备信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |

## onDiscoverFailure

```TypeScript
onDiscoverFailure(callback: Callback<DiscoveryFailureResult>): void
```

注册设备发现失败回调监听。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DiscoveryFailureResult> | 是 | 注册设备发现失败的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## onDiscoverSuccess

```TypeScript
onDiscoverSuccess(callback: Callback<DiscoverySuccessResult>): void
```

注册发现设备成功回调监听。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DiscoverySuccessResult> | 是 | 注册设备发现的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## onReplyResult

```TypeScript
onReplyResult(callback: Callback<ReplyResult>): void
```

回复UI操作结果回调。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ReplyResult> | 是 | 指示要注册的设备管理器 UI 状态回调，返回UI状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

## onServiceDie

```TypeScript
onServiceDie(callback: Callback<ServiceDieData>): void
```

注册设备管理服务死亡回调，以便在服务死亡时通知应用程序。使用callback异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ServiceDieData> | 是 | 注册serviceDie的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

## putDeviceProfileInfoList

```TypeScript
putDeviceProfileInfoList(deviceProfileInfoList: Array<DeviceProfileInfo>): Promise<int>
```

业务调用更新设备列表，使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceProfileInfoList | Array&lt;DeviceProfileInfo> | 是 | 需要更新的设备列表。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | 操作结果，0表示本次调用成功。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified type is greater than 500. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain service. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceProfileInfoList:Array<distributedDeviceManager.DeviceProfileInfo> = [];
  dmInstance.putDeviceProfileInfoList(deviceProfileInfoList).then((data:number) => {
    console.info('put device profile info:' + JSON.stringify(data));
  }).catch((e: BusinessError) => {
    console.error('putDeviceProfileInfoList errCode:' + e.code + ',errMessage:' + e.message);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('putDeviceProfileInfoList errCode:' + e.code + ',errMessage:' + e.message);
}

```

## replyUiAction

```TypeScript
replyUiAction(action: int, actionResult: string): void
```

回复用户UI操作行为。此接口只能被devicemanager的PIN码hap使用。

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| action | int | 是 | 用户操作动作。  - 0：允许授权。  - 1：取消授权。  - 2：授权框用户操作超时。  - 3：取消pin码框展示。  - 4：取消pin码输入框展示。  - 5：pin码输入框确定操作。 |
| actionResult | string | 是 | 表示用户操作结果，长度范围1~255字符。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified actionResult is greater than 255. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  /**
   * action = 0 - 允许授权
   * action = 1 - 取消授权
   * action = 2 - 授权框用户操作超时
   * action = 3 - 取消pin码框展示
   * action = 4 - 取消pin码输入框展示
   * action = 5 - pin码输入框确定操作
   */
  let operation = 0;
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.replyUiAction(operation, 'extra');
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('replyUiAction errCode:' + e.code + ',errMessage:' + e.message);
}

```

## restoreLocalDeivceName

```TypeScript
restoreLocalDeivceName(): void
```

系统重置还原网络设置时，还原本机设备名。

**起始版本：** 18

**废弃版本：** 24

**替代接口：** distributedDeviceManager.DeviceManager.restoreLocalDeviceName

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain the service. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.restoreLocalDeivceName();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('restoreLocalDeivceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## restoreLocalDeviceName

```TypeScript
restoreLocalDeviceName(): void
```

系统重置还原网络设置时，还原本机设备名。

**起始版本：** 24

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain the service. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.restoreLocalDeviceName();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('restoreLocalDeviceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## setHeartbeatPolicy

```TypeScript
setHeartbeatPolicy(policy: StrategyForHeartbeat, delayTime: int): void
```

设置心跳广播策略。

**起始版本：** 15

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policy | StrategyForHeartbeat | 是 | 心跳广播策略。 |
| delayTime | int | 是 | 临时关闭心跳广播的时长，单位为：ms，取值范围1000ms到15000ms。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 11600102 | Failed to obtain service. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let policy = distributedDeviceManager.StrategyForHeartbeat.TEMP_STOP_HEARTBEAT;
  let delayTime = 1000;
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.setHeartbeatPolicy(policy, delayTime);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('setHeartbeatPolicy errCode:' + e.code + ',errMessage:' + e.message);
}

```

## setLocalDeviceName

```TypeScript
setLocalDeviceName(deviceName: string): Promise<int>
```

修改本机设备名称，使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceName | string | 是 | 自定义设备名称。字符串长度范围1~255。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | 操作结果，0表示本次调用成功。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed; |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain service. |
| 11600106 | Failed to get data from the cloud. |
| 11600107 | A login account is required. |
| 11600108 | The device name contains non-compliant content. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceName:string = 'xxx';
  dmInstance.setLocalDeviceName(deviceName).then((data:number)=>{
    console.info('setLocalDeviceName name:' + JSON.stringify(data));
  }).catch((e: BusinessError)=>{
    console.error('setLocalDeviceName errCode:' + e.code + ',errMessage:' + e.message);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('setLocalDeviceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## setRemoteDeviceName

```TypeScript
setRemoteDeviceName(deviceId: string, deviceName: string): Promise<int>
```

设置配件设备名称，使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.ACCESS_SERVICE_DM

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | 配件设备的UDID，没有UDID的设备取MAC或SN，优先取SN。 |
| deviceName | string | 是 | 自定义设备名称。字符串长度范围1~255。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | 操作结果，0表示本次调用成功。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed; |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 11600102 | Failed to obtain service. |
| 11600106 | Failed to get data from the cloud. |
| 11600107 | A login account is required. |
| 11600108 | The device name contains non-compliant content. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  let deviceId:string = 'xxx';
  let deviceName:string = 'xxx';
  dmInstance.setRemoteDeviceName(deviceId, deviceName).then((data:number)=>{
    console.info('setRemoteDeviceName name:' + JSON.stringify(data));
  }).catch((e: BusinessError)=>{
    console.error('setRemoteDeviceName errCode:' + e.code + ',errMessage:' + e.message);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('setRemoteDeviceName errCode:' + e.code + ',errMessage:' + e.message);
}

```

## startDiscovering

```TypeScript
startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; }): void
```

发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。wifi场景要求同局域网。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| discoverParam | { [key: string]: Object; } | 是 | 发现标识。 标识发现的目标类型。  discoverTargetType: 发现目标默认为设备，值为1。 |
| filterOptions | { [key: string]: Object; } | 否 | 发现设备过滤信息。可选，默认为undefined，发现未上线设备。会携带以下key值：  availableStatus(0-1)：仅发现设备可信，值为0表示设备不可信。  -0：设备离线，客户端需要通过调用bindTarget绑定设备。  -1：设备已在线，客户端可以进行连接。  discoverDistance(0-100)：发现距离本地一定距离内的设备，单位为cm。wifi场景不传该参数。  authenticationStatus(0-1)：根据不同的认证状态发现设备：  -0：设备未认证。  -1：设备已认证。  authorizationType(0-2)：根据不同的授权类型发现设备：  -0：根据临时协商的会话密钥认证的设备。  -1：基于同账号密钥进行身份验证的设备。  -2：基于不同账号凭据密钥认证的设备。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600104 | Discovery unavailable. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

interface DiscoverParam {
  discoverTargetType: number;
}

interface FilterOptions {
  availableStatus: number;
  discoverDistance: number;
  authenticationStatus: number;
  authorizationType: number;
}

let discoverParam: Record<string, number> = {
  'discoverTargetType': 1
};
let filterOptions: Record<string, number> = {
  'availableStatus': 0
};

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.startDiscovering(discoverParam, filterOptions); // 当有设备发现时，通过discoverSuccess回调通知给应用程序
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('startDiscovering errCode:' + e.code + ',errMessage:' + e.message);
}

```

## startDiscovering

```TypeScript
startDiscovering(discoverParam: Record<string, int | string>, filterOptions?: Record<string, int | string>): void
```

发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。wifi场景要求同局域网。

**起始版本：** 23

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| discoverParam | Record&lt;string, int \| string> | 是 | 发现标识。 标识发现的目标类型。  discoverTargetType: 发现目标默认为设备，值为1。 |
| filterOptions | Record&lt;string, int \| string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600104 | Discovery unavailable. |
| 11600101 | Failed to execute the function. |

## stopDiscovering

```TypeScript
stopDiscovering(): void
```

停止发现周边设备。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to  call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.stopDiscovering();
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('stopDiscovering errCode:' + e.code + ',errMessage:' + e.message);
}

```

## unbindTarget

```TypeScript
unbindTarget(deviceId: string): void
```

解除认证设备。

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedHardware.DeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | 设备标识。长度范围1~255字符。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter type;  3. Parameter verification failed;  4. The size of specified deviceId is greater than 255. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 11600101 | Failed to execute the function. |

**示例：**

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let deviceId = 'XXXXXXXX';
  let dmInstance = distributedDeviceManager.createDeviceManager('ohos.samples.jsHelloWorld');
  dmInstance.unbindTarget(deviceId);
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error('unbindTarget errCode:' + e.code + ',errMessage:' + e.message);
}

```

