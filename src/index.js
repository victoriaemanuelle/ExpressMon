const express = require('express')
const app = express()
app.use(express.json())            

app.get('/projects', function(request,response){
    
    const body = request.query
    console.log(body)

    return response.json(["Projeto 1",
        "Projeto 2"
    ])
}
)

app.post('/projects', function(request,response){
     const body = request.body
     console.log(body)

    return response.json(["Projeto 1",
        "Projeto 2"])
}
)

app.put('/projects/:id', function(request, response){
    const {owner,title,page} = request.query
    console.log(owner,title,page)

    return response.json(["Projeto 1",
        "Projeto 2"])
})

app.delete('/projects/:id', function(request, response){
    const {owner,title,page} = request.query
    console.log(owner,title,page)

    return response.json(["Projeto 1",
        "Projeto 2"])
})

app.listen(3002, ()=>{console.log("Tá tudo rodando graças a Deus 3000 e 2")})