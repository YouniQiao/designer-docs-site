# @ohos.data.sendablePreferences

The **sendablePreferences** module provides APIs for processing data in the form of key-value (KV) pairs, including querying, modifying, and persisting KV pairs. In the KV pairs, the key must be a string, and the value can be a number, a string, a Boolean value, a bigint, or a serializable object. The persistent files of the shared user preferences are stored in the [preferencesDir](docroot://application-models/application-context-stage.md#obtaining-application-file-paths) directory. Before creating a preferences object, ensure that the **preferencesDir** path can be read and written. The [encryption level]{@link @ohos.app.ability.contextConstant:contextConstant.AreaMode} of the persistent file directory determines the access to the files. For details, see [Application File Directory and Application File Path](docroot://file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path) . Sendable preferences can be passed between concurrent ArkTS instances (including the main thread and TaskPool or Worker threads) by reference. It allows for higher performance than [user preferences]{@link @ohos.data.preferences:preferences}. For more information, see [Using Sendable Objects](docroot://arkts-utils/sendable-guide.md). > **NOTE** > > The shared user preferences are not thread-safe and may cause file damage and data loss when used in multi-process > scenarios. Do not use it in multi-process scenarios.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

## 导入模块

```TypeScript
import { sendablePreferences } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [deletePreferences](arkts-sendablepreferences-deletepreferences-f.md#deletePreferences-1) | Deletes a specified **Preferences** instance from the cache. If the **Preferences** instance has a corresponding persistent file, the persistent file is also deleted. This API uses a promise to return the result. Avoid using a deleted **Preferences** instance to perform data operations, which may cause data inconsistency. |
| [getPreferences](arkts-sendablepreferences-getpreferences-f.md#getPreferences-1) | Obtains a **Preferences** instance. This API uses a promise to return the result. |
| [getPreferencesSync](arkts-sendablepreferences-getpreferencessync-f.md#getPreferencesSync-1) | Obtains a **Preferences** instance. This API returns the result synchronously. |
| [removePreferencesFromCache](arkts-sendablepreferences-removepreferencesfromcache-f.md#removePreferencesFromCache-1) | Removes a **Preferences** instance from the cache. This API uses a promise to return the result. After an application calls [getPreferences]{@link sendablePreferences.getPreferences} for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]{@link sendablePreferences.getPreferences} again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. |
| [removePreferencesFromCacheSync](arkts-sendablepreferences-removepreferencesfromcachesync-f.md#removePreferencesFromCacheSync-1) | Removes a **Preferences** instance from the cache. This API returns the result synchronously. After an application calls [getPreferences]{@link sendablePreferences.getPreferences} for the first time to obtain a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls [getPreferences]{@link sendablePreferences.getPreferences} again, the **Preferences** instance will be read from the cache instead of from the persistent file. After this API is called to remove the instance from the cache, calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Options](arkts-sendablepreferences-options-i.md) | Represents the configuration options of a **Preferences** instance. |
| [Preferences](arkts-sendablepreferences-preferences-i.md) | Provides APIs for obtaining and modifying **Preferences** instances. **Preferences** inherits from [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable) and can be passed between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads) by reference. Before calling any API of **Preferences**, obtain a **Preferences** instance by using [sendablePreferences.getPreferences]{@link sendablePreferences.getPreferences}. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [MAX_KEY_LENGTH](arkts-sendablepreferences-con.md#MAX_KEY_LENGTH) | Maximum length of a key, which is 1024 bytes. |
| [MAX_VALUE_LENGTH](arkts-sendablepreferences-con.md#MAX_VALUE_LENGTH) | Maximum length of a value, which is 16 MB. |

