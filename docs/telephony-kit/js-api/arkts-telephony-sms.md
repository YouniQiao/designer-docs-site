# @ohos.telephony.sms

Provides the capabilities and methods for obtaining Short Message Service (SMS) management objects.

**Since:** 6

<!--Device-unnamed-declare namespace sms--><!--Device-unnamed-declare namespace sms-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createMessage](arkts-telephony-sms-createmessage-f.md#createmessage-1) | Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.&lt;p&gt;After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol. |
| [createMessage](arkts-telephony-sms-createmessage-f.md#createmessage-2) | Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.&lt;p&gt;After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol. |
| [getDefaultSmsSimId](arkts-telephony-sms-getdefaultsmssimid-f.md#getdefaultsmssimid-1) | Obtains the default SIM ID for sending SMS messages. |
| [getDefaultSmsSimId](arkts-telephony-sms-getdefaultsmssimid-f.md#getdefaultsmssimid-2) | Obtains the default SIM ID for sending SMS messages. |
| [getDefaultSmsSlotId](arkts-telephony-sms-getdefaultsmsslotid-f.md#getdefaultsmsslotid-1) | Obtains the default SIM card for sending SMS messages. |
| [getDefaultSmsSlotId](arkts-telephony-sms-getdefaultsmsslotid-f.md#getdefaultsmsslotid-2) | Obtains the default SIM card for sending SMS messages. |
| [hasSmsCapability](arkts-telephony-sms-hassmscapability-f.md#hassmscapability-1) | Returns whether a device is capable of sending and receiving SMS messages. |
| [sendMessage](arkts-telephony-sms-sendmessage-f.md#sendmessage-1) | Sends a text or data SMS message.&lt;p&gt;This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| [sendShortMessage](arkts-telephony-sms-sendshortmessage-f.md#sendshortmessage-1) | Sends a text or data SMS message.&lt;p&gt;This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| [sendShortMessage](arkts-telephony-sms-sendshortmessage-f.md#sendshortmessage-2) | Sends a text or data SMS message.&lt;p&gt;This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addSimMessage](arkts-telephony-sms-addsimmessage-f-sys.md#addsimmessage-1) | Add an SMS Message to SIM card. |
| [addSimMessage](arkts-telephony-sms-addsimmessage-f-sys.md#addsimmessage-2) | Add an SMS Message to SIM card. |
| [decodeMms](arkts-telephony-sms-decodemms-f-sys.md#decodemms-1) | Decode the message content. |
| [decodeMms](arkts-telephony-sms-decodemms-f-sys.md#decodemms-2) | Decode the message content. |
| [delSimMessage](arkts-telephony-sms-delsimmessage-f-sys.md#delsimmessage-1) | Delete an SMS Message from the SIM card. |
| [delSimMessage](arkts-telephony-sms-delsimmessage-f-sys.md#delsimmessage-2) | Delete an SMS Message from the SIM card. |
| [downloadMms](arkts-telephony-sms-downloadmms-f-sys.md#downloadmms-1) | Downloads an MMS message. |
| [downloadMms](arkts-telephony-sms-downloadmms-f-sys.md#downloadmms-2) | Downloads an MMS message. |
| [encodeMms](arkts-telephony-sms-encodemms-f-sys.md#encodemms-1) | Encode the message content. |
| [encodeMms](arkts-telephony-sms-encodemms-f-sys.md#encodemms-2) | Encode the message content. |
| [getAllSimMessages](arkts-telephony-sms-getallsimmessages-f-sys.md#getallsimmessages-1) | Get all SMS records in SIM. |
| [getAllSimMessages](arkts-telephony-sms-getallsimmessages-f-sys.md#getallsimmessages-2) | Get all SMS records in SIM. |
| [getImsShortMessageFormat](arkts-telephony-sms-getimsshortmessageformat-f-sys.md#getimsshortmessageformat-1) | Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2. |
| [getImsShortMessageFormat](arkts-telephony-sms-getimsshortmessageformat-f-sys.md#getimsshortmessageformat-2) | Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2. |
| [getSmsSegmentsInfo](arkts-telephony-sms-getsmssegmentsinfo-f-sys.md#getsmssegmentsinfo-1) | Get an SMS segment encode relation information. |
| [getSmsSegmentsInfo](arkts-telephony-sms-getsmssegmentsinfo-f-sys.md#getsmssegmentsinfo-2) | Get an SMS segment encode relation information. |
| [getSmsShortCodeType](arkts-telephony-sms-getsmsshortcodetype-f-sys.md#getsmsshortcodetype-1) | Get the SMS short code type of the destination address. |
| [getSmscAddr](arkts-telephony-sms-getsmscaddr-f-sys.md#getsmscaddr-1) | Obtains the SMSC address based on a specified slot ID. |
| [getSmscAddr](arkts-telephony-sms-getsmscaddr-f-sys.md#getsmscaddr-2) | Obtains the SMSC address based on a specified slot ID. |
| [isImsSmsSupported](arkts-telephony-sms-isimssmssupported-f-sys.md#isimssmssupported-1) | SMS over IMS is supported if IMS is registered and SMS is supported on IMS. |
| [isImsSmsSupported](arkts-telephony-sms-isimssmssupported-f-sys.md#isimssmssupported-2) | SMS over IMS is supported if IMS is registered and SMS is supported on IMS. |
| [sendMms](arkts-telephony-sms-sendmms-f-sys.md#sendmms-1) | Sends an MMS message. |
| [sendMms](arkts-telephony-sms-sendmms-f-sys.md#sendmms-2) | Sends an MMS message. |
| [setCBConfig](arkts-telephony-sms-setcbconfig-f-sys.md#setcbconfig-1) | Turn on or off Cell BroadCast. |
| [setCBConfig](arkts-telephony-sms-setcbconfig-f-sys.md#setcbconfig-2) | Turn on or off Cell BroadCast. |
| [setCBConfigList](arkts-telephony-sms-setcbconfiglist-f-sys.md#setcbconfiglist-1) | Turn on Cell BroadCast by list. |
| [setDefaultSmsSlotId](arkts-telephony-sms-setdefaultsmsslotid-f-sys.md#setdefaultsmsslotid-1) | Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}. |
| [setDefaultSmsSlotId](arkts-telephony-sms-setdefaultsmsslotid-f-sys.md#setdefaultsmsslotid-2) | Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}. |
| [setSmscAddr](arkts-telephony-sms-setsmscaddr-f-sys.md#setsmscaddr-1) | Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID. |
| [setSmscAddr](arkts-telephony-sms-setsmscaddr-f-sys.md#setsmscaddr-2) | Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID. |
| [splitMessage](arkts-telephony-sms-splitmessage-f-sys.md#splitmessage-1) | Splits a long SMS message into multiple fragments.&lt;p&gt;If the length of an SMS message exceeds the maximum length allowed (140 bytes),the SMS message is split into multiple segments for processing. |
| [splitMessage](arkts-telephony-sms-splitmessage-f-sys.md#splitmessage-2) | Splits a long SMS message into multiple fragments.&lt;p&gt;If the length of an SMS message exceeds the maximum length allowed (140 bytes),the SMS message is split into multiple segments for processing. |
| [updateSimMessage](arkts-telephony-sms-updatesimmessage-f-sys.md#updatesimmessage-1) | Update a SIM SMS of SIM card. |
| [updateSimMessage](arkts-telephony-sms-updatesimmessage-f-sys.md#updatesimmessage-2) | Update a SIM SMS of SIM card. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [IDeliveryShortMessageCallback](arkts-telephony-sms-ideliveryshortmessagecallback-i.md) | Provides the callback for the SMS message delivery report. |
| [ISendShortMessageCallback](arkts-telephony-sms-isendshortmessagecallback-i.md) | Provides the callback for the SMS message sending result. |
| [SendMessageOptions](arkts-telephony-sms-sendmessageoptions-i.md) | Provides the options (including callbacks) for sending an SMS message. |
| [ShortMessage](arkts-telephony-sms-shortmessage-i.md) | Defines an SMS message instance. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CBConfigListConfigs](arkts-telephony-sms-cbconfiglistconfigs-i-sys.md) | Defines the cell broadcast configuration list configs. |
| [CBConfigOptions](arkts-telephony-sms-cbconfigoptions-i-sys.md) | Defines the cell broadcast configuration options. |
| [MmsAcknowledgeInd](arkts-telephony-sms-mmsacknowledgeind-i-sys.md) | Defines an MMS confirmation indication. |
| [MmsAddress](arkts-telephony-sms-mmsaddress-i-sys.md) | Defines an MMSC address. |
| [MmsAttachment](arkts-telephony-sms-mmsattachment-i-sys.md) | Defines the attachment of an MMS message. |
| [MmsConfig](arkts-telephony-sms-mmsconfig-i-sys.md) | Defines the MMS message config. |
| [MmsDeliveryInd](arkts-telephony-sms-mmsdeliveryind-i-sys.md) | Defines an MMS message delivery indication. |
| [MmsInformation](arkts-telephony-sms-mmsinformation-i-sys.md) | Defines the MMS message information. |
| [MmsNotificationInd](arkts-telephony-sms-mmsnotificationind-i-sys.md) | Defines an MMS notification indication. |
| [MmsParams](arkts-telephony-sms-mmsparams-i-sys.md) | Defines the MMS message param. |
| [MmsReadOrigInd](arkts-telephony-sms-mmsreadorigind-i-sys.md) | Defines the original MMS message reading indication. |
| [MmsReadRecInd](arkts-telephony-sms-mmsreadrecind-i-sys.md) | Defines the MMS message reading indication. |
| [MmsRespInd](arkts-telephony-sms-mmsrespind-i-sys.md) | Defines an MMS response indication. |
| [MmsRetrieveConf](arkts-telephony-sms-mmsretrieveconf-i-sys.md) | Defines the MMS message retrieval configuration. |
| [MmsSendConf](arkts-telephony-sms-mmssendconf-i-sys.md) | Defines the MMS message sending configuration. |
| [MmsSendReq](arkts-telephony-sms-mmssendreq-i-sys.md) | Defines an MMS message sending request. |
| [SimMessageOptions](arkts-telephony-sms-simmessageoptions-i-sys.md) | Defines the SIM message options. |
| [SimShortMessage](arkts-telephony-sms-simshortmessage-i-sys.md) | Defines a SIM message. |
| [SmsSegmentsInfo](arkts-telephony-sms-smssegmentsinfo-i-sys.md) | Defines the SMS message segment information. |
| [UpdateSimMessageOptions](arkts-telephony-sms-updatesimmessageoptions-i-sys.md) | Defines the updating SIM message options. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [SendSmsResult](arkts-telephony-sms-sendsmsresult-e.md) | Enumerates SMS message sending results. |
| [ShortMessageClass](arkts-telephony-sms-shortmessageclass-e.md) | Enumerates SMS message types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DispositionType](arkts-telephony-sms-dispositiontype-e-sys.md) | Enumerates disposition types. |
| [MessageType](arkts-telephony-sms-messagetype-e-sys.md) | Enumerates message type. |
| [MmsCharSets](arkts-telephony-sms-mmscharsets-e-sys.md) | Enumerates MMS character sets. |
| [MmsPriorityType](arkts-telephony-sms-mmsprioritytype-e-sys.md) | Enumerates MMS message priorities. |
| [MmsVersionType](arkts-telephony-sms-mmsversiontype-e-sys.md) | Enumerates MMS versions. |
| [RanType](arkts-telephony-sms-rantype-e-sys.md) | Enumerates RAN type. |
| [ReportType](arkts-telephony-sms-reporttype-e-sys.md) | Enumerates report types. |
| [SimMessageStatus](arkts-telephony-sms-simmessagestatus-e-sys.md) | Defines the SIM message status. |
| [SmsEncodingScheme](arkts-telephony-sms-smsencodingscheme-e-sys.md) | Enumerates SMS encoding schemes. |
| [SmsShortCodeType](arkts-telephony-sms-smsshortcodetype-e-sys.md) | Enumerates SMS short code types. |
<!--DelEnd-->

