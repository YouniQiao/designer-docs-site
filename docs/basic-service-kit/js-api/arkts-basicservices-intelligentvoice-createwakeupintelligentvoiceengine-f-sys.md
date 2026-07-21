# createWakeupIntelligentVoiceEngine (System API)

## Modules to Import

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

<a id="createwakeupintelligentvoiceengine"></a>
## createWakeupIntelligentVoiceEngine

```TypeScript
function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor, callback: AsyncCallback<WakeupIntelligentVoiceEngine>): void
```

Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the WakeupIntelligentVoiceEngine instance.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-intelligentVoice-function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor, callback: AsyncCallback<WakeupIntelligentVoiceEngine>): void--><!--Device-intelligentVoice-function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor, callback: AsyncCallback<WakeupIntelligentVoiceEngine>): void-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [WakeupIntelligentVoiceEngineDescriptor](arkts-basicservices-intelligentvoice-wakeupintelligentvoiceenginedescriptor-i-sys.md) | Yes | descriptor indicates wakeup intelligent voice engine descriptor. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;WakeupIntelligentVoiceEngine&gt; | Yes | the callback used to return the WakeupIntelligentVoiceEngine instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| [22700101](../../apis-basic-services-kit/errorcode-intelligentVoice.md#22700101-insufficient-memory) | No memory. |
| [22700102](../../apis-basic-services-kit/errorcode-intelligentVoice.md#22700102-invalid-parameter) | Invalid parameter. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wakeupEngineDescriptor: intelligentVoice.WakeupIntelligentVoiceEngineDescriptor = {
  needReconfirm: true,
  wakeupPhrase: 'Xiaohua Xiaohua',
}
let wakeupIntelligentVoiceEngine: intelligentVoice.WakeupIntelligentVoiceEngine | null = null;
intelligentVoice.createWakeupIntelligentVoiceEngine(wakeupEngineDescriptor, (err: BusinessError, data: intelligentVoice.WakeupIntelligentVoiceEngine) => {
  if (err) {
    console.error(`Failed to create wakeupIntelligentVoice engine, Code:${err.code}, message:${err.message}`);
  } else {
    console.info(`Succeeded in creating wakeupIntelligentVoice engine.`);
    wakeupIntelligentVoiceEngine = data;
  }
});

```


<a id="createwakeupintelligentvoiceengine-1"></a>
## createWakeupIntelligentVoiceEngine

```TypeScript
function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor): Promise<WakeupIntelligentVoiceEngine>
```

Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses a promise to return the WakeupIntelligentVoiceEngine instance.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-intelligentVoice-function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor): Promise<WakeupIntelligentVoiceEngine>--><!--Device-intelligentVoice-function createWakeupIntelligentVoiceEngine(descriptor: WakeupIntelligentVoiceEngineDescriptor): Promise<WakeupIntelligentVoiceEngine>-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [WakeupIntelligentVoiceEngineDescriptor](arkts-basicservices-intelligentvoice-wakeupintelligentvoiceenginedescriptor-i-sys.md) | Yes | descriptor indicates wakeup intelligent voice engine descriptor. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WakeupIntelligentVoiceEngine&gt; | the promise used to return the WakeupIntelligentVoiceEngine instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| [22700101](../../apis-basic-services-kit/errorcode-intelligentVoice.md#22700101-insufficient-memory) | No memory. |
| [22700102](../../apis-basic-services-kit/errorcode-intelligentVoice.md#22700102-invalid-parameter) | Invalid parameter. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let wakeupEngineDescriptor: intelligentVoice.WakeupIntelligentVoiceEngineDescriptor = {
  needReconfirm: true,
  wakeupPhrase: 'Xiaohua Xiaohua',
}
let wakeupIntelligentVoiceEngine: intelligentVoice.WakeupIntelligentVoiceEngine | null = null;
intelligentVoice.createWakeupIntelligentVoiceEngine(wakeupEngineDescriptor).then((data: intelligentVoice.WakeupIntelligentVoiceEngine) => {
  wakeupIntelligentVoiceEngine = data;
  console.info(`Succeeded in creating wakeupIntelligentVoice engine.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to create wakeupIntelligentVoice engine, Code:${err.code}, message:${err.message}`);
});

```

