# @ohos.file.photoAccessHelper

The module provides APIs for album management, including creating an album and accessing and modifying media data in
an album.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getPhotoAccessHelper](arkts-medialibrary-getphotoaccesshelper-f.md#getphotoaccesshelper-1) | Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPhotoAccessHelper](arkts-medialibrary-getphotoaccesshelper-f-sys.md#getphotoaccesshelper-2) | Obtains a PhotoAccessHelper instance for the specified user, letting you access and modify media files in an album. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [AutoPlayScene](arkts-medialibrary-autoplayscene-c.md) | Defines the playback mode of the moving photo in different scenarios. |
| [BaseSelectOptions](arkts-medialibrary-baseselectoptions-c.md) | Defines the basic options for selecting media files from Gallery. |
| [ContextRecoveryInfo](arkts-medialibrary-contextrecoveryinfo-c.md) | Describes the information about the context of exiting the PhotoPicker. It can be used during the subsequent launchof the PhotoPicker to restore the state from the previous exit. |
| [FileSizeFilter](arkts-medialibrary-filesizefilter-c.md) | Describes the configuration for file size filtering. |
| [GridPinchMode](arkts-medialibrary-gridpinchmode-c.md) | Represents the pinch mode of the grid in the picker. |
| [MediaAlbumChangeRequest](arkts-medialibrary-mediaalbumchangerequest-c.md) | Provides APIs for managing the media album change request. |
| [MediaAssetChangeRequest](arkts-medialibrary-mediaassetchangerequest-c.md) | Represents a media asset change request. |
| [MediaAssetManager](arkts-medialibrary-mediaassetmanager-c.md) | The MediaAssetManager class is used for manipulating the read and write operations of media assets. |
| [MimeTypeFilter](arkts-medialibrary-mimetypefilter-c.md) | Describes the configuration for file type filtering. |
| [OperationItem](arkts-medialibrary-operationitem-c.md) | Describes the settings for filtering media files. |
| [PhotoSelectOptions](arkts-medialibrary-photoselectoptions-c.md) | Defines additional options for selecting media assets from Gallery. It inherits from **BaseSelectOptions**. It is used to start the picker of the corresponding user ID space. |
| [PhotoSelectResult](arkts-medialibrary-photoselectresult-c.md) | Defines information about the images or videos selected. |
| [PhotoViewMimeTypeFileSizeFilter](arkts-medialibrary-photoviewmimetypefilesizefilter-c.md) | Describes the settings for filtering media files by type and size. |
| [PhotoViewPicker](arkts-medialibrary-photoviewpicker-c.md) | PhotoViewPicker provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance. |
| [RecentPhotoInfo](arkts-medialibrary-recentphotoinfo-c.md) | Recent photo info |
| [RecentPhotoOptions](arkts-medialibrary-recentphotooptions-c.md) | RecentPhotoOptions Object |
| [RecommendationOptions](arkts-medialibrary-recommendationoptions-c.md) | Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices. |
| [RequestReadPermissionResult](arkts-medialibrary-requestreadpermissionresult-c.md) | Request read permission result |
| [VideoDurationFilter](arkts-medialibrary-videodurationfilter-c.md) | Describes the configuration for video duration filtering. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [AnalysisAlbum](arkts-medialibrary-analysisalbum-c-sys.md) | Implements an **Analysis** album. |
| [CloudEnhancement](arkts-medialibrary-cloudenhancement-c-sys.md) | Provides APIs for cloud enhancement management, including managing the tasks of generating AI-powered cloud-enhanced photos and obtaining the association between the original photos and AI cloud-enhanced photos. |
| [CloudMediaAssetManager](arkts-medialibrary-cloudmediaassetmanager-c-sys.md) | A class used for cloud media asset management. It is used to manage download tasks for media assets stored in the cloud and delete local data and files pertaining to these cloud-based assets. |
| [DefaultCoverOrderInfo](arkts-medialibrary-defaultcoverorderinfo-c-sys.md) | Default Cover Order |
| [HighlightAlbum](arkts-medialibrary-highlightalbum-c-sys.md) | Provides APIs for managing the **Highlights** album, which is an automatically generated collection of memorable photos or videos. |
| [KnowledgeContent](arkts-medialibrary-knowledgecontent-c-sys.md) | Knowledge Content class, used for geting related entity. |
| [MediaAlbumChangeRequest](arkts-medialibrary-mediaalbumchangerequest-c-sys.md) | Provides APIs for managing the media album change request. |
| [MediaAnalysisAlbumChangeRequest](arkts-medialibrary-mediaanalysisalbumchangerequest-c-sys.md) | Provides APIs for managing the analysis album change request. |
| [MediaAssetChangeRequest](arkts-medialibrary-mediaassetchangerequest-c-sys.md) | Represents a media asset change request. |
| [MediaAssetEditData](arkts-medialibrary-mediaasseteditdata-c-sys.md) | Represents the edited media asset data. |
| [MediaAssetsChangeRequest](arkts-medialibrary-mediaassetschangerequest-c-sys.md) | Represents a request for changing multiple assets. |
| [MediaHighlightAlbumChangeRequest](arkts-medialibrary-mediahighlightalbumchangerequest-c-sys.md) | Provides APIs for managing the media album change request. It inherits from [MediaAnalysisAlbumChangeRequest](arkts-medialibrary-mediaanalysisalbumchangerequest-c-sys.md). |
| [PhotoAssetCustomRecordManager](arkts-medialibrary-photoassetcustomrecordmanager-c-sys.md) | Provides APIs for custom user behavior recording for Gallery. |
| [PhotoSelectOptions](arkts-medialibrary-photoselectoptions-c-sys.md) | Defines additional options for selecting media assets from Gallery. It inherits from **BaseSelectOptions**. It is used to start the picker of the corresponding user ID space. |
| [RecommendationOptions](arkts-medialibrary-recommendationoptions-c-sys.md) | Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices. |
| [ResultSet](arkts-medialibrary-resultset-c-sys.md) | Defines APIs to access the result set obtained by querying the RDB store.Before calling any of the following APIs, you must use [query](arkts-medialibrary-photoaccesshelper-i-sys.md#query-1) to obtain a ResultSet instance. |
| [TaskSignal](arkts-medialibrary-tasksignal-c-sys.md) | for interrupting batch operations. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-medialibrary-absalbum-i.md) | Defines the abstract interface of albums. |
| [Album](arkts-medialibrary-album-i.md) | Provides APIs to manage albums. |
| [AlbumChangeData](arkts-medialibrary-albumchangedata-i.md) | Describes the change data of an album. |
| [AlbumChangeInfo](arkts-medialibrary-albumchangeinfo-i.md) | Describes the information about an album. |
| [AlbumChangeInfos](arkts-medialibrary-albumchangeinfos-i.md) | Describes the notification information about the change of an album. |
| [AssetCompatibleCapability](arkts-medialibrary-assetcompatiblecapability-i.md) | Defines the asset compatibility capability. |
| [ChangeData](arkts-medialibrary-changedata-i.md) | Defines the return value of the listener callback. |
| [CreateOptions](arkts-medialibrary-createoptions-i.md) | Options for creating an image or video asset.The title must meet the following requirements:- It must not contain a file name extension.- The total length of the file name must be between 1 and 255 characters. |
| [CreationSetting](arkts-medialibrary-creationsetting-i.md) | Represents the configuration for saving images or videos to the media library, including the file name, file type, and other related parameters. |
| [FetchOptions](arkts-medialibrary-fetchoptions-i.md) | Defines the retrieval options. |
| [FetchResult](arkts-medialibrary-fetchresult-i.md) | FetchResult provides APIs to manage the file retrieval result. |
| [MediaAssetDataHandler](arkts-medialibrary-mediaassetdatahandler-i.md) | MediaAssetDataHandler is a media asset handler used to customize the media asset processing logic in **onDataPrepared**. |
| [MediaAssetProgressHandler](arkts-medialibrary-mediaassetprogresshandler-i.md) | **MediaAssetProgressHandler** is used to obtain the media asset processing progress from **onProgress()**. |
| [MediaChangeRequest](arkts-medialibrary-mediachangerequest-i.md) | Media change request, which is the parent class of the asset change request and album change request.&gt; **NOTE**&gt;&gt; The media change request takes effect only after &gt; [applyChanges](arkts-medialibrary-photoaccesshelper-i.md#applychanges-1) is called. |
| [MediaLibraryAvailability](arkts-medialibrary-medialibraryavailability-i.md) | MediaLibrary availability. |
| [MovingPhoto](arkts-medialibrary-movingphoto-i.md) | MovingPhoto provides APIs for managing a moving photo instance. |
| [PhotoAccessHelper](arkts-medialibrary-photoaccesshelper-i.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-medialibrary-photoasset-i.md) | PhotoAsset provides APIs for encapsulating file asset attributes. |
| [PhotoAssetChangeData](arkts-medialibrary-photoassetchangedata-i.md) | Describes the change data of a media asset. |
| [PhotoAssetChangeInfo](arkts-medialibrary-photoassetchangeinfo-i.md) | Describes the information about a media asset. |
| [PhotoAssetChangeInfos](arkts-medialibrary-photoassetchangeinfos-i.md) | Describes the notification information about the change of a media asset. |
| [PhotoCreationConfig](arkts-medialibrary-photocreationconfig-i.md) | Represents the configuration for saving a media asset (image or video) to the media library, including the file name. |
| [PhotoProxy](arkts-medialibrary-photoproxy-i.md) | Photo proxy object, which is used by the camera application to write image data. |
| [QuickImageDataHandler](arkts-medialibrary-quickimagedatahandler-i.md) | QuickImageDataHandler is a media asset handler used to customize the media asset processing logic in **onDataPrepared**. |
| [RequestOptions](arkts-medialibrary-requestoptions-i.md) | Represents request options. |
| [TextContextInfo](arkts-medialibrary-textcontextinfo-i.md) | Represents the text information about the recommended images. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-medialibrary-absalbum-i-sys.md) | Defines the abstract interface of albums. |
| [Album](arkts-medialibrary-album-i-sys.md) | Provides APIs to manage albums. |
| [AlbumAttributeInfo](arkts-medialibrary-albumattributeinfo-i-sys.md) | Album attribute info. |
| [AlbumChangeData](arkts-medialibrary-albumchangedata-i-sys.md) | Describes the change data of an album. |
| [AlbumChangeInfo](arkts-medialibrary-albumchangeinfo-i-sys.md) | Describes the information about an album. |
| [AlbumOperation](arkts-medialibrary-albumoperation-i-sys.md) | Album operation info. |
| [AlbumOrder](arkts-medialibrary-albumorder-i-sys.md) | Describes the album sorting order. |
| [AnalysisConfig](arkts-medialibrary-analysisconfig-i-sys.md) | Defines the asset analysis configuration. |
| [AnalysisResult](arkts-medialibrary-analysisresult-i-sys.md) | Defines the asset analysis result. |
| [BatchOperationOptions](arkts-medialibrary-batchoperationoptions-i-sys.md) | Batch operation options |
| [ChangeData](arkts-medialibrary-changedata-i-sys.md) | Defines the return value of the listener callback. |
| [CloudAssetDownloadProgressInfo](arkts-medialibrary-cloudassetdownloadprogressinfo-i-sys.md) | Describes the progress information about a batch download. |
| [CloudAssetDownloadStatus](arkts-medialibrary-cloudassetdownloadstatus-i-sys.md) | Describes the status information about a batch download. |
| [CloudEnhancementTaskState](arkts-medialibrary-cloudenhancementtaskstate-i-sys.md) | Represents the cloud enhancement task information, which includes the cloud enhancement task state and other information related to certain states. |
| [CloudMediaAssetStatus](arkts-medialibrary-cloudmediaassetstatus-i-sys.md) | Describes the details of a cloud media asset download task. It is the return value of the API used by applications to obtain the cloud asset download task status. |
| [ContextMap](arkts-medialibrary-contextmap-i-sys.md) | Provides APIs for input Context Map. |
| [DeepOptimizeSpaceProgress](arkts-medialibrary-deepoptimizespaceprogress-i-sys.md) | Defines the DeepOptimizeSpaceProgress data structure. |
| [Entity](arkts-medialibrary-entity-i-sys.md) | Provides APIs for output Entity. |
| [FetchResult](arkts-medialibrary-fetchresult-i-sys.md) | FetchResult provides APIs to manage the file retrieval result. |
| [FormInfo](arkts-medialibrary-forminfo-i-sys.md) | Defines the Gallery widget information. |
| [FusionAssetsInfo](arkts-medialibrary-fusionassetsinfo-i-sys.md) | Fusion assets information. |
| [GalleryFormInfo](arkts-medialibrary-galleryforminfo-i-sys.md) | Defines the Gallery widget information. |
| [MovingPhoto](arkts-medialibrary-movingphoto-i-sys.md) | MovingPhoto provides APIs for managing a moving photo instance. |
| [Options](arkts-medialibrary-options-i-sys.md) | Provides APIs for input Options. |
| [PhotoAccessHelper](arkts-medialibrary-photoaccesshelper-i-sys.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-medialibrary-photoasset-i-sys.md) | PhotoAsset provides APIs for encapsulating file asset attributes. |
| [PhotoAssetChangeData](arkts-medialibrary-photoassetchangedata-i-sys.md) | Describes the change data of a media asset. |
| [PhotoAssetChangeInfo](arkts-medialibrary-photoassetchangeinfo-i-sys.md) | Describes the information about a media asset. |
| [PhotoAssetCustomRecord](arkts-medialibrary-photoassetcustomrecord-i-sys.md) | Provides APIs for custom user behavior recording for Gallery. |
| [PhotoCreateOptions](arkts-medialibrary-photocreateoptions-i-sys.md) | Options for creating an image or video asset. |
| [PhotoCreationSource](arkts-medialibrary-photocreationsource-i-sys.md) | Defines the application information provided to create assets on behalf of the application. |
| [Progress](arkts-medialibrary-progress-i-sys.md) | progress info of batch operations. |
| [RequestOptions](arkts-medialibrary-requestoptions-i-sys.md) | Represents request options. |
| [RequestPhotoOptions](arkts-medialibrary-requestphotooptions-i-sys.md) | Defines the options for obtaining the thumbnail of an image or video. |
| [ResultInfo](arkts-medialibrary-resultinfo-i-sys.md) | ResultInfo info of batch operations. |
| [SearchSuggestionResult](arkts-medialibrary-searchsuggestionresult-i-sys.md) | Search suggestion result. |
| [SharedAlbumAsset](arkts-medialibrary-sharedalbumasset-i-sys.md) | Defines the shared album asset |
| [SharedPhotoAsset](arkts-medialibrary-sharedphotoasset-i-sys.md) | Describes the information about a shared media asset. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AlbumKeys](arkts-medialibrary-albumkeys-e.md) | Enumerates the album keys. |
| [AlbumSubtype](arkts-medialibrary-albumsubtype-e.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-medialibrary-albumtype-e.md) | Enumerates the album types, |
| [AvailabilityStatus](arkts-medialibrary-availabilitystatus-e.md) | Enumeration of medialibrary availability status. |
| [CompatibleMode](arkts-medialibrary-compatiblemode-e.md) | Enumerates the compatible modes. |
| [CompleteButtonText](arkts-medialibrary-completebuttontext-e.md) | Enumerates the text displayed on the complete button. |
| [DefaultChangeUri](arkts-medialibrary-defaultchangeuri-e.md) | Enumerates the **DefaultChangeUri** subtypes. |
| [DeliveryMode](arkts-medialibrary-deliverymode-e.md) | Enumerates the asset delivery modes.These modes are used for segmented photo or video delivery. If the device does not support segmentation, the three delivery modes below work the same way and just return the requested image or video directly. The request result isreturned through the [onDataPrepared](arkts-medialibrary-mediaassetdatahandler-i.md#ondataprepared-1)callback. |
| [DynamicRangeType](arkts-medialibrary-dynamicrangetype-e.md) | Enumerates the dynamic range types of media assets. |
| [FilterOperator](arkts-medialibrary-filteroperator-e.md) | Enumeration type of filter operator. |
| [GridLevel](arkts-medialibrary-gridlevel-e.md) | Enumeration type of grid level. |
| [GridPinchModeType](arkts-medialibrary-gridpinchmodetype-e.md) | Enumeration type of grid pinch mode. |
| [ImageFileType](arkts-medialibrary-imagefiletype-e.md) | Enumerates the types of image files to save. |
| [MediaAssetPermissionState](arkts-medialibrary-mediaassetpermissionstate-e.md) | Enumeration of permission level for an application to access asset. |
| [MovingPhotoBadgeStateType](arkts-medialibrary-movingphotobadgestatetype-e.md) | Enumerates the types of the moving photo badge. |
| [NotifyChangeType](arkts-medialibrary-notifychangetype-e.md) | Enumerates the types of changes that trigger the media asset or album change events. |
| [NotifyType](arkts-medialibrary-notifytype-e.md) | Enumerates the notification event types. |
| [OperationType](arkts-medialibrary-operationtype-e.md) | Enumerates the predicates. |
| [PhotoKeys](arkts-medialibrary-photokeys-e.md) | Defines the key information about an image or video file. |
| [PhotoSource](arkts-medialibrary-photosource-e.md) | Enumeration of PhotoSource type |
| [PhotoSubtype](arkts-medialibrary-photosubtype-e.md) | Enumerates the [PhotoAsset](arkts-medialibrary-photoasset-i.md) types. |
| [PhotoType](arkts-medialibrary-phototype-e.md) | Enumerates the media file types. |
| [PhotoViewMIMETypes](arkts-medialibrary-photoviewmimetypes-e.md) | Enumerates the media file types. |
| [PlayMode](arkts-medialibrary-playmode-e.md) | Enumerates whether to support automatic playback of the moving photo. |
| [PositionType](arkts-medialibrary-positiontype-e.md) | Enumerates the file locations. |
| [PreferredCompatibleMode](arkts-medialibrary-preferredcompatiblemode-e.md) | Preferred compatible mode. |
| [RecommendationType](arkts-medialibrary-recommendationtype-e.md) | Enumerates the types of recommended images. |
| [ResourceType](arkts-medialibrary-resourcetype-e.md) | Enumerates the types of the resources to write. |
| [SceneType](arkts-medialibrary-scenetype-e.md) | Enumeration type of scene. |
| [SingleSelectionMode](arkts-medialibrary-singleselectionmode-e.md) | Enumeration type of single selection mode |
| [VideoMode](arkts-medialibrary-videomode-e.md) | Enumerates the log modes of video files. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AlbumAttribute](arkts-medialibrary-albumattribute-e-sys.md) | Album operation attribute. |
| [AlbumKeys](arkts-medialibrary-albumkeys-e-sys.md) | Enumerates the album keys. |
| [AlbumOperationType](arkts-medialibrary-albumoperationtype-e-sys.md) | Album operation type. |
| [AlbumSubtype](arkts-medialibrary-albumsubtype-e-sys.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-medialibrary-albumtype-e-sys.md) | Enumerates the album types, |
| [AnalysisType](arkts-medialibrary-analysistype-e-sys.md) | Enumerates the smart analysis types. |
| [AppLinkState](arkts-medialibrary-applinkstate-e-sys.md) | Enumerates the states of a file memory link. |
| [AssetSourceType](arkts-medialibrary-assetsourcetype-e-sys.md) | Enumerates the flags of asset source. |
| [AuthorizationMode](arkts-medialibrary-authorizationmode-e-sys.md) | Enumerates the authorization modes. |
| [CloudAssetDownloadCode](arkts-medialibrary-cloudassetdownloadcode-e-sys.md) | Enumerates the status codes returned when adding an item to a batch download. |
| [CloudAssetDownloadNotifyType](arkts-medialibrary-cloudassetdownloadnotifytype-e-sys.md) | Enumerates the types of events reported during a cloud asset download. |
| [CloudEnhancementState](arkts-medialibrary-cloudenhancementstate-e-sys.md) | Enumerates the cloud enhancement states. |
| [CloudEnhancementTaskStage](arkts-medialibrary-cloudenhancementtaskstage-e-sys.md) | Enumerates the cloud enhancement task states, which are returned by [CloudEnhancementTaskState](arkts-medialibrary-cloudenhancement-c-sys.md). |
| [CloudMediaAssetTaskStatus](arkts-medialibrary-cloudmediaassettaskstatus-e-sys.md) | Enumerates the statuses of tasks used for downloading cloud media assets. |
| [CloudMediaDownloadType](arkts-medialibrary-cloudmediadownloadtype-e-sys.md) | Enumerates the types of download tasks. |
| [CloudMediaRetainType](arkts-medialibrary-cloudmediaretaintype-e-sys.md) | Enumerates the modes used for deleting cloud media assets. |
| [CloudMediaTaskPauseCause](arkts-medialibrary-cloudmediataskpausecause-e-sys.md) | Enumerates the reasons why a cloud media asset download task is paused. |
| [CompositeDisplayMode](arkts-medialibrary-compositedisplaymode-e-sys.md) | Enumerates the display modes available for a composite image. |
| [CoverUriSource](arkts-medialibrary-coverurisource-e-sys.md) | Enumerates the sources of the album covers. |
| [DeepOptimizeState](arkts-medialibrary-deepoptimizestate-e-sys.md) | Describes the state type of deep optimize space. |
| [DefaultChangeUri](arkts-medialibrary-defaultchangeuri-e-sys.md) | Enumerates the **DefaultChangeUri** subtypes. |
| [FieldType](arkts-medialibrary-fieldtype-e-sys.md) | Enumerates related entity filed type. |
| [FusionAssetType](arkts-medialibrary-fusionassettype-e-sys.md) | Enumeration of fusion asset type |
| [HdrMode](arkts-medialibrary-hdrmode-e-sys.md) | Enumerates the HDR modes of media assets. |
| [HiddenPhotosDisplayMode](arkts-medialibrary-hiddenphotosdisplaymode-e-sys.md) | Enumerates the display modes of hidden files in the system. |
| [HideSensitiveType](arkts-medialibrary-hidesensitivetype-e-sys.md) | Enumerates the types of data masking applied to media resources when accessed by an application. |
| [HighlightAlbumChangeAttribute](arkts-medialibrary-highlightalbumchangeattribute-e-sys.md) | Enumerates the attributes of a highlights album. |
| [HighlightAlbumInfoType](arkts-medialibrary-highlightalbuminfotype-e-sys.md) | Enumerates the types of the highlights album information. |
| [HighlightUserActionType](arkts-medialibrary-highlightuseractiontype-e-sys.md) | Enumerates the user behavior types of the highlights album. |
| [MovingPhotoEffectMode](arkts-medialibrary-movingphotoeffectmode-e-sys.md) | Enumerates the effects of a moving photo. |
| [NotifyChangeType](arkts-medialibrary-notifychangetype-e-sys.md) | Enumerates the types of changes that trigger the media asset or album change events. |
| [PhotoKeys](arkts-medialibrary-photokeys-e-sys.md) | Defines the key information about an image or video file. |
| [PhotoPermissionType](arkts-medialibrary-photopermissiontype-e-sys.md) | Enumerates the types of permissions for accessing media assets.The permissions include temporary read permission and persistent read permission. The temporary read permission will be removed when the application is dead, while the persistent read permission will not.For the same media asset and application, the persistent read permission overwrites the temporary read permission. The temporary read permission does not overwrite the persistent read permission. |
| [PhotoRiskStatus](arkts-medialibrary-photoriskstatus-e-sys.md) | Enumerates the risk types of images. |
| [PhotoSubtype](arkts-medialibrary-photosubtype-e-sys.md) | Enumerates the [PhotoAsset](arkts-medialibrary-photoasset-i.md) types. |
| [PositionType](arkts-medialibrary-positiontype-e-sys.md) | Enumerates the file locations. |
| [RankingMethod](arkts-medialibrary-rankingmethod-e-sys.md) | Enumerates related entity Ranking Method |
| [RecommendationType](arkts-medialibrary-recommendationtype-e-sys.md) | Enumerates the types of recommended images. |
| [RequestPhotoType](arkts-medialibrary-requestphototype-e-sys.md) | Enumerates the types of the operation for obtaining image or video thumbnails. |
| [ResourceType](arkts-medialibrary-resourcetype-e-sys.md) | Enumerates the types of the resources to write. |
| [SearchSuggestionType](arkts-medialibrary-searchsuggestiontype-e-sys.md) | Search Suggestion Type. |
| [SourceMode](arkts-medialibrary-sourcemode-e-sys.md) | Enumerates the types of the file to read. |
| [StrongAssociationType](arkts-medialibrary-strongassociationtype-e-sys.md) | Enumerates the strong association types of photos. |
| [SupportedImageFormat](arkts-medialibrary-supportedimageformat-e-sys.md) | Enumerates the supported image formats. |
| [ThumbnailChangeStatus](arkts-medialibrary-thumbnailchangestatus-e-sys.md) | Enumerates the change statuses of thumbnails (including images and videos). |
| [ThumbnailType](arkts-medialibrary-thumbnailtype-e-sys.md) | Enumerates thumbnail types. |
| [ThumbnailVisibility](arkts-medialibrary-thumbnailvisibility-e-sys.md) | Enumerates the visibility statuses of thumbnails. |
| [VideoEnhancementType](arkts-medialibrary-videoenhancementtype-e-sys.md) | Enumerates the types of segmented video enhancement. |
| [WatermarkType](arkts-medialibrary-watermarktype-e-sys.md) | Enumerates the watermark editable flags. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [MemberType](arkts-medialibrary-membertype-t.md) | Defines the types of the PhotoAsset members.The member types are the union of the types listed in the following table. |
| [OperationValueType](arkts-medialibrary-operationvaluetype-t.md) | Indicates possible value types |
| [PhotoAssetParams](arkts-medialibrary-photoassetparams-t.md) | Defines the array of record types that map file property names to their values. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ProgressListener](arkts-medialibrary-progresslistener-t-sys.md) | Indicates the type of the progress of batch operation.Progress callback, which can be the size or numberof files. |
| [ResultListener](arkts-medialibrary-resultlistener-t-sys.md) | Indicates the type of the result of batch operation. |
| [ValueType](arkts-medialibrary-valuetype-t-sys.md) | Defines the type of value in a KV pair. The type varies with the parameter function. |
| [ValuesBucket](arkts-medialibrary-valuesbucket-t-sys.md) | Defines the type of key and value in a KV pair. |
<!--DelEnd-->

