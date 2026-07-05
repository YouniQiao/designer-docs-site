# getOneCfgFile

## getOneCfgFile

```TypeScript
function getOneCfgFile(relPath: string, callback: AsyncCallback<string>): void
```

获取指定文件名优先级最高的配置文件路径。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml， 最终返回优先级最高的是：/sys_pod/etc/config.xml。

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| relPath | string | Yes | 配置文件名。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当获取配置文件路径成功，err为undefined，  data为获取到的优先级最高的配置文件路径；否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## getOneCfgFile

```TypeScript
function getOneCfgFile(relPath: string, followMode: FollowXMode, callback: AsyncCallback<string>): void
```

根据提供的跟随模式获取指定文件名优先级最高的配置文件路径。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、 /sys_pod/etc/carrier/46060/etc/ config.xml。设备默认卡opkey为46060，设置的followMode为configPolicy.FollowXMode.SIM_DEFAULT。最终返回的是： /sys_pod/etc/carrier/46060/etc/config.xml。

**Since:** 11

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| relPath | string | Yes | 配置文件名。 |
| followMode | FollowXMode | Yes | 跟随模式。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当获取配置文件路径成功，err为undefined，  data为获取到的优先级最高的配置文件路径；否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## getOneCfgFile

```TypeScript
function getOneCfgFile(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<string>): void
```

根据跟随模式获取指定文件优先级最高的配置文件路径。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、 /sys_pod/etc/carrier/46060/etc/config.xml。设备卡1的opkey为46060，设置的followMode为 configPolicy.FollowXMode.USER_DEFINED，自定义跟随规则为"etc/carrier/${telephony.sim.opkey0}"。 最终返回的是：/sys_pod/etc/carrier/46060/etc/config.xml。

**Since:** 11

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| relPath | string | Yes | 配置文件名。 |
| followMode | FollowXMode | Yes | 跟随模式。 |
| extra | string | Yes | 用户自定义跟随规则，仅在followMode为  [USER_DEFINED]configPolicy.FollowXMode.USER_DEFINED时有效。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当获取配置文件路径成功，err为undefined，  data为获取到的优先级最高的配置文件路径；否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## getOneCfgFile

```TypeScript
function getOneCfgFile(relPath: string): Promise<string>
```

获取指定文件名优先级最高的配置文件路径。使用Promise异步回调。

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| relPath | string | Yes | 配置文件名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回优先级最高的配置文件路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## getOneCfgFile

```TypeScript
function getOneCfgFile(relPath: string, followMode: FollowXMode, extra?: string): Promise<string>
```

根据提供的跟随模式，获取指定文件名优先级最高的配置文件路径。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| relPath | string | Yes | 配置文件名。 |
| followMode | FollowXMode | Yes | 跟随模式。 |
| extra | string | No | 用户自定义跟随规则，仅在followMode为  [USER_DEFINED]configPolicy.FollowXMode.USER_DEFINED时有效。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回优先级最高的配置文件路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |

