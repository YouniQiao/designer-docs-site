# @ohos.ai.intelligentVoice

**起始版本：** 10

**系统能力：** SystemCapability.AI.IntelligentVoice.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[createEnrollIntelligentVoiceEngine](arkts-intelligentvoice-createenrollintelligentvoiceengine-f-sys.md#createEnrollIntelligentVoiceEngine-1) | Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the EnrollIntelligentVoiceEngine instance. |
| <!--DelRow-->[createEnrollIntelligentVoiceEngine](arkts-intelligentvoice-createenrollintelligentvoiceengine-f-sys.md#createEnrollIntelligentVoiceEngine-2) | Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses a promise to return the EnrollIntelligentVoiceEngine instance. |
| <!--DelRow-->[createWakeupIntelligentVoiceEngine](arkts-intelligentvoice-createwakeupintelligentvoiceengine-f-sys.md#createWakeupIntelligentVoiceEngine-1) | Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the WakeupIntelligentVoiceEngine instance. |
| <!--DelRow-->[createWakeupIntelligentVoiceEngine](arkts-intelligentvoice-createwakeupintelligentvoiceengine-f-sys.md#createWakeupIntelligentVoiceEngine-2) | Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses a promise to return the WakeupIntelligentVoiceEngine instance. |
| <!--DelRow-->[getIntelligentVoiceManager](arkts-intelligentvoice-getintelligentvoicemanager-f-sys.md#getIntelligentVoiceManager-1) | Obtains an {@link IntelligentVoiceManager} instance. |
| <!--DelRow-->[getWakeupManager](arkts-intelligentvoice-getwakeupmanager-f-sys.md#getWakeupManager-1) | Obtains an {@link WakeupManager} instance. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EnrollCallbackInfo](arkts-intelligentvoice-enrollcallbackinfo-i-sys.md) | Describes enroll callback information. |
| <!--DelRow-->[EnrollEngineConfig](arkts-intelligentvoice-enrollengineconfig-i-sys.md) | Describes enroll engine config. |
| <!--DelRow-->[EnrollIntelligentVoiceEngine](arkts-intelligentvoice-enrollintelligentvoiceengine-i-sys.md) | Implements enroll intelligent voice engine. |
| <!--DelRow-->[EnrollIntelligentVoiceEngineDescriptor](arkts-intelligentvoice-enrollintelligentvoiceenginedescriptor-i-sys.md) | Describes enroll intelligent voice engine. |
| <!--DelRow-->[EvaluationResult](arkts-intelligentvoice-evaluationresult-i-sys.md) | Describes evaluation result. |
| <!--DelRow-->[IntelligentVoiceManager](arkts-intelligentvoice-intelligentvoicemanager-i-sys.md) | Implements intelligent voice management. |
| <!--DelRow-->[UploadFile](arkts-intelligentvoice-uploadfile-i-sys.md) | Describes upload file information. |
| <!--DelRow-->[WakeupHapInfo](arkts-intelligentvoice-wakeuphapinfo-i-sys.md) | Describes wakeup hap information. |
| <!--DelRow-->[WakeupIntelligentVoiceEngine](arkts-intelligentvoice-wakeupintelligentvoiceengine-i-sys.md) | Implements wakeup intelligent voice engine. |
| <!--DelRow-->[WakeupIntelligentVoiceEngineCallbackInfo](arkts-intelligentvoice-wakeupintelligentvoiceenginecallbackinfo-i-sys.md) | Describes wakeup intelligent voice engine callback information. |
| <!--DelRow-->[WakeupIntelligentVoiceEngineDescriptor](arkts-intelligentvoice-wakeupintelligentvoiceenginedescriptor-i-sys.md) | Describes wakeup intelligent voice engine. |
| <!--DelRow-->[WakeupManager](arkts-intelligentvoice-wakeupmanager-i-sys.md) | Implements wakeup management. |
| <!--DelRow-->[WakeupSourceFile](arkts-intelligentvoice-wakeupsourcefile-i-sys.md) | Describes wakeup source file information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CapturerChannel](arkts-intelligentvoice-capturerchannel-e-sys.md) | Enumerates capturer channel. |
| <!--DelRow-->[EnrollResult](arkts-intelligentvoice-enrollresult-e-sys.md) | Enumerates enroll result. |
| <!--DelRow-->[EvaluationResultCode](arkts-intelligentvoice-evaluationresultcode-e-sys.md) | Enumerates evaluation result code. |
| <!--DelRow-->[IntelligentVoiceEngineType](arkts-intelligentvoice-intelligentvoiceenginetype-e-sys.md) | Enumerates intelligent voice engine type. |
| <!--DelRow-->[IntelligentVoiceErrorCode](arkts-intelligentvoice-intelligentvoiceerrorcode-e-sys.md) | Enumerates intelligent voice error code. |
| <!--DelRow-->[SensibilityType](arkts-intelligentvoice-sensibilitytype-e-sys.md) | Enumerates sensibility type. |
| <!--DelRow-->[ServiceChangeType](arkts-intelligentvoice-servicechangetype-e-sys.md) | Enumerates service change type. |
| <!--DelRow-->[UploadFileType](arkts-intelligentvoice-uploadfiletype-e-sys.md) | Enumerates upload file type. |
| <!--DelRow-->[WakeupIntelligentVoiceEventType](arkts-intelligentvoice-wakeupintelligentvoiceeventtype-e-sys.md) | Enumerates wakeup intelligent voice event type. |

