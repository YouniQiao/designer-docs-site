# ArkWebEngineVersion

For details about the ArkWeb kernel version, see [Adaptation Guide for the M114 Kernel on OpenHarmony 6.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/132_trunk/web/ReleaseNote/CompatibleWithLegacyWebEngine.md) .

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## SYSTEM_DEFAULT

```TypeScript
SYSTEM_DEFAULT = 0
```

Default system kernel. For OpenHarmony 6.0, the default kernel is M132.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## M114

```TypeScript
M114 = 1
```

Legacy kernel of OpenHarmony 6.0. You can select this legacy kernel. If it does not exist, the setting is invalid.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## M132

```TypeScript
M132 = 2
```

Evergreen kernel of OpenHarmony 6.0, which is M132 by default. If it does not exist, the setting is invalid.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## M144

```TypeScript
M144 = 3
```

ArkWeb M144 version.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

## ARKWEB_EVERGREEN

```TypeScript
ARKWEB_EVERGREEN = 99999
```

Evergreen kernel, which is the latest kernel of the system. You can choose to use the latest kernel for each system version. This setting takes effect for OpenHarmony 6.1 and later versions.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

