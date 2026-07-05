# MmsInformation

Defines the MMS message information.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## attachment

```TypeScript
attachment?: Array<MmsAttachment>
```

Indicates the attachment for the MMS message.

**类型：** Array<MmsAttachment>

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

## messageType

```TypeScript
messageType: MessageType
```

Indicates the message type for the MMS message.

**类型：** MessageType

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

## mmsType

```TypeScript
mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd
```

Indicates the PDU header type for the MMS message.

**类型：** MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.SmsMms

**系统接口：** 此接口为系统接口。

