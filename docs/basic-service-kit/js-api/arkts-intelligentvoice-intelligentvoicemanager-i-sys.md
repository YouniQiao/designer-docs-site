# IntelligentVoiceManager

Implements intelligent voice management.

**Since:** 10

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

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;IntelligentVoiceEngineType> | array of supported IntelligentVoiceEngineType. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

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

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceChange' | Yes | Type of the event to listen for. Only the serviceChange event is supported. |
| callback | Callback&lt;ServiceChangeType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**Example**

```TypeScript
if (intelligentVoiceManager != null) {
  intelligentVoiceManager.off('serviceChange');
}

```

## offServiceChange

```TypeScript
offServiceChange(callback?: Callback<ServiceChangeType>): void
```

Unsubscribes service change events.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ServiceChangeType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

## on('serviceChange')

```TypeScript
on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void
```

Subscribes service change events. When the state of intelligent voice service changes, the callback is invoked.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceChange' | Yes | Type of the event to listen for. Only the serviceChange event is supported. |
| callback | Callback&lt;ServiceChangeType> | Yes | Callback is invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**Example**

```TypeScript
if (intelligentVoiceManager != null) {
  intelligentVoiceManager.on('serviceChange', (serviceChangeType: intelligentVoice.ServiceChangeType) => {});
}

```

## onServiceChange

```TypeScript
onServiceChange(callback: Callback<ServiceChangeType>): void
```

Subscribes service change events. When the state of intelligent voice service changes, the callback is invoked.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ServiceChangeType> | Yes | Callback is invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

