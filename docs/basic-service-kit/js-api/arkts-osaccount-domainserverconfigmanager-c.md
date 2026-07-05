# DomainServerConfigManager

域服务器配置管理类。

**Since:** 18

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## addServerConfig

```TypeScript
static addServerConfig(parameters: Record<string, Object>): Promise<DomainServerConfig>
```

添加域服务器配置。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameters | Record&lt;string, Object> | Yes | 表示域服务器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainServerConfig> | Promise对象，返回新添加的域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid server config parameters. |
| 12300211 | Server unreachable. |
| 12300213 | Server config already exists. |
| 12300215 | The number of server config reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let configParams: Record<string, Object> = {
  'uri': 'test.example.com',
  'port': 100
};
osAccount.DomainServerConfigManager.addServerConfig(configParams).then((
  serverConfig: osAccount.DomainServerConfig) => {
  console.info('add server configuration successfully, the return config: ' + JSON.stringify(serverConfig));
}).catch((err: BusinessError) => {
  console.error(`add server configuration failed, code is ${err.code}, message is ${err.message}`);
});

```

## addServerConfig

```TypeScript
static addServerConfig(parameters: Record<string, RecordData>): Promise<DomainServerConfig>
```

添加域服务器配置。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameters | Record&lt;string, RecordData> | Yes | 表示域服务器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainServerConfig> | Promise对象，返回新添加的域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid server config parameters. |
| 12300211 | Server unreachable. |
| 12300213 | Server config already exists. |
| 12300215 | The number of server config reaches the upper limit. |

## getAccountServerConfig

```TypeScript
static getAccountServerConfig(domainAccountInfo: DomainAccountInfo): Promise<DomainServerConfig>
```

获取目标域账号的服务器配置。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 表示目标域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainServerConfig> | Promise对象，返回目标账号的域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300003 | Domain account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let accountInfo: osAccount.DomainAccountInfo = {
  'accountName': 'demoName',
  'domain': 'demoDomain'
};
osAccount.DomainServerConfigManager.getAccountServerConfig(accountInfo).then((
  serverConfig: osAccount.DomainServerConfig) => {
  console.info('get account server configuration successfully, the return config: ' + JSON.stringify(serverConfig));
}).catch((err: BusinessError) => {
  console.error(`add server configuration failed, code is ${err.code}, message is ${err.message}`);
});

```

## getAllServerConfigs

```TypeScript
static getAllServerConfigs(): Promise<Array<DomainServerConfig>>
```

获取所有域服务器配置。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DomainServerConfig>> | Promise对象，返回获取的所有域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let configParams: Record<string, Object> = {
  'uri': 'test.example.com',
  'port': 100
};
osAccount.DomainServerConfigManager.addServerConfig(configParams).then((
  serverConfig: osAccount.DomainServerConfig) => {
  console.info('add domain server configuration successfully, the added config: ' + JSON.stringify(serverConfig));
  osAccount.DomainServerConfigManager.getAllServerConfigs().then((data: Array<osAccount.DomainServerConfig>) => {
    console.info('get all domain server configuration successfully, return config: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error(`get all domain server configuration failed, code is ${err.code}, message is ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`add server configuration failed, code is ${err.code}, message is ${err.message}`);
});

```

## getServerConfig

```TypeScript
static getServerConfig(configId: string): Promise<DomainServerConfig>
```

获取域服务器配置。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configId | string | Yes | 表示服务器配置标识。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainServerConfig> | Promise对象，返回获取的域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300212 | Server config not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let configParams: Record<string, Object> = {
  'uri': 'test.example.com',
  'port': 100
};
osAccount.DomainServerConfigManager.addServerConfig(configParams).then((
  serverConfig: osAccount.DomainServerConfig) => {
  console.info('add domain server configuration successfully, the added config: ' + JSON.stringify(serverConfig));
  osAccount.DomainServerConfigManager.getServerConfig(serverConfig.id).then((data: osAccount.DomainServerConfig) => {
    console.info('get domain server configuration successfully, return config: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error(`get domain server configuration failed, code is ${err.code}, message is ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`add server configuration failed, code is ${err.code}, message is ${err.message}`);
});

```

## removeServerConfig

```TypeScript
static removeServerConfig(configId: string): Promise<void>
```

删除域服务器配置。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configId | string | Yes | 表示服务器配置标识。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300212 | Server config not found. |
| 12300214 | Server config has been associated with an account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let configParams: Record<string, Object> = {
  'uri': 'test.example.com',
  'port': 100
};
osAccount.DomainServerConfigManager.addServerConfig(configParams).then((
  serverConfig: osAccount.DomainServerConfig) => {
  console.info('add domain server configuration successfully, the added config: ' + JSON.stringify(serverConfig));
  osAccount.DomainServerConfigManager.removeServerConfig(serverConfig.id);
  console.info('remove domain server configuration successfully');
}).catch((err: BusinessError) => {
  console.error(`add server configuration failed, code is ${err.code}, message is ${err.message}`);
});

```

## updateServerConfig

```TypeScript
static updateServerConfig(configId: string, parameters: Record<string, Object>): Promise<DomainServerConfig>
```

更新域服务器配置。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configId | string | Yes | 表示服务器配置标识。 |
| parameters | Record&lt;string, Object> | Yes | 表示域服务器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainServerConfig> | Promise对象，返回更新后的域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid server config parameters. |
| 12300211 | Server unreachable. |
| 12300212 | Server config not found. |
| 12300213 | Server config already exists. |
| 12300214 | Server config has been associated with an account. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let configParams: Record<string, Object> = {
  'uri': 'test.example.com',
  'port': 100
};
osAccount.DomainServerConfigManager.addServerConfig(configParams).then((
  serverConfig: osAccount.DomainServerConfig) => {
  console.info('add domain server configuration successfully, the added config: ' + JSON.stringify(serverConfig));
  osAccount.DomainServerConfigManager.updateServerConfig(serverConfig.id, configParams).then((data) => {
    console.info('update domain server configuration successfully, return config: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error(`update domain server configuration failed, code is ${err.code}, message is ${err.message}`);
  });
}).catch((err: BusinessError) => {
  console.error(`add server configuration failed, code is ${err.code}, message is ${err.message}`);
});

```

## updateServerConfig

```TypeScript
static updateServerConfig(configId: string, parameters: Record<string, RecordData>): Promise<DomainServerConfig>
```

更新域服务器配置。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configId | string | Yes | 表示服务器配置标识。 |
| parameters | Record&lt;string, RecordData> | Yes | 表示域服务器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainServerConfig> | Promise对象，返回更新后的域服务器配置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid server config parameters. |
| 12300211 | Server unreachable. |
| 12300212 | Server config not found. |
| 12300213 | Server config already exists. |
| 12300214 | Server config has been associated with an account. |

