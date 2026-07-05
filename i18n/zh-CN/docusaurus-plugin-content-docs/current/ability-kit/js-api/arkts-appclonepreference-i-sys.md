# AppClonePreference

Defines the application clone preference configuration.

**起始版本：** 26.1.0

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

## mode

```TypeScript
mode: bundleManager.AppClonePreferenceMode
```

Preference mode for application cloning.

**类型：** bundleManager.AppClonePreferenceMode

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

## appIndex

```TypeScript
appIndex?: int
```

Index of the application clone. This value is valid only when the mode is CLONE_APP. The value ranges from 1 to 5 (maximum 5 clones are supported). The value should be an integer.

**类型：** int

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

