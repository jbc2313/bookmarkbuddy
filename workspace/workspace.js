console.log("Workspace open"); 

let bkmkList = document.getElementById("bookmarkList");

let bkmkarr = await chrome.bookmarks.getTree()
const bookmarks = bkmkarr[0].children; 

console.log(bookmarks);

bookmarks.forEach(node => {
    let child = document.createElement('div');
    child.innerText = node.title;
    bkmkList.appendChild(child);
    let list = document.createElement('ul');
    child.appendChild(list);
    node.children.forEach(lilNode => {
        console.log(lilNode.children);
        if (lilNode.children === undefined){
            let listEntry = document.createElement('li');
            listEntry.innerText = lilNode.title;
            list.appendChild(listEntry);
        }else{
            // this is a folder
            let listEntryFolder = document.createElement('li');
            listEntryFolder.innerText = lilNode.title;
            list.appendChild(listEntryFolder);
            //dig into folder
            lilNode.children.forEach(folderNode => {
                if (folderNode.children === undefined){
                    let innerlist1 = document.createElement('ul');
                    list.appendChild(innerlist1);
                    let innerlistEntry = document.createElement('li');
                    innerlistEntry.innerText = folderNode.title;
                    innerlist1.appendChild(innerlistEntry);
                }else{
                    //this is another folder
                }

            })
        }
    })

})

const numBmNodes = bookmarks.length;
console.log(numBmNodes);


