# 角色
- 1、普通游客
    - 浏览
- 2、注册用户
    - 报名
    - 投票
- 3、报名用户
- 4、挑战者

# 所有功能点
- 1、首页获取数据（轮播图＋首页公告列表）
- 2、公司信息、版权信息
- 3、新闻模块列表获取（Notice）
- 4、新闻内容获取
- 5、所有挑战者信息获取
- 6、单个挑战者信息获取
- 7、支持挑战者
- 8、挑战者排行榜
- 9、登录
- 9、检查是否登陆
- 10、注册
- 11、报名
- 12、获取token（防止重复提交 csrf）
- 13、报名测试详情


# 模块
- 1、首页
- 2、通告
- 3、公司介绍、报名
- 4、参与培训要求＊
- 5、人员展示墙
- 6、人员排行榜

# 角色变换
普通用户  －－（注册）－》 注册用户 －－（报名）－》 候选者 －－（筛选，成功）－》挑战者

# 基础表－角色类
- user
    - id PK
    - tel
    - password

- user_info
    - id PK
    - user_id FK_USER_ID
    - name
    - gender
    - tel
    - media
    - isPass
- chanllenger
    - id
    - user_id FK_USER_ID
    - name
    - age
    - hobit
    - img
    - votes
    - term
- chanllenger_info
    - id PK
    - chanllenger_id FK_CHANLLENGER_ID
    - height
    - weight
    - age
    - birth
    - hobit
    - degree [学历]
    - imgs
    - videos [*??是否需要多做表？]
    - self_introduce
    - self_experience


# 通用类
- module
    - id
    - name
    - f_m_id FK_MODULE_ID
    - isShow
- article
    - id
    - m_id FK_MODULE_ID
    - title
    - date
    - content
    - top       默认top倒序，日期倒序，［10，1］
    - slider（轮播图片地址）

- vote_history
    - id PK
    - u_id FK_USER_ID
    - c_id FK_CHANLLENGER_ID
    - created_at [timestamps]

- site_setting
    - key
    - value

-- s 表示表， 单数表示model
-- softdelte  所有都要使用软删除


数据库模型设计
绑定路由
参数的请求与响应



功能模块划分

公司信息、版权信息
    response:
        {
            logo: url,
            site_address: ***,
            tel: ***,
            email: ***,
            wechat: ***,
            company_name: ***,
        }
       

 1、首页（IndexController.class.php）
    a、首页获取数据（轮播图＋首页公告列表）     Route::get("/","IndexController@index")
    method：
        get
    param：
        none
    response:（）
    {
        "slider" : [
            {id, m_id, img}, ...
        ],
        modules: [
            {
                m_id,
                m_name,
                articles : [
                    a_title,
                    a_id
                ]
            },
        ]
    }

 2、通告（NoticeController.class.php）       
    a、新闻模块列表获取
    Route::get("notice/{mid}","NoticeController@showNewsList")
    method：
        get
    param:
        m_id (模块id)
    reponse:
        [
            {
                id,
                created_at:XX,
                title:XX,
                top:XX
            }, ...
        ]
    // "newslist":[{created_at:XX,title:XX,top:XX,content:XX}]
    b、新闻内容获取(单篇文章获取)
    Route::get("notice/{mid}/{id}","NoticeController@showNewsList")
    method：
        get
    param：
        none
    response:
        {
            title,
            created_at,
            content            
        }



 3、公司介绍、报名(StarkingController.class.php)
    a、报名
    Route::post("Starking","StarkingController@PostStarking")
    method:
        post
         request:
        user_info{name:XX,gender:XX,email:XX,tel:XX,vedio:XX}
    b、报名测试详情
    Route::get("Starking","StarkingController@ShowStarking")
    响应测试详情信息

4、参与培训要求(Audtion)
    .......
5、人员展示墙(challenger)
    a、所有挑战者信息获取
    Route::get("challenger","ChallengerController@getAllInfo")
    method：
        get
    param：
        none
    response: 
        [
            {
                id,
                name,
                age,
                hobit,
                img
            }, ...
        ]


    b、单个挑战者信息获取
    Route::get("challenger/{id}","ChallengerController@getInfo")
    method：
        get
    param：
        none
    response:
     {
            name,
            weight,
            hegiht,
            birth,
            age,
            degree,
            hobit,
            self_experence,
            self_introduce,
            img: [url1. url2, ...],
            vedio
        }


    "challenger"[{name:XX,hobit:XX......}]
     
    c、支持挑战者
     Route::get("Rank/{c_id}",['middleware'=>'Auth,"challengerController@surport"]);
     method:
        get 
     param:
        none
     response: 
        1、没登录
            {
                status: 1001,
                info: '未登录！'
            }
        2、一天只能投六人，每人一票
            {
                status: 1002,
                info: '今天已经投过这个挑战者了！'
            }
            {
                status: 1003,
                info: '今天已经投满6票'
            }
        3、投票成功！
            {
                status: 1000,
                info: '投票成功！'
            }

6、人员排行榜(Rank)
    a、挑战者排行榜
    Route::get("rank",['middleware'=>'Auth,"RankController@showRank"]);
    method:
        get
    param:
        none
    respose:
    1、成功
        {
            status: 1000,
            info: [
                    {
                        name,
                        votes,
                    },...
                ]
        }
    2、失败
        {
            status: 1001,
            info: 返回错误信息
        }
    
ps:order by vote
    b、登录
    Route::Post('login','RankController@Postlogin')
    method:
        post
    param:
        none
        request:
        {
            tel,
            password,
            token
            }
        response:
        1-登录成功
        {
            status: 1000,
            info："登录成功";
        }
        2-登录失败
        {
            status: 1001,
            info: 返回错误信息
        }
    c、注册
     Route::Post('register','RankController@PostRegister');     
         method:
        post
    param:
        none
        request:
        {
            tel,
            password，
            token
            }
        response:
        1-注册成功
        {
            status:1000
            info:"注册成功！"
        }
        2-注册失败
        {
            status: 1001,
            info: 返回错误信息
        }
     
