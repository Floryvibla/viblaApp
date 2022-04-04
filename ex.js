let img= document.querySelectorAll("#test-grid")
let imgProfile= document.querySelectorAll("span.myicon-right.thumbnail-usr > img")
let user= document.querySelectorAll("span.myicon-right.thumbnail-usr > em")
let count = document.querySelectorAll("span.myicon-right.thumbnail-view > span > font > font")[0]

let data= [{
    type: 'Popular neste momento',
    count: count.innerText,
    data: []
}]

for (let index = 0; index < img.length; index++) {
    data[0].data.push({
        username: user[index].innerText,
        slug: index,
        imageProfile: imgProfile[index].src,
        story: img[index].src
    })
    
}

console.log(data)