# IntelligentVoiceManager

Implements intelligent voice management.

**起始版本：** 10

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

## getCapabilityInfo

```TypeScript
getCapabilityInfo(): Array<IntelligentVoiceEngineType>
```

Obtains capability information.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;IntelligentVoiceEngineType> | array of supported IntelligentVoiceEngineType. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

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

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceChange' | 是 | Type of the event to listen for. Only the serviceChange event is supported. |
| callback | Callback&lt;ServiceChangeType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

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

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ServiceChangeType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

## on('serviceChange')

```TypeScript
on(type: 'serviceChange', callback: Callback<ServiceChangeType>): void
```

Subscribes service change events. When the state of intelligent voice service changes, the callback is invoked.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceChange' | 是 | Type of the event to listen for. Only the serviceChange event is supported. |
| callback | Callback&lt;ServiceChangeType> | 是 | Callback is invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

**示例：**

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

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_INTELLIGENT_VOICE

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ServiceChangeType> | 是 | Callback is invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

