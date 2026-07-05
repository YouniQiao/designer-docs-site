# ShortcutInfo

快捷方式的配置信息。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## iconId

```TypeScript
iconId?: long
```

快捷方式图标的资源ID。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## visible

```TypeScript
visible?: boolean
```

快捷方式是否显示。true：快捷方式显示；false：快捷方式不显示。默认值为true。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## appIndex

```TypeScript
appIndex: int
```

快捷方式所属应用的分身索引。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## hostAbility

```TypeScript
hostAbility?: string
```

快捷方式的宿主组件名, 即承载此快捷方式的组件名。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## labelId

```TypeScript
labelId?: long
```

快捷方式标签信息为资源索引时的资源ID。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## sourceType

```TypeScript
sourceType: int
```

快捷方式来源类型。0表示自定义快捷方式，1表示静态快捷方式，2表示动态快捷方式。从API version 23开始，支持动态快捷方式。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## icon

```TypeScript
icon?: string
```

快捷方式的图标，取值为资源文件的索引。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName?: string
```

快捷方式的模块名。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## wants

```TypeScript
wants?: Array<ShortcutWant>
```

快捷方式内定义的目标wants信息集合。

**Type:** Array<ShortcutWant>

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

快捷方式所属应用的包名。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## label

```TypeScript
label?: string
```

快捷方式的标签信息，即快捷方式对外显示的文字描述信息。可以是描述性内容，也可以是标识label的资源索引。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## id

```TypeScript
id: string
```

快捷方式的ID。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

