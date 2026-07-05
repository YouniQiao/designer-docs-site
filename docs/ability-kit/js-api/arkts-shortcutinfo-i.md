# ShortcutInfo

> **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager-ShortcutInfo](arkts-shortcutinfo-i.md#ShortcutInfo)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** shortcutInfo:ShortcutInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## iconId

```TypeScript
readonly iconId: number
```

快捷方式的图标ID。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#iconId

**System capability:** SystemCapability.BundleManager.BundleFramework

## isStatic

```TypeScript
readonly isStatic?: boolean
```

快捷方式是否为静态，取值为true表示是静态的快捷方式，取值为false表示不是静态的快捷方式。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType

**System capability:** SystemCapability.BundleManager.BundleFramework

## hostAbility

```TypeScript
readonly hostAbility: string
```

快捷方式的本地Ability信息。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#hostAbility

**System capability:** SystemCapability.BundleManager.BundleFramework

## disableMessage

```TypeScript
readonly disableMessage: string
```

快捷方式的禁用消息。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## labelId

```TypeScript
readonly labelId: number
```

快捷方式的名称ID。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#labelId

**System capability:** SystemCapability.BundleManager.BundleFramework

## isEnabled

```TypeScript
readonly isEnabled?: boolean
```

是否启用快捷方式，取值为true表示启用快捷方式，取值为false表示停用快捷方式。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#visible

**System capability:** SystemCapability.BundleManager.BundleFramework

## isHomeShortcut

```TypeScript
readonly isHomeShortcut?: boolean
```

快捷方式是否为静态，取值为true表示是静态的快捷方式，取值为false表示不是静态的快捷方式。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType

**System capability:** SystemCapability.BundleManager.BundleFramework

## icon

```TypeScript
readonly icon: string
```

快捷方式的图标。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#icon

**System capability:** SystemCapability.BundleManager.BundleFramework

## wants

```TypeScript
readonly wants: Array<ShortcutWant>
```

快捷方式意图列表。

**Type:** Array<ShortcutWant>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#wants

**System capability:** SystemCapability.BundleManager.BundleFramework

## bundleName

```TypeScript
readonly bundleName: string
```

包含该快捷方式的Bundle名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#bundleName

**System capability:** SystemCapability.BundleManager.BundleFramework

## label

```TypeScript
readonly label: string
```

快捷方式的名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#label

**System capability:** SystemCapability.BundleManager.BundleFramework

## id

```TypeScript
readonly id: string
```

快捷方式所属应用程序的ID。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#id

**System capability:** SystemCapability.BundleManager.BundleFramework

