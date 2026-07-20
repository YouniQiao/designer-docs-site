# @ohos.ai.intelligentVoice

**Since:** 10

<!--Device-unnamed-declare namespace intelligentVoice--><!--Device-unnamed-declare namespace intelligentVoice-End-->

**System capability:** SystemCapability.AI.IntelligentVoice.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { intelligentVoice } from '@kit.BasicServicesKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createEnrollIntelligentVoiceEngine](arkts-basicservices-intelligentvoice-createenrollintelligentvoiceengine-f-sys.md#createenrollintelligentvoiceengine-1) | Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the EnrollIntelligentVoiceEngine instance. |
| [createEnrollIntelligentVoiceEngine](arkts-basicservices-intelligentvoice-createenrollintelligentvoiceengine-f-sys.md#createenrollintelligentvoiceengine-2) | Obtains an {@link EnrollIntelligentVoiceEngine} instance. This method uses a promise to return the EnrollIntelligentVoiceEngine instance. |
| [createWakeupIntelligentVoiceEngine](arkts-basicservices-intelligentvoice-createwakeupintelligentvoiceengine-f-sys.md#createwakeupintelligentvoiceengine-1) | Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses an asynchronous callback to return the WakeupIntelligentVoiceEngine instance. |
| [createWakeupIntelligentVoiceEngine](arkts-basicservices-intelligentvoice-createwakeupintelligentvoiceengine-f-sys.md#createwakeupintelligentvoiceengine-2) | Obtains an {@link WakeupIntelligentVoiceEngine} instance. This method uses a promise to return the WakeupIntelligentVoiceEngine instance. |
| [getIntelligentVoiceManager](arkts-basicservices-intelligentvoice-getintelligentvoicemanager-f-sys.md#getintelligentvoicemanager-1) | Obtains an {@link IntelligentVoiceManager} instance. |
| [getWakeupManager](arkts-basicservices-intelligentvoice-getwakeupmanager-f-sys.md#getwakeupmanager-1) | Obtains an {@link WakeupManager} instance. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [EnrollCallbackInfo](arkts-basicservices-intelligentvoice-enrollcallbackinfo-i-sys.md) | Describes enroll callback information. |
| [EnrollEngineConfig](arkts-basicservices-intelligentvoice-enrollengineconfig-i-sys.md) | Describes enroll engine config. |
| [EnrollIntelligentVoiceEngine](arkts-basicservices-intelligentvoice-enrollintelligentvoiceengine-i-sys.md) | Implements enroll intelligent voice engine. |
| [EnrollIntelligentVoiceEngineDescriptor](arkts-basicservices-intelligentvoice-enrollintelligentvoiceenginedescriptor-i-sys.md) | Describes enroll intelligent voice engine. |
| [EvaluationResult](arkts-basicservices-intelligentvoice-evaluationresult-i-sys.md) | Describes evaluation result. |
| [IntelligentVoiceManager](arkts-basicservices-intelligentvoice-intelligentvoicemanager-i-sys.md) | Implements intelligent voice management. |
| [UploadFile](arkts-basicservices-intelligentvoice-uploadfile-i-sys.md) | Describes upload file information. |
| [WakeupHapInfo](arkts-basicservices-intelligentvoice-wakeuphapinfo-i-sys.md) | Describes wakeup hap information. |
| [WakeupIntelligentVoiceEngine](arkts-basicservices-intelligentvoice-wakeupintelligentvoiceengine-i-sys.md) | Implements wakeup intelligent voice engine. |
| [WakeupIntelligentVoiceEngineCallbackInfo](arkts-basicservices-intelligentvoice-wakeupintelligentvoiceenginecallbackinfo-i-sys.md) | Describes wakeup intelligent voice engine callback information. |
| [WakeupIntelligentVoiceEngineDescriptor](arkts-basicservices-intelligentvoice-wakeupintelligentvoiceenginedescriptor-i-sys.md) | Describes wakeup intelligent voice engine. |
| [WakeupManager](arkts-basicservices-intelligentvoice-wakeupmanager-i-sys.md) | Implements wakeup management. |
| [WakeupSourceFile](arkts-basicservices-intelligentvoice-wakeupsourcefile-i-sys.md) | Describes wakeup source file information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [CapturerChannel](arkts-basicservices-intelligentvoice-capturerchannel-e-sys.md) | Enumerates capturer channel. |
| [EnrollResult](arkts-basicservices-intelligentvoice-enrollresult-e-sys.md) | Enumerates enroll result. |
| [EvaluationResultCode](arkts-basicservices-intelligentvoice-evaluationresultcode-e-sys.md) | Enumerates evaluation result code. |
| [IntelligentVoiceEngineType](arkts-basicservices-intelligentvoice-intelligentvoiceenginetype-e-sys.md) | Enumerates intelligent voice engine type. |
| [IntelligentVoiceErrorCode](arkts-basicservices-intelligentvoice-intelligentvoiceerrorcode-e-sys.md) | Enumerates intelligent voice error code. |
| [SensibilityType](arkts-basicservices-intelligentvoice-sensibilitytype-e-sys.md) | Enumerates sensibility type. |
| [ServiceChangeType](arkts-basicservices-intelligentvoice-servicechangetype-e-sys.md) | Enumerates service change type. |
| [UploadFileType](arkts-basicservices-intelligentvoice-uploadfiletype-e-sys.md) | Enumerates upload file type. |
| [WakeupIntelligentVoiceEventType](arkts-basicservices-intelligentvoice-wakeupintelligentvoiceeventtype-e-sys.md) | Enumerates wakeup intelligent voice event type. |
<!--DelEnd-->

