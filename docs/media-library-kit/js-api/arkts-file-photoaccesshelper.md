# @ohos.file.photoAccessHelper

Helper functions to access image and video assets

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getPhotoAccessHelper](arkts-photoaccesshelper-getphotoaccesshelper-f.md#getPhotoAccessHelper-1) | Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album. |
| [getPhotoAccessHelper](arkts-photoaccesshelper-getphotoaccesshelper-f.md#getPhotoAccessHelper-2) | Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album. |
| <!--DelRow-->[getPhotoAccessHelper](arkts-photoaccesshelper-getphotoaccesshelper-f-sys.md#getPhotoAccessHelper-1) | Returns an instance of PhotoAccessHelper |
| <!--DelRow-->[getPhotoAccessHelper](arkts-photoaccesshelper-getphotoaccesshelper-f-sys.md#getPhotoAccessHelper-2) | Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album. |

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[AnalysisAlbum](arkts-photoaccesshelper-analysisalbum-c-sys.md) | Analysis album to create. |
| [AutoPlayScene](arkts-photoaccesshelper-autoplayscene-c.md) | Automatic playback scene of moving photo. |
| [BaseSelectOptions](arkts-photoaccesshelper-baseselectoptions-c.md) | Class BaseSelectOptions, which is extracted from class PhotoSelectOptions |
| <!--DelRow-->[CloudEnhancement](arkts-photoaccesshelper-cloudenhancement-c-sys.md) | Provides APIs for cloud enhancement management, including managing the tasks of generating AI-powered cloud enhancement photos and obtaining the association between the original photos and AI cloud enhancement photos. |
| <!--DelRow-->[CloudMediaAssetManager](arkts-photoaccesshelper-cloudmediaassetmanager-c-sys.md) | A class used for cloud media asset management. It is used to manage download tasks for media assets stored in the cloud and delete local data and files pertaining to these cloud-based assets. |
| [ContextRecoveryInfo](arkts-photoaccesshelper-contextrecoveryinfo-c.md) | Context information of the exit status of PhotoPicker, which can be used for on-site recovery of PhotoPicker next time. |
| <!--DelRow-->[DefaultCoverOrderInfo](arkts-photoaccesshelper-defaultcoverorderinfo-c-sys.md) | Default Cover Order |
| [FileSizeFilter](arkts-photoaccesshelper-filesizefilter-c.md) | Media file size filtering configuration. |
| [GridPinchMode](arkts-photoaccesshelper-gridpinchmode-c.md) | Grid pinch mode |
| <!--DelRow-->[HighlightAlbum](arkts-photoaccesshelper-highlightalbum-c-sys.md) | Provides APIs for managing the Highlights album, which is an automatically generated collection of memorable photos or videos. |
| <!--DelRow-->[KnowledgeContent](arkts-photoaccesshelper-knowledgecontent-c-sys.md) | Knowledge Content class, used for geting related entity. |
| [MediaAlbumChangeRequest](arkts-photoaccesshelper-mediaalbumchangerequest-c.md) | Defines the class of media album change request. |
| <!--DelRow-->[MediaAnalysisAlbumChangeRequest](arkts-photoaccesshelper-mediaanalysisalbumchangerequest-c-sys.md) | Defines the class of media analysis album change request. |
| [MediaAssetChangeRequest](arkts-photoaccesshelper-mediaassetchangerequest-c.md) | Defines the class of media asset change request. |
| <!--DelRow-->[MediaAssetEditData](arkts-photoaccesshelper-mediaasseteditdata-c-sys.md) | Represents the edited media asset data. |
| [MediaAssetManager](arkts-photoaccesshelper-mediaassetmanager-c.md) | The MediaAssetManager class is used for manipulating the read and write operations of media assets. |
| <!--DelRow-->[MediaAssetsChangeRequest](arkts-photoaccesshelper-mediaassetschangerequest-c-sys.md) | Defines the class of media assets change request. |
| <!--DelRow-->[MediaHighlightAlbumChangeRequest](arkts-photoaccesshelper-mediahighlightalbumchangerequest-c-sys.md) | Defines the class of media highlight album change request. |
| [MimeTypeFilter](arkts-photoaccesshelper-mimetypefilter-c.md) | Media file filtering configuration. |
| [OperationItem](arkts-photoaccesshelper-operationitem-c.md) | Operation item |
| <!--DelRow-->[PhotoAssetCustomRecordManager](arkts-photoaccesshelper-photoassetcustomrecordmanager-c-sys.md) | Defines the class of media asset custom record manager. |
| [PhotoSelectOptions](arkts-photoaccesshelper-photoselectoptions-c.md) | PhotoSelectOptions extends base class BaseSelectOptions |
| [PhotoSelectResult](arkts-photoaccesshelper-photoselectresult-c.md) | Defines information about the images or videos selected. |
| [PhotoViewMimeTypeFileSizeFilter](arkts-photoaccesshelper-photoviewmimetypefilesizefilter-c.md) | Media file type and size combined filtering configuration. |
| [PhotoViewPicker](arkts-photoaccesshelper-photoviewpicker-c.md) | Provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance. |
| [RecentPhotoInfo](arkts-photoaccesshelper-recentphotoinfo-c.md) | Recent photo info |
| [RecentPhotoOptions](arkts-photoaccesshelper-recentphotooptions-c.md) | RecentPhotoOptions Object |
| [RecommendationOptions](arkts-photoaccesshelper-recommendationoptions-c.md) | Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices. |
| [RequestReadPermissionResult](arkts-photoaccesshelper-requestreadpermissionresult-c.md) | Request read permission result |
| <!--DelRow-->[ResultSet](arkts-photoaccesshelper-resultset-c-sys.md) | Provides methods for accessing a database result set generated by querying the database. |
| <!--DelRow-->[TaskSignal](arkts-photoaccesshelper-tasksignal-c-sys.md) | for interrupting batch operations. |
| [VideoDurationFilter](arkts-photoaccesshelper-videodurationfilter-c.md) | Media file video duration filtering configuration. |

### Interfaces

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-photoaccesshelper-absalbum-i.md) | Defines the abstract interface of albums. |
| [Album](arkts-photoaccesshelper-album-i.md) | Defines the album. |
| <!--DelRow-->[AlbumAttributeInfo](arkts-photoaccesshelper-albumattributeinfo-i-sys.md) | Album attribute info. |
| [AlbumChangeData](arkts-photoaccesshelper-albumchangedata-i.md) | Defines the album change data. |
| [AlbumChangeInfo](arkts-photoaccesshelper-albumchangeinfo-i.md) | Defines the detailed attributes of an album. |
| [AlbumChangeInfos](arkts-photoaccesshelper-albumchangeinfos-i.md) | Defines the album change infos. |
| <!--DelRow-->[AlbumOperation](arkts-photoaccesshelper-albumoperation-i-sys.md) | Album operation info. |
| <!--DelRow-->[AlbumOrder](arkts-photoaccesshelper-albumorder-i-sys.md) | Defines the album sorting information. |
| <!--DelRow-->[AnalysisConfig](arkts-photoaccesshelper-analysisconfig-i-sys.md) | Asset analysis config. |
| <!--DelRow-->[AnalysisResult](arkts-photoaccesshelper-analysisresult-i-sys.md) | Asset analysis result info. |
| [AssetCompatibleCapability](arkts-photoaccesshelper-assetcompatiblecapability-i.md) | Asset compatibility capabilities. |
| <!--DelRow-->[BatchOperationOptions](arkts-photoaccesshelper-batchoperationoptions-i-sys.md) | Batch operation options |
| [ChangeData](arkts-photoaccesshelper-changedata-i.md) | Defines the change data |
| <!--DelRow-->[CloudAssetDownloadProgressInfo](arkts-photoaccesshelper-cloudassetdownloadprogressinfo-i-sys.md) | Download cloud asset callback info. |
| <!--DelRow-->[CloudAssetDownloadStatus](arkts-photoaccesshelper-cloudassetdownloadstatus-i-sys.md) | Download cloud asset status info. |
| <!--DelRow-->[CloudEnhancementTaskState](arkts-photoaccesshelper-cloudenhancementtaskstate-i-sys.md) | Represents the cloud enhancement task information, which includes the cloud enhancement task state and other information related to certain states. |
| <!--DelRow-->[CloudMediaAssetStatus](arkts-photoaccesshelper-cloudmediaassetstatus-i-sys.md) | Describes the details of a cloud media asset download task. It is the return value of the API used by applications to obtain the cloud asset download task status. |
| <!--DelRow-->[ContextMap](arkts-photoaccesshelper-contextmap-i-sys.md) | Provides APIs for input Context Map. |
| [CreateOptions](arkts-photoaccesshelper-createoptions-i.md) | Options for creating an image or video asset. |
| [CreationSetting](arkts-photoaccesshelper-creationsetting-i.md) | Setting to create photo asset |
| <!--DelRow-->[DeepOptimizeSpaceProgress](arkts-photoaccesshelper-deepoptimizespaceprogress-i-sys.md) | Defines the DeepOptimizeSpaceProgress data structure. |
| <!--DelRow-->[Entity](arkts-photoaccesshelper-entity-i-sys.md) | Provides APIs for output Entity. |
| [FetchOptions](arkts-photoaccesshelper-fetchoptions-i.md) | Defines the options for fetching media files. |
| [FetchResult](arkts-photoaccesshelper-fetchresult-i.md) | Provides APIs to manage the file retrieval result. |
| <!--DelRow-->[FormInfo](arkts-photoaccesshelper-forminfo-i-sys.md) | Defines the Gallery widget information. |
| <!--DelRow-->[FusionAssetsInfo](arkts-photoaccesshelper-fusionassetsinfo-i-sys.md) | Fusion assets information. |
| <!--DelRow-->[GalleryFormInfo](arkts-photoaccesshelper-galleryforminfo-i-sys.md) | Gallery Form information. |
| [MediaAssetDataHandler](arkts-photoaccesshelper-mediaassetdatahandler-i.md) | Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared. |
| [MediaAssetProgressHandler](arkts-photoaccesshelper-mediaassetprogresshandler-i.md) | Data handler used to notify the progress of required media asset data |
| [MediaChangeRequest](arkts-photoaccesshelper-mediachangerequest-i.md) | Defines the interface of media change request. |
| [MediaLibraryAvailability](arkts-photoaccesshelper-medialibraryavailability-i.md) | MediaLibrary availability. |
| [MovingPhoto](arkts-photoaccesshelper-movingphoto-i.md) | Provides APIs for managing a moving photo instance. |
| <!--DelRow-->[Options](arkts-photoaccesshelper-options-i-sys.md) | Provides APIs for input Options. |
| [PhotoAccessHelper](arkts-photoaccesshelper-photoaccesshelper-i.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-photoaccesshelper-photoasset-i.md) | Provides APIs for encapsulating file asset attributes. |
| [PhotoAssetChangeData](arkts-photoaccesshelper-photoassetchangedata-i.md) | Defines the photo or video change data. |
| [PhotoAssetChangeInfo](arkts-photoaccesshelper-photoassetchangeinfo-i.md) | Defines the photo asset info. |
| [PhotoAssetChangeInfos](arkts-photoaccesshelper-photoassetchangeinfos-i.md) | Defines the photo asset change infos. |
| <!--DelRow-->[PhotoAssetCustomRecord](arkts-photoaccesshelper-photoassetcustomrecord-i-sys.md) | Custom record of media asset. |
| <!--DelRow-->[PhotoCreateOptions](arkts-photoaccesshelper-photocreateoptions-i-sys.md) | Options for creating an image or video asset. |
| [PhotoCreationConfig](arkts-photoaccesshelper-photocreationconfig-i.md) | Config to create photo asset |
| <!--DelRow-->[PhotoCreationSource](arkts-photoaccesshelper-photocreationsource-i-sys.md) | Defines the application information provided to create assets on behalf of the application. |
| <!--DelRow-->[PhotoProxy](arkts-photoaccesshelper-photoproxy-i-sys.md) | Photo proxy object, which is used by the camera application to write image data. |
| <!--DelRow-->[Progress](arkts-photoaccesshelper-progress-i-sys.md) | progress info of batch operations. |
| [QuickImageDataHandler](arkts-photoaccesshelper-quickimagedatahandler-i.md) | Data handler when quick request image is finished |
| [RequestOptions](arkts-photoaccesshelper-requestoptions-i.md) | Options to request media asset |
| <!--DelRow-->[RequestPhotoOptions](arkts-photoaccesshelper-requestphotooptions-i-sys.md) | Defines the options for obtaining the thumbnail of an image or video. |
| <!--DelRow-->[ResultInfo](arkts-photoaccesshelper-resultinfo-i-sys.md) | ResultInfo info of batch operations. |
| <!--DelRow-->[SearchSuggestionResult](arkts-photoaccesshelper-searchsuggestionresult-i-sys.md) | Search suggestion result. |
| <!--DelRow-->[SharedAlbumAsset](arkts-photoaccesshelper-sharedalbumasset-i-sys.md) | Defines the shared album asset |
| <!--DelRow-->[SharedPhotoAsset](arkts-photoaccesshelper-sharedphotoasset-i-sys.md) | Defines the shared photo asset |
| [TextContextInfo](arkts-photoaccesshelper-textcontextinfo-i.md) | Represents the text information about the recommended images. |

### Types

| Name | Description |
| --- | --- |
| [MemberType](arkts-photoaccesshelper-membertype-t.md) | Indicates the type of photo asset member. |
| [OperationValueType](arkts-photoaccesshelper-operationvaluetype-t.md) | Indicates possible value types |
| [PhotoAssetParams](arkts-photoaccesshelper-photoassetparams-t.md) | Indicates the type of a batch photo asset member. |
| <!--DelRow-->[ProgressListener](arkts-photoaccesshelper-progresslistener-t-sys.md) | Indicates the type of the progress of batch operation. Progress callback, which can be the size or numberof files. |
| <!--DelRow-->[ResultListener](arkts-photoaccesshelper-resultlistener-t-sys.md) | Indicates the type of the result of batch operation. |
| <!--DelRow-->[ValuesBucket](arkts-photoaccesshelper-valuesbucket-t-sys.md) | Values in buckets are stored in key-value pairs, change {[key: string]: ValueType;} to Record<string, ValueType> |
| <!--DelRow-->[ValueType](arkts-photoaccesshelper-valuetype-t-sys.md) | Indicates possible value types |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AlbumAttribute](arkts-photoaccesshelper-albumattribute-e-sys.md) | Album operation attribute. |
| [AlbumKeys](arkts-photoaccesshelper-albumkeys-e.md) | Enumerates the key album attributes. |
| <!--DelRow-->[AlbumOperationType](arkts-photoaccesshelper-albumoperationtype-e-sys.md) | Album operation type. |
| [AlbumSubtype](arkts-photoaccesshelper-albumsubtype-e.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-photoaccesshelper-albumtype-e.md) | Enumerates the album types. |
| <!--DelRow-->[AnalysisType](arkts-photoaccesshelper-analysistype-e-sys.md) | Analysis type |
| <!--DelRow-->[AppLinkState](arkts-photoaccesshelper-applinkstate-e-sys.md) | App link state of an asset |
| <!--DelRow-->[AssetSourceType](arkts-photoaccesshelper-assetsourcetype-e-sys.md) | Enumerates the flags of asset source. |
| <!--DelRow-->[AuthorizationMode](arkts-photoaccesshelper-authorizationmode-e-sys.md) | Enumerates the authorization modes. |
| [AvailabilityStatus](arkts-photoaccesshelper-availabilitystatus-e.md) | Enumeration of medialibrary availability status. |
| <!--DelRow-->[CloudAssetDownloadCode](arkts-photoaccesshelper-cloudassetdownloadcode-e-sys.md) | Add download cloud asset task result code. |
| <!--DelRow-->[CloudAssetDownloadNotifyType](arkts-photoaccesshelper-cloudassetdownloadnotifytype-e-sys.md) | Enumerates download cloud asset event type. |
| <!--DelRow-->[CloudEnhancementState](arkts-photoaccesshelper-cloudenhancementstate-e-sys.md) | Enumerates the cloud enhancement states. |
| <!--DelRow-->[CloudEnhancementTaskStage](arkts-photoaccesshelper-cloudenhancementtaskstage-e-sys.md) | Enumerates the cloud enhancement task states, which are returned by CloudEnhancementTaskState. |
| <!--DelRow-->[CloudMediaAssetTaskStatus](arkts-photoaccesshelper-cloudmediaassettaskstatus-e-sys.md) | Enumerates the statuses of tasks used for downloading cloud media assets. |
| <!--DelRow-->[CloudMediaDownloadType](arkts-photoaccesshelper-cloudmediadownloadtype-e-sys.md) | Enumerates the types of download tasks. |
| <!--DelRow-->[CloudMediaRetainType](arkts-photoaccesshelper-cloudmediaretaintype-e-sys.md) | Enumerates the modes used for deleting cloud media assets. |
| <!--DelRow-->[CloudMediaTaskPauseCause](arkts-photoaccesshelper-cloudmediataskpausecause-e-sys.md) | Enumerates the reasons why a cloud media asset download task is paused. |
| [CompatibleMode](arkts-photoaccesshelper-compatiblemode-e.md) | Enumerates the video transcoding mode. |
| [CompleteButtonText](arkts-photoaccesshelper-completebuttontext-e.md) | Enum: complete button text |
| <!--DelRow-->[CompositeDisplayMode](arkts-photoaccesshelper-compositedisplaymode-e-sys.md) | Enumerates the composite photo display mode. |
| <!--DelRow-->[CoverUriSource](arkts-photoaccesshelper-coverurisource-e-sys.md) | Enumerates the source types of cover URIs. |
| <!--DelRow-->[DeepOptimizeState](arkts-photoaccesshelper-deepoptimizestate-e-sys.md) | Describes the state type of deep optimize space. |
| [DefaultChangeUri](arkts-photoaccesshelper-defaultchangeuri-e.md) | Enumeration uris for registerChange. |
| [DeliveryMode](arkts-photoaccesshelper-deliverymode-e.md) | Enumerates the asset delivery modes. |
| [DynamicRangeType](arkts-photoaccesshelper-dynamicrangetype-e.md) | Enumerates the formats for displaying media assets. |
| <!--DelRow-->[FieldType](arkts-photoaccesshelper-fieldtype-e-sys.md) | Enumerates related entity filed type. |
| [FilterOperator](arkts-photoaccesshelper-filteroperator-e.md) | Enumeration type of filter operator. |
| [FusionAssetType](arkts-photoaccesshelper-fusionassettype-e.md) | Enumeration of fusion asset type |
| [GridLevel](arkts-photoaccesshelper-gridlevel-e.md) | Enumeration type of grid level. |
| [GridPinchModeType](arkts-photoaccesshelper-gridpinchmodetype-e.md) | Enumeration type of grid pinch mode. |
| <!--DelRow-->[HdrMode](arkts-photoaccesshelper-hdrmode-e-sys.md) | Enumerates the HDR mode of media assets. |
| <!--DelRow-->[HiddenPhotosDisplayMode](arkts-photoaccesshelper-hiddenphotosdisplaymode-e-sys.md) | Enumerates the display modes of hidden files in the system. |
| <!--DelRow-->[HideSensitiveType](arkts-photoaccesshelper-hidesensitivetype-e-sys.md) | Enumerates the types of media resource information to be hidden from an application. |
| <!--DelRow-->[HighlightAlbumChangeAttribute](arkts-photoaccesshelper-highlightalbumchangeattribute-e-sys.md) | Enumerates the types of the highlights album attribute which can be set. |
| <!--DelRow-->[HighlightAlbumInfoType](arkts-photoaccesshelper-highlightalbuminfotype-e-sys.md) | Enumerates the types of the highlights album information. |
| <!--DelRow-->[HighlightUserActionType](arkts-photoaccesshelper-highlightuseractiontype-e-sys.md) | Enumerates the user behavior types of the highlights album. |
| [ImageFileType](arkts-photoaccesshelper-imagefiletype-e.md) | Enumerates the types of image files to save. |
| [MediaAssetPermissionState](arkts-photoaccesshelper-mediaassetpermissionstate-e.md) | Enumeration of permission level for an application to access asset. |
| [MovingPhotoBadgeStateType](arkts-photoaccesshelper-movingphotobadgestatetype-e.md) | Enumerates the types of the moving photo badge. |
| <!--DelRow-->[MovingPhotoEffectMode](arkts-photoaccesshelper-movingphotoeffectmode-e-sys.md) | Enumeration of moving photo effect mode. |
| [NotifyChangeType](arkts-photoaccesshelper-notifychangetype-e.md) | Enumerates the types of media asset and album changes. |
| [NotifyType](arkts-photoaccesshelper-notifytype-e.md) | Enumeration types of data change. |
| [OperationType](arkts-photoaccesshelper-operationtype-e.md) | Enumeration type of operation. |
| [PhotoKeys](arkts-photoaccesshelper-photokeys-e.md) | Enumeration of photo asset members |
| <!--DelRow-->[PhotoPermissionType](arkts-photoaccesshelper-photopermissiontype-e-sys.md) | Enumeration type of permissions for accessing asset uri. |
| <!--DelRow-->[PhotoRiskStatus](arkts-photoaccesshelper-photoriskstatus-e-sys.md) | Enumeration of photo risk status |
| [PhotoSource](arkts-photoaccesshelper-photosource-e.md) | Enumeration of PhotoSource type |
| <!--DelRow-->[PhotoSubtype](arkts-photoaccesshelper-photosubtype-e-sys.md) | Enumerates the [PhotoAsset]{@link photoAccessHelper.PhotoAsset} types. |
| [PhotoType](arkts-photoaccesshelper-phototype-e.md) | Enumerates media file types. |
| [PhotoViewMIMETypes](arkts-photoaccesshelper-photoviewmimetypes-e.md) | PhotoViewMIMETypes represents the type of media resource that photo picker selects. |
| [PlayMode](arkts-photoaccesshelper-playmode-e.md) | Enumeration type of play mode. |
| [PositionType](arkts-photoaccesshelper-positiontype-e.md) | Enumerates the file locations. |
| [PreferredCompatibleMode](arkts-photoaccesshelper-preferredcompatiblemode-e.md) | Preferred compatible mode. |
| <!--DelRow-->[RankingMethod](arkts-photoaccesshelper-rankingmethod-e-sys.md) | Enumerates related entity Ranking Method |
| [RecommendationType](arkts-photoaccesshelper-recommendationtype-e.md) | Enumerates the types of recommended images. |
| <!--DelRow-->[RequestPhotoType](arkts-photoaccesshelper-requestphototype-e-sys.md) | Enumerates the types of the operation for obtaining image or video thumbnails. |
| [ResourceType](arkts-photoaccesshelper-resourcetype-e.md) | Enumerates the types of the resources to write. |
| [SceneType](arkts-photoaccesshelper-scenetype-e.md) | Enumeration type of scene. |
| [SearchSuggestionType](arkts-photoaccesshelper-searchsuggestiontype-e.md) | Search Suggestion Type. |
| [SingleSelectionMode](arkts-photoaccesshelper-singleselectionmode-e.md) | Enumeration type of single selection mode |
| <!--DelRow-->[SourceMode](arkts-photoaccesshelper-sourcemode-e-sys.md) | Enumerates the types of the file to read. |
| <!--DelRow-->[StrongAssociationType](arkts-photoaccesshelper-strongassociationtype-e-sys.md) | Enumerates the flags of cloud-based enhancements for photos and videos. |
| <!--DelRow-->[SupportedImageFormat](arkts-photoaccesshelper-supportedimageformat-e-sys.md) | Enumerates the types of av file format. |
| <!--DelRow-->[ThumbnailChangeStatus](arkts-photoaccesshelper-thumbnailchangestatus-e-sys.md) | Enumeration status of thumbnail change. |
| <!--DelRow-->[ThumbnailType](arkts-photoaccesshelper-thumbnailtype-e-sys.md) | Enumerates thumbnail types. |
| <!--DelRow-->[ThumbnailVisibility](arkts-photoaccesshelper-thumbnailvisibility-e-sys.md) | Ability to access thumbnail |
| <!--DelRow-->[VideoEnhancementType](arkts-photoaccesshelper-videoenhancementtype-e-sys.md) | Enumerates the types of segmented video enhancement. |
| [VideoMode](arkts-photoaccesshelper-videomode-e.md) | Enumeration of video mode type |
| <!--DelRow-->[WatermarkType](arkts-photoaccesshelper-watermarktype-e-sys.md) | Enumerates the watermark editable flags. |

