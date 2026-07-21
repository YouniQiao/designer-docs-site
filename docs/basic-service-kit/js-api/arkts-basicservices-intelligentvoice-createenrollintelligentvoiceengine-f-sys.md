# createEnrollIntelligentVoiceEngine (System API)

## Modules to Import

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

<a id="createenrollintelligentvoiceengine"></a>
## createEnrollIntelligentVoiceEngine

```TypeScript
function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor, callback: AsyncCallback<EnrollIntelligentVoiceEngine>): void
```

Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the EnrollIntelligentVoiceEngine instance.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-intelligentVoice-function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor, callback: AsyncCallback<EnrollIntelligentVoiceEngine>): void--><!--Device-intelligentVoice-function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor, callback: AsyncCallback<EnrollIntelligentVoiceEngine>): void-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [EnrollIntelligentVoiceEngineDescriptor](arkts-basicservices-intelligentvoice-enrollintelligentvoiceenginedescriptor-i-sys.md) | Yes | descriptor indicates enroll intelligent voice engine descriptor. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;EnrollIntelligentVoiceEngine&gt; | Yes | the callback used to return the EnrollIntelligentVoiceEngine instance. |

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

let engineDescriptor: intelligentVoice.EnrollIntelligentVoiceEngineDescriptor = {
  wakeupPhrase: 'Xiaohua Xiaohua',
}
let enrollIntelligentVoiceEngine: intelligentVoice.EnrollIntelligentVoiceEngine | null = null;
intelligentVoice.createEnrollIntelligentVoiceEngine(engineDescriptor, (err: BusinessError, data: intelligentVoice.EnrollIntelligentVoiceEngine) => {
  if (err) {
    console.error(`Failed to create enrollIntelligentVoice engine, Code:${err.code}, message:${err.message}`);
  } else {
    console.info(`Succeeded in creating enrollIntelligentVoice engine.`);
    enrollIntelligentVoiceEngine = data;
  }
});

```


<a id="createenrollintelligentvoiceengine-1"></a>
## createEnrollIntelligentVoiceEngine

```TypeScript
function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor): Promise<EnrollIntelligentVoiceEngine>
```

Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses a promise to return the EnrollIntelligentVoiceEngine instance.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-intelligentVoice-function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor): Promise<EnrollIntelligentVoiceEngine>--><!--Device-intelligentVoice-function createEnrollIntelligentVoiceEngine(descriptor: EnrollIntelligentVoiceEngineDescriptor): Promise<EnrollIntelligentVoiceEngine>-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [EnrollIntelligentVoiceEngineDescriptor](arkts-basicservices-intelligentvoice-enrollintelligentvoiceenginedescriptor-i-sys.md) | Yes | descriptor indicates enroll intelligent voice engine descriptor. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EnrollIntelligentVoiceEngine&gt; | the promise used to return the EnrollIntelligentVoiceEngine instance. |

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

let engineDescriptor: intelligentVoice.EnrollIntelligentVoiceEngineDescriptor = {
  wakeupPhrase: 'Xiaohua Xiaohua',
}
let enrollIntelligentVoiceEngine: intelligentVoice.EnrollIntelligentVoiceEngine | null = null;
intelligentVoice.createEnrollIntelligentVoiceEngine(engineDescriptor).then((data: intelligentVoice.EnrollIntelligentVoiceEngine) => {
  enrollIntelligentVoiceEngine = data;
  console.info(`Succeeded in creating enrollIntelligentVoice engine.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to create enrollIntelligentVoice engine, Code:${err.code}, message:${err.message}`);
});

```

