> 部署到腾讯云函数

* 1.准备

* 1.1开通云函数 SCF 的腾讯云账号，在[访问秘钥页面](https://console.cloud.tencent.com/cam/capi)获取账号的 TENCENT_SECRET_ID，TENCENT_SECRET_KEY

> 注意！为了确保权限足够，获取这两个参数时不要使用子账户！此外，腾讯云账户需要[实名认证](https://console.cloud.tencent.com/developer/auth)。

* 1.2依次登录 [SCF 云函数控制台](https://console.cloud.tencent.com/scf) 和 [SLS 控制台](https://console.cloud.tencent.com/sls) 开通相关服务，确保您已开通服务并创建相应[服务角色](https://console.cloud.tencent.com/cam/role) **SCF_QcsRole、SLS_QcsRole**

* 1.3fork本项目

* 2.部署

*  2.1 在fork后的github仓库的 “Settings” --》“Secrets” 中添加"Secrets"，分别为：

    *  2.1.1 "TENCENT_SECRET_ID"           value为腾讯云用户SecretID(需要主账户，子账户可能没权限)

    *  2.1.2 "TENCENT_SECRET_KEY"          value为腾讯云账户SecretKey
    
>其他参数:

* appid  ( 填写获取的 appid )unicom_appid

* user  ( 手机号 )secrets.unicom_user

* password (服务密码)secrets.unicom_password

> 填完参数后action选择"部署到云函数"即可
