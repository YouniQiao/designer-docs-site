# ShortcutInfo (System API)

Describes the configuration information for a shortcut.

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## appIndex

```TypeScript
appIndex: number
```

Index of the application clone to which the shortcut belongs.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the application to which the shortcut belongs.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## hostAbility

```TypeScript
hostAbility?: string
```

Name of the ability that hosts the shortcut.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## icon

```TypeScript
icon?: string
```

Icon of the shortcut. The value is the index of a resource file.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## iconId

```TypeScript
iconId?: number
```

Resource ID of the shortcut icon.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## id

```TypeScript
id: string
```

ID of the shortcut.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## label

```TypeScript
label?: string
```

Label of the shortcut. The value can be descriptive text or a resource index.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## labelId

```TypeScript
labelId?: number
```

Resource ID of the shortcut label.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName?: string
```

Module name of the shortcut.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## sourceType

```TypeScript
sourceType: number
```

Source type of the shortcut. The value **0** means a custom shortcut, **1** means a static shortcut, and **2**
means a dynamic shortcut. Dynamic shortcuts are supported since API version 23.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## wants

```TypeScript
wants?: Array<ShortcutWant>
```

A collection of target Wants information defined within the shortcut.

**Type:** Array<ShortcutWant>

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

