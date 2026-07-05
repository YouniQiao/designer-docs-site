# startAdvertising

## startAdvertising

```TypeScript
function startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData): void
```

Starts BLE advertising. - If only {@link AdvertiseData#includeDeviceName} is set to true, the local name will be carried in the broadcast packet. - If only {@link AdvertiseData#advertiseName} is set, its value will be used as a custom name and carried in the broadcast packet. - If {@link AdvertiseData#includeDeviceName} is set to true and {@link AdvertiseData#advertiseName} is specified, the {@link AdvertiseData#advertiseName} property will take effect. - To set {@link AdvertiseData#advertiseName}, ensure that ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME has been added.

**Since:** 10

**Required permissions:** 

- API version10  to  22: ohos.permission.ACCESS_BLUETOOTH

- API version23 and later: ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | AdvertiseSetting | Yes | Indicates the settings for BLE advertising. |
| advData | AdvertiseData | Yes | Indicates the advertising data. |
| advResponse | AdvertiseData | No | Indicates the scan response associated with the advertising data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of advertising resources reaches the upper limit. [since 20] |
| 2900099 | Operation failed. |
| 2902054 | The length of the advertising data exceeds the upper limit. [since 20] |

**Example**

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
        advertiseName:"testName" // You need to apply for the ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME permission.
    };
    let advResponse: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // You need to apply for the ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME permission.
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

**Since:** 11

**Required permissions:** 

- API version11  to  22: ohos.permission.ACCESS_BLUETOOTH

- API version23 and later: ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advertisingParams | AdvertisingParams | Yes | Indicates the params for BLE advertising. |
| callback | AsyncCallback&lt;int> | Yes | the callback of advertise ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of advertising resources reaches the upper limit. [since 20] |
| 2900099 | Operation failed. |
| 2902054 | The length of the advertising data exceeds the upper limit. [since 20] |

**Example**

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
        advertiseName:"testName" // You need to apply for the ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME permission.
    };
    let advResponse: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // You need to apply for the ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME permission.
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

**Since:** 11

**Required permissions:** 

- API version11  to  22: ohos.permission.ACCESS_BLUETOOTH

- API version23 and later: ohos.permission.ACCESS_BLUETOOTH or (ohos.permission.ACCESS_BLUETOOTH and * ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME)

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advertisingParams | AdvertisingParams | Yes | Indicates the param for BLE advertising. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900010 | The number of advertising resources reaches the upper limit. [since 20] |
| 2900099 | Operation failed. |
| 2902054 | The length of the advertising data exceeds the upper limit. [since 20] |

**Example**

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
        advertiseName:"testName" // You need to apply for the ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME permission.
    };
    let advResponse: ble.AdvertiseData = {
        serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData:[manufactureDataUnit],
        serviceData:[serviceDataUnit],
        advertiseName:"testName" // You need to apply for the ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME permission.
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

