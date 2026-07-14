# WebMediaOptions

Describes the web media options.

**Since:** 10

**System capability:** SystemCapability.Web.Webview.Core

## audioExclusive

```TypeScript
audioExclusive?: boolean
```

Whether the audio of multiple **Web** instances in an application is exclusive. The value **true** indicates that the audio of multiple **Web** instances in an application is exclusive, and **false** indicates the opposite. The default value is **true**.

**Type:** boolean

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## audioSessionType

```TypeScript
audioSessionType?: AudioSessionType
```

Web audio type in the application. The default value is [STREAM_USAGE_MUSIC](../../apis-audio-kit/arkts-apis/arkts-audio-streamusage-e.md). This parameter changes the mapping between the component audio type and the system audio type, which affects the ArkWeb audio focus policy.

**Type:** AudioSessionType

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## resumeInterval

```TypeScript
resumeInterval?: number
```

Validity period for automatically resuming a web audio paused by another application, in seconds. The value range is [-2147483648, 2147483647]. If **resumeInterval** is set to **0**, the playback is not automatically resumed. If **resumeInterval** is set to a value greater than 0, the playback is resumed in the specified period. If **resumeInterval** is set to a value less than 0, the playback is resumed in an unlimited period. Due to the approximate value, the validity period may have a deviation of less than 1 second. **NOTE** After an HLS video is interrupted, the video playback is automatically resumed when the video is returned to the foreground.

**Type:** number

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

