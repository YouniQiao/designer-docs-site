# ShortcutWant (System API)

Describes a collection of target [Wants](../../../../quick-start/module-configuration-file.md#wants) information defined within a shortcut.

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## parameters

```TypeScript
parameters?: Array<ParameterItem>
```

Custom data for launching the shortcut. The data must be strings. Both keys and values can be strings up to 1024 characters long.

**Type:** Array<ParameterItem>

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## targetAbility

```TypeScript
targetAbility: string
```

Target ability name of the shortcut.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## targetBundle

```TypeScript
targetBundle: string
```

Target bundle name of the shortcut.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## targetModule

```TypeScript
targetModule?: string
```

Target module name of the shortcut.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

