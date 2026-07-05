# startAdvertising

## startAdvertising

```TypeScript
function startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void
```

Starts BLE advertising. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.

**起始版本：** 10

**需要权限：** 

- API版本10 - 22： ohos.permission.ACCESS_BLUETOOTH

- API版本23+： ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| setting | AdvertiseSetting | 是 | Indicates the settings for BLE advertising. |
| advData | AdvertiseData | 是 | Indicates the advertising data. |
| advResponse | AdvertiseData | 否 | Indicates the scan response associated with the advertising data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of advertising resources reaches the upper limit. [since 20] |
| 2900099 | Operation failed. |
| 2902054 | The length of the advertising data exceeds the upper limit. [since 20] |

**示例：**

```TypeScript
let manufactureValueBuffer = new Uint8Array(4);
manufactureValueBuffer[0] = 1;
manufactureValueBuffer[1] = 2;
manufactureValueBuffer[2] = 3;
manufactureValueBuffer[3] = 4;

let serviceValueBuffer = new Uint8Array(4);
serviceValueBuffer[0] = 4;
serviceValueBuffer[1] = 6;
serviceValueBuffer[2] = 7;
serviceValueBuffer[3] = 8;
console.info('manufactureValueBuffer = '+ JSON.stringify(manufactureValueBuffer));
console.info('serviceValueBuffer = '+ JSON.stringify(serviceValueBuffer));
try {
    let setting: ble.AdvertiseSetting = {
        interval:150,
        txPower:0,
        connectable:true
    };
    let manufactureDataUnit: ble.ManufactureData = {
        manufactureId:4567,
        manufactureValue:manufactureValueBuffer.buffer
    };
    let serviceDataUnit: ble.ServiceData = {
        serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
        serviceValue:serviceValueBuffer.buffer
    };
    let advData: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // 需申请ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME权限
    };
    let advResponse: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // 需申请ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME权限
    };
    ble.startAdvertising(setting, advData ,advResponse);
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## startAdvertising

```TypeScript
function startAdvertising(advertisingParams: AdvertisingParams, callback: AsyncCallback<int>): void
```

Starts BLE advertising. The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising using the API {@link enableAdvertising} or {@link disableAdvertising}. To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.

**起始版本：** 11

**需要权限：** 

- API版本11 - 22： ohos.permission.ACCESS_BLUETOOTH

- API版本23+： ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| advertisingParams | AdvertisingParams | 是 | Indicates the params for BLE advertising. |
| callback | AsyncCallback&lt;int> | 是 | the callback of advertise ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of advertising resources reaches the upper limit. [since 20] |
| 2900099 | Operation failed. |
| 2902054 | The length of the advertising data exceeds the upper limit. [since 20] |

**示例：**

```TypeScript
let manufactureValueBuffer = new Uint8Array(4);
manufactureValueBuffer[0] = 1;
manufactureValueBuffer[1] = 2;
manufactureValueBuffer[2] = 3;
manufactureValueBuffer[3] = 4;

let serviceValueBuffer = new Uint8Array(4);
serviceValueBuffer[0] = 4;
serviceValueBuffer[1] = 6;
serviceValueBuffer[2] = 7;
serviceValueBuffer[3] = 8;
console.info('manufactureValueBuffer = '+ JSON.stringify(manufactureValueBuffer));
console.info('serviceValueBuffer = '+ JSON.stringify(serviceValueBuffer));
try {
    let setting: ble.AdvertiseSetting = {
        interval:150,
        txPower:0,
        connectable:true,
    };
    let manufactureDataUnit: ble.ManufactureData = {
        manufactureId:4567,
        manufactureValue:manufactureValueBuffer.buffer
    };
    let serviceDataUnit: ble.ServiceData = {
        serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
        serviceValue:serviceValueBuffer.buffer
    };
    let advData: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // 需申请ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME权限
    };
    let advResponse: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // 需申请ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME权限
    };
    let advertisingParams: ble.AdvertisingParams = {
        advertisingSettings: setting,
        advertisingData: advData,
        advertisingResponse: advResponse,
        duration: 0
    }
    let advHandle = 0xFF;
    ble.startAdvertising(advertisingParams, (err, outAdvHandle) => {
        if (err) {
            return;
        } else {
            advHandle = outAdvHandle;
            console.info("advHandle: " + advHandle);
        }
    });
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

## startAdvertising

```TypeScript
function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>
```

Starts BLE advertising. The API returns a advertising ID. The ID can be used to temporarily enable or disable this advertising using the API {@link enableAdvertising} or {@link disableAdvertising}. To completely stop the advertising corresponding to the ID, invoke the API {@link stopAdvertising} with ID. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.

**起始版本：** 11

**需要权限：** 

- API版本11 - 22： ohos.permission.ACCESS_BLUETOOTH

- API版本23+： ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| advertisingParams | AdvertisingParams | 是 | Indicates the param for BLE advertising. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of advertising resources reaches the upper limit. [since 20] |
| 2900099 | Operation failed. |
| 2902054 | The length of the advertising data exceeds the upper limit. [since 20] |

**示例：**

```TypeScript
let manufactureValueBuffer = new Uint8Array(4);
manufactureValueBuffer[0] = 1;
manufactureValueBuffer[1] = 2;
manufactureValueBuffer[2] = 3;
manufactureValueBuffer[3] = 4;

let serviceValueBuffer = new Uint8Array(4);
serviceValueBuffer[0] = 4;
serviceValueBuffer[1] = 6;
serviceValueBuffer[2] = 7;
serviceValueBuffer[3] = 8;
console.info('manufactureValueBuffer = '+ JSON.stringify(manufactureValueBuffer));
console.info('serviceValueBuffer = '+ JSON.stringify(serviceValueBuffer));
try {
    let setting: ble.AdvertiseSetting = {
        interval:150,
        txPower:0,
        connectable:true
    };
    let manufactureDataUnit: ble.ManufactureData = {
        manufactureId:4567,
        manufactureValue:manufactureValueBuffer.buffer
    };
    let serviceDataUnit: ble.ServiceData = {
        serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
        serviceValue:serviceValueBuffer.buffer
    };
    let advData: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // 需申请ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME权限
    };
    let advResponse: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // 需申请ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME权限
    };
    let advertisingParams: ble.AdvertisingParams = {
        advertisingSettings: setting,
        advertisingData: advData,
        advertisingResponse: advResponse,
        duration: 0
    }
    let advHandle = 0xFF;
    ble.startAdvertising(advertisingParams)
        .then(outAdvHandle => {
            advHandle = outAdvHandle;
    });
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

