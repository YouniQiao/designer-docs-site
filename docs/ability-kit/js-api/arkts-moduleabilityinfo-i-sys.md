# ModuleAbilityInfo

module包含的ability组件信息。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## exported

```TypeScript
readonly exported: boolean
```

表示ability是否可以被其它应用调用。true表示可以被其它应用调用，false表示不可以被其它应用调用。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## name

```TypeScript
readonly name: string
```

表示当前ability的名称，该名称在整个应用要唯一。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## label

```TypeScript
readonly label: string
```

表示ability对用户显示的名称，标签值配置为该名称的资源索引以支持多语言。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## forms

```TypeScript
readonly forms: Array<AbilityFormInfo>
```

卡片信息。

**Type:** Array<AbilityFormInfo>

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

