# MmsInformation (System API)

Defines the MMS message information.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { sms } from '@ohos.telephony.sms';
```

## attachment

```TypeScript
attachment?: Array<MmsAttachment>
```

Indicates the attachment for the MMS message.

**Type:** Array<MmsAttachment>

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## messageType

```TypeScript
messageType: MessageType
```

Indicates the message type for the MMS message.

**Type:** MessageType

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## mmsType

```TypeScript
mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd
```

Indicates the PDU header type for the MMS message.

**Type:** MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

