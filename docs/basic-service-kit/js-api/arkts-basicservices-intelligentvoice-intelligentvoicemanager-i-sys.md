# IntelligentVoiceManager (System API)

Implements intelligent voice management.

**Since:** 10

<!--Device-intelligentVoice-interface IntelligentVoiceManager--><!--Device-intelligentVoice-interface IntelligentVoiceManager-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

## getCapabilityInfo

```TypeScript
getCapabilityInfo(): Array<IntelligentVoiceEngineType>
```

Obtains capability information.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-IntelligentVoiceManager-getCapabilityInfo(): Array<IntelligentVoiceEngineType>--><!--Device-IntelligentVoiceManager-getCapabilityInfo(): Array<IntelligentVoiceEngineType>-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<IntelligentVoiceEngineType> | array of supported IntelligentVoiceEngineType. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
if (intelligentVoiceManager != null) {
  let info = intelligentVoiceManager.getCapabilityInfo();
}

```

## off('serviceChange')

```TypeScript
off(type: 'serviceChange', callback?: Callback<ServiceChangeType>): void
```

Unsubscribes service change events.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-IntelligentVoiceManager-off(type: 'serviceChange', callback?: Callback<ServiceChangeType>): void--><!--Device-IntelligentVoiceManager-off(type: 'serviceChange', callback?: Callback<ServiceChangeType>): void-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceChange' | Yes | Type of the event to listen for. Only the serviceChange event is supported. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ServiceChangeType> | No | Callback is invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
if (intelligentVoiceManager != null) {
  intelligentVoiceManager.off('serviceChange');
}

```

## on('serviceChange')

```TypeScript
on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void
```

Subscribes service change events. When the state of intelligent voice service changes,the callback is invoked.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_INTELLIGENT_VOICE

<!--Device-IntelligentVoiceManager-on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void--><!--Device-IntelligentVoiceManager-on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceChange' | Yes | Type of the event to listen for. Only the serviceChange event is supported. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ServiceChangeType> | Yes | Callback is invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
if (intelligentVoiceManager != null) {
  intelligentVoiceManager.on('serviceChange', (serviceChangeType: intelligentVoice.ServiceChangeType) => {});
}

```

