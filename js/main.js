const wiki_link = 'https://en.wikipedia.org/wiki'
const ramdomEndpoint = '/special:Random'

const searchTerm = document.querySelector('.search-term')
const searchButtom = document.querySelector('.search')
const ramdomButtom = document.querySelector('.ramdom')
const output = document.querySelector('.output')

let ajaxSearch = ()=>{
   
    let api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`

    $.ajax({
        url: api_url,
        dataType: 'json',
        success: (data) => {
            console.log(data)
            output.innerHTML = ""
            //data[0]is the search title

            //data[1] is the title

            //data[2] is the description

            //data[3] is the link

            for(let i in data[1]){
                output.innerHTML += `

                <li>
                <a href="${data[3][i]}">${data[1][i]}</a>
                <p>${data[2][i]}</p>

                </li> 
            `    
                
        
            }
        },
        error: (error)=>{
            console.log("this is an error")
        }
    })
}

searchButtom.addEventListener('click', ajaxSearch)

ramdomButtom.addEventListener('click', function(e){
    window.open(`${wiki_link}${ramdomEndpoint}`)
})
    
