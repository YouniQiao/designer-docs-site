# Version

包的版本。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## code

```TypeScript
readonly code: int
```

标识应用的版本号，值为32位非负整数。此数字仅用于确定某个版本是否比另一个版本更新，数值越大表示版本越高。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## name

```TypeScript
readonly name: string
```

标识版本号的文字描述，用于向用户展示。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

## minCompatibleVersionCode

```TypeScript
readonly minCompatibleVersionCode: int
```

能够兼容的最低历史版本号，用于跨设备兼容性判断。该值为32位整型数值，非负整数。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

