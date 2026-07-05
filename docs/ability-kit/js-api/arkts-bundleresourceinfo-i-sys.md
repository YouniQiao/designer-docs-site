# BundleResourceInfo

应用配置的图标和名称信息，可以通过 [getBundleResourceInfo]./../@ohos.bundle.bundleResourceManager:bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int) 获取。 > **说明：** > > 本模块为系统接口。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## appIndex

```TypeScript
readonly appIndex: int
```

应用分身Id。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## drawableDescriptor

```TypeScript
readonly drawableDescriptor: DrawableDescriptor
```

应用图标的drawableDescriptor对象。

**Type:** DrawableDescriptor

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

```TypeScript
readonly drawableDescriptor: DrawableDescriptor | null
```

Indicates the drawable descriptor of this bundle icon

**Type:** DrawableDescriptor | null

**Since:** 23

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## icon

```TypeScript
readonly icon: string
```

应用图标，为Base64编码格式。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## bundleName

```TypeScript
readonly bundleName: string
```

应用的包名。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

## label

```TypeScript
readonly label: string
```

应用名称。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

