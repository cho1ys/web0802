const columns = document.querySelectorAll('.column');
columns.forEach(c =>{
    new Sortable(c,{
        group: 'shared',
        animation : 150,
        ghostClass:'blue-background-class'
    })
})