# DownloadConfiguration (System API)

Specifies the download configuration.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## forceDisableProfile

```TypeScript
forceDisableProfile: boolean
```

Specifies whether to forcibly disable the profile. If true, the active profile is disabled in order to perform
the operation. Otherwise, {@link RESULT_MUST_DISABLE_PROFILE} is returned in resultCode to ask for the user's
agreement to the operation.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## isPprAllowed

```TypeScript
isPprAllowed: boolean
```

Specifies whether the user allows the service provider to enforce this Profile Policy Rule (PPR)
after being informed of its restrictions.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## switchAfterDownload

```TypeScript
switchAfterDownload: boolean
```

Specifies whether to enable the profile after successful download.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

