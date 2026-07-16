# @ohos.pasteboard

This module provides the capabilities of managing the system pasteboard to support the copy and paste functions. You
can use the APIs of this module to operate pasteboard content of the plain text, HTML, URI, Want, pixel map, and
other types.

**Since:** 6

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createData](arkts-basicservices-createdata-f.md#createdata-1) | Creates a **PasteData** object of the specified type. |
| [createData](arkts-basicservices-createdata-f.md#createdata-2) | Creates a **PasteData** object that contains multiple types of data. |
| [createHtmlData](arkts-basicservices-createhtmldata-f.md#createhtmldata-1) | Creates a **PasteData** object of the HTML type. |
| [createHtmlTextRecord](arkts-basicservices-createhtmltextrecord-f.md#createhtmltextrecord-1) | Creates a **PasteDataRecord** object of the HTML text type. |
| [createPlainTextData](arkts-basicservices-createplaintextdata-f.md#createplaintextdata-1) | Creates a **PasteData** object of the plain text type. |
| [createPlainTextRecord](arkts-basicservices-createplaintextrecord-f.md#createplaintextrecord-1) | Creates a **PasteDataRecord** object of the plain text type. |
| [createRecord](arkts-basicservices-createrecord-f.md#createrecord-1) | Creates a **PasteDataRecord** object of the specified type. |
| [createUriData](arkts-basicservices-createuridata-f.md#createuridata-1) | Creates a **PasteData** object of the URI type. |
| [createUriRecord](arkts-basicservices-createurirecord-f.md#createurirecord-1) | Creates a **PasteDataRecord** object of the URI type. |
| [createWantData](arkts-basicservices-createwantdata-f.md#createwantdata-1) | Creates a **PasteData** object of the Want type. |
| [createWantRecord](arkts-basicservices-createwantrecord-f.md#createwantrecord-1) | Creates a **PasteDataRecord** object of the Want type. |
| [getSystemPasteboard](arkts-basicservices-getsystempasteboard-f.md#getsystempasteboard-1) | Obtains **SystemPasteboard** object. |

### Classes

| Name | Description |
| --- | --- |
| [ProgressSignal](arkts-basicservices-progresssignal-c.md) | Defines a function for canceling the paste task. This parameter is valid only when[ProgressIndicator](arkts-basicservices-progressindicator-e.md) is set to **NONE**. |

### Interfaces

| Name | Description |
| --- | --- |
| [GetDataParams](arkts-basicservices-getdataparams-i.md) | Defines parameters when an application obtains the Data from the pasteboard, including thedestination path, file conflict options, and progress indicator types. |
| [PasteData](arkts-basicservices-pastedata-i.md) | Implements a **PasteData** object. PasteData contains one or more data records ([PasteDataRecord](arkts-basicservices-pastedatarecord-i.md)) and property description objects ([PasteDataProperty](arkts-basicservices-pastedataproperty-i.md)).Before calling any API in **PasteData**, you must use **[createData()](arkts-basicservices-createdata-f.md#createdata-1)** or **[getData()](arkts-basicservices-systempasteboard-i.md#getdata-1)** to create a**PasteData** object. |
| [PasteDataProperty](arkts-basicservices-pastedataproperty-i.md) | Defines the properties of PasteData in the pasteboard, including the timestamp, data types, pasteable range,and additional data. The defined properties can be applied to the pasteboard only with the[setProperty](arkts-basicservices-pastedata-i.md#setproperty-1) method. |
| [PasteDataRecord](arkts-basicservices-pastedatarecord-i.md) | Provides **PasteDataRecord** APIs. A **PasteDataRecord** is an abstract definition of the content in thepasteboard. The pasteboard content consists of one or more plain text, HTML, URI, or Want records. |
| [ProgressInfo](arkts-basicservices-progressinfo-i.md) | Defines the progress information. This information is reported only when[ProgressIndicator](arkts-basicservices-progressindicator-e.md) is set to **NONE**. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SystemPasteboard](arkts-basicservices-systempasteboard-i.md) | Provides **SystemPasteboard** APIs.Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using[getSystemPasteboard](arkts-basicservices-getsystempasteboard-f.md#getsystempasteboard-1). |
| [SystemPasteboard](arkts-basicservices-systempasteboard-i-sys.md) | Provides **SystemPasteboard** APIs.Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using[getSystemPasteboard](arkts-basicservices-getsystempasteboard-f.md#getsystempasteboard-1). |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [FileConflictOptions](arkts-basicservices-fileconflictoptions-e.md) | Enumerates options for file copy conflicts. |
| [Pattern](arkts-basicservices-pattern-e.md) | Describes the patterns supported by the pasteboard. |
| [ProgressIndicator](arkts-basicservices-progressindicator-e.md) | Enumerates options for the progress indicator. You can choose whether to use the default progress indicator. |
| [ShareOption](arkts-basicservices-shareoption-e.md) | Enumerates the pasteable ranges of PasteData. |

### Types

| Name | Description |
| --- | --- |
| [ProgressListener](arkts-basicservices-progresslistener-t.md) | Defines a listener for progress data changes. If the default progress indicator is not used, you can set this APIto obtain the paste progress. |
| [UpdateCallback](arkts-basicservices-updatecallback-t.md) | Callback to be invoked when the pasteboard content changes. |
| [ValueType](arkts-basicservices-valuetype-t.md) | Indicates type of value. |

### Constants

| Name | Description |
| --- | --- |
| [MAX_RECORD_NUM](arkts-basicservices-pasteboard-con.md#max_record_num) | Maximum number of records in a **PasteData** object. In versions earlier than API version 10, the value is 512,indicating that no more records can be added once the number of records reaches 512.Since API version 10, no limit is placed on the number of records in a **PasteData** object. |
| [MIMETYPE_PIXELMAP](arkts-basicservices-pasteboard-con.md#mimetype_pixelmap) | MIME type of the PixelMap content. |
| [MIMETYPE_TEXT_HTML](arkts-basicservices-pasteboard-con.md#mimetype_text_html) | MIME type of the HTML content. |
| [MIMETYPE_TEXT_PLAIN](arkts-basicservices-pasteboard-con.md#mimetype_text_plain) | MIME type of the plain text content. |
| [MIMETYPE_TEXT_URI](arkts-basicservices-pasteboard-con.md#mimetype_text_uri) | MIME type of the URI content. |
| [MIMETYPE_TEXT_WANT](arkts-basicservices-pasteboard-con.md#mimetype_text_want) | MIME type of the Want content. |

