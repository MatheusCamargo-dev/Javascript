exports.get = (req, res) =>{
    res.render('index', {
        title: 'this is my <span class="text-info">title</span>',
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })
}