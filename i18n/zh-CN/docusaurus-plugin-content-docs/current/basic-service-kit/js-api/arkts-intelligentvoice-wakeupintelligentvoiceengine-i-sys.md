# WakeupIntelligentVoiceEngine

Implements wakeup intelligent voice engine.

**起始版本：** 10

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

## getParameter

```TypeScript
getParameter(key: string, callback: AsyncCallback<string>): void
```

Obtains the value of an intelligent voice parameter. This method uses an asynchronous callback to return the query result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | the key of the intelligent voice parameter whose value is to be obtained. |
| callback | AsyncCallback&lt;string> | 是 | the callback used to return the value of the intelligent voice parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).getParameter('key', (err: BusinessError, data: string) => {
    if (err) {
      console.error(`Failed to get parameter, Code:${err.code}, message:${err.message}`);
    } else {
      let param: string = data;
      console.info(`Succeeded in getting parameter, param:${param}`);
    }
  });
}

```

## getParameter

```TypeScript
getParameter(key: string): Promise<string>
```

Obtains the value of an intelligent voice parameter. This method uses a promise to return the query result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | the key of the intelligent voice parameter whose value is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | the promise used to return the value of the intelligent voice parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).getParameter('key').then((data: string) => {
    let param: string = data;
    console.info(`Succeeded in getting parameter, param:${param}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get parameter, Code:${err.code}, message:${err.message}`);
  });
}

```

## getPcm

```TypeScript
getPcm(): Promise<ArrayBuffer>
```

Gets pulse-code modulation audio. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | the promise used to return the pulse-code modulation audio. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700101 | No memory. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).getPcm().then((data: ArrayBuffer) => {
    let param: ArrayBuffer = data;
    console.info(`Succeeded in getting pcm, param:${param}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get pcm, Code:${err.code}, message:${err.message}`);
  });
}

```

## getSupportedRegions

```TypeScript
getSupportedRegions(callback: AsyncCallback<Array<string>>): void
```

Obtains the supported regions, This method uses an asynchronous callback to return the query result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | 是 | the callback used to return the supported regions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).getSupportedRegions((err: BusinessError, data: Array<string>) => {
    if (err) {
      console.error(`Failed to get supported regions, Code:${err.code}, message:${err.message}`);
    } else {
      let regions: Array<string> = data;
      console.info(`Succeeded in getting supported regions, regions:${regions}.`);
    }
  });
}

```

## getSupportedRegions

```TypeScript
getSupportedRegions(): Promise<Array<string>>
```

Obtains the supported regions, This method uses a promise to return the query result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | the promise used to return the supported regions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).getSupportedRegions().then((data: Array<string>) => {
    let regions: Array<string> = data;
    console.info(`Succeeded in getting supported regions, regions:${regions}.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to get supported regions, Code:${err.code}, message:${err.message}`);
  });
}

```

## off('wakeupIntelligentVoiceEvent')

```TypeScript
off(type: 'wakeupIntelligentVoiceEvent', callback?: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void
```

Unsubscribes wakeup intelligent voice events.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wakeupIntelligentVoiceEvent' | 是 | Type of the event to listen for.  Only the wakeupIntelligentVoice event is supported. |
| callback | Callback&lt;WakeupIntelligentVoiceEngineCallbackInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

```TypeScript
if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).off('wakeupIntelligentVoiceEvent');
}

```

## offWakeupIntelligentVoiceEvent

```TypeScript
offWakeupIntelligentVoiceEvent(callback?: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void
```

Unsubscribes wakeup intelligent voice events.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WakeupIntelligentVoiceEngineCallbackInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

## on('wakeupIntelligentVoiceEvent')

```TypeScript
on(type: 'wakeupIntelligentVoiceEvent', callback: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void
```

Subscribes wakeup intelligent voice events. When wakeup intelligent voice events reach, the callback is invoked.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'wakeupIntelligentVoiceEvent' | 是 | Type of the event to listen for.  Only the wakeupIntelligentVoice event is supported. |
| callback | Callback&lt;WakeupIntelligentVoiceEngineCallbackInfo> | 是 | - the callback invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

```TypeScript
if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).on('wakeupIntelligentVoiceEvent',
    (info: intelligentVoice.WakeupIntelligentVoiceEngineCallbackInfo) => {
    let callbackInfo: intelligentVoice.WakeupIntelligentVoiceEngineCallbackInfo = info;
    console.info(`wakeup intelligentvoice event, info:${callbackInfo}`);
  });
}

```

## onWakeupIntelligentVoiceEvent

```TypeScript
onWakeupIntelligentVoiceEvent(callback: Callback<WakeupIntelligentVoiceEngineCallbackInfo>): void
```

Subscribes wakeup intelligent voice events. When wakeup intelligent voice events reach, the callback is invoked.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WakeupIntelligentVoiceEngineCallbackInfo> | 是 | - the callback invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

## read

```TypeScript
read(): Promise<ArrayBuffer>
```

Reads the buffer from wakeup engine. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | the promise used to return the buffer. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700101 | No memory. |
| 22700106 | Read failed. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).read().then((data: ArrayBuffer) => {
    let param: ArrayBuffer = data;
    console.info(`Succeeded in reading data, param:${param}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to read data, Code:${err.code}, message:${err.message}`);
  });
}

```

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the engine, This method uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | the callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).release((err: BusinessError) => {
    if (err) {
      console.error(`Failed to release wakeupIntelligentVoice engine, Code:${err.code}, message:${err.message}`);
    } else {
      console.info(`Succeeded in releasing wakeupIntelligentVoice engine.`);
    }
  });
}

