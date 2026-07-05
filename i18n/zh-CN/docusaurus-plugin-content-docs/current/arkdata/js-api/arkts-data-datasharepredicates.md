# @ohos.data.dataSharePredicates

DataSharePredicates** provides a filter object to query data in a database by using **DataShare** APIs. It is often used to update, delete, and query data. The APIs provided by **DataSharePredicates** correspond to the filter criteria of the database. Before using the APIs , you need to have basic database knowledge. **DataSharePredicates** applies to the following scenario: - It is used as a search criterion in the media file management service. For details, see [FetchOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions} in the fetch options of the album management. In this scenario, you do not need to pay attention to the database type. <!--Del--> - It is used as a search criterion when APIs of the [RDB store](docroot://apis-arkdata/js-apis-data-relationalStore-sys.md) and [KV store](docroot://apis-arkdata/js-apis-distributedKVStore-sys.md) are called. In this scenario, use the corresponding predicate based on the database type. <!--DelEnd-->

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DataSharePredicates](arkts-datasharepredicates-datasharepredicates-c-sys.md) | Provides APIs for setting different **DataSharePredicates** objects. This type is not multi-thread safe. If a **DataSharePredicates** instance is operated by multiple threads at the same time in an application, use a lock for it. |

