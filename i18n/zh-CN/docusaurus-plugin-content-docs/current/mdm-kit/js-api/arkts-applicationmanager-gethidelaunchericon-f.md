# getHideLauncherIcon

## getHideLauncherIcon

```TypeScript
function getHideLauncherIcon(admin: Want | null): Array<string>
```

查询当前用户下隐藏桌面应用图标名单。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want \| null | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 当设备有多个MDM应用时，传入admin  查询对应admin设置的策略。传入null时查询整机实际生效的策略。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 返回当前用户下的隐藏桌面应用图标名单。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**示例：**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let bundleNames: Array<string> = applicationManager.getHideLauncherIcon(wantTemp);
  console.info('Succeeded in getting hide launcher icon.');
} catch (err) {
  console.error(`Failed to get hide launcher icon. Code is ${err.code}, message is ${err.message}`);
}

```