```

## release

```TypeScript
release(): Promise<void>
```

Releases the engine, This method uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).release().then(() => {
    console.info(`Succeeded in releasing wakeupIntelligentVoice engine.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to release wakeupIntelligentVoice engine, Code:${err.code}, message:${err.message}`);
  });
}

```

## setParameter

```TypeScript
setParameter(key: string, value: string, callback: AsyncCallback<void>): void
```

Sets an intelligent voice parameter. This method uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | the key of the intelligent voice parameter to set. |
| value | string | 是 | the value of the intelligent voice parameter to set. |
| callback | AsyncCallback&lt;void> | 是 | the callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).setParameter('scene', '0', (err: BusinessError) => {
    if (err) {
      console.error(`Failed to set parameter, Code:${err.code}, message:${err.message}`);
    } else {
      console.info(`Succeeded in setting parameter`);
    }
  });
}

```

## setParameter

```TypeScript
setParameter(key: string, value: string): Promise<void>
```

Sets an intelligent voice parameter. This method uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | the key of the intelligent voice parameter to set. |
| value | string | 是 | the value of the intelligent voice parameter to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).setParameter('scene', '0').then(() => {
    console.info(`Succeeded in setting parameter`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to set parameter, Code:${err.code}, message:${err.message}`);
  });
}

```

## setSensibility

```TypeScript
setSensibility(sensibility: SensibilityType, callback: AsyncCallback<void>): void
```

Sets sensibility, This method uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sensibility | SensibilityType | 是 | sensibility to set. |
| callback | AsyncCallback&lt;void> | 是 | the callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).setSensibility(intelligentVoice.SensibilityType.LOW_SENSIBILITY, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to set sensibility, Code:${err.code}, message:${err.message}`);
    } else {
      console.info(`Succeeded in setting sensibility.`);
    }
  });
}

```

## setSensibility

```TypeScript
setSensibility(sensibility: SensibilityType): Promise<void>
```

Sets sensibility, This method uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sensibility | SensibilityType | 是 | sensibility to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).setSensibility(intelligentVoice.SensibilityType.LOW_SENSIBILITY).then(() => {
    console.info(`Succeeded in setting sensibility.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to set sensibility, Code:${err.code}, message:${err.message}`);
  });
}

```

## setWakeupHapInfo

```TypeScript
setWakeupHapInfo(info: WakeupHapInfo, callback: AsyncCallback<void>): void
```

Sets wakeup hap information, This method uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | WakeupHapInfo | 是 | info indicates wakeup hap information. |
| callback | AsyncCallback&lt;void> | 是 | the callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let hapInfo: intelligentVoice.WakeupHapInfo = {
  bundleName: 'com.wakeup',
  abilityName: 'WakeUpExtAbility',
}

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).setWakeupHapInfo(hapInfo, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to set wakeup hap info, Code:${err.code}, message:${err.message}`);
    } else {
      console.info(`Succeeded in setting wakeup hap info.`);
    }
  });
}

```

## setWakeupHapInfo

```TypeScript
setWakeupHapInfo(info: WakeupHapInfo): Promise<void>
```

Sets wakeup hap information, This method uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | WakeupHapInfo | 是 | info indicates wakeup hap information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| 22700102 | Invalid parameter. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let hapInfo: intelligentVoice.WakeupHapInfo = {
  bundleName: 'com.wakeup',
  abilityName: 'WakeUpExtAbility',
}
if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).setWakeupHapInfo(hapInfo).then(() => {
    console.info(`Succeeded in setting wakeup hap info.`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to set wakeup hap info, Code:${err.code}, message:${err.message}`);
  });
}

```

## startCapturer

```TypeScript
startCapturer(channels: int): Promise<void>
```

Starts the capturer. This method uses a promise to return the result.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE and ohos.permission.MICROPHONE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| channels | int | 是 | the channels needed in reading. The channels should be  greater than 0 and smaller than 16. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 22700102 | Invalid parameter. |
| 22700105 | Start capturer failed. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).startCapturer(1).then(() => {
    console.info(`Succeeded in starting capturer`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to start capturer, Code:${err.code}, message:${err.message}`);
  });
}

```

## stopCapturer

```TypeScript
stopCapturer(): Promise<void>
```

Stops the capturer. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 22700107 | System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

if (wakeupIntelligentVoiceEngine != null) {
  (wakeupIntelligentVoiceEngine as intelligentVoice.WakeupIntelligentVoiceEngine).stopCapturer().then(() => {
    console.info(`Succeeded in stopping capturer`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to stop capturer, Code:${err.code}, message:${err.message}`);
  });
}

```

