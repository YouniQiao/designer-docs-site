# @ohos.data.unifiedDataChannel

As a part of the Unified Data Management Framework (UDMF), the **unifiedDataChannel** module provides unified data channels and standard data access interfaces for many-to-many data sharing across applications. It also provides definitions for uniform data types, such as text and image, to streamline data interaction between different applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [convertRecordsToEntries](arkts-arkdata-convertrecordstoentries-f.md#convertrecordstoentries-1) | Converts the provided data into a multi-style data structure, which is useful when the original data uses multiple records to represent different styles of the same data. This API is used only when the following rules are met: 1. The number of records in data is greater than 1. 2. The value of **unifiedData.properties.tag** is **records_to_entries_data_format**. |
| [deleteData](arkts-arkdata-deletedata-f.md#deletedata-1) | Deletes data from the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [deleteData](arkts-arkdata-deletedata-f.md#deletedata-2) | Deletes data from the UDMF public data channel. This API uses a promise to return the result. |
| [insertData](arkts-arkdata-insertdata-f.md#insertdata-1) | Inserts data to the UDMF public data channel. This API uses an asynchronous callback to return the unique identifier of the data inserted. |
| [insertData](arkts-arkdata-insertdata-f.md#insertdata-2) | Inserts data to the UDMF public data channel. This API uses a promise to return the unique identifier of the data inserted. |
| [queryData](arkts-arkdata-querydata-f.md#querydata-1) | Queries data in the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [queryData](arkts-arkdata-querydata-f.md#querydata-2) | Queries data in the UDMF public data channel. This API uses a promise to return the result. |
| [updateData](arkts-arkdata-updatedata-f.md#updatedata-1) | Updates the data in the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [updateData](arkts-arkdata-updatedata-f.md#updatedata-2) | Updates the data in the UDMF public data channel. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [removeAppShareOptions](arkts-arkdata-removeappshareoptions-f-sys.md#removeappshareoptions-1) | Removes the data control information set by [setAppShareOptions](arkts-arkdata-setappshareoptions-f-sys.md#setappshareoptions-1). |
| [setAppShareOptions](arkts-arkdata-setappshareoptions-f-sys.md#setappshareoptions-1) | Sets the [ShareOptions](arkts-arkdata-shareoptions-e.md#shareoptions) for the application data. Currently, only the drag- and-drop data channel is supported. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [ApplicationDefinedRecord](arkts-arkdata-applicationdefinedrecord-c.md) | Represents the custom data type for applications only. It is a child class of [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord) and a base class of custom data types of applications. Applications can extend custom data types based on this class. |
| [Audio](arkts-arkdata-audio-c.md) | Represents audio data. It is a child class of [File](arkts-arkdata-file-c.md#file) and is used to describe an audio file. |
| [File](arkts-arkdata-file-c.md) | Represents the file data. It is a child class of [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord) and a base class of the data of the file type. You are advised to use the child class of **File**, for example, [Image](arkts-arkdata-image-c.md#image), [Video](arkts-arkdata-video-c.md#video), and [Folder](arkts-arkdata-folder-c.md#folder), to describe data. |
| [Folder](arkts-arkdata-folder-c.md) | Represents the folder data. It is a child class of [File](arkts-arkdata-file-c.md#file) and is used to describe a folder. |
| [HTML](arkts-arkdata-html-c.md) | Represents the HTML data. It is a child class of [Text](arkts-arkdata-text-c.md#text). |
| [Hyperlink](arkts-arkdata-hyperlink-c.md) | Represents the hyperlink data. It is a child class of [Text](arkts-arkdata-text-c.md#text). |
| [Image](arkts-arkdata-image-c.md) | Represents the image data. It is a child class of [File](arkts-arkdata-file-c.md#file) and is used to describe images. |
| [PlainText](arkts-arkdata-plaintext-c.md) | Represents the plain text data. It is a child class of [Text](arkts-arkdata-text-c.md#text). |
| [Summary](arkts-arkdata-summary-c.md) | Summarizes the data information of the **unifiedData** object, including the data type and size. |
| [Text](arkts-arkdata-text-c.md) | Represents the text data. It is a child class of [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord) and a base class of text data. You are advised to use the child class of **Text**, for example, [PlainText](arkts-arkdata-plaintext-c.md#plaintext), [Hyperlink](arkts-arkdata-hyperlink-c.md#hyperlink), and [HTML](arkts-arkdata-html-c.md#html), to describe data. |
| [UnifiedData](arkts-arkdata-unifieddata-c.md) | Provides APIs for encapsulating a set of data records. |
| [UnifiedDataProperties](arkts-arkdata-unifieddataproperties-c.md) | Defines the properties of the data records in the unified data object, including the timestamp, tag, pasting range, and additional data. |
| [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md) | An abstract definition of the data content supported by the UDMF. A **UnifiedRecord** object contains one or more data records, for example, a text record, an image record, or an HTML record. Since API version 15, different styles of the same content can be added to a **UnifiedRecord** object. Data users can obtain the corresponding styles as required. |
| [Video](arkts-arkdata-video-c.md) | Represents video data. It is a child class of [File](arkts-arkdata-file-c.md#file) and is used to describe a video file. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [SystemDefinedAppItem](arkts-arkdata-systemdefinedappitem-c.md) | Represents the data of the home screen icon defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md#systemdefinedrecord). |
| [SystemDefinedForm](arkts-arkdata-systemdefinedform-c.md) | Represents the service widget data defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md#systemdefinedrecord). |
| [SystemDefinedPixelMap](arkts-arkdata-systemdefinedpixelmap-c.md) | Represents the image data type corresponding to [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md#image) defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md#systemdefinedrecord) and holds only binary data of **PixelMap**. |
| [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md) | Represents specific data types defined by OpenHarmony. It is a child class of [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord) and a base class of OpenHarmony-specific data types. You are advised to use the child class of **SystemDefinedRecord**, for example, [SystemDefinedForm](arkts-arkdata-systemdefinedform-c.md#systemdefinedform), [SystemDefinedAppItem](arkts-arkdata-systemdefinedappitem-c.md#systemdefinedappitem), and [SystemDefinedPixelMap](arkts-arkdata-systemdefinedpixelmap-c.md#systemdefinedpixelmap), to describe OpenHarmony-specific data. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DataLoadInfo](arkts-arkdata-dataloadinfo-i.md) | Defines type and quantity of the data to load. - Used by the **data sender** to define the data range that can be provided. This field is mandatory. - Used by the **data receiver** to define the expected data type and quantity. This field is optional. |
| [DataLoadParams](arkts-arkdata-dataloadparams-i.md) | Defines the data loading policy for the data sender in the lazy loading scenario. If both **loadHandler** and **delayedDataLoadHandler** are passed, **delayedDataLoadHandler** is preferentially used, and **loadHandler** does not take effect. |
| [GetDataParams](arkts-arkdata-getdataparams-i.md) | Represents the parameters for obtaining data from UDMF, including the destination directory, option for resolving file conflicts, and progress indicator type. For details, see [Obtaining Data Asynchronously Through Drag-and-Drop]. |
| [Options](arkts-arkdata-options-i.md) | Defines the data operation performed by the UDMF. It includes three optional parameters: **intention**, **key**, and **visibility**. The three parameters can be left unspecified. For details, see the parameter description of the specific API. |
| [ProgressInfo](arkts-arkdata-progressinfo-i.md) | Represents the progress information. |

### Enums

| Name | Description |
| --- | --- |
| [FileConflictOptions](arkts-arkdata-fileconflictoptions-e.md) | Enumerates the options for resolving file copy conflicts. |
| [Intention](arkts-arkdata-intention-e.md) | Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply. |
| [ListenerStatus](arkts-arkdata-listenerstatus-e.md) | Enumerates the status codes returned when data is obtained from the UDMF. |
| [ProgressIndicator](arkts-arkdata-progressindicator-e.md) | Enumerates the progress indicator options. |
| [ShareOptions](arkts-arkdata-shareoptions-e.md) | Enumerates the options for using **UnifiedData** in a device. |
| [UriPermission](arkts-arkdata-uripermission-e.md) | Defines URI permissions for drag intention. |
| [Visibility](arkts-arkdata-visibility-e.md) | Enumerates the data visibility levels. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [Intention](arkts-arkdata-intention-e-sys.md) | Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [DataLoadHandler](arkts-arkdata-dataloadhandler-t.md) | Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies. This API is a synchronous function and is applicable to simple service logic. If the service logic is complex and the execution time lasts for more than 3s, you are advised to use the asynchronous handler [DelayedDataLoadHandler](arkts-arkdata-delayeddataloadhandler-t.md#delayeddataloadhandler). |
| [DataProgressListener](arkts-arkdata-dataprogresslistener-t.md) | Defines the callback used to return the data retrieval progress information and data obtained. |
| [DelayedDataLoadHandler](arkts-arkdata-delayeddataloadhandler-t.md) | Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies. This API is an asynchronous function, which uses a promise to return the result. It does not block the main thread and can be used to process time-consuming tasks with complex service logic. |
| [GetDelayData](arkts-arkdata-getdelaydata-t.md) | Defines a function used to obtain a deferred **UnifiedData** object. Currently, it can be used only in the pasteboard application of the same device. |
| [ValueType](arkts-arkdata-valuetype-t.md) | Enumerates the data field types allowed in a unified data record. |

