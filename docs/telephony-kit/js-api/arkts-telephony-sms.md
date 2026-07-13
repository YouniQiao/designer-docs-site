# @ohos.telephony.sms

Provides the capabilities and methods for obtaining Short Message Service (SMS) management objects.

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createMessage](arkts-telephony-createmessage-f.md#createmessage-1) | Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.&lt;p&gt;After receiving the original PDU data, the system creates an SMS message instance according to the specifiedSMS protocol. |
| [createMessage](arkts-telephony-createmessage-f.md#createmessage-2) | Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.&lt;p&gt;After receiving the original PDU data, the system creates an SMS message instance according to the specifiedSMS protocol. |
| [getDefaultSmsSimId](arkts-telephony-getdefaultsmssimid-f.md#getdefaultsmssimid-1) | Obtains the default SIM ID for sending SMS messages. |
| [getDefaultSmsSimId](arkts-telephony-getdefaultsmssimid-f.md#getdefaultsmssimid-2) | Obtains the default SIM ID for sending SMS messages. |
| [getDefaultSmsSlotId](arkts-telephony-getdefaultsmsslotid-f.md#getdefaultsmsslotid-1) | Obtains the default SIM card for sending SMS messages. |
| [getDefaultSmsSlotId](arkts-telephony-getdefaultsmsslotid-f.md#getdefaultsmsslotid-2) | Obtains the default SIM card for sending SMS messages. |
| [hasSmsCapability](arkts-telephony-hassmscapability-f.md#hassmscapability-1) | Returns whether a device is capable of sending and receiving SMS messages. |
| [sendMessage](arkts-telephony-sendmessage-f.md#sendmessage-1) | Sends a text or data SMS message.&lt;p&gt;This method checks whether the length of an SMS message exceeds the maximum length. If themaximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| [sendShortMessage](arkts-telephony-sendshortmessage-f.md#sendshortmessage-1) | Sends a text or data SMS message.&lt;p&gt;This method checks whether the length of an SMS message exceeds the maximum length. If themaximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| [sendShortMessage](arkts-telephony-sendshortmessage-f.md#sendshortmessage-2) | Sends a text or data SMS message.&lt;p&gt;This method checks whether the length of an SMS message exceeds the maximum length. If themaximum length is exceeded, the SMS message is split into multiple parts and sent separately. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addSimMessage](arkts-telephony-addsimmessage-f-sys.md#addsimmessage-1) | Add an SMS Message to SIM card. |
| [addSimMessage](arkts-telephony-addsimmessage-f-sys.md#addsimmessage-2) | Add an SMS Message to SIM card. |
| [decodeMms](arkts-telephony-decodemms-f-sys.md#decodemms-1) | Decode the message content. |
| [decodeMms](arkts-telephony-decodemms-f-sys.md#decodemms-2) | Decode the message content. |
| [delSimMessage](arkts-telephony-delsimmessage-f-sys.md#delsimmessage-1) | Delete an SMS Message from the SIM card. |
| [delSimMessage](arkts-telephony-delsimmessage-f-sys.md#delsimmessage-2) | Delete an SMS Message from the SIM card. |
| [downloadMms](arkts-telephony-downloadmms-f-sys.md#downloadmms-1) | Downloads an MMS message. |
| [downloadMms](arkts-telephony-downloadmms-f-sys.md#downloadmms-2) | Downloads an MMS message. |
| [encodeMms](arkts-telephony-encodemms-f-sys.md#encodemms-1) | Encode the message content. |
| [encodeMms](arkts-telephony-encodemms-f-sys.md#encodemms-2) | Encode the message content. |
| [getAllSimMessages](arkts-telephony-getallsimmessages-f-sys.md#getallsimmessages-1) | Get all SMS records in SIM. |
| [getAllSimMessages](arkts-telephony-getallsimmessages-f-sys.md#getallsimmessages-2) | Get all SMS records in SIM. |
| [getImsShortMessageFormat](arkts-telephony-getimsshortmessageformat-f-sys.md#getimsshortmessageformat-1) | Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2. |
| [getImsShortMessageFormat](arkts-telephony-getimsshortmessageformat-f-sys.md#getimsshortmessageformat-2) | Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2. |
| [getSmsSegmentsInfo](arkts-telephony-getsmssegmentsinfo-f-sys.md#getsmssegmentsinfo-1) | Get an SMS segment encode relation information. |
| [getSmsSegmentsInfo](arkts-telephony-getsmssegmentsinfo-f-sys.md#getsmssegmentsinfo-2) | Get an SMS segment encode relation information. |
| [getSmsShortCodeType](arkts-telephony-getsmsshortcodetype-f-sys.md#getsmsshortcodetype-1) | Get the SMS short code type of the destination address. |
| [getSmscAddr](arkts-telephony-getsmscaddr-f-sys.md#getsmscaddr-1) | Obtains the SMSC address based on a specified slot ID. |
| [getSmscAddr](arkts-telephony-getsmscaddr-f-sys.md#getsmscaddr-2) | Obtains the SMSC address based on a specified slot ID. |
| [isImsSmsSupported](arkts-telephony-isimssmssupported-f-sys.md#isimssmssupported-1) | SMS over IMS is supported if IMS is registered and SMS is supported on IMS. |
| [isImsSmsSupported](arkts-telephony-isimssmssupported-f-sys.md#isimssmssupported-2) | SMS over IMS is supported if IMS is registered and SMS is supported on IMS. |
| [sendMms](arkts-telephony-sendmms-f-sys.md#sendmms-1) | Sends an MMS message. |
| [sendMms](arkts-telephony-sendmms-f-sys.md#sendmms-2) | Sends an MMS message. |
| [setCBConfig](arkts-telephony-setcbconfig-f-sys.md#setcbconfig-1) | Turn on or off Cell BroadCast. |
| [setCBConfig](arkts-telephony-setcbconfig-f-sys.md#setcbconfig-2) | Turn on or off Cell BroadCast. |
| [setCBConfigList](arkts-telephony-setcbconfiglist-f-sys.md#setcbconfiglist-1) | Turn on Cell BroadCast by list. |
| [setDefaultSmsSlotId](arkts-telephony-setdefaultsmsslotid-f-sys.md#setdefaultsmsslotid-1) | Sets the default SIM card for sending SMS messages. You can obtain the default SIM card byusing {@code getDefaultSmsSlotId}. |
| [setDefaultSmsSlotId](arkts-telephony-setdefaultsmsslotid-f-sys.md#setdefaultsmsslotid-2) | Sets the default SIM card for sending SMS messages. You can obtain the default SIM card byusing {@code getDefaultSmsSlotId}. |
| [setSmscAddr](arkts-telephony-setsmscaddr-f-sys.md#setsmscaddr-1) | Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID. |
| [setSmscAddr](arkts-telephony-setsmscaddr-f-sys.md#setsmscaddr-2) | Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID. |
| [splitMessage](arkts-telephony-splitmessage-f-sys.md#splitmessage-1) | Splits a long SMS message into multiple fragments.&lt;p&gt;If the length of an SMS message exceeds the maximum length allowed (140 bytes),the SMS message is split into multiple segments for processing. |
| [splitMessage](arkts-telephony-splitmessage-f-sys.md#splitmessage-2) | Splits a long SMS message into multiple fragments.&lt;p&gt;If the length of an SMS message exceeds the maximum length allowed (140 bytes),the SMS message is split into multiple segments for processing. |
| [updateSimMessage](arkts-telephony-updatesimmessage-f-sys.md#updatesimmessage-1) | Update a SIM SMS of SIM card. |
| [updateSimMessage](arkts-telephony-updatesimmessage-f-sys.md#updatesimmessage-2) | Update a SIM SMS of SIM card. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [IDeliveryShortMessageCallback](arkts-telephony-ideliveryshortmessagecallback-i.md) | Provides the callback for the SMS message delivery report. |
| [ISendShortMessageCallback](arkts-telephony-isendshortmessagecallback-i.md) | Provides the callback for the SMS message sending result. |
| [SendMessageOptions](arkts-telephony-sendmessageoptions-i.md) | Provides the options (including callbacks) for sending an SMS message. |
| [ShortMessage](arkts-telephony-shortmessage-i.md) | Defines an SMS message instance. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CBConfigListConfigs](arkts-telephony-cbconfiglistconfigs-i-sys.md) | Defines the cell broadcast configuration list configs. |
| [CBConfigOptions](arkts-telephony-cbconfigoptions-i-sys.md) | Defines the cell broadcast configuration options. |
| [MmsAcknowledgeInd](arkts-telephony-mmsacknowledgeind-i-sys.md) | Defines an MMS confirmation indication. |
| [MmsAddress](arkts-telephony-mmsaddress-i-sys.md) | Defines an MMSC address. |
| [MmsAttachment](arkts-telephony-mmsattachment-i-sys.md) | Defines the attachment of an MMS message. |
| [MmsConfig](arkts-telephony-mmsconfig-i-sys.md) | Defines the MMS message config. |
| [MmsDeliveryInd](arkts-telephony-mmsdeliveryind-i-sys.md) | Defines an MMS message delivery indication. |
| [MmsInformation](arkts-telephony-mmsinformation-i-sys.md) | Defines the MMS message information. |
| [MmsNotificationInd](arkts-telephony-mmsnotificationind-i-sys.md) | Defines an MMS notification indication. |
| [MmsParams](arkts-telephony-mmsparams-i-sys.md) | Defines the MMS message param. |
| [MmsReadOrigInd](arkts-telephony-mmsreadorigind-i-sys.md) | Defines the original MMS message reading indication. |
| [MmsReadRecInd](arkts-telephony-mmsreadrecind-i-sys.md) | Defines the MMS message reading indication. |
| [MmsRespInd](arkts-telephony-mmsrespind-i-sys.md) | Defines an MMS response indication. |
| [MmsRetrieveConf](arkts-telephony-mmsretrieveconf-i-sys.md) | Defines the MMS message retrieval configuration. |
| [MmsSendConf](arkts-telephony-mmssendconf-i-sys.md) | Defines the MMS message sending configuration. |
| [MmsSendReq](arkts-telephony-mmssendreq-i-sys.md) | Defines an MMS message sending request. |
| [SimMessageOptions](arkts-telephony-simmessageoptions-i-sys.md) | Defines the SIM message options. |
| [SimShortMessage](arkts-telephony-simshortmessage-i-sys.md) | Defines a SIM message. |
| [SmsSegmentsInfo](arkts-telephony-smssegmentsinfo-i-sys.md) | Defines the SMS message segment information. |
| [UpdateSimMessageOptions](arkts-telephony-updatesimmessageoptions-i-sys.md) | Defines the updating SIM message options. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [SendSmsResult](arkts-telephony-sendsmsresult-e.md) | Enumerates SMS message sending results. |
| [ShortMessageClass](arkts-telephony-shortmessageclass-e.md) | Enumerates SMS message types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DispositionType](arkts-telephony-dispositiontype-e-sys.md) | Enumerates disposition types. |
| [MessageType](arkts-telephony-messagetype-e-sys.md) | Enumerates message type. |
| [MmsCharSets](arkts-telephony-mmscharsets-e-sys.md) | Enumerates MMS character sets. |
| [MmsPriorityType](arkts-telephony-mmsprioritytype-e-sys.md) | Enumerates MMS message priorities. |
| [MmsVersionType](arkts-telephony-mmsversiontype-e-sys.md) | Enumerates MMS versions. |
| [RanType](arkts-telephony-rantype-e-sys.md) | Enumerates RAN type. |
| [ReportType](arkts-telephony-reporttype-e-sys.md) | Enumerates report types. |
| [SimMessageStatus](arkts-telephony-simmessagestatus-e-sys.md) | Defines the SIM message status. |
| [SmsEncodingScheme](arkts-telephony-smsencodingscheme-e-sys.md) | Enumerates SMS encoding schemes. |
| [SmsShortCodeType](arkts-telephony-smsshortcodetype-e-sys.md) | Enumerates SMS short code types. |
<!--DelEnd-->

