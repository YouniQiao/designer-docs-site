# ToneHapticsAttrs (System API)

Haptics attributes in tone scenario.

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { systemSoundManager } from '@ohos.multimedia.systemSoundManager';
```

## getFileName

```TypeScript
getFileName(): string
```

Get file name of haptics.

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Haptics title. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

**Example**

```TypeScript
toneHapticsAttrs.getFileName();

```

## getGentleFileName

```TypeScript
getGentleFileName(): string | null
```

Get file name of gentle haptics.

**Since:** 22

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Haptics file name or null if not gentle haptics not exist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

**Example**

```TypeScript
toneHapticsAttrs.getGentleFileName();

```

## getGentleTitle

```TypeScript
getGentleTitle(): string | null
```

Get title of gentle haptics.

**Since:** 22

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Haptics title or null if not gentle haptics not exist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

**Example**

```TypeScript
toneHapticsAttrs.getGentleTitle();

```

## getGentleUri

```TypeScript
getGentleUri(): string | null
```

Get gentle haptics URI.

**Since:** 22

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Haptics URI or null if not gentle haptics not exist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

**Example**

```TypeScript
toneHapticsAttrs.getGentleUri();

```

## getTitle

```TypeScript
getTitle(): string
```

Get title of haptics.

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Haptics title. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

**Example**

```TypeScript
toneHapticsAttrs.getTitle();

```

## getUri

```TypeScript
getUri(): string
```

Get haptics uri.

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Haptics uri. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

**Example**

```TypeScript
toneHapticsAttrs.getUri();

```

