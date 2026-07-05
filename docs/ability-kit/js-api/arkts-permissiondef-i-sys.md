# PermissionDef

[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中定义的权限详细信息，通过接口 [bundleManager.getPermissionDef]./../@ohos.bundle.bundleManager:bundleManager.getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>) 获取。 > **说明：** > > 本模块为系统接口。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## descriptionId

```TypeScript
readonly descriptionId: long
```

描述权限的ID。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## labelId

```TypeScript
readonly labelId: long
```

权限的标签ID。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## grantMode

```TypeScript
readonly grantMode: int
```

[权限的授予方式](docroot://security/AccessToken/app-permission-mgmt-overview.md#授权方式)。0：表示用户授权，1：表示系统授权。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## permissionName

```TypeScript
readonly permissionName: string
```

用户权限名称。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

