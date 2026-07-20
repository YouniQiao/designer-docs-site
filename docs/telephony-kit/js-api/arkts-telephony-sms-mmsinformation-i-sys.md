# MmsInformation (System API)

Defines the MMS message information.

**Since:** 8

<!--Device-sms-export interface MmsInformation--><!--Device-sms-export interface MmsInformation-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## attachment

```TypeScript
attachment?: Array<MmsAttachment>
```

Indicates the attachment for the MMS message.

**Type:** Array<MmsAttachment>

**Since:** 8

<!--Device-MmsInformation-attachment?: Array<MmsAttachment>--><!--Device-MmsInformation-attachment?: Array<MmsAttachment>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## messageType

```TypeScript
messageType: MessageType
```

Indicates the message type for the MMS message.

**Type:** MessageType

**Since:** 8

<!--Device-MmsInformation-messageType: MessageType--><!--Device-MmsInformation-messageType: MessageType-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## mmsType

```TypeScript
mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd
```

Indicates the PDU header type for the MMS message.

**Type:** MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd

**Since:** 8

<!--Device-MmsInformation-mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd--><!--Device-MmsInformation-mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

