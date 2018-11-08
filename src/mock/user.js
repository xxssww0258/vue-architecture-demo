import Mock from 'mockjs'

Mock.mock(/^\/api\/1196-2/, 'get', {
    'showapi_res_error': '',
    'showapi_res_id'   : 'f3b95d4f9c254c24823e79e9754ed413',
    'showapi_res_code' : 0,
    'showapi_res_body' : {
        'ret_code': 0,
        'data'    : {
            'title'     : '掩耳盗铃',
            'spell'     : 'yǎn  ěr  dào  líng',
            'samples'   : '硬把汉奸合法化了，只是掩耳盗铃的笨拙的把戏。 ★闻一多《谨防汉奸合法化》',
            'derivation': '《吕氏春秋·自知》：“百姓有得钟者，欲负而走，则钟大不可负。以椎毁之，钟况然有声。恐人闻之而夺己也，遽掩其耳。”',
            'content'   : '掩：遮蔽，遮盖；盗：偷。偷铃铛怕别人听见而捂住自己的耳朵。比喻自己欺骗自己，明明掩盖不住的事情偏要想法子掩盖。'
        },
        'ret_message': 'Success'
    }
})
