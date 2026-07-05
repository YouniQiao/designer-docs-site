# HceService

A class for NFC host application. <p>The NFC host application use this class, then Nfc service can access the application installation information and connect to services of the application.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.CardEmulation

## Modules to Import

```TypeScript
import { cardEmulation } from '@kit.ConnectivityKit';
```

## off('hceCmd')

```TypeScript
off(type: 'hceCmd', callback?: AsyncCallback<int[]>): void
```

Unsubscribe the event to receive the APDU data.

**Since:** 18

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hceCmd' | Yes | The type to unregister event. |
| callback | AsyncCallback&lt;int[]> | No | The callback used to listen for the event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { hilog } from '@kit.PerformanceAnalysisKit';
import { cardEmulation } from '@kit.ConnectivityKit';
import { AsyncCallback } from '@kit.BasicServicesKit';
import { bundleManager, AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

let hceService: cardEmulation.HceService = new cardEmulation.HceService();
let element: bundleManager.ElementName;
const apduCallback: AsyncCallback<number[]> = (err, data) => {
  // Implement data processing and handle exceptions.
  console.info("AsyncCallback got apdu data");
};

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, param: AbilityConstant.LaunchParam) {
    hilog.info(0x0000, 'testHce', '%{public}s', 'Ability onCreate');
    element = {
      bundleName: want.bundleName ?? '',
      abilityName: want.abilityName ?? '',
      moduleName: want.moduleName
    }
    hceService.on('hceCmd', apduCallback);
  }
  onDestroy() {
    hilog.info(0x0000, 'testHce', '%{public}s', 'Ability onDestroy');
    hceService.off('hceCmd', apduCallback);
    hceService.stop(element);
  }
  // Other functions in the lifecycle
}

```

## offHceCmd

```TypeScript
offHceCmd(callback?: AsyncCallback<int[]>): void
```

Unsubscribe the event to receive the APDU data.

**Since:** 23

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int[]> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

## on('hceCmd')

```TypeScript
on(type: 'hceCmd', callback: AsyncCallback<int[]>): void
```

register HCE event to receive the APDU data.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hceCmd' | Yes | The type to register. |
| callback | AsyncCallback&lt;int[]> | Yes | Callback used to listen to HCE data that local device received. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |

## onHceCmd

```TypeScript
onHceCmd(callback: AsyncCallback<int[]>): void
```

register HCE event to receive the APDU data.

**Since:** 23

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int[]> | Yes | Callback used to listen to HCE data that local device received. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

## sendResponse

```TypeScript
sendResponse(responseApdu: number[]): void
```

Sends a response APDU to the remote device. <p>This method is used by a host application when swiping card.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.nfc.cardEmulation/cardEmulation.HceService#transmit

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| responseApdu | number[] | Yes | Indicates the response, which is a byte array. |

## start

```TypeScript
start(elementName: ElementName, aidList: string[]): void
```

Starts the HCE, register more aids and allows this application to be preferred while in foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | The element name of the service ability |
| aidList | string[] | Yes | The aid list to be registered by this service, allowed to be empty. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100301 | Card emulation running state is abnormal in service. |

## startHCE

```TypeScript
startHCE(aidList: string[]): boolean
```

start HCE

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.nfc.cardEmulation/cardEmulation.HceService#start

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aidList | string[] | Yes | The aid list to be registered by this service |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if HCE is enabled or has been enabled; returns false otherwise. |

## stop

```TypeScript
stop(elementName: ElementName): void
```

Stops the HCE, and unset the preferred service while in foreground.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | The element name of the service ability |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100301 | Card emulation running state is abnormal in service. |

## stopHCE

```TypeScript
stopHCE(): boolean
```

stop HCE

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.nfc.cardEmulation/cardEmulation.HceService#stop

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if HCE is disabled or has been disabled; returns false otherwise. |

## transmit

```TypeScript
transmit(response: int[]): Promise<void>
```

Sends a response APDU to the remote device.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | int[] | Yes | Indicates the response to send, which is a byte array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100301 | Card emulation running state is abnormal in service. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { cardEmulation } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let hceService: cardEmulation.HceService = new cardEmulation.HceService();

// Data to be sent by the application. The following data is for reference only.
const responseData = [0x1, 0x2];
hceService.transmit(responseData).then(() => {
  // Process the promise.
  console.info("transmit Promise success.");
}).catch((err: BusinessError) => {
  console.error("transmit Promise error:", err);
});


// Applicable to lite wearables
import cardEmulation from '@ohos.nfc.cardEmulation';

let hceService = new cardEmulation.HceService();

// Data to be sent by the application. The following data is for reference only.
let responseData = [0x1, 0x2];
hceService.transmit(responseData).then(() => {
  // Process the promise.
  console.info("transmit Promise success.");
});
console.info("transmit Promise end.");

```

## transmit

```TypeScript
transmit(response: int[], callback: AsyncCallback<void>): void
```

Sends a response APDU to the remote device.

**Since:** 12

**Required permissions:** 

 ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | int[] | Yes | Indicates the response to send, which is a byte array. |
| callback | AsyncCallback&lt;void> | Yes | The callback |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100301 | Card emulation running state is abnormal in service. |

**Example**

```TypeScript
// Applicable to devices other than lite wearables
import { cardEmulation } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let hceService: cardEmulation.HceService = new cardEmulation.HceService();

// Data to be sent by the application. The following data is for reference only.
try {
  const responseData = [0x1, 0x2];

  hceService.transmit(responseData, (err : BusinessError)=> {
    if (err) {
      console.error(`transmit AsyncCallback err Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info("transmit AsyncCallback success.");
    }
  });
} catch (error) {
  console.error(`transmit AsyncCallback catch Code: ${(error as BusinessError).code}, ` +
    `message: ${(error as BusinessError).message}`);
}


// Applicable to lite wearables
import cardEmulation from '@ohos.nfc.cardEmulation';

let hceService = new cardEmulation.HceService();

// Data to be sent by the application. The following data is for reference only.
let responseData = [0x1, 0x2];
hceService.transmit(responseData, () => {
  console.info("transmit Promise success.");
});
console.info("transmit Promise end.");

```

