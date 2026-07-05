# MediaSourceLoader

Defines a media data loader, which needs to be implemented by applications.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## read

```TypeScript
read: SourceReadCallback
```

Callback function is implemented by application, which is used to handle resource read requests.

**Type:** SourceReadCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## close

```TypeScript
close: SourceCloseCallback
```

Callback function is implemented by application, which is used to handle resource close request.

**Type:** SourceCloseCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## open

```TypeScript
open: SourceOpenCallback
```

Callback function is implemented by application, which is used to handle resource opening requests.

**Type:** SourceOpenCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

