# getAllowedDistributeAbilityConnBundles

## getAllowedDistributeAbilityConnBundles

```TypeScript
function getAllowedDistributeAbilityConnBundles(admin: Want | null, serviceType: ServiceType, accountId: number): Array<string>
```

获取指定用户下允许使用指定类型的分布式能力的应用名单。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want \| null | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| serviceType | ServiceType | 是 | 分布式能力类型。 |
| accountId | number | 是 | 用户ID，取值范围：大于等于0的整数。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 允许使用指定类型的分布式能力的应用的[唯一标识符]./bundleManager/BundleInfo:SignatureInfo的数组。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

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
  // 需根据实际情况进行替换
  let accountId: number = 100;
  let result: Array<string> = applicationManager.getAllowedDistributeAbilityConnBundles(wantTemp, applicationManager.ServiceType.COLLABORATION_SERVICE, accountId);
  console.info(`Succeeded in getting allowed distribute ability conn bundles: ${JSON.stringify(result)}`);
} catch(err) {
  console.error(`Failed to get allowed distribute ability conn bundles. Code: ${err.code}, message: ${err.message}`);
}

```

