# InstallParam

安装、恢复或卸载时需要指定的参数。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.installer:installer.InstallParam

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## isKeepData

```TypeScript
isKeepData: boolean
```

指示应用卸载时是否保留包数据，默认值：false，true表示保留，false表示不保留。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.installer:installer.InstallParam.isKeepData

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## installFlag

```TypeScript
installFlag: number
```

指示安装标志, 默认值：1。 </br>取值范围：</br>1: 覆盖安装。</br>16: 免安装。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.installer:installer.InstallParam.installFlag

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## userId

```TypeScript
userId: number
```

指示用户id, 默认值：调用方的userId。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.installer:installer.InstallParam.userId

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

