# BundleFlag

Enumerates the bundle flags, which indicate the type of bundle information to obtain.

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## GET_BUNDLE_INFO_ONLY_WITH_LAUNCHER_ABILITY

```TypeScript
GET_BUNDLE_INFO_ONLY_WITH_LAUNCHER_ABILITY = 0x00001000
```

Used to obtain the bundle information of the application that has only a home screen icon. It is valid only in the [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-2) API. **System API**: This flag can be used only in system APIs.

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_BUNDLE_INFO_OF_ANY_USER

```TypeScript
GET_BUNDLE_INFO_OF_ANY_USER = 0x00002000
```

Used to obtain the bundle information of an application installed by any user. It must be used together with **GET_BUNDLE_INFO_WITH_APPLICATION**. It is valid only in the [getBundleInfo](arkts-ability-getbundleinfo-f.md#getbundleinfo-2) and [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-2) APIs. **System API**: This flag can be used only in system APIs.

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_BUNDLE_INFO_EXCLUDE_CLONE

```TypeScript
GET_BUNDLE_INFO_EXCLUDE_CLONE = 0x00004000
```

Used to obtain the bundle information of a main application (excluding its clones). It is valid only in the [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-2) API. **System API**: This flag can be used only in system APIs.

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_BUNDLE_INFO_WITH_CLOUD_KIT

```TypeScript
GET_BUNDLE_INFO_WITH_CLOUD_KIT = 0x00008000
```

Used to obtain the bundle information of an application that has device-cloud file synchronization or device- cloud structured data synchronization enabled. It is valid only in the [getAllBundleInfo](arkts-ability-getallbundleinfo-f-sys.md#getallbundleinfo-2) API. **System API**: This flag can be used only in system APIs.

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_BUNDLE_INFO_WITH_COMMON_CLONE

```TypeScript
GET_BUNDLE_INFO_WITH_COMMON_CLONE = 0x00080000
```

Used to obtain the bundle information of common app clones (appIndex: 1-5). It is valid only in the {@link bundleManager.getAllAppCloneBundleInfo} API. **System API**: This flag can be used only in system APIs.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## GET_BUNDLE_INFO_WITH_SANDBOX_CLONE

```TypeScript
GET_BUNDLE_INFO_WITH_SANDBOX_CLONE = 0x00100000
```

Used to obtain the bundle information of sandbox app clones (appIndex: 2000-3000). It is valid only in the {@link bundleManager.getAllAppCloneBundleInfo} API. **System API**: This flag can be used only in system APIs.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

