# AVScreenCaptureStrategy

Provides the media AVScreenCaptureStrategy definition.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## keepCaptureDuringCall

```TypeScript
keepCaptureDuringCall?: boolean
```

Allows starting or maintaining screen capture during a call

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

## privacyMaskMode

```TypeScript
privacyMaskMode?: int
```

Set the fill mode for screen capture when a privacy window exists.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

## enablePause

```TypeScript
enablePause?: boolean
```

Enable pausing the screen capture. The default value is false.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

## enableBFrame

```TypeScript
enableBFrame?: boolean
```

Indicates whether to enable B-frame encoding, which is used to reduce the size of the recorded file.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

## enableDeviceLevelCapture

```TypeScript
enableDeviceLevelCapture?: boolean
```

Defines whether to enable device-level content recording

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

