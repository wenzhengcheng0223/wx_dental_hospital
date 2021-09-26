# 口腔医院预约平台小程序

#### 介绍
口腔医院预约平台小程序是基于uni-app+uView+HBuilder X开发的预约类小程序，目前小程序端还没有对接后端，只是一个单纯的演示项目,后期会考虑连接后端接口

#### 软件架构
##### 小程序端

- 开发工具：HBuilder X
- UI框架：uView

#### 目录结构说明

``` markdown
|-- wx-dental-hospital
    |-- App.vue					#页面入口
	|-- components				#自定义组件
    |-- pages					#小程序页面	
    |   |-- appointment			#预约模块
    |   |-- authorize			#登录授权模块
    |   |-- detail				#预约下单模块
    |   |-- index				#首页模块
    |   |-- login				#登录模块
    |   |-- mine				#我的模块
    |   |-- order				#订单信息模块
    |   |-- physician			#医师模块
    |-- utils					#通用工具类
```

#### 平台模块说明

- 首页
  - 轮播图：牙科项目演示
  - 热门项目推荐
  - 医院宗旨
- 医师
  - 医师团队
  - 名医推荐
  - 热门项目预约
- 预约
  - 项目分类：项目详细信息
- 我的
  - 个人信息
  - 订单信息


#### 安装教程

1. 克隆该代码到你自己的电脑上

   ``` 
   git clone https://gitee.com/zmn_repository/wx_dental_hospital.git
   ```

2.  使用HBuilder编辑器打开项目，如果你电脑上没有该编辑工具请下载：https://www.dcloud.io/hbuilderx.html

3.  找到/App.vue

4.  配置好的Hbuilder，例如设置好微信开发者工具的路径，小程序appid等，配置教程请参考uni-app官网：https://uniapp.dcloud.io/quickstart-hx

#### 小程序端页面效果演示

<img src="C:\Users\86914\AppData\Roaming\Typora\typora-user-images\image-20210926235430463.png" alt="image-20210926235430463"  />

![image-20210926235530567](C:\Users\86914\AppData\Roaming\Typora\typora-user-images\image-20210926235530567.png)

![image-20210927000720726](C:\Users\86914\AppData\Roaming\Typora\typora-user-images\image-20210927000720726.png)

![image-20210927000737274](C:\Users\86914\AppData\Roaming\Typora\typora-user-images\image-20210927000737274.png)

![image-20210927000754972](C:\Users\86914\AppData\Roaming\Typora\typora-user-images\image-20210927000754972.png)

![image-20210927000812420](C:\Users\86914\AppData\Roaming\Typora\typora-user-images\image-20210927000812420.png)



#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

**代码不易，如果此项目有给您带来帮助的话可以给项目一个 Star 嘛。**
