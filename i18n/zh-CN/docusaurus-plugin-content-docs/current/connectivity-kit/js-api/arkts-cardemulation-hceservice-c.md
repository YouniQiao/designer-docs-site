# HceService

A class for NFC host application. <p>The NFC host application use this class, then Nfc service can access the application installation information and connect to services of the application.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

## 导入模块

```TypeScript
import { cardEmulation } from '@kit.ConnectivityKit';
```

## off('hceCmd')

```TypeScript
off(type: 'hceCmd', callback?: AsyncCallback<int[]>): void
```

Unsubscribe the event to receive the APDU data.

**起始版本：** 18

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hceCmd' | 是 | The type to unregister event. |
| callback | AsyncCallback&lt;int[]> | 否 | The callback used to listen for the event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

**示例：**

```TypeScript
// 适用于除轻量级智能穿戴产品之外其他设备
import { hilog } from '@kit.PerformanceAnalysisKit';
import { cardEmulation } from '@kit.ConnectivityKit';
import { AsyncCallback } from '@kit.BasicServicesKit';
import { bundleManager, AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';

let hceService: cardEmulation.HceService = new cardEmulation.HceService();
let element: bundleManager.ElementName;
const apduCallback: AsyncCallback<number[]> = (err, data) => {
  // 处理数据和异常
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
  // 生命周期内的其他功能
}

```

## offHceCmd

```TypeScript
offHceCmd(callback?: AsyncCallback<int[]>): void
```

Unsubscribe the event to receive the APDU data.

**起始版本：** 23

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int[]> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |

## on('hceCmd')

```TypeScript
on(type: 'hceCmd', callback: AsyncCallback<int[]>): void
```

register HCE event to receive the APDU data.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hceCmd' | 是 | The type to register. |
| callback | AsyncCallback&lt;int[]> | 是 | Callback used to listen to HCE data that local device received. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Invalid parameter. |
| 801 | Capability not supported. |

## onHceCmd

```TypeScript
onHceCmd(callback: AsyncCallback<int[]>): void
```

register HCE event to receive the APDU data.

**起始版本：** 23

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int[]> | 是 | Callback used to listen to HCE data that local device received. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

## sendResponse

```TypeScript
sendResponse(responseApdu: number[]): void
```

Sends a response APDU to the remote device. <p>This method is used by a host application when swiping card.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.nfc.cardEmulation/cardEmulation.HceService#transmit

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| responseApdu | number[] | 是 | Indicates the response, which is a byte array. |

## start

```TypeScript
start(elementName: ElementName, aidList: string[]): void
```

Starts the HCE, register more aids and allows this application to be preferred while in foreground.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementName | ElementName | 是 | The element name of the service ability |
| aidList | string[] | 是 | The aid list to be registered by this service, allowed to be empty. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.nfc.cardEmulation/cardEmulation.HceService#start

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aidList | string[] | 是 | The aid list to be registered by this service |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if HCE is enabled or has been enabled; returns false otherwise. |

## stop

```TypeScript
stop(elementName: ElementName): void
```

Stops the HCE, and unset the preferred service while in foreground.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| elementName | ElementName | 是 | The element name of the service ability |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.nfc.cardEmulation/cardEmulation.HceService#stop

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if HCE is disabled or has been disabled; returns false otherwise. |

## transmit

```TypeScript
transmit(response: int[]): Promise<void>
```

Sends a response APDU to the remote device.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | int[] | 是 | Indicates the response to send, which is a byte array. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100301 | Card emulation running state is abnormal in service. |

**示例：**

```TypeScript
// 适用于除轻量级智能穿戴产品之外其他设备
import { cardEmulation } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let hceService: cardEmulation.HceService = new cardEmulation.HceService();

// 应用程序实际想要发送的数据， 此处仅作为示例
const responseData = [0x1, 0x2];
hceService.transmit(responseData).then(() => {
  // 处理 promise 的回调
  console.info("transmit Promise success.");
}).catch((err: BusinessError) => {
  console.error("transmit Promise error:", err);
});


// 适用于轻量级智能穿戴设备
import cardEmulation from '@ohos.nfc.cardEmulation';

let hceService = new cardEmulation.HceService();

// 应用程序实际想要发送的数据， 此处仅作为示例
let responseData = [0x1, 0x2];
hceService.transmit(responseData).then(() => {
  // 处理 promise 的回调
  console.info("transmit Promise success.");
});
console.info("transmit Promise end.");

```

## transmit

```TypeScript
transmit(response: int[], callback: AsyncCallback<void>): void
```

Sends a response APDU to the remote device.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_CARD_EMULATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.CardEmulation

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | int[] | 是 | Indicates the response to send, which is a byte array. |
| callback | AsyncCallback&lt;void> | 是 | The callback |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100301 | Card emulation running state is abnormal in service. |

**示例：**

```TypeScript
// 适用于除轻量级智能穿戴产品之外其他设备
import { cardEmulation } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let hceService: cardEmulation.HceService = new cardEmulation.HceService();

// 应用程序实际想要发送的数据， 此处仅作为示例
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


// 适用于轻量级智能穿戴设备
import cardEmulation from '@ohos.nfc.cardEmulation';

let hceService = new cardEmulation.HceService();

// 应用程序实际想要发送的数据， 此处仅作为示例
let responseData = [0x1, 0x2];
hceService.transmit(responseData, () => {
  console.info("transmit Promise success.");
});
console.info("transmit Promise end.");

```

