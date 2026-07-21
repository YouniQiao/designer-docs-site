# @ohos.data.unifiedDataChannel

As a part of the Unified Data Management Framework (UDMF), the **unifiedDataChannel** module provides unified data channels and standard data access interfaces for many-to-many data sharing across applications. It also provides definitions for uniform data types, such as text and image, to streamline data interaction between different applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.

**Since:** 10

<!--Device-unnamed-declare namespace unifiedDataChannel--><!--Device-unnamed-declare namespace unifiedDataChannel-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [convertRecordsToEntries](arkts-arkdata-unifieddatachannel-convertrecordstoentries-f.md#convertrecordstoentries) | Converts the provided data into a multi-style data structure, which is useful when the original data uses multiple records to represent different styles of the same data.  This API is used only when the following rules are met:  1. The number of records in data is greater than 1.2. The value of **unifiedData.properties.tag** is **records_to_entries_data_format**. |
| [deleteData](arkts-arkdata-unifieddatachannel-deletedata-f.md#deletedata) | Deletes data from the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [deleteData](arkts-arkdata-unifieddatachannel-deletedata-f.md#deletedata-1) | Deletes data from the UDMF public data channel. This API uses a promise to return the result. |
| [insertData](arkts-arkdata-unifieddatachannel-insertdata-f.md#insertdata) | Inserts data to the UDMF public data channel. This API uses an asynchronous callback to return the unique identifier of the data inserted. |
| [insertData](arkts-arkdata-unifieddatachannel-insertdata-f.md#insertdata-1) | Inserts data to the UDMF public data channel. This API uses a promise to return the unique identifier of the data inserted. |
| [queryData](arkts-arkdata-unifieddatachannel-querydata-f.md#querydata) | Queries data in the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [queryData](arkts-arkdata-unifieddatachannel-querydata-f.md#querydata-1) | Queries data in the UDMF public data channel. This API uses a promise to return the result. |
| [updateData](arkts-arkdata-unifieddatachannel-updatedata-f.md#updatedata) | Updates the data in the UDMF public data channel. This API uses an asynchronous callback to return the result. |
| [updateData](arkts-arkdata-unifieddatachannel-updatedata-f.md#updatedata-1) | Updates the data in the UDMF public data channel. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [removeAppShareOptions](arkts-arkdata-unifieddatachannel-removeappshareoptions-f-sys.md#removeappshareoptions) | Removes the data control information set by [setAppShareOptions](arkts-arkdata-unifieddatachannel-setappshareoptions-f-sys.md#setappshareoptions-1). |
| [setAppShareOptions](arkts-arkdata-unifieddatachannel-setappshareoptions-f-sys.md#setappshareoptions) | Sets the [ShareOptions](arkts-arkdata-unifieddatachannel-shareoptions-e.md) for the application data. Currently, only the drag-and-drop data channel is supported. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [ApplicationDefinedRecord](arkts-arkdata-unifieddatachannel-applicationdefinedrecord-c.md) | Represents the custom data type for applications only. It is a child class of [UnifiedRecord](arkts-arkdata-unifieddatachannel-unifiedrecord-c.md) and a base class of custom data types of applications.Applications can extend custom data types based on this class. |
| [Audio](arkts-arkdata-unifieddatachannel-audio-c.md) | Represents audio data. It is a child class of [File](arkts-arkdata-unifieddatachannel-file-c.md) and is used to describe an audio file. |
| [File](arkts-arkdata-unifieddatachannel-file-c.md) | Represents the file data. It is a child class of [UnifiedRecord](arkts-arkdata-unifieddatachannel-unifiedrecord-c.md) and a base class of the data of the file type. You are advised to use the child class of **File**, for example,[Image](arkts-arkdata-unifieddatachannel-image-c.md), [Video](arkts-arkdata-unifieddatachannel-video-c.md), and [Folder](arkts-arkdata-unifieddatachannel-folder-c.md), to describe data. |
| [Folder](arkts-arkdata-unifieddatachannel-folder-c.md) | Represents the folder data. It is a child class of [File](arkts-arkdata-unifieddatachannel-file-c.md) and is used to describe a folder. |
| [HTML](arkts-arkdata-unifieddatachannel-html-c.md) | Represents the HTML data. It is a child class of [Text](arkts-arkdata-unifieddatachannel-text-c.md). |
| [Hyperlink](arkts-arkdata-unifieddatachannel-hyperlink-c.md) | Represents the hyperlink data. It is a child class of [Text](arkts-arkdata-unifieddatachannel-text-c.md). |
| [Image](arkts-arkdata-unifieddatachannel-image-c.md) | Represents the image data. It is a child class of [File](arkts-arkdata-unifieddatachannel-file-c.md) and is used to describe images. |
| [PlainText](arkts-arkdata-unifieddatachannel-plaintext-c.md) | Represents the plain text data. It is a child class of [Text](arkts-arkdata-unifieddatachannel-text-c.md). |
| [Summary](arkts-arkdata-unifieddatachannel-summary-c.md) | Summarizes the data information of the **unifiedData** object, including the data type and size. |
| [SystemDefinedAppItem](arkts-arkdata-unifieddatachannel-systemdefinedappitem-c.md) | Represents the data of the home screen icon defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-unifieddatachannel-systemdefinedrecord-c.md). |
| [SystemDefinedForm](arkts-arkdata-unifieddatachannel-systemdefinedform-c.md) | Represents the service widget data defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-unifieddatachannel-systemdefinedrecord-c.md). |
| [SystemDefinedPixelMap](arkts-arkdata-unifieddatachannel-systemdefinedpixelmap-c.md) | Represents the image data type corresponding to [PixelMap](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md) defined by the system. It is a child class of [SystemDefinedRecord](arkts-arkdata-unifieddatachannel-systemdefinedrecord-c.md) and holds only binary data of **PixelMap**. |
| [SystemDefinedRecord](arkts-arkdata-unifieddatachannel-systemdefinedrecord-c.md) | Represents specific data types defined by OpenHarmony. It is a child class of [UnifiedRecord](arkts-arkdata-unifieddatachannel-unifiedrecord-c.md) and a base class of OpenHarmony-specific data types. You are advised to use the child class of **SystemDefinedRecord**, for example,[SystemDefinedForm](arkts-arkdata-unifieddatachannel-systemdefinedform-c.md),[SystemDefinedAppItem](arkts-arkdata-unifieddatachannel-systemdefinedappitem-c.md), and [SystemDefinedPixelMap](arkts-arkdata-unifieddatachannel-systemdefinedpixelmap-c.md), to describe OpenHarmony-specific data. |
| [Text](arkts-arkdata-unifieddatachannel-text-c.md) | Represents the text data. It is a child class of [UnifiedRecord](arkts-arkdata-unifieddatachannel-unifiedrecord-c.md) and a base class of text data. You are advised to use the child class of **Text**, for example,[PlainText](arkts-arkdata-unifieddatachannel-plaintext-c.md), [Hyperlink](arkts-arkdata-unifieddatachannel-hyperlink-c.md), and [HTML](arkts-arkdata-unifieddatachannel-html-c.md), to describe data. |
| [UnifiedData](arkts-arkdata-unifieddatachannel-unifieddata-c.md) | Provides APIs for encapsulating a set of data records. |
| [UnifiedDataProperties](arkts-arkdata-unifieddatachannel-unifieddataproperties-c.md) | Defines the properties of the data records in the unified data object, including the timestamp, tag, pasting range,and additional data. |
| [UnifiedRecord](arkts-arkdata-unifieddatachannel-unifiedrecord-c.md) | An abstract definition of the data content supported by the UDMF. A **UnifiedRecord** object contains one or more data records, for example, a text record, an image record, or an HTML record. Since API version 15, different styles of the same content can be added to a **UnifiedRecord** object. Data users can obtain the corresponding styles as required. |
| [Video](arkts-arkdata-unifieddatachannel-video-c.md) | Represents video data. It is a child class of [File](arkts-arkdata-unifieddatachannel-file-c.md) and is used to describe a video file. |

### Interfaces

| Name | Description |
| --- | --- |
| [DataLoadInfo](arkts-arkdata-unifieddatachannel-dataloadinfo-i.md) | Defines type and quantity of the data to load.  - Used by the **data sender** to define the data range that can be provided. This field is mandatory.  - Used by the **data receiver** to define the expected data type and quantity. This field is optional. |
| [DataLoadParams](arkts-arkdata-unifieddatachannel-dataloadparams-i.md) | Defines the data loading policy for the data sender in the lazy loading scenario.  If both **loadHandler** and **delayedDataLoadHandler** are passed, **delayedDataLoadHandler** is preferentially used, and **loadHandler** does not take effect. |
| [GetDataParams](arkts-arkdata-unifieddatachannel-getdataparams-i.md) | Represents the parameters for obtaining data from UDMF, including the destination directory, option for resolving file conflicts, and progress indicator type.  For details, see [Obtaining Data Asynchronously Through Drag-and-Drop]. |
| [Options](arkts-arkdata-unifieddatachannel-options-i.md) | Defines the data operation performed by the UDMF. It includes three optional parameters: **intention**, **key**,and **visibility**. The three parameters can be left unspecified. For details, see the parameter description of the specific API. |
| [ProgressInfo](arkts-arkdata-unifieddatachannel-progressinfo-i.md) | Represents the progress information. |

### Enums

| Name | Description |
| --- | --- |
| [FileConflictOptions](arkts-arkdata-unifieddatachannel-fileconflictoptions-e.md) | Enumerates the options for resolving file copy conflicts. |
| [Intention](arkts-arkdata-unifieddatachannel-intention-e.md) | Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply. |
| [ListenerStatus](arkts-arkdata-unifieddatachannel-listenerstatus-e.md) | Enumerates the status codes returned when data is obtained from the UDMF. |
| [ProgressIndicator](arkts-arkdata-unifieddatachannel-progressindicator-e.md) | Enumerates the progress indicator options. |
| [ShareOptions](arkts-arkdata-unifieddatachannel-shareoptions-e.md) | Enumerates the options for using **UnifiedData** in a device. |
| [UriPermission](arkts-arkdata-unifieddatachannel-uripermission-e.md) | Defines URI permissions for drag intention. |
| [Visibility](arkts-arkdata-unifieddatachannel-visibility-e.md) | Enumerates the data visibility levels. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [Intention](arkts-arkdata-unifieddatachannel-intention-e-sys.md) | Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to which the UDMF data channels apply. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [DataLoadHandler](arkts-arkdata-unifieddatachannel-dataloadhandler-t.md) | Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies.  This API is a synchronous function and is applicable to simple service logic. If the service logic is complex and the execution time lasts for more than 3s, you are advised to use the asynchronous handler [DelayedDataLoadHandler](arkts-arkdata-unifieddatachannel-delayeddataloadhandler-t.md). |
| [DataProgressListener](arkts-arkdata-unifieddatachannel-dataprogresslistener-t.md) | Defines the callback used to return the data retrieval progress information and data obtained. |
| [DelayedDataLoadHandler](arkts-arkdata-unifieddatachannel-delayeddataloadhandler-t.md) | Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies.  This API is an asynchronous function, which uses a promise to return the result. It does not block the main thread and can be used to process time-consuming tasks with complex service logic. |
| [GetDelayData](arkts-arkdata-unifieddatachannel-getdelaydata-t.md) | Defines a function used to obtain a deferred **UnifiedData** object. Currently, it can be used only in the pasteboard application of the same device. |
| [ValueType](arkts-arkdata-unifieddatachannel-valuetype-t.md) | Enumerates the data field types allowed in a unified data record. |

