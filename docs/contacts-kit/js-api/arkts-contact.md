# @ohos.contact

本模块提供联系人管理能力，包括添加联系人、删除联系人、更新联系人等。

**Since:** 7

**System capability:** SystemCapability.Applications.ContactsData

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addContact](arkts-contact-addcontact-f.md#addContact-1) | 添加联系人。使用callback异步回调。 |
| [addContact](arkts-contact-addcontact-f.md#addContact-2) | 添加联系人。使用callback异步回调。 |
| [addContact](arkts-contact-addcontact-f.md#addContact-3) | 添加联系人。使用Promise异步回调。 |
| [addContact](arkts-contact-addcontact-f.md#addContact-4) | 添加联系人。使用Promise异步回调。 |
| [addContactViaUI](arkts-contact-addcontactviaui-f.md#addContactViaUI-1) | 通过UI交互创建联系人。使用Promise异步回调。 |
| [addContacts](arkts-contact-addcontacts-f.md#addContacts-1) | 批量添加联系人。使用Promise异步回调。 |
| [deleteContact](arkts-contact-deletecontact-f.md#deleteContact-1) | 删除联系人。使用callback异步回调。 |
| [deleteContact](arkts-contact-deletecontact-f.md#deleteContact-2) | 删除联系人。使用callback异步回调。 |
| [deleteContact](arkts-contact-deletecontact-f.md#deleteContact-3) | 删除联系人。使用Promise异步回调。 |
| [deleteContact](arkts-contact-deletecontact-f.md#deleteContact-4) | 删除联系人。使用Promise异步回调。 |
| [hasMatchedCallLog](arkts-contact-hasmatchedcalllog-f.md#hasMatchedCallLog-1) | 检查是否有符合条件的通话记录，默认查询6小时以内的通话记录，仅针对运营商通话。使用Promise异步回调。 |
| [hasMatchedCallLog](arkts-contact-hasmatchedcalllog-f.md#hasMatchedCallLog-2) | 检查是否有符合条件的通话记录，仅针对运营商通话。使用Promise异步回调。 |
| [importContactsViaUI](arkts-contact-importcontactsviaui-f.md#importContactsViaUI-1) | 通过UI交互批量导入多个联系人。 每次最多可导入100个联系人。 |
| [isLocalContact](arkts-contact-islocalcontact-f.md#isLocalContact-1) | 判断当前联系人id是否在电话簿中。使用callback异步回调。 |
| [isLocalContact](arkts-contact-islocalcontact-f.md#isLocalContact-2) | 判断当前联系人id是否在电话簿中。使用callback异步回调。 |
| [isLocalContact](arkts-contact-islocalcontact-f.md#isLocalContact-3) | 判断当前联系人id是否在电话簿中。使用Promise异步回调。 |
| [isLocalContact](arkts-contact-islocalcontact-f.md#isLocalContact-4) | 判断当前联系人id是否在电话簿中。使用Promise异步回调。 |
| [isMyCard](arkts-contact-ismycard-f.md#isMyCard-1) | 判断是否为“我的名片”。使用callback异步回调。 |
| [isMyCard](arkts-contact-ismycard-f.md#isMyCard-2) | 判断是否为“我的名片”。使用callback异步回调。 |
| [isMyCard](arkts-contact-ismycard-f.md#isMyCard-3) | 判断是否为“我的名片”。使用Promise异步回调。 |
| [isMyCard](arkts-contact-ismycard-f.md#isMyCard-4) | 判断是否为“我的名片”。使用Promise异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-1) | 根据联系人唯一标识符key查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-2) | 根据key查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-3) | 根据key和holder查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-4) | 根据key和holder查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-5) | 根据key和指定属性(attrs)查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-6) | 根据key和attrs查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-7) | 根据key、holder和attrs查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-8) | 根据key、holder和attrs查询联系人。使用callback异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-9) | 根据key、holder和attrs查询联系人。使用Promise异步回调。 |
| [queryContact](arkts-contact-querycontact-f.md#queryContact-10) | 根据key、holder和attrs查询联系人。使用Promise异步回调。 |
| [queryContactSyncInfo](arkts-contact-querycontactsyncinfo-f.md#queryContactSyncInfo-1) | 查询调用应用程序正在进行的联系人同步信息。 如果返回的联系人同步信息为空，则调用方不进行联系人同步或联系人同步已完成。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-1) | 查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-2) | 查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-3) | 根据holder查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-4) | 根据holder查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-5) | 根据attrs查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-6) | 根据attrs查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-7) | 根据holder和attrs查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-8) | 根据holder和attrs查询所有联系人。使用callback异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-9) | 根据holder和attrs查询所有联系人。使用Promise异步回调。 |
| [queryContacts](arkts-contact-querycontacts-f.md#queryContacts-10) | 根据holder和attrs查询所有联系人。使用Promise异步回调。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-1) | 根据email查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-2) | 根据email查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-3) | 根据email和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-4) | 根据email和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-5) | 根据email和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-6) | 根据email和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-7) | 根据email、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-8) | 根据email、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-9) | 根据email、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByEmail](arkts-contact-querycontactsbyemail-f.md#queryContactsByEmail-10) | 根据email、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-1) | 根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-2) | 根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-3) | 根据电话号码和holder查询联系人，使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-4) | 根据电话号码和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-5) | 根据电话号码和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-6) | 根据电话号码和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-7) | 根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-8) | 根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-9) | 根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsByPhoneNumber](arkts-contact-querycontactsbyphonenumber-f.md#queryContactsByPhoneNumber-10) | 根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用 [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)} 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。 |
| [queryContactsCount](arkts-contact-querycontactscount-f.md#queryContactsCount-1) | 查询所有联系人的数量。使用Promise异步回调。 |
| [queryGroups](arkts-contact-querygroups-f.md#queryGroups-1) | 查询联系人的所有群组。使用callback异步回调。 |
| [queryGroups](arkts-contact-querygroups-f.md#queryGroups-2) | 查询联系人的所有群组。使用callback异步回调。 |
| [queryGroups](arkts-contact-querygroups-f.md#queryGroups-3) | 根据holder查询联系人的所有群组。使用callback异步回调。 |
| [queryGroups](arkts-contact-querygroups-f.md#queryGroups-4) | 根据holder查询联系人的所有群组。使用callback异步回调。 |
| [queryGroups](arkts-contact-querygroups-f.md#queryGroups-5) | 根据holder查询联系人的所有群组。使用Promise异步回调。 |
| [queryGroups](arkts-contact-querygroups-f.md#queryGroups-6) | 根据holder查询联系人的所有群组。使用Promise异步回调。 |
| [queryHolders](arkts-contact-queryholders-f.md#queryHolders-1) | 查询所有创建联系人的应用信息类。使用callback异步回调。 |
| [queryHolders](arkts-contact-queryholders-f.md#queryHolders-2) | 查询所有创建联系人的应用信息类。使用callback异步回调。 |
| [queryHolders](arkts-contact-queryholders-f.md#queryHolders-3) | 查询所有创建联系人的应用信息类。使用Promise异步回调。 |
| [queryHolders](arkts-contact-queryholders-f.md#queryHolders-4) | 查询所有创建联系人的应用信息类。使用Promise异步回调。 |
| [queryKey](arkts-contact-querykey-f.md#queryKey-1) | 根据联系人的id查询联系人的唯一查询键key。使用callback异步回调。 |
| [queryKey](arkts-contact-querykey-f.md#queryKey-2) | 根据联系人的id查询联系人的唯一查询键key。使用callback异步回调。 |
| [queryKey](arkts-contact-querykey-f.md#queryKey-3) | 根据联系人的id和holder查询联系人的唯一查询键key。使用callback异步回调。 |
| [queryKey](arkts-contact-querykey-f.md#queryKey-4) | 根据联系人的id和holder查询联系人的唯一查询键key。使用callback异步回调。 |
| [queryKey](arkts-contact-querykey-f.md#queryKey-5) | 根据联系人的id和holder查询联系人的唯一查询键key。使用Promise异步回调。 |
| [queryKey](arkts-contact-querykey-f.md#queryKey-6) | 根据联系人的id和holder查询联系人的唯一查询键key。使用Promise异步回调。 |
| [queryMyCard](arkts-contact-querymycard-f.md#queryMyCard-1) | 查询“我的名片”。使用callback异步回调。 |
| [queryMyCard](arkts-contact-querymycard-f.md#queryMyCard-2) | 查询“我的名片”。使用callback异步回调。 |
| [queryMyCard](arkts-contact-querymycard-f.md#queryMyCard-3) | 查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。 |
| [queryMyCard](arkts-contact-querymycard-f.md#queryMyCard-4) | 查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。 |
| [queryMyCard](arkts-contact-querymycard-f.md#queryMyCard-5) | 查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。 |
| [queryMyCard](arkts-contact-querymycard-f.md#queryMyCard-6) | 查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。 |
| [saveToExistingContactViaUI](arkts-contact-savetoexistingcontactviaui-f.md#saveToExistingContactViaUI-1) | 调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。 |
| [selectContact](arkts-contact-selectcontact-f.md#selectContact-1) | 调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。 |
| [selectContact](arkts-contact-selectcontact-f.md#selectContact-2) | 调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。 |
| [selectContacts](arkts-contact-selectcontacts-f.md#selectContacts-1) | 调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。 |
| [selectContacts](arkts-contact-selectcontacts-f.md#selectContacts-2) | 调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。 |
| [selectContacts](arkts-contact-selectcontacts-f.md#selectContacts-3) | 调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入[筛选条件]{@link contact.ContactSelectionOptions}）。使用callback异步回调。 |
| [selectContacts](arkts-contact-selectcontacts-f.md#selectContacts-4) | 调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入筛选条件）。使用Promise异步回调。 |
| [syncContacts](arkts-contact-synccontacts-f.md#syncContacts-1) | 批量同步多个联系人至联系人数据库。 最多可批量同步400个联系人。调用方必须处于前台。 |
| [updateContact](arkts-contact-updatecontact-f.md#updateContact-1) | 更新联系人。使用callback异步回调。 |
| [updateContact](arkts-contact-updatecontact-f.md#updateContact-2) | 更新联系人。使用callback异步回调。 |
| [updateContact](arkts-contact-updatecontact-f.md#updateContact-3) | 更新联系人，支持传入联系人的属性列表。使用callback异步回调。 |
| [updateContact](arkts-contact-updatecontact-f.md#updateContact-4) | 更新联系人（支持传入联系人的属性列表）。使用callback异步回调。 |
| [updateContact](arkts-contact-updatecontact-f.md#updateContact-5) | 更新联系人，支持传入联系人的属性列表。使用Promise异步回调。 |
| [updateContact](arkts-contact-updatecontact-f.md#updateContact-6) | 更新联系人（支持传入联系人的属性列表）。使用Promise异步回调。 |

### Classes

| Name | Description |
| --- | --- |
| [Contact](arkts-contact-contact-c.md) | 联系人对象类。 |
| [ContactAttributes](arkts-contact-contactattributes-c.md) | 联系人属性列表，一般作为入参用来标识希望查询的联系人属性。 当传入为null时，默认查询全部属性。 |
| [Email](arkts-contact-email-c.md) | 联系人的邮箱。 |
| [Event](arkts-contact-event-c.md) | 联系人事件类。 |
| [Group](arkts-contact-group-c.md) | 联系人的群组类。 |
| [Holder](arkts-contact-holder-c.md) | 创建联系人的应用信息类。 |
| [ImAddress](arkts-contact-imaddress-c.md) | 联系人的即时消息地址。 |
| [Name](arkts-contact-name-c.md) | 联系人的名字类。 |
| [NickName](arkts-contact-nickname-c.md) | 联系人的昵称类。 |
| [Note](arkts-contact-note-c.md) | 联系人的备注类。 |
| [Organization](arkts-contact-organization-c.md) | 联系人的组织类。 |
| [PhoneNumber](arkts-contact-phonenumber-c.md) | 联系人电话号码类。 |
| [Portrait](arkts-contact-portrait-c.md) | 联系人的头像类。 > **说明：** > > 从API version 22开始，支持通过uri和[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}格式设置联系人头像资源(暂不支持通过 > [addContactViaUI]{@link contact.addContactViaUI}、 > [saveToExistingContactViaUI]{@link contact.saveToExistingContactViaUI}接口设置)。 > > uri为可访问的联系人头像文件地址，[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}为通过联系人头像资源生成的 > [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}对象。 > > 从API version 22开始，支持通过uri格式读取联系人头像资源，该格式仅支持以 > [fs.open]{@link @ohos.file.fs:open(path: string, mode?: number)}方式打开，无法直接在Image组件内显示，需读取后转换为 > [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}格式显示。 |
| [PostalAddress](arkts-contact-postaladdress-c.md) | 联系人的邮政地址类。 |
| [Relation](arkts-contact-relation-c.md) | 联系人的关系类。 |
| [SipAddress](arkts-contact-sipaddress-c.md) | 联系人的会话发起协议(SIP)地址类。 |
| [Website](arkts-contact-website-c.md) | 联系人的网站信息类。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ContactSelectionFilter](arkts-contact-contactselectionfilter-i.md) | 联系人查询过滤器。 |
| [ContactSelectionOptions](arkts-contact-contactselectionoptions-i.md) | 选择联系人条件。 |
| [ContactSyncInfo](arkts-contact-contactsyncinfo-i.md) | 调用应用程序相关的联系人同步的信息。 |
| [ContactSyncProgress](arkts-contact-contactsyncprogress-i.md) | 联系人同步进度的信息。 包含同步ID、当前批次和总批次。 |
| [DataFilter](arkts-contact-datafilter-i.md) | 联系人数据过滤项。 |
| [FilterClause](arkts-contact-filterclause-i.md) | 联系人过滤条件。多个筛选条件之间是“或者”的关系，如果参数是数组类型，数组最多只能包含3个元素。 |
| [FilterOptions](arkts-contact-filteroptions-i.md) | 联系人过滤参数。 |

### Enums

| Name | Description |
| --- | --- |
| [Attribute](arkts-contact-attribute-e.md) | 枚举，类型为number。联系人属性列表。 通过JSON格式创建数据。 |
| [ContactSyncMode](arkts-contact-contactsyncmode-e.md) | 同步模式的类型。 |
| [DataField](arkts-contact-datafield-e.md) | 枚举，联系人数据字段。 |
| [FilterCondition](arkts-contact-filtercondition-e.md) | 枚举，过滤条件。 |
| [FilterType](arkts-contact-filtertype-e.md) | 枚举，联系人过滤类型。 |

