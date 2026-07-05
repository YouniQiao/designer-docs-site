# ResourceFlag

```TypeScript
enum ResourceFlag
```

资源信息标志，指示需要获取的资源信息的内容。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## GET_RESOURCE_INFO_ALL

```TypeScript
GET_RESOURCE_INFO_ALL = 0x00000001
```

用于同时获取icon和label信息。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## GET_RESOURCE_INFO_WITH_LABEL

```TypeScript
GET_RESOURCE_INFO_WITH_LABEL = 0x00000002
```

用于获取仅包含label信息，icon信息为空。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## GET_RESOURCE_INFO_WITH_ICON

```TypeScript
GET_RESOURCE_INFO_WITH_ICON = 0x00000004
```

用于获取仅包含icon信息，label信息为空。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL

```TypeScript
GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL = 0x00000008
```

用于获取根据label排序后的信息。它不能单独使用需要与GET_RESOURCE_INFO_ALL 或 GET_RESOURCE_INFO_WITH_LABEL一起使用。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## GET_RESOURCE_INFO_WITH_DRAWABLE_DESCRIPTOR

```TypeScript
GET_RESOURCE_INFO_WITH_DRAWABLE_DESCRIPTOR = 0x00000010
```

用于获取应用图标的[drawableDescriptor]@ohos.arkui.drawableDescriptor对象。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY

```TypeScript
GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY = 0x00000020
```

用于获取仅在桌面上展示图标的Ability资源，它仅在 [getLauncherAbilityResourceInfo]bundleResourceManager.getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int) 和 [getAllLauncherAbilityResourceInfo]bundleResourceManager.getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>) 接口中生效。

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

