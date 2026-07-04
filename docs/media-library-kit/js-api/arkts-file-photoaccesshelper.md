# @ohos.file.photoAccessHelper

Helper functions to access image and video assets

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
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
| [getPhotoAccessHelper](arkts-medialibrary-getphotoaccesshelper-f-sys.md#getphotoaccesshelper-2) | Returns an instance of PhotoAccessHelper |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [AutoPlayScene](arkts-medialibrary-autoplayscene-c.md) | Automatic playback scene of moving photo. |
| [BaseSelectOptions](arkts-medialibrary-baseselectoptions-c.md) | Class BaseSelectOptions, which is extracted from class PhotoSelectOptions |
| [ContextRecoveryInfo](arkts-medialibrary-contextrecoveryinfo-c.md) | Context information of the exit status of PhotoPicker, which can be used for on-site recovery of PhotoPicker next time. |
| [FileSizeFilter](arkts-medialibrary-filesizefilter-c.md) | Media file size filtering configuration. |
| [GridPinchMode](arkts-medialibrary-gridpinchmode-c.md) | Grid pinch mode |
| [MediaAlbumChangeRequest](arkts-medialibrary-mediaalbumchangerequest-c.md) | Defines the class of media album change request. |
| [MediaAssetChangeRequest](arkts-medialibrary-mediaassetchangerequest-c.md) | Defines the class of media asset change request. |
| [MediaAssetManager](arkts-medialibrary-mediaassetmanager-c.md) | The MediaAssetManager class is used for manipulating the read and write operations of media assets. |
| [MimeTypeFilter](arkts-medialibrary-mimetypefilter-c.md) | Media file filtering configuration. |
| [OperationItem](arkts-medialibrary-operationitem-c.md) | Operation item |
| [PhotoSelectOptions](arkts-medialibrary-photoselectoptions-c.md) | PhotoSelectOptions extends base class BaseSelectOptions |
| [PhotoSelectResult](arkts-medialibrary-photoselectresult-c.md) | Defines information about the images or videos selected. |
| [PhotoViewMimeTypeFileSizeFilter](arkts-medialibrary-photoviewmimetypefilesizefilter-c.md) | Media file type and size combined filtering configuration. |
| [PhotoViewPicker](arkts-medialibrary-photoviewpicker-c.md) | Provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance. |
| [RecentPhotoInfo](arkts-medialibrary-recentphotoinfo-c.md) | Recent photo info |
| [RecentPhotoOptions](arkts-medialibrary-recentphotooptions-c.md) | RecentPhotoOptions Object |
| [RecommendationOptions](arkts-medialibrary-recommendationoptions-c.md) | Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices. |
| [RequestReadPermissionResult](arkts-medialibrary-requestreadpermissionresult-c.md) | Request read permission result |
| [VideoDurationFilter](arkts-medialibrary-videodurationfilter-c.md) | Media file video duration filtering configuration. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [AnalysisAlbum](arkts-medialibrary-analysisalbum-c-sys.md) | Analysis album to create. |
| [CloudEnhancement](arkts-medialibrary-cloudenhancement-c-sys.md) | Provides APIs for cloud enhancement management, including managing the tasks of generating AI-powered cloud enhancement photos and obtaining the association between the original photos and AI cloud enhancement photos. |
| [CloudMediaAssetManager](arkts-medialibrary-cloudmediaassetmanager-c-sys.md) | A class used for cloud media asset management. It is used to manage download tasks for media assets stored in the cloud and delete local data and files pertaining to these cloud-based assets. |
| [DefaultCoverOrderInfo](arkts-medialibrary-defaultcoverorderinfo-c-sys.md) | Default Cover Order |
| [HighlightAlbum](arkts-medialibrary-highlightalbum-c-sys.md) | Provides APIs for managing the Highlights album, which is an automatically generated collection of memorable photos or videos. |
| [KnowledgeContent](arkts-medialibrary-knowledgecontent-c-sys.md) | Knowledge Content class, used for geting related entity. |
| [MediaAlbumChangeRequest](arkts-medialibrary-mediaalbumchangerequest-c-sys.md) | Defines the class of media album change request. |
| [MediaAnalysisAlbumChangeRequest](arkts-medialibrary-mediaanalysisalbumchangerequest-c-sys.md) | Defines the class of media analysis album change request. |
| [MediaAssetChangeRequest](arkts-medialibrary-mediaassetchangerequest-c-sys.md) | Defines the class of media asset change request. |
| [MediaAssetEditData](arkts-medialibrary-mediaasseteditdata-c-sys.md) | Represents the edited media asset data. |
| [MediaAssetsChangeRequest](arkts-medialibrary-mediaassetschangerequest-c-sys.md) | Defines the class of media assets change request. |
| [MediaHighlightAlbumChangeRequest](arkts-medialibrary-mediahighlightalbumchangerequest-c-sys.md) | Defines the class of media highlight album change request. |
| [PhotoAssetCustomRecordManager](arkts-medialibrary-photoassetcustomrecordmanager-c-sys.md) | Defines the class of media asset custom record manager. |
| [PhotoSelectOptions](arkts-medialibrary-photoselectoptions-c-sys.md) | PhotoSelectOptions extends base class BaseSelectOptions |
| [RecommendationOptions](arkts-medialibrary-recommendationoptions-c-sys.md) | Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices. |
| [ResultSet](arkts-medialibrary-resultset-c-sys.md) | Provides methods for accessing a database result set generated by querying the database. |
| [TaskSignal](arkts-medialibrary-tasksignal-c-sys.md) | for interrupting batch operations. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-medialibrary-absalbum-i.md) | Defines the abstract interface of albums. |
| [Album](arkts-medialibrary-album-i.md) | Defines the album. |
| [AlbumChangeData](arkts-medialibrary-albumchangedata-i.md) | Defines the album change data. |
| [AlbumChangeInfo](arkts-medialibrary-albumchangeinfo-i.md) | Defines the detailed attributes of an album. |
| [AlbumChangeInfos](arkts-medialibrary-albumchangeinfos-i.md) | Defines the album change infos. |
| [AssetCompatibleCapability](arkts-medialibrary-assetcompatiblecapability-i.md) | Asset compatibility capabilities. |
| [ChangeData](arkts-medialibrary-changedata-i.md) | Defines the change data |
| [CreateOptions](arkts-medialibrary-createoptions-i.md) | Options for creating an image or video asset. |
| [CreationSetting](arkts-medialibrary-creationsetting-i.md) | Setting to create photo asset |
| [FetchOptions](arkts-medialibrary-fetchoptions-i.md) | Defines the options for fetching media files. |
| [FetchResult](arkts-medialibrary-fetchresult-i.md) | Provides APIs to manage the file retrieval result. |
| [MediaAssetDataHandler](arkts-medialibrary-mediaassetdatahandler-i.md) | Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared. |
| [MediaAssetProgressHandler](arkts-medialibrary-mediaassetprogresshandler-i.md) | Data handler used to notify the progress of required media asset data |
| [MediaChangeRequest](arkts-medialibrary-mediachangerequest-i.md) | Defines the interface of media change request. |
| [MediaLibraryAvailability](arkts-medialibrary-medialibraryavailability-i.md) | MediaLibrary availability. |
| [MovingPhoto](arkts-medialibrary-movingphoto-i.md) | Provides APIs for managing a moving photo instance. |
| [PhotoAccessHelper](arkts-medialibrary-photoaccesshelper-i.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-medialibrary-photoasset-i.md) | Provides APIs for encapsulating file asset attributes. |
| [PhotoAssetChangeData](arkts-medialibrary-photoassetchangedata-i.md) | Defines the photo or video change data. |
| [PhotoAssetChangeInfo](arkts-medialibrary-photoassetchangeinfo-i.md) | Defines the photo asset info. |
| [PhotoAssetChangeInfos](arkts-medialibrary-photoassetchangeinfos-i.md) | Defines the photo asset change infos. |
| [PhotoCreationConfig](arkts-medialibrary-photocreationconfig-i.md) | Config to create photo asset |
| [PhotoProxy](arkts-medialibrary-photoproxy-i.md) | Photo proxy object, which is used by the camera application to write image data. |
| [QuickImageDataHandler](arkts-medialibrary-quickimagedatahandler-i.md) | Data handler when quick request image is finished |
| [RequestOptions](arkts-medialibrary-requestoptions-i.md) | Options to request media asset |
| [TextContextInfo](arkts-medialibrary-textcontextinfo-i.md) | Represents the text information about the recommended images. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-medialibrary-absalbum-i-sys.md) | Defines the abstract interface of albums. |
| [Album](arkts-medialibrary-album-i-sys.md) | Defines the album. |
| [AlbumAttributeInfo](arkts-medialibrary-albumattributeinfo-i-sys.md) | Album attribute info. |
| [AlbumChangeData](arkts-medialibrary-albumchangedata-i-sys.md) | Defines the album change data. |
| [AlbumChangeInfo](arkts-medialibrary-albumchangeinfo-i-sys.md) | Defines the detailed attributes of an album. |
| [AlbumOperation](arkts-medialibrary-albumoperation-i-sys.md) | Album operation info. |
| [AlbumOrder](arkts-medialibrary-albumorder-i-sys.md) | Defines the album sorting information. |
| [AnalysisConfig](arkts-medialibrary-analysisconfig-i-sys.md) | Asset analysis config. |
| [AnalysisResult](arkts-medialibrary-analysisresult-i-sys.md) | Asset analysis result info. |
| [BatchOperationOptions](arkts-medialibrary-batchoperationoptions-i-sys.md) | Batch operation options |
| [ChangeData](arkts-medialibrary-changedata-i-sys.md) | Defines the change data |
| [CloudAssetDownloadProgressInfo](arkts-medialibrary-cloudassetdownloadprogressinfo-i-sys.md) | Download cloud asset callback info. |
| [CloudAssetDownloadStatus](arkts-medialibrary-cloudassetdownloadstatus-i-sys.md) | Download cloud asset status info. |
| [CloudEnhancementTaskState](arkts-medialibrary-cloudenhancementtaskstate-i-sys.md) | Represents the cloud enhancement task information, which includes the cloud enhancement task state and other information related to certain states. |
| [CloudMediaAssetStatus](arkts-medialibrary-cloudmediaassetstatus-i-sys.md) | Describes the details of a cloud media asset download task. It is the return value of the API used by applications to obtain the cloud asset download task status. |
| [ContextMap](arkts-medialibrary-contextmap-i-sys.md) | Provides APIs for input Context Map. |
| [DeepOptimizeSpaceProgress](arkts-medialibrary-deepoptimizespaceprogress-i-sys.md) | Defines the DeepOptimizeSpaceProgress data structure. |
| [Entity](arkts-medialibrary-entity-i-sys.md) | Provides APIs for output Entity. |
| [FormInfo](arkts-medialibrary-forminfo-i-sys.md) | Defines the Gallery widget information. |
| [FusionAssetsInfo](arkts-medialibrary-fusionassetsinfo-i-sys.md) | Fusion assets information. |
| [GalleryFormInfo](arkts-medialibrary-galleryforminfo-i-sys.md) | Gallery Form information. |
| [MovingPhoto](arkts-medialibrary-movingphoto-i-sys.md) | Provides APIs for managing a moving photo instance. |
| [Options](arkts-medialibrary-options-i-sys.md) | Provides APIs for input Options. |
| [PhotoAccessHelper](arkts-medialibrary-photoaccesshelper-i-sys.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-medialibrary-photoasset-i-sys.md) | Provides APIs for encapsulating file asset attributes. |
| [PhotoAssetChangeData](arkts-medialibrary-photoassetchangedata-i-sys.md) | Defines the photo or video change data. |
| [PhotoAssetChangeInfo](arkts-medialibrary-photoassetchangeinfo-i-sys.md) | Defines the photo asset info. |
| [PhotoAssetCustomRecord](arkts-medialibrary-photoassetcustomrecord-i-sys.md) | Custom record of media asset. |
| [PhotoCreateOptions](arkts-medialibrary-photocreateoptions-i-sys.md) | Options for creating an image or video asset. |
| [PhotoCreationSource](arkts-medialibrary-photocreationsource-i-sys.md) | Defines the application information provided to create assets on behalf of the application. |
| [Progress](arkts-medialibrary-progress-i-sys.md) | progress info of batch operations. |
| [RequestOptions](arkts-medialibrary-requestoptions-i-sys.md) | Options to request media asset |
| [RequestPhotoOptions](arkts-medialibrary-requestphotooptions-i-sys.md) | Defines the options for obtaining the thumbnail of an image or video. |
| [ResultInfo](arkts-medialibrary-resultinfo-i-sys.md) | ResultInfo info of batch operations. |
| [SearchSuggestionResult](arkts-medialibrary-searchsuggestionresult-i-sys.md) | Search suggestion result. |
| [SharedAlbumAsset](arkts-medialibrary-sharedalbumasset-i-sys.md) | Defines the shared album asset |
| [SharedPhotoAsset](arkts-medialibrary-sharedphotoasset-i-sys.md) | Defines the shared photo asset |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AlbumKeys](arkts-medialibrary-albumkeys-e.md) | Enumerates the key album attributes. |
| [AlbumSubtype](arkts-medialibrary-albumsubtype-e.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-medialibrary-albumtype-e.md) | Enumerates the album types. |
| [AvailabilityStatus](arkts-medialibrary-availabilitystatus-e.md) | Enumeration of medialibrary availability status. |
| [CompatibleMode](arkts-medialibrary-compatiblemode-e.md) | Enumerates the video transcoding mode. |
| [CompleteButtonText](arkts-medialibrary-completebuttontext-e.md) | Enum: complete button text |
| [DefaultChangeUri](arkts-medialibrary-defaultchangeuri-e.md) | Enumeration uris for registerChange. |
| [DeliveryMode](arkts-medialibrary-deliverymode-e.md) | Enumerates the asset delivery modes. |
| [DynamicRangeType](arkts-medialibrary-dynamicrangetype-e.md) | Enumerates the formats for displaying media assets. |
| [FilterOperator](arkts-medialibrary-filteroperator-e.md) | Enumeration type of filter operator. |
| [GridLevel](arkts-medialibrary-gridlevel-e.md) | Enumeration type of grid level. |
| [GridPinchModeType](arkts-medialibrary-gridpinchmodetype-e.md) | Enumeration type of grid pinch mode. |
| [ImageFileType](arkts-medialibrary-imagefiletype-e.md) | Enumerates the types of image files to save. |
| [MediaAssetPermissionState](arkts-medialibrary-mediaassetpermissionstate-e.md) | Enumeration of permission level for an application to access asset. |
| [MovingPhotoBadgeStateType](arkts-medialibrary-movingphotobadgestatetype-e.md) | Enumerates the types of the moving photo badge. |
| [NotifyChangeType](arkts-medialibrary-notifychangetype-e.md) | Enumerates the types of media asset and album changes. |
| [NotifyType](arkts-medialibrary-notifytype-e.md) | Enumeration types of data change. |
| [OperationType](arkts-medialibrary-operationtype-e.md) | Enumeration type of operation. |
| [PhotoKeys](arkts-medialibrary-photokeys-e.md) | Enumeration of photo asset members |
| [PhotoSource](arkts-medialibrary-photosource-e.md) | Enumeration of PhotoSource type |
| [PhotoSubtype](arkts-medialibrary-photosubtype-e.md) | Enumerates the [PhotoAsset](arkts-medialibrary-photoasset-i.md#photoasset) types. |
| [PhotoType](arkts-medialibrary-phototype-e.md) | Enumerates media file types. |
| [PhotoViewMIMETypes](arkts-medialibrary-photoviewmimetypes-e.md) | PhotoViewMIMETypes represents the type of media resource that photo picker selects. |
| [PlayMode](arkts-medialibrary-playmode-e.md) | Enumeration type of play mode. |
| [PositionType](arkts-medialibrary-positiontype-e.md) | Enumerates the file locations. |
| [PreferredCompatibleMode](arkts-medialibrary-preferredcompatiblemode-e.md) | Preferred compatible mode. |
| [RecommendationType](arkts-medialibrary-recommendationtype-e.md) | Enumerates the types of recommended images. |
| [ResourceType](arkts-medialibrary-resourcetype-e.md) | Enumerates the types of the resources to write. |
| [SceneType](arkts-medialibrary-scenetype-e.md) | Enumeration type of scene. |
| [SearchSuggestionType](arkts-medialibrary-searchsuggestiontype-e.md) | Search Suggestion Type. |
| [SingleSelectionMode](arkts-medialibrary-singleselectionmode-e.md) | Enumeration type of single selection mode |
| [VideoMode](arkts-medialibrary-videomode-e.md) | Enumeration of video mode type |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AlbumAttribute](arkts-medialibrary-albumattribute-e-sys.md) | Album operation attribute. |
| [AlbumKeys](arkts-medialibrary-albumkeys-e-sys.md) | Enumerates the key album attributes. |
| [AlbumOperationType](arkts-medialibrary-albumoperationtype-e-sys.md) | Album operation type. |
| [AlbumSubtype](arkts-medialibrary-albumsubtype-e-sys.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-medialibrary-albumtype-e-sys.md) | Enumerates the album types. |
| [AnalysisType](arkts-medialibrary-analysistype-e-sys.md) | Analysis type |
| [AppLinkState](arkts-medialibrary-applinkstate-e-sys.md) | App link state of an asset |
| [AssetSourceType](arkts-medialibrary-assetsourcetype-e-sys.md) | Enumerates the flags of asset source. |
| [AuthorizationMode](arkts-medialibrary-authorizationmode-e-sys.md) | Enumerates the authorization modes. |
| [CloudAssetDownloadCode](arkts-medialibrary-cloudassetdownloadcode-e-sys.md) | Add download cloud asset task result code. |
| [CloudAssetDownloadNotifyType](arkts-medialibrary-cloudassetdownloadnotifytype-e-sys.md) | Enumerates download cloud asset event type. |
| [CloudEnhancementState](arkts-medialibrary-cloudenhancementstate-e-sys.md) | Enumerates the cloud enhancement states. |
| [CloudEnhancementTaskStage](arkts-medialibrary-cloudenhancementtaskstage-e-sys.md) | Enumerates the cloud enhancement task states, which are returned by CloudEnhancementTaskState. |
| [CloudMediaAssetTaskStatus](arkts-medialibrary-cloudmediaassettaskstatus-e-sys.md) | Enumerates the statuses of tasks used for downloading cloud media assets. |
| [CloudMediaDownloadType](arkts-medialibrary-cloudmediadownloadtype-e-sys.md) | Enumerates the types of download tasks. |
| [CloudMediaRetainType](arkts-medialibrary-cloudmediaretaintype-e-sys.md) | Enumerates the modes used for deleting cloud media assets. |
| [CloudMediaTaskPauseCause](arkts-medialibrary-cloudmediataskpausecause-e-sys.md) | Enumerates the reasons why a cloud media asset download task is paused. |
| [CompositeDisplayMode](arkts-medialibrary-compositedisplaymode-e-sys.md) | Enumerates the composite photo display mode. |
| [CoverUriSource](arkts-medialibrary-coverurisource-e-sys.md) | Enumerates the source types of cover URIs. |
| [DeepOptimizeState](arkts-medialibrary-deepoptimizestate-e-sys.md) | Describes the state type of deep optimize space. |
| [DefaultChangeUri](arkts-medialibrary-defaultchangeuri-e-sys.md) | Enumeration uris for registerChange. |
| [FieldType](arkts-medialibrary-fieldtype-e-sys.md) | Enumerates related entity filed type. |
| [FusionAssetType](arkts-medialibrary-fusionassettype-e-sys.md) | Enumeration of fusion asset type |
| [HdrMode](arkts-medialibrary-hdrmode-e-sys.md) | Enumerates the HDR mode of media assets. |
| [HiddenPhotosDisplayMode](arkts-medialibrary-hiddenphotosdisplaymode-e-sys.md) | Enumerates the display modes of hidden files in the system. |
| [HideSensitiveType](arkts-medialibrary-hidesensitivetype-e-sys.md) | Enumerates the types of media resource information to be hidden from an application. |
| [HighlightAlbumChangeAttribute](arkts-medialibrary-highlightalbumchangeattribute-e-sys.md) | Enumerates the types of the highlights album attribute which can be set. |
| [HighlightAlbumInfoType](arkts-medialibrary-highlightalbuminfotype-e-sys.md) | Enumerates the types of the highlights album information. |
| [HighlightUserActionType](arkts-medialibrary-highlightuseractiontype-e-sys.md) | Enumerates the user behavior types of the highlights album. |
| [MovingPhotoEffectMode](arkts-medialibrary-movingphotoeffectmode-e-sys.md) | Enumeration of moving photo effect mode. |
| [NotifyChangeType](arkts-medialibrary-notifychangetype-e-sys.md) | Enumerates the types of media asset and album changes. |
| [PhotoKeys](arkts-medialibrary-photokeys-e-sys.md) | Enumeration of photo asset members |
| [PhotoPermissionType](arkts-medialibrary-photopermissiontype-e-sys.md) | Enumeration type of permissions for accessing asset uri. |
| [PhotoRiskStatus](arkts-medialibrary-photoriskstatus-e-sys.md) | Enumeration of photo risk status |
| [PhotoSubtype](arkts-medialibrary-photosubtype-e-sys.md) | Enumerates the [PhotoAsset](arkts-medialibrary-photoasset-i.md#photoasset) types. |
| [RankingMethod](arkts-medialibrary-rankingmethod-e-sys.md) | Enumerates related entity Ranking Method |
| [RecommendationType](arkts-medialibrary-recommendationtype-e-sys.md) | Enumerates the types of recommended images. |
| [RequestPhotoType](arkts-medialibrary-requestphototype-e-sys.md) | Enumerates the types of the operation for obtaining image or video thumbnails. |
| [ResourceType](arkts-medialibrary-resourcetype-e-sys.md) | Enumerates the types of the resources to write. |
| [SourceMode](arkts-medialibrary-sourcemode-e-sys.md) | Enumerates the types of the file to read. |
| [StrongAssociationType](arkts-medialibrary-strongassociationtype-e-sys.md) | Enumerates the flags of cloud-based enhancements for photos and videos. |
| [SupportedImageFormat](arkts-medialibrary-supportedimageformat-e-sys.md) | Enumerates the types of av file format. |
| [ThumbnailChangeStatus](arkts-medialibrary-thumbnailchangestatus-e-sys.md) | Enumeration status of thumbnail change. |
| [ThumbnailType](arkts-medialibrary-thumbnailtype-e-sys.md) | Enumerates thumbnail types. |
| [ThumbnailVisibility](arkts-medialibrary-thumbnailvisibility-e-sys.md) | Ability to access thumbnail |
| [VideoEnhancementType](arkts-medialibrary-videoenhancementtype-e-sys.md) | Enumerates the types of segmented video enhancement. |
| [WatermarkType](arkts-medialibrary-watermarktype-e-sys.md) | Enumerates the watermark editable flags. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [MemberType](arkts-medialibrary-membertype-t.md) | Indicates the type of photo asset member. |
| [OperationValueType](arkts-medialibrary-operationvaluetype-t.md) | Indicates possible value types |
| [PhotoAssetParams](arkts-medialibrary-photoassetparams-t.md) | Indicates the type of a batch photo asset member. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ProgressListener](arkts-medialibrary-progresslistener-t-sys.md) | Indicates the type of the progress of batch operation. Progress callback, which can be the size or numberof files. |
| [ResultListener](arkts-medialibrary-resultlistener-t-sys.md) | Indicates the type of the result of batch operation. |
| [ValueType](arkts-medialibrary-valuetype-t-sys.md) | Indicates possible value types |
| [ValuesBucket](arkts-medialibrary-valuesbucket-t-sys.md) | Values in buckets are stored in key-value pairs, change {[key: string]: ValueType;} to Record&lt;string, ValueType&gt; |
<!--DelEnd-->

