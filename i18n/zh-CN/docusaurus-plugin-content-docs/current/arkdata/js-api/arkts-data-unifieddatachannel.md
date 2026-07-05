# @ohos.data.unifiedDataChannel

As a part of the Unified Data Management Framework (UDMF), the **unifiedDataChannel** module provides unified data channels and standard data access interfaces for many-to-many data sharing across applications. It also provides definitions for uniform data types, such as text and image, to streamline data interaction between different applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [convertRecordsToEntries](arkts-unifieddatachannel-convertrecordstoentries-f.md#convertRecordsToEntries-1) | Converts the provided data into a multi-style data structure, which is useful when the original data uses multiple records to represent different styles of the same data. This API is used only when the following rules are met: 1. The number of records in data is greater than 1. 2. The value of **unifiedData.properties.tag** is **records_to_entries_data_format**. |
| [deleteData](arkts-unifieddatachannel-deletedata-f.md#deleteData-1) | Deletes data from the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [deleteData](arkts-unifieddatachannel-deletedata-f.md#deleteData-2) | Deletes data from the UDMF public data channel. This API uses a promise to return the result. |
| [insertData](arkts-unifieddatachannel-insertdata-f.md#insertData-1) | Inserts data to the UDMF public data channel. This API uses an asynchronous callback to return the unique identifier of the data inserted. |
| [insertData](arkts-unifieddatachannel-insertdata-f.md#insertData-2) | Inserts data to the UDMF public data channel. This API uses a promise to return the unique identifier of the data inserted. |
| [queryData](arkts-unifieddatachannel-querydata-f.md#queryData-1) | Queries data in the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [queryData](arkts-unifieddatachannel-querydata-f.md#queryData-2) | Queries data in the UDMF public data channel. This API uses a promise to return the result. |
| <!--DelRow-->[removeAppShareOptions](arkts-unifieddatachannel-removeappshareoptions-f-sys.md#removeAppShareOptions-1) | Removes the data control information set by [setAppShareOptions]{@link unifiedDataChannel.setAppShareOptions}. |
| <!--DelRow-->[setAppShareOptions](arkts-unifieddatachannel-setappshareoptions-f-sys.md#setAppShareOptions-1) | Sets the [ShareOptions]{@link unifiedDataChannel.ShareOptions} for the application data. Currently, only the drag- and-drop data channel is supported. |
| [updateData](arkts-unifieddatachannel-updatedata-f.md#updateData-1) | Updates the data in the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [updateData](arkts-unifieddatachannel-updatedata-f.md#updateData-2) | Updates the data in the UDMF public data channel. This API uses a promise to return the result. |

### 类

| 名称 | 描述 |
| --- | --- |
| [ApplicationDefinedRecord](arkts-unifieddatachannel-applicationdefinedrecord-c.md) | Represents the custom data type for applications only. It is a child class of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base class of custom data types of applications. Applications can extend custom data types based on this class. |
| [Audio](arkts-unifieddatachannel-audio-c.md) | Represents audio data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe an audio file. |
| [File](arkts-unifieddatachannel-file-c.md) | Represents the file data. It is a child class of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base class of the data of the file type. You are advised to use the child class of **File**, for example, [Image]{@link unifiedDataChannel.Image}, [Video]{@link unifiedDataChannel.Video}, and [Folder]{@link unifiedDataChannel.Folder}, to describe data. |
| [Folder](arkts-unifieddatachannel-folder-c.md) | Represents the folder data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe a folder. |
| [HTML](arkts-unifieddatachannel-html-c.md) | Represents the HTML data. It is a child class of [Text]{@link unifiedDataChannel.Text}. |
| [Hyperlink](arkts-unifieddatachannel-hyperlink-c.md) | Represents the hyperlink data. It is a child class of [Text]{@link unifiedDataChannel.Text}. |
| [Image](arkts-unifieddatachannel-image-c.md) | Represents the image data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe images. |
| [PlainText](arkts-unifieddatachannel-plaintext-c.md) | Represents the plain text data. It is a child class of [Text]{@link unifiedDataChannel.Text}. |
| [Summary](arkts-unifieddatachannel-summary-c.md) | Summarizes the data information of the **unifiedData** object, including the data type and size. |
| [SystemDefinedAppItem](arkts-unifieddatachannel-systemdefinedappitem-c.md) | Represents the data of the home screen icon defined by the system. It is a child class of [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}. |
| [SystemDefinedForm](arkts-unifieddatachannel-systemdefinedform-c.md) | Represents the service widget data defined by the system. It is a child class of [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}. |
| [SystemDefinedPixelMap](arkts-unifieddatachannel-systemdefinedpixelmap-c.md) | Represents the image data type corresponding to [PixelMap]{@link @ohos.multimedia.image:image} defined by the system. It is a child class of [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord} and holds only binary data of **PixelMap**. |
| [SystemDefinedRecord](arkts-unifieddatachannel-systemdefinedrecord-c.md) | Represents specific data types defined by OpenHarmony. It is a child class of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base class of OpenHarmony-specific data types. You are advised to use the child class of **SystemDefinedRecord**, for example, [SystemDefinedForm]{@link unifiedDataChannel.SystemDefinedForm}, [SystemDefinedAppItem]{@link unifiedDataChannel.SystemDefinedAppItem}, and [SystemDefinedPixelMap]{@link unifiedDataChannel.SystemDefinedPixelMap}, to describe OpenHarmony-specific data. |
| [Text](arkts-unifieddatachannel-text-c.md) | Represents the text data. It is a child class of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base class of text data. You are advised to use the child class of **Text**, for example, [PlainText]{@link unifiedDataChannel.PlainText}, [Hyperlink]{@link unifiedDataChannel.Hyperlink}, and [HTML]{@link unifiedDataChannel.HTML}, to describe data. |
| [UnifiedData](arkts-unifieddatachannel-unifieddata-c.md) | Provides APIs for encapsulating a set of data records. |
| [UnifiedDataProperties](arkts-unifieddatachannel-unifieddataproperties-c.md) | Defines the properties of the data records in the unified data object, including the timestamp, tag, pasting range, and additional data. |
| [UnifiedRecord](arkts-unifieddatachannel-unifiedrecord-c.md) | An abstract definition of the data content supported by the UDMF. A **UnifiedRecord** object contains one or more data records, for example, a text record, an image record, or an HTML record. Since API version 15, different styles of the same content can be added to a **UnifiedRecord** object. Data users can obtain the corresponding styles as required. |
| [Video](arkts-unifieddatachannel-video-c.md) | Represents video data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe a video file. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [DataLoadInfo](arkts-unifieddatachannel-dataloadinfo-i.md) | Defines type and quantity of the data to load. - Used by the **data sender** to define the data range that can be provided. This field is mandatory. - Used by the **data receiver** to define the expected data type and quantity. This field is optional. |
| [DataLoadParams](arkts-unifieddatachannel-dataloadparams-i.md) | Defines the data loading policy for the data sender in the lazy loading scenario. If both **loadHandler** and **delayedDataLoadHandler** are passed, **delayedDataLoadHandler** is preferentially used, and **loadHandler** does not take effect. |
| [GetDataParams](arkts-unifieddatachannel-getdataparams-i.md) | Represents the parameters for obtaining data from UDMF, including the destination directory, option for resolving file conflicts, and progress indicator type. For details, see [Obtaining Data Asynchronously Through Drag-and-Drop]. |
| [Options](arkts-unifieddatachannel-options-i.md) | Defines the data operation performed by the UDMF. It includes three optional parameters: **intention**, **key**, and **visibility**. The three parameters can be left unspecified. For details, see the parameter description of the specific API. |
| [ProgressInfo](arkts-unifieddatachannel-progressinfo-i.md) | Represents the progress information. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [DataLoadHandler](arkts-unifieddatachannel-dataloadhandler-t.md) | Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies. This API is a synchronous function and is applicable to simple service logic. If the service logic is complex and the execution time lasts for more than 3s, you are advised to use the asynchronous handler [DelayedDataLoadHandler]{@link unifiedDataChannel.DelayedDataLoadHandler}. |
| [DataProgressListener](arkts-unifieddatachannel-dataprogresslistener-t.md) | Defines the callback used to return the data retrieval progress information and data obtained. |
| [DelayedDataLoadHandler](arkts-unifieddatachannel-delayeddataloadhandler-t.md) | Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies. This API is an asynchronous function, which uses a promise to return the result. It does not block the main thread and can be used to process time-consuming tasks with complex service logic. |
| [GetDelayData](arkts-unifieddatachannel-getdelaydata-t.md) | Defines a function used to obtain a deferred **UnifiedData** object. Currently, it can be used only in the pasteboard application of the same device. |
| [ValueType](arkts-unifieddatachannel-valuetype-t.md) | Enumerates the data field types allowed in a unified data record. |
| [ValueType](arkts-unifieddatachannel-valuetype-t.md) | Indicates type of value. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [FileConflictOptions](arkts-unifieddatachannel-fileconflictoptions-e.md) | Enumerates the options for resolving file copy conflicts. |
| [Intention](arkts-unifieddatachannel-intention-e.md) | Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply. |
| [ListenerStatus](arkts-unifieddatachannel-listenerstatus-e.md) | Enumerates the status codes returned when data is obtained from the UDMF. |
| [ProgressIndicator](arkts-unifieddatachannel-progressindicator-e.md) | Enumerates the progress indicator options. |
| [ShareOptions](arkts-unifieddatachannel-shareoptions-e.md) | Enumerates the options for using **UnifiedData** in a device. |
| [UriPermission](arkts-unifieddatachannel-uripermission-e.md) | Defines URI permissions for drag intention. |
| [Visibility](arkts-unifieddatachannel-visibility-e.md) | Enumerates the data visibility levels. |

