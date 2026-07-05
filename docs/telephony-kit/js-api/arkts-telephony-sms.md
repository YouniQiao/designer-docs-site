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
| <!--DelRow-->[addSimMessage](arkts-sms-addsimmessage-f-sys.md#addSimMessage-1) | Add an SMS Message to SIM card. |
| <!--DelRow-->[addSimMessage](arkts-sms-addsimmessage-f-sys.md#addSimMessage-2) | Add an SMS Message to SIM card. |
| [createMessage](arkts-sms-createmessage-f.md#createMessage-1) | Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol. <p>After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol. |
| [createMessage](arkts-sms-createmessage-f.md#createMessage-2) | Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol. <p>After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol. |
| <!--DelRow-->[decodeMms](arkts-sms-decodemms-f-sys.md#decodeMms-1) | Decode the message content. |
| <!--DelRow-->[decodeMms](arkts-sms-decodemms-f-sys.md#decodeMms-2) | Decode the message content. |
| <!--DelRow-->[delSimMessage](arkts-sms-delsimmessage-f-sys.md#delSimMessage-1) | Delete an SMS Message from the SIM card. |
| <!--DelRow-->[delSimMessage](arkts-sms-delsimmessage-f-sys.md#delSimMessage-2) | Delete an SMS Message from the SIM card. |
| <!--DelRow-->[downloadMms](arkts-sms-downloadmms-f-sys.md#downloadMms-1) | Downloads an MMS message. |
| <!--DelRow-->[downloadMms](arkts-sms-downloadmms-f-sys.md#downloadMms-2) | Downloads an MMS message. |
| <!--DelRow-->[encodeMms](arkts-sms-encodemms-f-sys.md#encodeMms-1) | Encode the message content. |
| <!--DelRow-->[encodeMms](arkts-sms-encodemms-f-sys.md#encodeMms-2) | Encode the message content. |
| <!--DelRow-->[getAllSimMessages](arkts-sms-getallsimmessages-f-sys.md#getAllSimMessages-1) | Get all SMS records in SIM. |
| <!--DelRow-->[getAllSimMessages](arkts-sms-getallsimmessages-f-sys.md#getAllSimMessages-2) | Get all SMS records in SIM. |
| [getDefaultSmsSimId](arkts-sms-getdefaultsmssimid-f.md#getDefaultSmsSimId-1) | Obtains the default SIM ID for sending SMS messages. |
| [getDefaultSmsSimId](arkts-sms-getdefaultsmssimid-f.md#getDefaultSmsSimId-2) | Obtains the default SIM ID for sending SMS messages. |
| [getDefaultSmsSlotId](arkts-sms-getdefaultsmsslotid-f.md#getDefaultSmsSlotId-1) | Obtains the default SIM card for sending SMS messages. |
| [getDefaultSmsSlotId](arkts-sms-getdefaultsmsslotid-f.md#getDefaultSmsSlotId-2) | Obtains the default SIM card for sending SMS messages. |
| <!--DelRow-->[getImsShortMessageFormat](arkts-sms-getimsshortmessageformat-f-sys.md#getImsShortMessageFormat-1) | Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2. |
| <!--DelRow-->[getImsShortMessageFormat](arkts-sms-getimsshortmessageformat-f-sys.md#getImsShortMessageFormat-2) | Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2. |
| <!--DelRow-->[getSmsSegmentsInfo](arkts-sms-getsmssegmentsinfo-f-sys.md#getSmsSegmentsInfo-1) | Get an SMS segment encode relation information. |
| <!--DelRow-->[getSmsSegmentsInfo](arkts-sms-getsmssegmentsinfo-f-sys.md#getSmsSegmentsInfo-2) | Get an SMS segment encode relation information. |
| <!--DelRow-->[getSmsShortCodeType](arkts-sms-getsmsshortcodetype-f-sys.md#getSmsShortCodeType-1) | Get the SMS short code type of the destination address. |
| <!--DelRow-->[getSmscAddr](arkts-sms-getsmscaddr-f-sys.md#getSmscAddr-1) | Obtains the SMSC address based on a specified slot ID. |
| <!--DelRow-->[getSmscAddr](arkts-sms-getsmscaddr-f-sys.md#getSmscAddr-2) | Obtains the SMSC address based on a specified slot ID. |
| [hasSmsCapability](arkts-sms-hassmscapability-f.md#hasSmsCapability-1) | Returns whether a device is capable of sending and receiving SMS messages. |
| <!--DelRow-->[isImsSmsSupported](arkts-sms-isimssmssupported-f-sys.md#isImsSmsSupported-1) | SMS over IMS is supported if IMS is registered and SMS is supported on IMS. |
| <!--DelRow-->[isImsSmsSupported](arkts-sms-isimssmssupported-f-sys.md#isImsSmsSupported-2) | SMS over IMS is supported if IMS is registered and SMS is supported on IMS. |
| [sendMessage](arkts-sms-sendmessage-f.md#sendMessage-1) | Sends a text or data SMS message. <p>This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| <!--DelRow-->[sendMms](arkts-sms-sendmms-f-sys.md#sendMms-1) | Sends an MMS message. |
| <!--DelRow-->[sendMms](arkts-sms-sendmms-f-sys.md#sendMms-2) | Sends an MMS message. |
| [sendShortMessage](arkts-sms-sendshortmessage-f.md#sendShortMessage-1) | Sends a text or data SMS message. <p>This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| [sendShortMessage](arkts-sms-sendshortmessage-f.md#sendShortMessage-2) | Sends a text or data SMS message. <p>This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately. |
| <!--DelRow-->[setCBConfig](arkts-sms-setcbconfig-f-sys.md#setCBConfig-1) | Turn on or off Cell BroadCast. |
| <!--DelRow-->[setCBConfig](arkts-sms-setcbconfig-f-sys.md#setCBConfig-2) | Turn on or off Cell BroadCast. |
| <!--DelRow-->[setCBConfigList](arkts-sms-setcbconfiglist-f-sys.md#setCBConfigList-1) | Turn on Cell BroadCast by list. |
| <!--DelRow-->[setDefaultSmsSlotId](arkts-sms-setdefaultsmsslotid-f-sys.md#setDefaultSmsSlotId-1) | Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}. |
| <!--DelRow-->[setDefaultSmsSlotId](arkts-sms-setdefaultsmsslotid-f-sys.md#setDefaultSmsSlotId-2) | Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}. |
| <!--DelRow-->[setSmscAddr](arkts-sms-setsmscaddr-f-sys.md#setSmscAddr-1) | Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID. |
| <!--DelRow-->[setSmscAddr](arkts-sms-setsmscaddr-f-sys.md#setSmscAddr-2) | Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID. |
| <!--DelRow-->[splitMessage](arkts-sms-splitmessage-f-sys.md#splitMessage-1) | Splits a long SMS message into multiple fragments. <p>If the length of an SMS message exceeds the maximum length allowed (140 bytes), the SMS message is split into multiple segments for processing. |
| <!--DelRow-->[splitMessage](arkts-sms-splitmessage-f-sys.md#splitMessage-2) | Splits a long SMS message into multiple fragments. <p>If the length of an SMS message exceeds the maximum length allowed (140 bytes), the SMS message is split into multiple segments for processing. |
| <!--DelRow-->[updateSimMessage](arkts-sms-updatesimmessage-f-sys.md#updateSimMessage-1) | Update a SIM SMS of SIM card. |
| <!--DelRow-->[updateSimMessage](arkts-sms-updatesimmessage-f-sys.md#updateSimMessage-2) | Update a SIM SMS of SIM card. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[CBConfigListConfigs](arkts-sms-cbconfiglistconfigs-i-sys.md) | Defines the cell broadcast configuration list configs. |
| <!--DelRow-->[CBConfigOptions](arkts-sms-cbconfigoptions-i-sys.md) | Defines the cell broadcast configuration options. |
| [IDeliveryShortMessageCallback](arkts-sms-ideliveryshortmessagecallback-i.md) | Provides the callback for the SMS message delivery report. |
| [ISendShortMessageCallback](arkts-sms-isendshortmessagecallback-i.md) | Provides the callback for the SMS message sending result. |
| <!--DelRow-->[MmsAcknowledgeInd](arkts-sms-mmsacknowledgeind-i-sys.md) | Defines an MMS confirmation indication. |
| <!--DelRow-->[MmsAddress](arkts-sms-mmsaddress-i-sys.md) | Defines an MMSC address. |
| <!--DelRow-->[MmsAttachment](arkts-sms-mmsattachment-i-sys.md) | Defines the attachment of an MMS message. |
| <!--DelRow-->[MmsConfig](arkts-sms-mmsconfig-i-sys.md) | Defines the MMS message config. |
| <!--DelRow-->[MmsDeliveryInd](arkts-sms-mmsdeliveryind-i-sys.md) | Defines an MMS message delivery indication. |
| <!--DelRow-->[MmsInformation](arkts-sms-mmsinformation-i-sys.md) | Defines the MMS message information. |
| <!--DelRow-->[MmsNotificationInd](arkts-sms-mmsnotificationind-i-sys.md) | Defines an MMS notification indication. |
| <!--DelRow-->[MmsParams](arkts-sms-mmsparams-i-sys.md) | Defines the MMS message param. |
| <!--DelRow-->[MmsReadOrigInd](arkts-sms-mmsreadorigind-i-sys.md) | Defines the original MMS message reading indication. |
| <!--DelRow-->[MmsReadRecInd](arkts-sms-mmsreadrecind-i-sys.md) | Defines the MMS message reading indication. |
| <!--DelRow-->[MmsRespInd](arkts-sms-mmsrespind-i-sys.md) | Defines an MMS response indication. |
| <!--DelRow-->[MmsRetrieveConf](arkts-sms-mmsretrieveconf-i-sys.md) | Defines the MMS message retrieval configuration. |
| <!--DelRow-->[MmsSendConf](arkts-sms-mmssendconf-i-sys.md) | Defines the MMS message sending configuration. |
| <!--DelRow-->[MmsSendReq](arkts-sms-mmssendreq-i-sys.md) | Defines an MMS message sending request. |
| [SendMessageOptions](arkts-sms-sendmessageoptions-i.md) | Provides the options (including callbacks) for sending an SMS message. |
| [ShortMessage](arkts-sms-shortmessage-i.md) | Defines an SMS message instance. |
| <!--DelRow-->[SimMessageOptions](arkts-sms-simmessageoptions-i-sys.md) | Defines the SIM message options. |
| <!--DelRow-->[SimShortMessage](arkts-sms-simshortmessage-i-sys.md) | Defines a SIM message. |
| <!--DelRow-->[SmsSegmentsInfo](arkts-sms-smssegmentsinfo-i-sys.md) | Defines the SMS message segment information. |
| <!--DelRow-->[UpdateSimMessageOptions](arkts-sms-updatesimmessageoptions-i-sys.md) | Defines the updating SIM message options. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DispositionType](arkts-sms-dispositiontype-e-sys.md) | Enumerates disposition types. |
| <!--DelRow-->[MessageType](arkts-sms-messagetype-e-sys.md) | Enumerates message type. |
| <!--DelRow-->[MmsCharSets](arkts-sms-mmscharsets-e-sys.md) | Enumerates MMS character sets. |
| <!--DelRow-->[MmsPriorityType](arkts-sms-mmsprioritytype-e-sys.md) | Enumerates MMS message priorities. |
| <!--DelRow-->[MmsVersionType](arkts-sms-mmsversiontype-e-sys.md) | Enumerates MMS versions. |
| <!--DelRow-->[RanType](arkts-sms-rantype-e-sys.md) | Enumerates RAN type. |
| <!--DelRow-->[ReportType](arkts-sms-reporttype-e-sys.md) | Enumerates report types. |
| [SendSmsResult](arkts-sms-sendsmsresult-e.md) | Enumerates SMS message sending results. |
| [ShortMessageClass](arkts-sms-shortmessageclass-e.md) | Enumerates SMS message types. |
| <!--DelRow-->[SimMessageStatus](arkts-sms-simmessagestatus-e-sys.md) | Defines the SIM message status. |
| <!--DelRow-->[SmsEncodingScheme](arkts-sms-smsencodingscheme-e-sys.md) | Enumerates SMS encoding schemes. |
| <!--DelRow-->[SmsShortCodeType](arkts-sms-smsshortcodetype-e-sys.md) | Enumerates SMS short code types. |

