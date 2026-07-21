# getDomainAccountPolicy

## Modules to Import

```TypeScript
import { accountManager } from '@kit.MDMKit';
```

<a id="getdomainaccountpolicy"></a>
## getDomainAccountPolicy

```TypeScript
function getDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo): DomainAccountPolicy
```

Obtains the domain account policy.

**Since:** 19

**Required permissions:** ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-accountManager-function getDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo): DomainAccountPolicy--><!--Device-accountManager-function getDomainAccountPolicy(admin: Want, domainAccountInfo: osAccount.DomainAccountInfo): DomainAccountPolicy-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| domainAccountInfo | osAccount.DomainAccountInfo | Yes | Domain account information.<br>If all the internal attributes of **domainAccountInfo** are empty, the global domain account policy is queried.<br>If the internal attribute of **domainAccountInfo** is not empty, the specified domain account policy is queried.<br>Note: To query a specified domain account policy, the **serverConfigId** field in **DomainAccountInfo** is mandatory. |

**Return value:**

| Type | Description |
| --- | --- |
| [DomainAccountPolicy](arkts-mdm-accountmanager-domainaccountpolicy-i.md) | Domain account policy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { accountManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError, osAccount } from '@kit.BasicServicesKit';

async function getDomainAccountPolicy() {
  let wantTemp: Want = {
    // Replace with actual values.
    bundleName: 'com.example.myapplication',
    abilityName: 'EnterpriseAdminAbility'
  };
  let domainAccountPolicy: accountManager.DomainAccountPolicy = {};
  // Query the global domain account policy.
  let accountInfo: osAccount.DomainAccountInfo = {
    domain: '',
    accountName: '',
    serverConfigId: ''
  };
  try {
    domainAccountPolicy = accountManager.getDomainAccountPolicy(wantTemp, accountInfo);
    console.info('Succeeded in getting global domain account policy.');
  } catch (err) {
    console.error(`Failed to get domain account policy. Code: ${err.code}, message: ${err.message}`);
  }
  // Query the policy of a specified domain account.
  let accountInfo2: osAccount.DomainAccountInfo = {
    domain: '',
    accountName: '',
    serverConfigId: ''
  };
  // Replace with actual values.
  let userId: number = 100;
  await osAccount.getAccountManager()
    .getOsAccountDomainInfo(userId)
    .then((domainAccountInfo: osAccount.DomainAccountInfo) => {
      accountInfo2 = domainAccountInfo;
    })
    .catch((err: BusinessError) => {
      console.error(`Failed to get account domain info. Code: ${err.code}, message: ${err.message}`);
    })
  try {
    domainAccountPolicy = accountManager.getDomainAccountPolicy(wantTemp, accountInfo2);
    console.info('Succeeded in getting domain account policy.');
  } catch (err) {
    console.error(`Failed to get domain account policy. Code: ${err.code}, message: ${err.message}`);
  }
}

```

