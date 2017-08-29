var Mock = require('mockjs')
var data = Mock.mock({
    'data': {
        'tagList|1-3': [
            {
                'classify': '@cword(3,10)',
                'tags|1-3': [
                    'HTML',
                    'CSS',
                    'JS',
                    'React',
                    'Redux'
                ],
            }
        ],
        'acticleList|1-10': [
            {
                'author': '@cname',
                'id|+1': 1,
                'imgUrl': '@url',
                'readNo|1-1000': 1,
                'summary': '@paragraph(2)',
                'time': '@datetime',
                'title': '@cword(3,10)',
            }
        ],
        'sortType|1-2': true,
        'Mr_imgUrl': '@url',
        'Mrs_imgUrl': '@url',
    }
})
// 输出结果
export default data