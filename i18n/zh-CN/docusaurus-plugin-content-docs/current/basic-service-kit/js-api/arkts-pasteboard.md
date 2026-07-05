# @ohos.pasteboard

This module provides the capabilities of managing the system pasteboard to support the copy and paste functions. You can use the APIs of this module to operate pasteboard content of the plain text, HTML, URI, Want, pixel map, and other types.

**起始版本：** 6

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createData](arkts-pasteboard-createdata-f.md#createData-1) | Creates a **PasteData** object of the specified type. |
| [createData](arkts-pasteboard-createdata-f.md#createData-2) | Creates a **PasteData** object that contains multiple types of data. |
| [createHtmlData](arkts-pasteboard-createhtmldata-f.md#createHtmlData-1) | Creates a **PasteData** object of the HTML type. |
| [createHtmlTextRecord](arkts-pasteboard-createhtmltextrecord-f.md#createHtmlTextRecord-1) | Creates a **PasteDataRecord** object of the HTML text type. |
| [createPlainTextData](arkts-pasteboard-createplaintextdata-f.md#createPlainTextData-1) | Creates a **PasteData** object of the plain text type. |
| [createPlainTextRecord](arkts-pasteboard-createplaintextrecord-f.md#createPlainTextRecord-1) | Creates a **PasteDataRecord** object of the plain text type. |
| [createRecord](arkts-pasteboard-createrecord-f.md#createRecord-1) | Creates a **PasteDataRecord** object of the specified type. |
| [createUriData](arkts-pasteboard-createuridata-f.md#createUriData-1) | Creates a **PasteData** object of the URI type. |
| [createUriRecord](arkts-pasteboard-createurirecord-f.md#createUriRecord-1) | Creates a **PasteDataRecord** object of the URI type. |
| [createWantData](arkts-pasteboard-createwantdata-f.md#createWantData-1) | Creates a **PasteData** object of the Want type. |
| [createWantRecord](arkts-pasteboard-createwantrecord-f.md#createWantRecord-1) | Creates a **PasteDataRecord** object of the Want type. |
| [getSystemPasteboard](arkts-pasteboard-getsystempasteboard-f.md#getSystemPasteboard-1) | Obtains **SystemPasteboard** object. |

### 类

| 名称 | 描述 |
| --- | --- |
| [ProgressSignal](arkts-pasteboard-progresssignal-c.md) | Defines a function for canceling the paste task. This parameter is valid only when [ProgressIndicator]{@link pasteboard.ProgressIndicator} is set to **NONE**. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [GetDataParams](arkts-pasteboard-getdataparams-i.md) | Defines parameters when an application obtains the Data from the pasteboard, including the destination path, file conflict options, and progress indicator types. |
| [PasteData](arkts-pasteboard-pastedata-i.md) | Implements a **PasteData** object. PasteData contains one or more data records ( [PasteDataRecord]{@link pasteboard.PasteDataRecord}) and property description objects ( [PasteDataProperty]{@link pasteboard.PasteDataProperty}). Before calling any API in **PasteData**, you must use ** [createData()]{@link pasteboard.createData(mimeType: string, value: ValueType)}** or ** [getData()]{@link pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)}** to create a **PasteData** object. |
| [PasteDataProperty](arkts-pasteboard-pastedataproperty-i.md) | Defines the properties of PasteData in the pasteboard, including the timestamp, data types, pasteable range, and additional data. The defined properties can be applied to the pasteboard only with the [setProperty]{@link pasteboard.PasteData.setProperty(property: PasteDataProperty)} method. |
| [PasteDataRecord](arkts-pasteboard-pastedatarecord-i.md) | Provides **PasteDataRecord** APIs. A **PasteDataRecord** is an abstract definition of the content in the pasteboard. The pasteboard content consists of one or more plain text, HTML, URI, or Want records. |
| [ProgressInfo](arkts-pasteboard-progressinfo-i.md) | Defines the progress information. This information is reported only when [ProgressIndicator]{@link pasteboard.ProgressIndicator} is set to **NONE**. |
| [SystemPasteboard](arkts-pasteboard-systempasteboard-i.md) | Provides **SystemPasteboard** APIs. Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using [getSystemPasteboard]{@link pasteboard.getSystemPasteboard()}. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ProgressListener](arkts-pasteboard-progresslistener-t.md) | Defines a listener for progress data changes. If the default progress indicator is not used, you can set this API to obtain the paste progress. |
| [UpdateCallback](arkts-pasteboard-updatecallback-t.md) | Callback to be invoked when the pasteboard content changes. |
| [ValueType](arkts-pasteboard-valuetype-t.md) | Indicates type of value. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [FileConflictOptions](arkts-pasteboard-fileconflictoptions-e.md) | Enumerates options for file copy conflicts. |
| [Pattern](arkts-pasteboard-pattern-e.md) | Describes the patterns supported by the pasteboard. |
| [ProgressIndicator](arkts-pasteboard-progressindicator-e.md) | Enumerates options for the progress indicator. You can choose whether to use the default progress indicator. |
| [ShareOption](arkts-pasteboard-shareoption-e.md) | Enumerates the pasteable ranges of PasteData. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [MAX_RECORD_NUM](arkts-pasteboard-con.md#MAX_RECORD_NUM) | Maximum number of records in a **PasteData** object. In versions earlier than API version 10, the value is 512, indicating that no more records can be added once the number of records reaches 512. Since API version 10, no limit is placed on the number of records in a **PasteData** object. |
| [MAX_RECORD_NUM](arkts-pasteboard-con.md#MAX_RECORD_NUM) | Maximum number of records in a **PasteData** object. In versions earlier than API version 10, the value is 512, indicating that no more records can be added once the number of records reaches 512. Since API version 10, no limit is placed on the number of records in a **PasteData** object. Unit: Numbers, the value must be an integer within [512, 512]. |
| [MIMETYPE_PIXELMAP](arkts-pasteboard-con.md#MIMETYPE_PIXELMAP) | MIME type of the PixelMap content. |
| [MIMETYPE_PIXELMAP](arkts-pasteboard-con.md#MIMETYPE_PIXELMAP) | MIME type of the PixelMap content. The value is 'pixelMap'. |
| [MIMETYPE_TEXT_HTML](arkts-pasteboard-con.md#MIMETYPE_TEXT_HTML) | MIME type of the HTML content. |
| [MIMETYPE_TEXT_HTML](arkts-pasteboard-con.md#MIMETYPE_TEXT_HTML) | MIME type of the HTML content. The value is 'text/html'. |
| [MIMETYPE_TEXT_PLAIN](arkts-pasteboard-con.md#MIMETYPE_TEXT_PLAIN) | MIME type of the plain text content. |
| [MIMETYPE_TEXT_PLAIN](arkts-pasteboard-con.md#MIMETYPE_TEXT_PLAIN) | MIME type of the plain text content. The value is 'text/plain'. |
| [MIMETYPE_TEXT_URI](arkts-pasteboard-con.md#MIMETYPE_TEXT_URI) | MIME type of the URI content. |
| [MIMETYPE_TEXT_URI](arkts-pasteboard-con.md#MIMETYPE_TEXT_URI) | MIME type of the URI content. The value is 'text/uri'. |
| [MIMETYPE_TEXT_WANT](arkts-pasteboard-con.md#MIMETYPE_TEXT_WANT) | MIME type of the Want content. |
| [MIMETYPE_TEXT_WANT](arkts-pasteboard-con.md#MIMETYPE_TEXT_WANT) | MIME type of the Want content. The value is 'text/want'. |

