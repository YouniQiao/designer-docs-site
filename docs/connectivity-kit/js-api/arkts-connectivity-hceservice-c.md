# HceService

A class for NFC host application.
<p>The NFC host application use this class, then Nfc service can access the application
installation information and connect to services of the application.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.CardEmulation

## Modules to Import

```TypeScript
import { cardEmulation } from '@kit.ConnectivityKit';
```

## off('hceCmd')

```TypeScript
off(type: 'hceCmd', callback?: AsyncCallback<number[]>): void
```

Unsubscribe the event to receive the APDU data.

**Since:** 18

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hceCmd' | Yes | The type to unregister event. |
| callback | AsyncCallback&lt;number[]&gt; | No | The callback used to listen for the event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

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

## on('hceCmd')

```TypeScript
on(type: 'hceCmd', callback: AsyncCallback<number[]>): void
```

register HCE event to receive the APDU data.

**Since:** 12

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hceCmd' | Yes | The type to register. |
| callback | AsyncCallback&lt;number[]&gt; | Yes | Callback used to listen to HCE data that local device received. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## sendResponse

```TypeScript
sendResponse(responseApdu: number[]): void
```

Sends a response APDU to the remote device.
<p>This method is used by a host application when swiping card.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** transmit

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Model restriction:** This API can be used only in the stage model.

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

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | The element name of the service ability |
| aidList | string[] | Yes | The aid list to be registered by this service, allowed to be empty. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100301](../errorcode-nfc.md#3100301-abnormal-nfc-card-emulation-status) | Card emulation running state is abnormal in service. |

## startHCE

```TypeScript
startHCE(aidList: string[]): boolean
```

start HCE

**Since:** 8

**Deprecated since:** 9

**Substitutes:** start

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Model restriction:** This API can be used only in the stage model.

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

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | The element name of the service ability |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100301](../errorcode-nfc.md#3100301-abnormal-nfc-card-emulation-status) | Card emulation running state is abnormal in service. |

## stopHCE

```TypeScript
stopHCE(): boolean
```

stop HCE

**Since:** 8

**Deprecated since:** 9

**Substitutes:** stop

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if HCE is disabled or has been disabled; returns false otherwise. |

## transmit

```TypeScript
transmit(response: number[]): Promise<void>
```

Sends a response APDU to the remote device.

**Since:** 12

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | number[] | Yes | Indicates the response to send, which is a byte array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100301](../errorcode-nfc.md#3100301-abnormal-nfc-card-emulation-status) | Card emulation running state is abnormal in service. |

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

```

```TypeScript
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
transmit(response: number[], callback: AsyncCallback<void>): void
```

Sends a response APDU to the remote device.

**Since:** 12

**Required permissions:** ohos.permission.NFC_CARD_EMULATION

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.CardEmulation

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | number[] | Yes | Indicates the response to send, which is a byte array. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100301](../errorcode-nfc.md#3100301-abnormal-nfc-card-emulation-status) | Card emulation running state is abnormal in service. |

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

```

```TypeScript
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

